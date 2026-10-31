from pathlib import Path
import json,csv,hashlib,collections
ROOT=Path(__file__).resolve().parents[4]
OUT=Path(__file__).resolve().parent
idx=json.loads((OUT/'indice-contactos.json').read_text(encoding='utf-8'))
special={}
def assign(folder,ids):
    for n in ids: special[f'R{n:04d}']=folder
assign('01-personajes/indumentaria-y-textiles',[218,221,223,226,229,231,237,238,239,241,242,243,246,253,255,259,265,266,270,271,277,278,282,288,293,294,295,296,298,300,304,308,316,317,318,320,324])
assign('04-magia/glifos-y-diagramas',[227,230,240,256,314,471,477,478,481,485,490,497,504,507,512,713,714])
assign('06-recursos/paletas',[469,474,475,484,492,506])
assign('06-recursos/cartografia-y-marcos',[479,480,482,487,488,494,498,499,500,501,508,509,514,530,552,658,660,691,703])
assign('05-objetos/botanica-y-equipo',[470,472,473,476,483,486,489,491,493,495,496,502,503,505,510,511,513,515,528,544,561,590,592,612,617,636,638,642,654,655,692])
assign('02-paisajes/geografia-argentina',[537,549,559,560,566,571,574,580,584,594,611,656,687,688,696,699,701,706])
assign('02-paisajes/naturaleza-y-atmosfera',[524,556,557,573,582,587,595,599,605,606,627,632,645,651,657,659,662,664,665,667,668,670,671,672,673,678,684,698])
assign('03-arquitectura/escala-y-arcano',[516,517,521,522,525,526,534,536,543,547,548,550,553,558,564,569,570,578,581,583,585,586,588,589,591,596,600,602,608,609,613,614,615,616,621,633,634,635,637,639,641,643,646,649,653,661,663,666,669,676,677,679,680,681,682,683,685,689,693,695,697,707,708,710,712,715,716])
assign('03-arquitectura/anclas-nombradas',[618,619,620,622,623,624,625,644,711])
moves=[]
for key,rel in idx.items():
    p=ROOT/rel
    if 'referencias' not in p.parts or 'Pinterest_files' in p.parts: continue
    group=p.parent.name
    folder=special.get(key)
    if not folder:
        if group=='personajes': folder='01-personajes/siluetas-y-actitudes'
        elif group=='props': folder='05-objetos/artefactos-y-vestuario'
        elif group=='paisajes': folder='02-paisajes/exploracion-fantastica'
        elif group=='referencias alfabetos y props': folder='06-recursos/cartografia-y-marcos'
        else: folder='03-arquitectura/vida-cotidiana-y-asentamientos'
    dest=ROOT/'2 Desarrollo/arte/referencias'/folder/p.name
    if dest.exists(): dest=dest.with_name(key+'__'+dest.name)
    assert p.resolve().is_relative_to(ROOT.resolve()) and dest.resolve().is_relative_to((ROOT/'2 Desarrollo/arte/referencias').resolve())
    moves.append({'id':key,'original':rel,'destino':dest.relative_to(ROOT).as_posix(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
# Preflight all destinations before any mutation.
assert len({x['destino'] for x in moves})==len(moves)
for row in moves:
    src=ROOT/row['original'];dst=ROOT/row['destino'];dst.parent.mkdir(parents=True,exist_ok=True);src.rename(dst)
    assert hashlib.sha256(dst.read_bytes()).hexdigest()==row['sha256']
# Preserve the complete web capture together, including html and all dependencies.
old=ROOT/'2 Desarrollo/arte/referencias/referncias edificios y paisajes'
web=ROOT/'2 Desarrollo/arte/referencias/90-captura-web';web.mkdir(exist_ok=True)
for name in ['Pinterest.html','Pinterest_files']:
    src=old/name;dst=web/name
    if src.exists():
        assert src.resolve().is_relative_to(ROOT.resolve()) and dst.resolve().is_relative_to(ROOT.resolve())
        remaining=[src] if src.is_file() else list(src.rglob('*'))
        for f in remaining:
            if f.is_file(): moves.append({'id':'WEB','original':f.relative_to(ROOT).as_posix(),'destino':(dst if src.is_file() else dst/f.relative_to(src)).relative_to(ROOT).as_posix(),'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
        src.rename(dst)
with (OUT/'movimientos.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=['id','original','destino','sha256']);w.writeheader();w.writerows(moves)
# Remove only empty category directories, never recursively.
for name in ['personajes','paisajes','props','referencias alfabetos y props','referncias edificios y paisajes']:
    p=ROOT/'2 Desarrollo/arte/referencias'/name
    if p.exists() and not any(p.iterdir()): p.rmdir()
original=list(csv.DictReader((OUT/'inventario-original.csv').open(encoding='utf-8-sig')))
lookup={r['original']:r['destino'] for r in moves}
for r in original:
    target=ROOT/lookup.get(r['original'],r['original'])
    assert target.is_file(),str(target)
    assert hashlib.sha256(target.read_bytes()).hexdigest()==r['sha256'],str(target)
counts=collections.Counter(str(Path(r['destino']).parent) for r in moves)
result={'archivos_originales_verificados':len(original),'archivos_movidos':len(moves),'imagenes_inspeccionadas_en_contactos':len(idx),'carpetas':dict(sorted(counts.items()))}
(OUT/'verificacion-organizacion.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
