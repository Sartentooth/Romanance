from pathlib import Path
import hashlib, difflib

root = Path.cwd()
source = root / 'data/archivos md/Romanance_Sistema_Gremios_Aventureros_Consolidado.md'
raw = source.read_bytes()
text = raw.decode('utf-8-sig')
digest = hashlib.sha256(raw).hexdigest()
candidate = root / 'tmp/gremios-2026-10-19'
candidate.mkdir(parents=True, exist_ok=True)
changes = {}

name = 'herramientas-campana/gremios/guia-funcional.md'
guide = text.split('## 1. Principios de diseño')[1].split('## 11. Historial de decisiones')[0]
guide = '# Sistema de gremios — guía funcional para aventureros\n\n**Versión documental propuesta:** 0.1 · **Fecha:** 2026-10-19 · **Estado:** PROPUESTA DE INTEGRACIÓN, SIN APLICAR.\n\nFuente: [consolidado del autor](../../data/archivos%20md/Romanance_Sistema_Gremios_Aventureros_Consolidado.md), sin versión de sistema asignada. Esta guía es opcional: puede utilizarse completa o tomando solo lo necesario.\n\n## 1. Principios de diseño' + guide
guide += '\n## Precisiones que se conservan del canon de Romanance\n\n- Se conserva el mínimo de **1 pieza de plata** de pago al porcentaje inferior; la nueva fuente no lo revoca. Redondeos y aplicación al contrato siguen pendientes.\n- El Gremio de Aventureros mantiene su alcance común sobre aventureros asociados y sus encargos propios, sin duplicar instituciones ni cobros por inferencia. Las trayectorias y saldos de cada afiliación son independientes.\n- El titular de rango superior asume la responsabilidad por su encargo con acompañantes; el gremio no se hace cargo si algo sale mal. No se inventan indemnizaciones.\n- Las nueve fichas, la voz ante el Consejo, la excepción de Sanadores y los límites de acceso bibliotecario se conservan según el [canon institucional](../../canon/lore/gremios.md).\n\n## Límites pendientes\n\nConstitución y cambios de integrantes de grupos; redondeos; privilegios concretos; cargos y criterios de Gran Maestre; niveles y mejoras institucionales. No se agregan políticas, tablas de conducta, interfaces, Bastiones ni acreditación mágica.\n'
changes[name] = guide

