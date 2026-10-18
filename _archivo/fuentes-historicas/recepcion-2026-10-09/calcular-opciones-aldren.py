from pathlib import Path
import hashlib
import heapq
import json
import math

repo = Path(__file__).resolve().parents[3]
source = next((repo / 'data/Json del mapa de Azgaar').glob('*.json'))
data = json.loads(source.read_text(encoding='utf-8-sig'))
pack = data['pack']
scale = data['settings']['distanceScale']
routes = {r['i']: r for r in pack['routes']}
cells = {c['i']: c for c in pack['cells']}

# La celda 4444 contiene la confluencia registrada en esta zona. Su centro
# sirve como referencia aproximada, no como emplazamiento confirmado de Aldren.
target = 4444
start = next(b['cell'] for b in pack['burgs'] if isinstance(b, dict) and b.get('name') == 'Romanance')
dist = {start: 0.0}
queue = [(0.0, start)]
while queue:
    cost, i = heapq.heappop(queue)
    if cost != dist[i]:
        continue
    if i == target:
        break
    for j in cells[i]['c']:
        if cells[j]['h'] < 20:
            continue
        value = cost + math.dist(cells[i]['p'], cells[j]['p']) * scale
        if value < dist.get(j, float('inf')):
            dist[j] = value
            heapq.heappush(queue, (value, j))

walk_to_port = sum(routes[i]['length'] * scale for i in [11, 13])
sea = routes[9]['length'] * scale
result = {
    'fuente': str(source.relative_to(repo)),
    'sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
    'directa_km_aproximados_autor': 560,
    'varsak_confluencia_km_captura_autor': 168,
    'romanance_levit_tomorsag_km_calculados': walk_to_port,
    'tomorsag_varsak_mar_km_calculados': sea,
    'opcion_via_tomorsag_total_km_estimados': walk_to_port + sea + 168,
    'opcion_via_tomorsag_total_a_pie_km_estimados': walk_to_port + 168,
    'comprobacion_geometrica_celdas_km': dist[target],
    'celda_referencia_aproximada': target,
    'limite_calculo_celdas': 'Camino geométrico mínimo por centros de celdas terrestres. Ignora terreno, puentes, cruces fluviales, caminos transitables y desvíos: no es una ruta jugable validada ni sustituye los 560 km aproximados del autor.',
    'eleccion_de_ruta': 'Corresponde a la party. Se comparan opciones; ninguna fue elegida por esta revisión.'
}
target_file = Path(__file__).resolve().parent / 'opciones-aldren.json'
target_file.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, ensure_ascii=True))
