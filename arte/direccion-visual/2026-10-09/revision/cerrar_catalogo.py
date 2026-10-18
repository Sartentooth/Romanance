from pathlib import Path
from PIL import Image
import json,csv,hashlib,collections
ROOT=Path(__file__).resolve().parents[4];OUT=Path(__file__).resolve().parent
moves=list(csv.DictReader((OUT/'movimientos.csv').open(encoding='utf-8-sig')))
idx=json.loads((OUT/'indice-contactos.json').read_text(encoding='utf-8'))
lookup={r['original']:r for r in moves}
scifi={39,40,41,53,64,65,74,75,76,77,78,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,192,193,204,205}
for n in scifi:
    key=f'R{n:04d}';row=lookup[idx[key]];src=ROOT/row['destino'];dst=ROOT/'arte/referencias/02-paisajes/cotidiano-y-ciencia-ficcion'/src.name
    assert src.resolve().is_relative_to(ROOT.resolve()) and dst.resolve().is_relative_to(ROOT.resolve()) and not dst.exists()
    dst.parent.mkdir(parents=True,exist_ok=True);src.rename(dst);row['destino']=dst.relative_to(ROOT).as_posix()
with (OUT/'movimientos.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=['id','original','destino','sha256']);w.writeheader();w.writerows(moves)
catalog=[]
for key,original in idx.items():
    row=lookup.get(original);current=row['destino'] if row else original
    p=ROOT/current
    named=p.name.lower().startswith(('aethragar','aurelia','como veo','orco sabio','tabla aureliana','tablilla aureliana','ard gaeth','gigantes de hielo'))
    catalog.append({'id':key,'ruta_actual':current,'ruta_original':original,'prioridad':'ancla nombrada por autor' if named else 'referencia exploratoria','autor_fuente':'sin verificar; conservar atribuciones en nombre/imagen','sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
with (OUT/'catalogo-imagenes.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=list(catalog[0]));w.writeheader();w.writerows(catalog)
(OUT/'indice-contactos-actual.json').write_text(json.dumps({r['id']:r['ruta_actual'] for r in catalog},ensure_ascii=False,indent=2),encoding='utf-8')
original=list(csv.DictReader((OUT/'inventario-original.csv').open(encoding='utf-8-sig')))
for r in original:
    p=ROOT/(lookup[r['original']]['destino'] if r['original'] in lookup else r['original'])
    assert p.is_file() and hashlib.sha256(p.read_bytes()).hexdigest()==r['sha256']
counts=collections.Counter(str(Path(r['destino']).parent) for r in moves)
result={'archivos_originales_verificados':len(original),'archivos_movidos':len(moves),'imagenes_inspeccionadas_en_contactos':len(idx),'carpetas':dict(sorted(counts.items())),'laminas':{}}
for p in (OUT.parent/'laminas').glob('*.png'):
    with Image.open(p) as im: result['laminas'][p.name]={'width':im.width,'height':im.height,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
assert len(result['laminas'])==3
json.loads((OUT.parent/'prompts.json').read_text(encoding='utf-8'))
(OUT/'verificacion-organizacion.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