name = 'canon/lore/gremios.md'
original = (root / name).read_text(encoding='utf-8-sig')
start = original.index('## Afiliación y progresión de aventureros')
end = original.index('## Gremio Minero y Lunargenta')
replacement = '''## Afiliación y encargos — consolidado del autor, 2026-10-19

Reglas operativas en la [guía funcional](../../herramientas-campana/gremios/guia-funcional.md), procedentes del [consolidado del 19 de octubre](../../data/archivos%20md/Romanance_Sistema_Gremios_Aventureros_Consolidado.md). Se distinguen afiliación aventurera, oficio y cargos internos.

| Rango definitivo | PX/reputación acumulados para aspirar | Tasa de ingreso/ascenso | Pago al titular |
|---|---:|---:|---:|
| Aprendiz | 0 iniciales | 1 PO (10 piezas de plata) | 10 % |
| Oficial | 25 | 10 PO | 35 % |
| Maestro | 50 | 100 PO | 50 % |

El ingreso requiere tarea o prueba pertinente. Alcanzar un umbral permite solicitar ascenso: requiere historial, evaluación favorable, padrino con acceso al rango y tasa; la gestión suele llevar aproximadamente un día. Los PX no se gastan al ascender y su pérdida posterior no causa descenso automático.

PX y reputación constituyen **un único saldo por titular y gremio**, distinto de la experiencia de nivel de D&D. Un éxito concede de 1 a 5 PX según dificultad; el fracaso resta exactamente lo que habría otorgado. El saldo puede ser negativo. No se fija una tabla adicional por conducta.

El titular acepta encargos de su rango o inferiores y puede llevar acompañantes de cualquier rango, gremio o sin afiliación. Solo el titular recibe el pago y el cambio de PX. Decide cómo compartir lo cobrado. Un titular de rango superior es responsable si algo sale mal y el gremio no se hace cargo; no se fijan indemnizaciones por inferencia.

El grupo registrado es un titular propio con rango y saldo independientes de los de sus miembros: no se multiplican ni duplican pagos o PX. Un PJ Maestro puede integrar un grupo Aprendiz. Un encargo acredita únicamente al titular que figure en el contrato.

El gremio paga al verificar la prueba acordada, sin cierre mensual. Los hallazgos no reclamados por contrato quedan a disposición de los aventureros. Sobre 300 PO, corresponden 30/105/150 PO al titular, individual o grupal. Se conserva el mínimo anterior de **1 pieza de plata** para el porcentaje inferior; su aplicación y los redondeos siguen sin precisar.

El sistema no ofrece al titular contratos superiores a su acceso: queda reemplazada la multa automática como procedimiento habitual. Acompañar a otro titular o aceptar trabajos privados no constituye esa infracción ni genera PX gremiales automáticamente. Faltas graves o fracasos reiterados pueden tener consecuencias según hechos y DM; una dificultad inesperada no constituye por sí sola una falta.

La afiliación es opcional. Los progresos no se transfieren entre gremios. El rango ofrece contactos, recursos e información según ficción y autorizaciones, sin bonos numéricos automáticos ni acceso irrestricto. No concede por sí solo un cargo interno ni los beneficios profesionales del oficio.

## Participación institucional — desarrollo pospuesto

Un Maestro puede optar a cargos. Gran Maestre es reconocimiento personal y prestigio gremial, puede haber varios y no concede votos adicionales ni equivale automáticamente a director. Puede aspirar a dirigir o fundar un gremio sujeto a autoridades y circunstancias; no se mecaniza ahora.

La evaluación institucional es anual en la ficción o cuando el DM lo considere conveniente. Niveles numéricos, umbrales, mejoras edilicias y adaptación de Bastiones quedan pospuestos; las ideas cuantitativas anteriores no forman parte del circuito funcional actual.

'''
new = original[:start] + replacement + original[end:]
new = new.replace('**Versión documental:** 1.16 local · **Fecha:** 2026-10-14', '**Versión documental:** 1.17 local · **Fecha:** 2026-10-19', 1)
new = new.replace('Decisiones expresas del autor conservadas; reparto económico aclarado; detalles operativos y resto del reglamento abiertos.', 'Afiliación, rangos, PX/reputación y contratos actualizados; desarrollo institucional pospuesto.', 1)
new = new.replace('El nivel institucional y su evaluación anual se documentan en la herramienta enlazada; no equivalen al rango de un aventurero.', 'El crecimiento institucional y su evaluación se documentan como desarrollo pospuesto en la herramienta enlazada; no equivalen al rango de un aventurero.',1)
changes[name] = new
# Las fichas y todo el contenido posterior al bloque operativo deben quedar literales.
assert new[new.index('## Gremio Minero y Lunargenta'):] == original[end:]

name = 'herramientas-campana/gremios/README.md'
changes[name] = '''# Sistema de Gremios y Bastiones (mejorados)

**Versión de ficha:** 1.2 · **Fecha:** 2026-10-19 · **Estado:** EN DESARROLLO.

La [guía funcional](./guia-funcional.md) registra el circuito aprobado de afiliación, encargos, rangos Aprendiz/Oficial/Maestro y PX/reputación. Es opcional, modular y de gestión ligera; no exige sesiones administrativas ni afiliación de toda la party. No equivale a un módulo publicable terminado.

[Instituciones y nueve fichas de Romanance](../../canon/lore/gremios.md) · [Análisis anterior e inspiraciones](./analisis-y-bases.md) · [Economía inmobiliaria](../economia-inmobiliaria.md).

El análisis anterior conserva procedencia y propuestas; la guía funcional posterior prevalece donde cambian las decisiones. Crecimiento institucional, cargos, Gran Maestre, edificios y Bastiones quedan para desarrollo posterior, sin niveles o tablas nuevas. En Romanance se mantiene el alcance común del Gremio de Aventureros y la excepción profesional de Sanadores.
'''

name = 'herramientas-campana/gremios/analisis-y-bases.md'
old = (root / name).read_text(encoding='utf-8-sig')
lines = old.splitlines(keepends=True)
lines.insert(4, '\n> **Precedencia — 2026-10-19:** este análisis conserva propuestas y decisiones anteriores. La [guía funcional posterior](./guia-funcional.md) prevalece para rangos, PX/reputación, grupos, cobro, acceso y sanciones. Crecimiento cuantitativo, d20 y Bastiones son desarrollo pospuesto, no requisitos ni reglas operativas vigentes.\n\n')
changes[name] = ''.join(lines)

