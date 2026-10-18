from pathlib import Path
import hashlib, json, zipfile
import xml.etree.ElementTree as ET
from pypdf import PdfReader

root=Path(__file__).resolve().parents[3]
out=Path(__file__).parent
src=root/'data'/'archivos md'
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
records=[]
for i,p in enumerate(sorted([p for p in src.iterdir() if p.suffix.lower() in ('.pdf','.docx')]),1):
    blocks=[]
    if p.suffix.lower()=='.pdf':
        reader=PdfReader(p)
        for n,page in enumerate(reader.pages,1):
            blocks.append({'pagina':n,'texto':page.extract_text() or ''})
        units=len(reader.pages)
        extras={}
    else:
        with zipfile.ZipFile(p) as z:
            tree=ET.fromstring(z.read('word/document.xml'))
            for n,par in enumerate(tree.findall('.//w:body//w:p',ns),1):
                s=''.join(par.itertext()) if False else ''.join(t.text or '' for t in par.findall('.//w:t',ns))
                if s: blocks.append({'parrafo':n,'texto':s})
            extras={'partes_auxiliares':[],'cambios_seguidos':len(tree.findall('.//w:ins',ns))+len(tree.findall('.//w:del',ns))}
            for name in z.namelist():
                if name.startswith('word/') and name.endswith('.xml') and any(a in name for a in ('comments','footnotes','endnotes','header','footer')):
                    t=ET.fromstring(z.read(name))
                    s='\n'.join(''.join(x.text or '' for x in par.findall('.//w:t',ns)) for par in t.findall('.//w:p',ns))
                    if s.strip(): extras['partes_auxiliares'].append({'parte':name,'texto':s})
        units=len(blocks)
    stem=f'fuente-{i:02d}'
    (out/(stem+'.md')).write_text('# '+p.name+'\n\n'+ '\n\n'.join((f"## Página {b['pagina']}\n\n" if 'pagina' in b else f"<!-- párrafo {b['parrafo']} -->\n")+b['texto'] for b in blocks)+'\n',encoding='utf-8')
    (out/(stem+'.json')).write_text(json.dumps({'archivo':str(p),'bloques':blocks,**extras},ensure_ascii=False,indent=2),encoding='utf-8')
    records.append({'id':stem,'archivo':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size,'unidades':units,'tipo_unidad':'paginas' if p.suffix.lower()=='.pdf' else 'parrafos','caracteres':sum(len(b['texto']) for b in blocks),**extras})
(out/'inventario.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(records,ensure_ascii=False,indent=2))
