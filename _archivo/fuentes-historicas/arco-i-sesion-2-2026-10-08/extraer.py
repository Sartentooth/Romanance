from pathlib import Path
import hashlib
import json
import zipfile
import xml.etree.ElementTree as ET

repo = Path(__file__).resolve().parents[3]
out = Path(__file__).resolve().parent
source = repo / 'data/archivos md/cronica arco1 sesión 2_por jugadores.docx'
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
with zipfile.ZipFile(source) as archive:
    root = ET.fromstring(archive.read('word/document.xml'))
    blocks = []
    for number, paragraph in enumerate(root.findall('.//w:p', ns), 1):
        value = ''.join(node.text or '' for node in paragraph.findall('.//w:t', ns))
        if value.strip():
            blocks.append({'parrafo': number, 'texto': value})
    auxiliary = [name for name in archive.namelist() if any(x in name for x in ('comments', 'footnotes', 'endnotes'))]
    tracked = sum(len(root.findall('.//w:' + tag, ns)) for tag in ('ins', 'del', 'moveFrom', 'moveTo'))
record = {'archivo': str(source), 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(), 'bytes': source.stat().st_size, 'parrafos_con_texto': len(blocks), 'partes_auxiliares': auxiliary, 'cambios_seguidos': tracked}
(out / 'inventario.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
(out / 'transcripcion.json').write_text(json.dumps(blocks, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
text = '# Crónica de jugadores — Arco I, sesión 2\n\nTranscripción textual OOXML; numeración por párrafos, sin paginación verificada. Fuente original intacta. No adopta automáticamente sus hechos como canon.\n\n'
text += '\n\n'.join(f"## Párrafo {b['parrafo']}\n\n{b['texto']}" for b in blocks) + '\n'
(out / 'transcripcion.md').write_text(text, encoding='utf-8')
print(json.dumps(record, ensure_ascii=True))