diffs = []
for name, new in changes.items():
    path = root / name
    old = path.read_text(encoding='utf-8-sig') if path.exists() else ''
    diffs.extend(difflib.unified_diff(old.splitlines(True), new.splitlines(True), fromfile='a/'+name if path.exists() else '/dev/null', tofile='b/'+name))
    proposed = candidate / name
    proposed.parent.mkdir(parents=True, exist_ok=True)
    proposed.write_text(new, encoding='utf-8')
diffname = 'PROPUESTA_INTEGRACION_GREMIOS_2026-10-19.diff'
(root / diffname).write_text(''.join(diffs),encoding='utf-8')
report = f'''# Recepción y cotejo — sistema de gremios, 2026-10-19

**Estado:** COTEJO COMPLETADO; DIFF PROPUESTO, SIN APLICAR AL CANON.

Fuente: [consolidado entregado por el autor](./data/archivos%20md/Romanance_Sistema_Gremios_Aventureros_Consolidado.md), fechado 2026-10-19, sin versión nueva del sistema asignada. SHA-256 `{digest}`. Original intacto y conservado en su ubicación.

## Cambios explícitos respecto de la documentación vigente

| Tema | Vigente anterior | Nueva decisión del autor |
|---|---|---|
| Rangos | Básico/medio/avanzado provisionales | Aprendiz/Oficial/Maestro definitivos |
| Ascenso | Sin umbrales | 25/50 PX acumulados, padrino, evaluación, tasa; gestión aproximada de un día |
| Reputación | Sin saldo mecánico definido | Un único saldo de PX/reputación por titular y gremio; puede ser negativo |
| Encargos | Resultado sin escala de PX | Éxito +1 a +5; fracaso resta la misma cantidad; no son PX de nivel D&D |
| Grupos | Pago grupal; rango no precisado | Grupo titular con rango y saldo independientes, sin duplicación individual |
| Colaboradores | Responsabilidad del avanzado confirmada | Solo el titular cobra y cambia PX; admite externos y rangos inferiores |
| Sanción por rango | Multa y expulsión por reincidencia | No se ofrecen encargos superiores; no hay multa automática por acompañar o dificultad inesperada |
| Cobro | Momento no fijado | Al verificar el cumplimiento; botín según contrato |
| Institución | Niveles y d20 contemplados, sin valores | Desarrollo pospuesto, evaluación anual o según DM; Gran Maestre no equivale a director ni añade votos |

Las tasas de 1/10/100 PO y pagos de 10/35/50 % se conservan. El mínimo anterior de **1 pieza de plata** no está mencionado ni revocado: la propuesta lo conserva sin inventar redondeos.

## Protección del lore existente

Las nueve fichas, sedes, requisitos de oficio, beneficios profesionales, voz ante el Consejo, explotación de Lunargenta y excepción de Sanadores se conservan. La independencia del saldo de cada afiliación no elimina por sí sola el alcance común del Gremio de Aventureros. El acceso narrativo de un Maestro no concede automáticamente archivos restringidos: subsiste la regla específica de Bibliotecarios.

No se identificó una contradicción sustantiva sin resolver que impida preparar esta integración. Las diferencias anteriores son reemplazos explícitos en la nueva fuente; sus omisiones no se convierten en derogaciones. Detalles de constitución de grupos, redondeos, privilegios y administración institucional siguen abiertos en su alcance declarado.

## Diff preparado

[Propuesta concreta de cambios](./{diffname}): nueva guía funcional, bloque operativo del canon y documentación de herramientas. Las versiones de los encabezados del diff son propuestas; todavía no son versiones vigentes. Se comprobó que todo el contenido del canon desde «Gremio Minero y Lunargenta» hasta el final permanece literal en la propuesta.

La sección 13 de la entrega solicita: «Presentar un diff antes de consolidar cambios canónicos». Por eso se deja el resultado revisable y no se sustituyen aún archivos activos, se archivan fuentes ni se registra en el manifiesto una aplicación que no ocurrió. Tampoco se crean interfaces, automatizaciones o nuevas mecánicas.
'''
(root / 'REVISION_GREMIOS_2026-10-19.md').write_text(report,encoding='utf-8')
assert hashlib.sha256(source.read_bytes()).hexdigest() == digest
print(f'Fuente intacta. Diff de {len(changes)} archivos preparado; canon activo sin modificar. SHA-256: {digest}')
