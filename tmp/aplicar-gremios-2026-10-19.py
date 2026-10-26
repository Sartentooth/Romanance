from pathlib import Path
import hashlib, json, re
from urllib.parse import unquote

r = Path.cwd()
source = r / 'data/archivos md/Romanance_Sistema_Gremios_Aventureros_Consolidado.md'
assert hashlib.sha256(source.read_bytes()).hexdigest() == '76a16b6d49b2cdb195fa0aabf6966647e8aaa93b5a42c472a3fcc0206cf3a86e'
def edit(name, old, new):
    p = r / name
    text = p.read_text(encoding='utf-8-sig')
    assert old in text, (name, old)
    p.write_text(text.replace(old,new,1),encoding='utf-8')

guide = 'herramientas-campana/gremios/guia-funcional.md'
edit(guide,'**Versión documental propuesta:** 0.1 · **Fecha:** 2026-10-19 · **Estado:** PROPUESTA DE INTEGRACIÓN, SIN APLICAR.', '**Versión documental:** 0.1 · **Fecha:** 2026-10-19 · **Estado:** EN DESARROLLO — PARTE FUNCIONAL APROBADA PARA TESTEO EN MESA. Aprobación expresa del autor del 2026-10-19; resultados de esta versión pendientes.')
with (r / guide).open('a',encoding='utf-8') as f:
    f.write('\n## Testeo en mesa — versión funcional 0.1\n\nSe prueba el circuito ya definido: afiliación, aceptación de encargos, acompañantes o grupo titular, resolución, cobro, saldo de PX/reputación y solicitud de ascenso cuando corresponda. No es necesario que todos estos pasos ocurran en una misma sesión ni que toda la party se afilie.\n\nEl autor enviará el informe de uso. Hasta recibirlo, esta versión está lista para probar y no se considera validada en mesa. El informe permitirá revisar claridad, carga de gestión, participación e incentivos sin añadir subsistemas por anticipado. El crecimiento institucional, los cargos detallados y Bastiones siguen pospuestos.\n')
edit('herramientas-campana/gremios/README.md','**Estado:** EN DESARROLLO.', '**Estado:** EN DESARROLLO — PARTE FUNCIONAL APROBADA PARA TESTEO EN MESA (v0.1). Informe del autor pendiente; sin validación de esta versión todavía.')
edit('canon/lore/gremios.md','Esto no revoca la responsabilidad del avanzado en los grupos mixtos.', 'Esto no revoca la responsabilidad del titular de rango superior en los grupos mixtos.')

report = r / 'REVISION_GREMIOS_2026-10-19.md'
t = report.read_text(encoding='utf-8')
t = t.replace('**Estado:** COTEJO COMPLETADO; DIFF PROPUESTO, SIN APLICAR AL CANON.','**Estado:** INTEGRACIÓN APROBADA Y APLICADA; PARTE FUNCIONAL EN TESTEO EN MESA (v0.1).',1)
t += '''
## Aprobación y aplicación — 2026-10-19

El autor aprobó expresamente el diff y pidió pasar la parte funcional a testeo en mesa. Se aplicaron los cuatro archivos propuestos, actualizando sus estados y el término residual «avanzado» a «titular de rango superior». La guía funcional tiene revisión documental 0.1; esto no asigna retroactivamente una versión al consolidado recibido.

Las secciones anteriores conservan el cotejo previo: sus menciones a propuesta o falta de aplicación describen ese momento y quedan superadas por este cierre. La sección 13 de la fuente ya fue satisfecha mediante el diff y la aprobación posterior. No hay una autorización pendiente.

Las nueve fichas y el lore se preservan. Fuente recibida intacta en `data/`; copias íntegras de los tres documentos activos anteriores en [_archivo/fuentes-historicas/gremios-pre-integracion-2026-10-19](./_archivo/fuentes-historicas/gremios-pre-integracion-2026-10-19/README.md). El diff original se conserva como antecedente de la revisión aprobada. El manifiesto registra la nueva precedencia; los análisis anteriores no rigen donde la guía los reemplaza.

No se informa una prueba ya realizada: el autor enviará sus resultados. Cargos, niveles institucionales, Bastiones y automatizaciones siguen fuera de este testeo funcional. No se realizaron commits ni push.
'''
report.write_text(t,encoding='utf-8')

