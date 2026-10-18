from pathlib import Path
import hashlib
import json
from pypdf import PdfReader

repo = Path(__file__).resolve().parents[3]
out = Path(__file__).resolve().parent
mapdir = repo / 'data/Json del mapa de Azgaar'
current = next(mapdir.glob('*.json'))
native = next(mapdir.glob('*.map'))
data = json.loads(current.read_text(encoding='utf-8-sig'))
old = json.loads((repo / '_archivo/fuentes-historicas/auditoria-2026-10-04/evidencia-azgaar.json').read_text(encoding='utf-8-sig'))
inventory = []
for p in [current, native, *sorted((repo / 'data/archivos md/manuales D&D 2024').glob('*.pdf'))]:
    inventory.append({'archivo': str(p.relative_to(repo)), 'bytes': p.stat().st_size, 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()})
(out / 'inventario.json').write_text(json.dumps(inventory, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
maplines = native.read_text(encoding='utf-8-sig').splitlines()
native_json = []
for i, line in enumerate(maplines):
    try:
        native_json.append((i, json.loads(line)))
    except (ValueError, TypeError):
        pass
comparisons = {}
for key in ['features', 'burgs', 'states', 'cultures', 'rivers', 'routes']:
    candidates = [(i, item) for i, item in native_json if item == data['pack'][key]]
    comparisons[key] = [i for i, _ in candidates]
routes = [{'id': item['i'], 'nombre': item.get('name'), 'km': item['length'] * data['settings']['distanceScale']} for item in data['pack']['routes']]
findings = {'info_actual': data['info'], 'info_anterior_auditoria': old['Info'], 'escala_actual': data['settings']['distanceScale'], 'cabecera_map': maplines[0], 'coincidencias_exactas_map_json_por_seccion': comparisons, 'lagos': [{'id': f['i'], 'nombre': f.get('name')} for f in data['pack']['features'] if isinstance(f, dict) and f.get('i') in [11, 13]], 'berk_bioma': data['pack']['cells'][2400]['biome'], 'rutas_actuales': routes, 'limite': 'JSON anterior ausente del directorio y sin seguimiento en Git; comparación histórica limitada a auditoría disponible.'}
(out / 'mapa.json').write_text(json.dumps(findings, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
pdfs = []
for p in sorted((repo / 'data/archivos md/manuales D&D 2024').glob('*.pdf')):
    reader = PdfReader(p)
    count = len(reader.pages)
    indexes = range(count) if count <= 12 else range(min(8, count))
    pages = [{'pagina': i + 1, 'texto': reader.pages[i].extract_text() or ''} for i in indexes]
    record = {'archivo': str(p.relative_to(repo)), 'paginas': count, 'paginas_extraidas': [x['pagina'] for x in pages], 'metadatos': {str(k): str(v) for k, v in (reader.metadata or {}).items()}, 'texto': pages}
    pdfs.append(record)
    print(json.dumps({'pdf': p.name, 'paginas': count, 'paginas_extraidas': record['paginas_extraidas'], 'primer_texto': pages[0]['texto'][:220]}, ensure_ascii=True))
(out / 'pdfs-lectura-inicial.json').write_text(json.dumps(pdfs, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'mapa': findings, 'archivos_recibidos': len(inventory)}, ensure_ascii=True))
