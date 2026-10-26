from pathlib import Path
import re, hashlib, difflib, json
r=Path.cwd()
p=r/'data/archivos md/Romanance_Consolidacion_Canon_y_Decisiones_2026-10-04.md'
t=p.read_text(encoding='utf-8-sig')
matches=list(re.finditer(r'^## Fuente documental: (.+)$',t,re.M))
paths=[x for base in ['data','_archivo','herramientas-campana'] for x in (r/base).rglob('*.md') if 'Romanance_Consolidacion_Canon' not in x.name]
items=[]
def norm(s): return s.replace('\r\n','\n').strip()
for i,m in enumerate(matches):
    block=t[m.end():matches[i+1].start() if i+1<len(matches) else t.index('## Huellas de las fuentes')]
    start=block.index('Inicio de fuente.')+len('Inicio de fuente.')
    body=norm(block[start:block.index('> Fin de fuente:')])
    name=m.group(1).strip()
    candidates=[x for x in paths if x.name==name]
    if not candidates and name.startswith('Sistema Universal'):
        candidates=[x for x in paths if x.name.startswith('Sistema Universal')]
    if not candidates and '(2)' in name:
        candidates=[x for x in paths if x.name==name.replace(' (2)','')]
    scored=[]
    for x in candidates:
        current=norm(x.read_text(encoding='utf-8-sig'))
        ratio=1.0 if body==current else difflib.SequenceMatcher(None,body.splitlines(),current.splitlines()).ratio()
        scored.append((ratio,x,current))
    scored.sort(key=lambda v:v[0],reverse=True)
    best=scored[0] if scored else None
    item={'source_name':name,'line_start':t[:m.start()].count('\n')+1,'embedded_sha256_normalized':hashlib.sha256(body.encode()).hexdigest(),'chars':len(body),'match':str(best[1].relative_to(r)).replace('\\','/') if best else None,'identical_after_trim_and_newlines':bool(best and best[2]==body),'ratio':round(best[0],5) if best else 0}
    if best and body!=best[2]:
        item['diff']=''.join(difflib.unified_diff(best[2].splitlines(True),body.splitlines(True),fromfile=str(best[1].relative_to(r)),tofile='embedded/'+name))
    items.append(item)
out=r/'tmp/cotejo-compilados-anexos.json'
out.write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
for x in items:
    print(json.dumps({k:v for k,v in x.items() if k!='diff'},ensure_ascii=False))
    if 'diff' in x: print(x['diff'][:8500])
