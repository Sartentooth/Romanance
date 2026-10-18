from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont
import csv, hashlib, json
ROOT=Path(__file__).resolve().parents[4]
OUT=Path(__file__).resolve().parent
files=sorted(p for p in (ROOT/'arte').rglob('*') if p.is_file() and 'direccion-visual' not in p.parts)
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',16)
rows=[]; groups={}
for p in files:
    rel=p.relative_to(ROOT).as_posix()
    row={'original':rel,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size}
    try:
        with Image.open(p) as im: row.update(width=im.width,height=im.height)
        group='captura-web' if 'Pinterest_files' in p.parts else (p.parent.name if 'referencias' in p.parts else 'arte-previo')
        groups.setdefault(group,[]).append(p)
    except Exception: row.update(width='',height='')
    rows.append(row)
with (OUT/'inventario-original.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=['original','sha256','bytes','width','height']);w.writeheader();w.writerows(rows)
index={};counter=0
for group,paths in groups.items():
    for page in range(0,len(paths),48):
        subset=paths[page:page+48]; sheet=Image.new('RGB',(1600,2040),'#eeece6');d=ImageDraw.Draw(sheet)
        for j,p in enumerate(subset):
            counter+=1; key=f'R{counter:04d}';index[key]=p.relative_to(ROOT).as_posix()
            x=(j%8)*200;y=(j//8)*330
            with Image.open(p) as im:
                im=ImageOps.exif_transpose(im).convert('RGB');im.thumbnail((194,286));sheet.paste(im,(x+(200-im.width)//2,y+(288-im.height)//2))
            label=key+' '+p.name
            d.text((x+3,y+289),label[:25],font=font,fill='#111111')
            d.text((x+3,y+308),label[25:50],font=font,fill='#111111')
        name=f'{group}-{page//48+1:02d}.jpg';sheet.save(OUT/name,quality=90)
        print(name,len(subset))
(OUT/'indice-contactos.json').write_text(json.dumps(index,ensure_ascii=False,indent=2),encoding='utf-8')
print('TOTAL',len(rows),'IMAGENES',counter)