arc = r / '_archivo/fuentes-historicas/gremios-pre-integracion-2026-10-19'
checks = []
for rel in ['canon/lore/gremios.md','herramientas-campana/gremios/README.md','herramientas-campana/gremios/analisis-y-bases.md']:
    p = arc / rel
    checks.append({'previous_path':rel,'snapshot':str(p.relative_to(r)).replace('\\','/'),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
(arc / 'README.md').write_text('''# Gremios — versiones anteriores a la integración del 2026-10-19

**Estado:** ARCHIVADO. Copias de los documentos activos antes de aplicar la revisión aprobada por el autor. Conservan sus bytes originales; los enlaces relativos internos corresponden a su ubicación anterior y no son rutas de consulta actual.

No se archivó como obsoleto el consolidado recibido: permanece íntegro como fuente de decisiones. La [guía funcional vigente](../../../herramientas-campana/gremios/guia-funcional.md) prevalece para el circuito de aventureros. El [canon institucional](../../../canon/lore/gremios.md) conserva las nueve fichas y el lore. [Cotejo y aprobación](../../../REVISION_GREMIOS_2026-10-19.md).

Hashes de estas copias y de los documentos resultantes: `verificacion.json`.
''',encoding='utf-8')

for name,old,new,dateold in [('INDICE_CANON.md','1.111','1.112','2026-10-17'),('PLAN_MIGRACION_FASE_1.md','1.100','1.101','2026-10-14'),('ESTADO_FASE_1.md','1.4','1.5','2026-10-14')]:
    p = r / name
    t = p.read_text(encoding='utf-8-sig')
    t = t.replace(old,new,1).replace(dateold,'2026-10-19',1)
    t += '\n\n## Gremios — parte funcional aprobada para testeo, 2026-10-19\n\n'
    t += 'Aprobación expresa del autor y aplicación del diff. [Cotejo y procedencia](./REVISION_GREMIOS_2026-10-19.md). Las menciones anteriores a nombres provisionales, multa automática por rango, momento de cobro o ausencia de umbrales quedan reemplazadas por este cierre.\n\n'
    t += '| Archivo | Versión / estado | Reemplaza / notas |\n|---|---|---|\n'
    t += '| [Guía funcional](./herramientas-campana/gremios/guia-funcional.md) | 0.1 documental / EN DESARROLLO, aprobada para testeo | Aprendiz/Oficial/Maestro; 25/50 PX; saldo único; titular individual o grupo; cobro verificado. Sustituye reglas operativas anteriores incompatibles. |\n'
    t += '| [Gremios de Romanance](./canon/lore/gremios.md) | 1.17 / CANON EN CONSOLIDACIÓN | Reemplaza v1.16 en el bloque operativo; conserva las nueve fichas y el lore. |\n'
    t += '| [Ficha de herramienta](./herramientas-campana/gremios/README.md) | 1.2 / EN DESARROLLO | Enlaza la guía vigente y el análisis anterior con precedencia explícita. |\n'
    t += '\nEl testeo de esta versión todavía no ocurrió según la evidencia disponible; se espera el informe del autor. No se exige afiliación de toda la mesa. Se conserva el mínimo de una pieza de plata no revocado. Crecimiento institucional, cargos detallados y Bastiones continúan pospuestos; no se crean nuevas mecánicas ni interfaces. Fuente recibida y versiones previas preservadas.\n'
    p.write_text(t,encoding='utf-8')

# Comprobar preservación del cuerpo institucional, salvo el renombre aprobado.
before = (arc / 'canon/lore/gremios.md').read_text(encoding='utf-8-sig')
after = (r / 'canon/lore/gremios.md').read_text(encoding='utf-8')
marker = '## Gremio Minero y Lunargenta'
assert before[before.index(marker):].replace('Esto no revoca la responsabilidad del avanzado en los grupos mixtos.','Esto no revoca la responsabilidad del titular de rango superior en los grupos mixtos.') == after[after.index(marker):]
docs = [r / p for p in [guide,'canon/lore/gremios.md','herramientas-campana/gremios/README.md','herramientas-campana/gremios/analisis-y-bases.md','REVISION_GREMIOS_2026-10-19.md','INDICE_CANON.md','PLAN_MIGRACION_FASE_1.md','ESTADO_FASE_1.md']] + [arc / 'README.md']
count, missing = 0, []
for p in docs:
    text = re.sub(r'```.*?```','',p.read_text(encoding='utf-8-sig'),flags=re.S)
    for m in re.finditer(r'!?\[[^\]\n]*\]\(\s*(?:<([^>]+)>|([^\s)]+))(?:\s+"[^"]*")?\s*\)',text):
        target = m.group(1) or m.group(2)
        if target.startswith('#') or re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:',target): continue
        target = unquote(target.split('#')[0].split('?')[0])
        if not target: continue
        count += 1
        if not (p.parent / target).resolve().exists(): missing.append([str(p.relative_to(r)),target])
assert not missing, missing
evidence = {'date':'2026-10-19','approval':'Aprobación explícita del autor; testeo en mesa solicitado','source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'previous_documents':checks,'institutional_body_preserved':True,'documents_checked':len(docs),'local_links_checked':count,'missing':missing,'resulting_files':[{'path':str(p.relative_to(r)).replace('\\','/'),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in docs]}
(arc / 'verificacion.json').write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'documents':len(docs),'links':count,'missing':missing,'source_intact':True,'institutional_body_preserved':True},ensure_ascii=False))
