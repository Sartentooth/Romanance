from pathlib import Path
import re, json, hashlib
from urllib.parse import unquote

r=Path.cwd()
names=['Romanance_Consolidacion_Canon_2026-10-04.md','Romanance_Consolidacion_Canon_y_Decisiones_2026-10-04.md']
sources=[r/'data/archivos md'/n for n in names]
source_checks=[{'path':p.relative_to(r).as_posix(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'lines':len(p.read_text(encoding='utf-8-sig').splitlines())} for p in sources]
blocks=json.loads((r/'tmp/cotejo-compilados-anexos.json').read_text(encoding='utf-8'))
for b in blocks: b.pop('diff',None)
assert len(blocks)==18 and sum(b['identical_after_trim_and_newlines'] for b in blocks)==14

# Estado de cobertura temática, no una certificación por semejanza textual.
rows=[
(1,'C','AGENTS.md','Prioridad de canon, categorías y límites operativos vigentes.'),
(2,'H','INDICE_CANON.md','Leyenda del corte; se conservan estados documentales y precedencia posterior.'),
(3,'T','README.md','Identidad y nombres cubiertos; convenciones de títulos individuales y ausencia de Volumen pendientes de trasladar: T01.'),
(4,'S','canon/arcos/cronologia-preludio-campana-i.md','434/435 y estudio de la Orden; cargos antiguos corregidos.'),
(5,'C','canon/lore/luz-y-filosofia.md','Luz, cadena filosófica, custodia y frases doctrinales.'),
(6,'S','canon/lore/aurelianos.md','Cultura, arquitectura y símbolos conservados; supervivencia por ramas precisada por el autor.'),
(7,'S','canon/lore/alfabeto-aureliano.md','Base gráfica cerrada después; léxico en Aurelianos, lengua completa diferida.'),
(8,'S','canon/lore/juramentos.md','Orden de Biblia confirmado; orden del puzzle como interpretación de fundadores.'),
(9,'C','canon/lore/el-silente.md','Naturaleza, despertar y peligro ontológico; no deidad.'),
(10,'C','canon/lore/el-silente.md','Lunargenta, uso corriente y peligro del estudio profundo; sin nuevas vetas.'),
(11,'C','canon/lore/el-silente.md','Fractura y anclas; no se generaliza toda pieza a ancla.'),
(12,'S','canon/arcos/arco-i.md','Guardián y renovación cubiertos; Heredero de esta mesa suspendido por Maximus, sin reemplazo.'),
(13,'S','canon/lore/orden-de-bibliotecarios.md','Decisión posterior: Morvath destruyó la Orden; no rige la prohibición antigua de esa formulación.'),
(14,'C','canon/lore/el-silente.md','Culto, fundador y filosofía; emboscada en Arco I; no fijar geas como causa única.'),
(15,'S','canon/oneshots/quinto-juramento.md','Preludio cubierto entre resúmenes y cronología; hechos y alternativas separados por revisiones posteriores.'),
(16,'S','canon/arcos/estructura-de-campana.md','Dos trilogías y Aldenor; cinco bloques antiguos preservados como planificación, sin sesiones fijas.'),
(17,'S','canon/plots-y-subplots/arco-i-registro-y-pendientes.md','Suicida incluido entre cinco bajas; S2 real reemplaza preparación, sin revelar Orden/Culto a la party.'),
(18,'C','canon/lore/aurelianos.md','Tres corrientes, antigüedad y calendarios ya integrados con sus límites.'),
(19,'C','canon/lore/romanance.md','Ciudad, población aproximada, gobierno y economía; moneda en documento propio.'),
(20,'C','canon/lore/trasfondos-personajes-jugadores.md','Levit independiente y biblioteca local; no confundir con El Orco Sabio.'),
(21,'S','mundo/mapas/revision-cartografica.md','Mapa posterior y alcance suficiente para esta fase; Biomas no queda validado en bloque.'),
(22,'S','canon/lore/geografia-berk-kelen-khalan.md','Berk y dos lagos resueltos; residuos del export antiguo no justifican borrar el JSON actual.'),
(23,'T','canon/lore/geografia-berk-kelen-khalan.md','Berk/lagos cubiertos; matices culturales, Lyren y puertos requieren traslado controlado: T02–T04.'),
(24,'C','canon/lore/cosmologia.md','Nombres astrales y simbolismo cubiertos; ampliación no necesaria ahora.'),
(25,'S','canon/pnjs/pnjs-principales.md','Alcalde, llegada, conocimientos y visión simbólica del Quinto Juramento precisados.'),
(26,'C','canon/pnjs/pnjs-principales.md','Kharag y Gran Farol; Alba +1 en puente de Spriggan; no último erudito de la Orden.'),
(27,'S','canon/pnjs/anexo-mecanico-pnjs.md','Deren nivel 16, INT 20 confirmados; ficha baja solo antecedente.'),
(28,'S','canon/pnjs/pnjs-principales.md','Elfo/subraza Semielfo; Linaje del Lago exclusivo de Aldren convive con Erudito. Sellos según aclaraciones.'),
(29,'C','canon/pnjs/pnjs-principales.md','Batai, Tömörbaatar, Temay y Ethen; encabezado no fuerza todos los niveles a 16–20.'),
(30,'S','canon/pnjs/forja-mercadeo-y-pociones.md','Rocío: +1d4 a Medicina/Supervivencia/conjuro curativo, una hora/un uso, 7 días/25 PO, receta.'),
(31,'S','canon/lore/gremios.md','Nueve fichas conservadas; funcional 0.1 aprobada para mesa el 19/10; no sigue como borrador sin revisar.'),
(32,'S','canon/lore/trasfondos-personajes-jugadores.md','Renombres y trayectorias cubiertos; Jantry, Elián y Spriggan precisados después.'),
(33,'C','canon/lore/trasfondos-personajes-jugadores.md','Aethragar, Hermandad y religión local conservados.'),
(34,'C','canon/lore/trasfondos-personajes-jugadores.md','Aetherion, Elián y Aurelion Vaelthar; estado de ruinas, sin población nueva.'),
(35,'C','canon/lore/inteligencias-encarnadas-y-hierofante.md','Especie original y linajes preservados, sin identificar automáticamente con todo aureliano.'),
(36,'S','canon/lore/inteligencias-encarnadas-y-hierofante.md','Base 1.2 preservada; lanzamiento con base de mago 1–9, sin sus trucos; pulido diferido.'),
(37,'S','herramientas-campana/viajes/sistema-universal-v1.3-testing.md','1.3 vigente, etapas flexibles, clima DM, Motivación máx. 5; testing restante explícito.'),
(38,'H','mundo/mapas/revision-cartografica.md','Tablas de métodos antiguos son antecedentes; no se restaura una tabla final ni medidas retiradas.'),
(39,'S','herramientas-campana/mazo-de-drix/bases-testing.md','Siete categorías conservadas; lote de doce automático, Capricho y preguntas fuera del mazo según autor.'),
(40,'S','herramientas-campana/armas-legendarias/README.md','Diseño recuperado y piloto Alba; sin nombre definitivo ni reglas nuevas.'),
(41,'C','herramientas-campana/economia-inmobiliaria.md','Herramienta propia y coste confirmado por el autor; no precios oficiales universales.'),
(42,'T','arte/direccion-visual/2026-10-09/Analisis-y-decisiones-de-arte-Lumenor.md','Referencia posterior disponible; el consolidado visual de chat conserva su cotejo propio pendiente. Sin inspección nueva de imágenes.'),
(43,'H','INDICE_CANON.md','Inventario del 4/10 superado por manifiesto vigente; ausencias no equivalen a pérdida.'),
(44,'S','canon/lore/trasfondos-personajes-jugadores.md','Renombres cubiertos; dos tablas continentales no son duplicados exactos.'),
(45,'S','ESTADO_FASE_1.md','Los veinte desajustes se remiten a decisiones y revisiones posteriores, no se reabren en bloque.'),
(46,'H','ESTADO_FASE_1.md','Propuestas no aprobadas conservan ese carácter salvo cierres posteriores explícitos: escritura y lagos, por ejemplo.'),
(47,'S','ESTADO_FASE_1.md','Pendientes antiguos sustituidos por cierres y desarrollo diferido; no inventar para terminarlos.'),
(48,'C','INDICE_CANON.md','Estructura y manifiesto existentes; categorías sin expansión nueva.'),
(49,'C','AGENTS.md','Trabajo local, sin commits/push; continuidad mediante documentos.'),
(50,'H','RECEPCION_SEIS_CONSOLIDADOS.md','Inventario/procedencia del corte preservados, no validación presente de todos los adjuntos.'),
(51,'H','REVISION_CHATS_FASE_1.md','Límites históricos del acceso a chats y arte preservados; no afirmar recuperar conversaciones completas.'),
(52,'C','AGENTS.md','Consolidar/verificar antes de archivar; no borrar fuentes.'),
(53,'S','ESTADO_FASE_1.md','Resumen del corte cubierto por documentos actuales con las precisiones anteriores.')]
headings=list(re.finditer(r'^# (\d+)\. (.+)$',sources[0].read_text(encoding='utf-8-sig'),re.M))
assert len(headings)==53 and len(rows)==53
titlemap={int(m.group(1)):m.group(2) for m in headings}

report='''# Cotejo de los dos compilados generales — 2026-10-19

**Versión:** 1.0 · **Estado:** COTEJO DOCUMENTAL REALIZADO; TRASLADOS PUNTUALES Y COBERTURA DE FUENTES MIXTAS PENDIENTES. No habilita archivar en bloque los compilados.

## Resultado

Se revisó la síntesis de 53 apartados del consolidado general, la síntesis inicial de 12 apartados y el anexo de 18 transcripciones del snapshot de canon y decisiones. El alcance son **estos dos archivos**, no todos los chats originales ni todos los consolidadores temáticos recibidos.

El núcleo y las correcciones principales están recogidos en los destinos actuales. Hay matices editoriales y culturales todavía sin traslado temático completo, localizados más abajo. Varias aparentes contradicciones de estos cortes ya fueron resueltas expresamente por el autor: no se piden otra vez esas decisiones. La conservación de una copia histórica no se confunde con su incorporación al canon activo.

**Las dos fuentes quedan intactas en `data/`**, con sus huellas registradas. No se archivan fuentes, no se cambian reglas ni se desarrolla geografía o lore por esta revisión. La igualdad de transcripciones se comprobó normalizando saltos de línea y recortando espacios exteriores; no se afirma igualdad binaria entre un bloque incrustado y un archivo independiente.

## Información localizada que requiere traslado o cotejo temático

| ID | Fuente y pasaje | Contenido que conviene conservar | Destino y tratamiento |
|---|---|---|---|
| T01 | Consolidado general, §3 | «Las Crónicas de Rheem» como título principal y «El Ciclo de Romanance» como subtítulo; convención `Las Crónicas de Rheem — [Nombre de la aventura]`; no imponer por ahora «Volumen I» a crónicas aisladas. | README o convenciones editoriales existentes. El título general está cubierto, estas convenciones no aparecen completas en su entrada actual. Traslado documental, sin cambiar títulos ya publicados por inferencia. |
| T02 | Consolidado general, §23, Lyren/Zephyr | Cosmopolitismo, residencia de personas sin magia, hogares privados, protecciones disuasivas no letales y administración cotidiana de residentes/administradores, distinta del Cónclave. | Documento geográfico temático existente o sección de asentamientos, al cotejar Culturas y asentamientos. El nombre ciudad/Cónclave y los límites de su intervención ya están registrados; estos matices no tienen cobertura activa completa. No desarrollar al mago histórico Zephyr. |
| T03 | Consolidado general, §23, Tömörsag/Varsak | Actores posibles de administración práctica: capitanes, casas comerciales, almacenes, caravaneros y trabajadores; muelles, luces, seguridad, tarifas, depósitos y disputas; alcance ligado a la operación portuaria y distinto énfasis de cada puerto. | Cotejo de asentamientos y puertos. La administración no territorial está cerrada; conservar estos matices sin convertir ejemplos de actores en cargos, PNJs o gobiernos nuevos. |
| T04 | Consolidado general, §23, Berk/Halden/Marren | Dirección rural/doméstica y humana de Berk; caza/tala/agricultura, actividades compatibles como resinas, curtido y conservación; orientación humana y medieval general de Halden/Marren. | Cotejo de Culturas y asentamientos. Distinguir dirección aceptada de actividades solo discutidas. No aprobar cifras, once clanes/provincias, gobierno de Azgaar ni sangre aureliana por asociación. Bioma, crecimiento y tamaños ya tienen aclaraciones posteriores. |
| T05 | Consolidado general, §42; snapshot, §9 | Historia de decisiones visuales y reapertura del sepia como estilo global. | La dirección visual posterior existe; el consolidado específico del chat de arte todavía requiere matriz propia. No afirmar que estas dos síntesis cubren todo ese archivo ni hacer auditoría visual nueva. |

Estos puntos siguen preservados en sus fuentes: **no son información perdida**. Este registro impide que se archiven como si su traslado estuviera terminado. El alcance geográfico suficiente decidido por el autor se mantiene; trasladar lo ya escrito no autoriza ampliar ciudades ni completar su historia.

## Matriz de los 53 apartados del consolidado general

**C:** contenido localizado en destinos actuales. **S:** cubierto con decisiones posteriores que superan parte del corte. **T:** traslado o cotejo temático adicional. **H:** historial, propuesta o inventario preservado; no debe promoverse íntegro a canon.

Las etiquetas describen cobertura temática, no equivalencia textual de cada frase. Los destinos principales pueden apoyarse en otros documentos enlazados por ellos.

| § | Tema | Resultado | Destino principal / evidencia | Tratamiento |
|---:|---|---|---|---|
'''
for n,status,dest,note in rows:
    assert (r/dest).exists(),dest
    report+=f'| {n} | {titlemap[n]} | {status} | [{Path(dest).name}](<{dest}>) | {note} |\n'

report+='''
## Síntesis inicial del snapshot de canon y decisiones

| Apartado | Cobertura y precedencia |
|---|---|
| 1. Interpretación | Estados y límites del corte: historial. Rigen AGENTS, manifiesto y decisiones posteriores. |
| 2. Decisiones generales | Modo de trabajo cubierto. La referencia a `sources/` describe el entorno sincronizado de aquel chat, no crea una carpeta ni una restricción nueva en este repo. |
| 3. Núcleo del mundo | Luz, cosmología, Aurelianos, Silente, Juramentos y Orden cubiertos por sus documentos temáticos. Ramas y caída de la Orden según autor; Heredero suspendido. |
| 4. Cambios | Nombres, cronología, gobierno, Cónclave y cambios del anexo oficial localizados; no reintroducir rasgos retirados. Marren/Halden y detalles culturales se conservan para su cotejo temático. |
| 5. PNJs | Fichas actuales, Deren INT 20 y Aldren Semielfo/linaje; Rocío conciliado. «Fuente ausente» sobre forja ya superado por su recuperación. |
| 6. Mesa y arcos | Trasfondos, resúmenes, registro de S2, ramas y estructura de trilogías cubiertos. Preparación antigua no convierte en hechos las revelaciones de la Orden. |
| 7. Geografía | Diagnóstico del export anterior, no mapa vigente. Rigen lagos, Berk, ruta y distancia de Morvath confirmados; no restaurar medidas descartadas. |
| 8. Herramientas | Viajes y Drix vigentes; objetos de legado recuperado, Alba piloto. Economía y forja cubiertas. Su ausencia en aquel chat no significa inexistencia del diseño. |
| 9. Instituciones/escritura/arte | Gremios funcionales aprobados para testeo; escritura base cerrada con lengua completa diferida; revisión visual específica aún T05. |
| 10. P01–P28 | Estado histórico cotejado abajo; no copiar su lista como pendientes actuales. |
| 11. Estructura e inventario | Manifiesto/migraciones posteriores prevalecen. Nombres tentativos de destino no cambian archivos hoy. |
| 12. Cierre | Alcance histórico preservado; no prueba recuperación completa de chats. |

## P01–P28: lectura vigente del registro antiguo

| ID | Resultado actual |
|---|---|
| P01 | Límite de recuperación: vigente como advertencia de procedencia, no canon faltante por inventar. |
| P02–P04 | Jarsag alcalde/~50 años; visión del Quinto Juramento simbólica; fundadores discípulos distintos de Custodios. Resueltos. |
| P05–P07 | Renombres, 434/435, Spriggan, trilogías y fases incorporados. Resueltos en su alcance. |
| P08–P11 | Cinco bajas incluido suicida; Deren INT 20; Semielfo/Linaje de Aldren; orden de Biblia y lectura del puzzle. Resueltos. |
| P12–P13 | Sin panteón desarrollado no excluye dioses disponibles. Kharag/Jarsag conocen la Orden por historia; no son miembros supervivientes. Resueltos. |
| P14–P17 | Berk no destruido, creció; tamaño del hogar de PJ no obliga al mundo; Morvath y lagos precisados; mapa nuevo y alcance suficiente. Los residuos técnicos no autorizan borrados. |
| P18 | Escritura gráfica cerrada para esta fase; lengua completa y Segundo Santuario pendientes de desarrollo, sin inventarlos. |
| P19–P20 | Viajes actual y Rocío actual reemplazan las versiones anteriores. |
| P21–P23 | Forja, Silente y SRD recibidos; no se informa como ausencia vigente. No implica auditoría normativa de cada cita de los compilados. |
| P24 | Autor conserva coste de construcción y referencia temporal; herramienta actual prevalece. |
| P25 | Hierofante: fundamentos y base de lanzamiento acordados; pulido jugable diferido expresamente. |
| P26–P28 | Jantry/429 D.R., edades y viaje; Temay nivel 10; alcance de extinción de ramas y Guardián precisados. Resueltos en su alcance. |

## Anexo: transcripciones contrastadas

**18 bloques; 14 equivalentes al normalizar saltos de línea y espacios exteriores, 4 con diferencias.** La coincidencia prueba conservación independiente de la fuente, no que toda ella sea canon activo. Algunas de esas fuentes siguen esperando su cotejo propio.

| Bloque | Línea del snapshot | Copia localizada | Comparación / tratamiento |
|---|---:|---|---|
'''
notes={
'Plots_y_Arcos_Arco_I_Aurelianos.md':'Diferente: corte post-S1/pre-S2 frente a fuente con S2 y Viajes integrados. Conserva alternativas de preparación y ficha vieja de Deren. Hechos rigen por el registro jugado; falta cotejo completo de plots antes de archivar.',
'Sistema Universal de Viajes para D&D 5.5e — Versión 1.1(1).md':'Diferente por formato e índice ampliado: las adiciones detectadas son entradas de índice/separadores; no añade cuerpo mecánico respecto de la fuente 1.2 conservada. Rige testing actual.',
'Tabla_Viaje_Continental_Romanance (2).md':'Variante de rutas: mismo cuerpo que la tabla local salvo la nota posterior de corrección. No se transforma en tabla vigente por su rótulo final.',
'Tabla_Viaje_Continental_Romanance.md':'Variante por coordenadas/línea recta, distinta de rutas. Conservada dentro del snapshot; no duplicado exacto ni medición actual. No se extraen cifras antiguas a un nuevo documento.'}
for b in blocks:
    match=b['match']
    assert match and (r/match).exists()
    note='Equivalente con normalización; fuente independiente preservada.' if b['identical_after_trim_and_newlines'] else notes[b['source_name']]
    report+=f"| {b['source_name']} | {b['line_start']} | [{Path(match).name}](<{match}>) | {note} |\n"
report+='''
## Qué no se da por terminado

- T01–T04 requieren traslado documental controlado; T05, cotejo del consolidado visual específico.
- Los dos compilados de plots/sesiones y las fuentes mixtas de culturas/biomas/tabla conservan su revisión temática propia. La igualdad de una copia no basta para archivarlas.
- Los pasajes inseguros de la transcripción de audio y los adjuntos no quedan revisados por este cotejo.
- El diseño futuro de lengua, especie/clase, Bastiones, santuarios, objetos o dioses no es requisito para cerrar esta auditoría.

No se encontró una contradicción sustantiva nueva que exija decidir otra vez los cierres del autor. Las alternativas antiguas no elegidas siguen como preparación o propuesta, sin seleccionar una por inferencia. Los traslados localizados y las fuentes mixtas impiden declarar cobertura activa total o archivar estos dos archivos todavía.

[Evidencia de fuentes y comparaciones](./_archivo/fuentes-historicas/cotejo-compilados-2026-10-19/verificacion.json). Fuentes intactas, sin movimientos, commits ni push.
'''
reportpath=r/'REVISION_COMPILADOS_GENERALES_2026-10-19.md'
reportpath.write_text(report,encoding='utf-8')
evidence_dir=r/'_archivo/fuentes-historicas/cotejo-compilados-2026-10-19'
evidence_dir.mkdir(parents=True,exist_ok=True)
evidence={'scope':'Dos compilados generales; síntesis de 53 y 12 apartados y 18 transcripciones. No auditoría completa de fuentes mixtas ni chats originales.','sources':source_checks,'sections':[{'number':n,'title':titlemap[n],'status':s,'destination':d,'treatment':note} for n,s,d,note in rows],'embedded_blocks':blocks,'normalization':'CRLF a LF; strip exterior. No igualdad binaria con bloques incrustados.','pending_transfers':['T01','T02','T03','T04','T05'],'moved_files':0,'canon_changed':False}

# Registrar el cotejo realizado, sin eliminar los pendientes que realmente quedan.
for name,old,new in [('INDICE_CANON.md','1.112','1.113'),('PLAN_MIGRACION_FASE_1.md','1.101','1.102'),('ESTADO_FASE_1.md','1.5','1.6')]:
    p=r/name
    t=p.read_text(encoding='utf-8-sig')
    assert old in t[:500]
    t=t.replace(old,new,1)
    if name=='ESTADO_FASE_1.md':
        t=t.replace('1. Cotejar la cobertura de los compilados grandes de chats y fuentes mixtas de plots, geografía y herramientas antes de archivarlos; no se marca todo `data/` como reemplazado.','1. Cotejo de los dos compilados generales realizado: 53 apartados, síntesis de 12 y 18 transcripciones. Completar traslados T01–T04 y cotejo visual T05; después continuar la cobertura propia de plots y fuentes mixtas. No archivar en bloque ni marcar todo `data/` como reemplazado.',1)
    t+='\n\n## Cotejo de compilados generales — 2026-10-19\n\n'
    t+='[Informe de cobertura](./REVISION_COMPILADOS_GENERALES_2026-10-19.md), v1.0: cotejados los dos cortes generales del 4/10. Matriz de 53 temas, síntesis del snapshot y sus 18 transcripciones (14 equivalentes con normalización, cuatro variantes explicadas). Se registran cierres posteriores sin reabrirlos.\n\n'
    t+='Las dos fuentes permanecen intactas en `data/archivos md/`. Estado: **CANON EN CONSOLIDACIÓN como fuentes de cotejo**, no autoridades que desplacen decisiones posteriores. T01–T04 localizan convenciones editoriales y matices culturales sin traslado activo completo; T05 remite al cotejo visual propio. No se declara cobertura total, no se archivan compilados ni se amplía geografía. La revisión temática de plots y otras fuentes mixtas sigue pendiente.\n'
    p.write_text(t,encoding='utf-8')

assert all(hashlib.sha256((r/s['path']).read_bytes()).hexdigest()==s['sha256'] for s in source_checks)
missing=[]; count=0
for p in [reportpath]+[r/n for n in ['INDICE_CANON.md','PLAN_MIGRACION_FASE_1.md','ESTADO_FASE_1.md']]:
    for m in re.finditer(r'\[[^\]\n]*\]\(\s*(?:<([^>]+)>|([^\s)]+))\s*\)',p.read_text(encoding='utf-8')):
        target=m.group(1) or m.group(2)
        if re.match(r'^[A-Za-z][A-Za-z0-9+.-]*:',target) or target.startswith('#'):continue
        target=unquote(target.split('#')[0].split('?')[0]);count+=1
        if not (p.parent/target).resolve().exists(): missing.append((p.name,target))
# La evidencia se escribe después del chequeo; su enlace se resuelve por el archivo que se está generando.
missing=[x for x in missing if x[1]!='./_archivo/fuentes-historicas/cotejo-compilados-2026-10-19/verificacion.json']
assert not missing,missing
evidence['verification']={'source_hashes_unchanged':True,'local_links_checked':count,'missing':missing}
(evidence_dir/'verificacion.json').write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'general_sections':len(rows),'snapshot_synthesis_sections':12,'embedded_blocks':len(blocks),'equivalent_blocks':14,'pending_transfer_ids':evidence['pending_transfers'],'source_hashes_unchanged':True,'links_checked':count,'missing':missing},ensure_ascii=False))
