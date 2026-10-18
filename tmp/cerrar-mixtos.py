from pathlib import Path
import json, hashlib, re
from urllib.parse import unquote

root = Path.cwd()
evidence_path = root / '_archivo/fuentes-historicas/migracion-2026-10-14/reubicacion-mixtos.json'
evidence = json.loads(evidence_path.read_text(encoding='utf-8-sig'))
for name, old, new in [('INDICE_CANON.md','1.107','1.108'), ('PLAN_MIGRACION_FASE_1.md','1.99','1.100'), ('ESTADO_FASE_1.md','1.3','1.4')]:
    path = root / name
    content = path.read_text(encoding='utf-8-sig')
    assert old in content[:500], (name, content[:500])
    content = content.replace(old, new, 1)
    heading = '\n\n## Reubicación de documentos mixtos — 2026-10-14\n\n'
    assert heading.strip() not in content
    content += heading
    content += 'Tres fuentes cubiertas archivadas y dos documentos de desarrollo reubicados íntegros. [Informe de cobertura y destinos](./REVISION_REUBICACION_DOCUMENTOS_MIXTOS_2026-10-14.md). Los cinco hashes coinciden antes y después del movimiento.\n\n'
    if name == 'INDICE_CANON.md':
        content += '| Archivo actual | Versión / estado | Reemplazo o tratamiento |\n|---|---|---|\n'
        for item in evidence['items']:
            target = item['destination']
            if item['action'] == 'archivar':
                status = 'Versión original íntegra / ARCHIVADO'
                treatment = f"[Documento vigente](<{item['active']}>) según cobertura; conserva la fuente histórica."
            else:
                status = 'Corte original íntegro / EN DESARROLLO'
                treatment = 'Reubicación del documento de trabajo; no se declara reemplazado, obsoleto ni reglamento final.'
            content += f'| [{Path(target).name}](<{target}>) | {status} | {treatment} |\n'
        content += '\n[Ficha de objetos de legado](./herramientas-campana/armas-legendarias/README.md), v1.0: registra el diseño existente, su nombre provisional y dependencias. La versión del sistema sigue sin asignar. Esta entrada prevalece sobre diagnósticos iniciales que indicaban ausencia del diseño.\n'
    elif name == 'PLAN_MIGRACION_FASE_1.md':
        content += 'Alfabeto, Drix original y Viajes v1.2 pasan al archivo histórico tras cotejo. Objetos de legado pasa a `herramientas-campana/armas-legendarias/`; el consolidado mixto Viajes/Drix queda en el área común de herramientas. Sus propuestas y tensiones permanecen identificadas: reubicarlos no aprueba contenido nuevo ni completa su cobertura. Estos destinos ejecutados sustituyen los tentativos para los cinco archivos.\n'
    else:
        content += 'Alfabeto original, Drix original y Viajes v1.2: ARCHIVADOS. Consolidados de objetos de legado y Viajes/Drix: EN DESARROLLO, en herramientas. Los compilados grandes, fuentes mixtas restantes y adjuntos requieren su propio cotejo. No se declara terminada la fase ni se amplía la geografía para cerrar estos movimientos.\n'
    path.write_text(content, encoding='utf-8')

hash_checks = []
for item in evidence['items']:
    destination = root / item['destination']
    digest = hashlib.sha256(destination.read_bytes()).hexdigest()
    assert digest == item['sha256'] == item['sha256_after'], item['destination']
    assert not (root / item['source']).exists(), item['source']
    hash_checks.append({'file':item['destination'], 'sha256':digest, 'matches':True})

docs = []
excluded = {'data','_archivo','tmp','.git','.agents','.codex'}
for path in root.rglob('*.md'):
    if path.relative_to(root).parts[0] not in excluded:
        docs.append(path)
docs.append(root / 'data/README.md')
for area in ['escritura-2026-10-14','mazo-drix-2026-10-14','viajes-2026-10-14']:
    docs.append(root / '_archivo/fuentes-historicas' / area / 'README.md')
missing, count = [], 0
for path in docs:
    text = path.read_text(encoding='utf-8-sig')
    text = re.sub(r'```.*?```', '', text, flags=re.S)
    for m in re.finditer(r'!?\[[^\]\n]*\]\(\s*(?:<([^>]+)>|([^\s)]+))(?:\s+"[^"]*")?\s*\)', text):
        target = m.group(1) or m.group(2)
        if target.startswith('#') or re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:',target):
            continue
        target = unquote(target.split('#')[0].split('?')[0])
        if not target:
            continue
        count += 1
        resolved = (path.parent / target).resolve()
        if not resolved.exists():
            missing.append({'document':str(path.relative_to(root)), 'target':target})
result = {'documents':len(docs),'local_links_checked':count,'missing':missing,'hash_checks':hash_checks}
(evidence_path.parent / 'verificacion-mixtos.json').write_text(json.dumps(result, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print(json.dumps({'documents':len(docs),'links':count,'missing':missing,'intact_files':len(hash_checks)},ensure_ascii=False))
