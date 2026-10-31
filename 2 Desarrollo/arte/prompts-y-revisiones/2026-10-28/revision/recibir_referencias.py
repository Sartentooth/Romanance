from pathlib import Path
from PIL import Image,ImageOps,ImageDraw,ImageFont
from pypdf import PdfReader
import hashlib,json,csv,re

ROOT=Path(__file__).resolve().parents[4]
OUT=Path(__file__).resolve().parent
bank=ROOT/'2 Desarrollo/arte/referencias'
baseline=json.loads((ROOT/'2 Desarrollo/archivo-historico/fuentes-historicas/direccion-visual-2026-10-26/verificacion-inicial.json').read_text(encoding='utf-8'))['protegidos']
known_dirs={'batai','jarsag','kharag','tomorbaatar','lyren'}
rows=[];new=[]
for p in sorted(bank.rglob('*')):
    if not p.is_file():continue
    rel=p.relative_to(ROOT).as_posix();sha=hashlib.sha256(p.read_bytes()).hexdigest()
    state='sin cambio respecto del control 26/10' if baseline.get(rel)==sha else ('modificado respecto del control 26/10' if rel in baseline else 'no figuraba en el control 26/10')
    kind='documento' if p.suffix.lower() in {'.md','.pdf'} else 'otro'
    w=h='';error=''
    if p.suffix.lower() in {'.png','.jpg','.jpeg','.webp','.gif'}:
        try:
            with Image.open(p) as im:im.load();w,h=im.size
            kind='imagen'
        except Exception as e:error=str(e);kind='extension de imagen no decodificable'
    row={'ruta':rel,'sha256':sha,'bytes':p.stat().st_size,'tipo':kind,'ancho':w,'alto':h,'comparacion':state,'error':error}
    rows.append(row)
    if kind=='imagen' and state!='sin cambio respecto del control 26/10' and not known_dirs.intersection(p.parts):new.append(p)
with (OUT/'inventario-referencias-actual.csv').open('w',encoding='utf-8-sig',newline='') as f:
    wr=csv.DictWriter(f,fieldnames=list(rows[0]));wr.writeheader();wr.writerows(rows)
(OUT/'huellas-recepcion.json').write_text(json.dumps({r['ruta']:r['sha256'] for r in rows},ensure_ascii=False,indent=2),encoding='utf-8')
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',17)
index={}
for offset in range(0,len(new),30):
    sheet=Image.new('RGB',(1500,1850),'#eeece6');draw=ImageDraw.Draw(sheet)
    for j,p in enumerate(new[offset:offset+30]):
        key=f'N{offset+j+1:03d}';index[key]=p.relative_to(ROOT).as_posix()
        x=j%6*250;y=j//6*365
        with Image.open(p) as im:
            im=ImageOps.exif_transpose(im).convert('RGB');im.thumbnail((242,304));sheet.paste(im,(x+(250-im.width)//2,y+(310-im.height)//2))
        label=key+' '+p.name
        draw.text((x+4,y+310),label[:30],font=font,fill='#111111');draw.text((x+4,y+333),label[30:59],font=font,fill='#111111')
    sheet.save(OUT/f'nuevas-referencias-{offset//30+1:02d}.jpg',quality=92)
(OUT/'indice-nuevas-referencias.json').write_text(json.dumps(index,ensure_ascii=False,indent=2),encoding='utf-8')
pdf=bank/'Romanance_banco_referencias.pdf';reader=PdfReader(pdf)
texts=[p.extract_text(extraction_mode='layout') or '' for p in reader.pages]
(OUT/'pdf-texto-extraido.txt').write_text('\n\n'.join(f'=== PAGINA {i+1} ===\n{t}' for i,t in enumerate(texts)),encoding='utf-8')
summary={'archivos_banco':len(rows),'imagenes_decodificadas':sum(r['tipo']=='imagen' for r in rows),'imagenes_fuera_control_26_sin_copias_conocidas':len(new),'imagenes_modificadas':sum(r['comparacion'].startswith('modificado') for r in rows),'errores_imagen':[r['ruta'] for r in rows if r['error']],'pdf_paginas':len(reader.pages),'pdf_imagenes_por_pagina':[len(p.images) for p in reader.pages],'nuevas_por_carpeta':{}}
for p in new:summary['nuevas_por_carpeta'][p.parent.relative_to(bank).as_posix()]=summary['nuevas_por_carpeta'].get(p.parent.relative_to(bank).as_posix(),0)+1
(OUT/'resumen-recepcion.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(summary,ensure_ascii=False,indent=2))
for i,t in enumerate(texts):print('PAGINA',i+1, re.sub(r'\s+',' ',t)[:110])
