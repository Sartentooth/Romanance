# Plan de migración — Fase 1

**Proyecto:** Las Crónicas de Rheem — El ciclo de Romanance.
**Fecha:** 2026-10-31 (Buenos Aires). **Versión del informe:** 1.111. **Estado:** CANON EN CONSOLIDACIÓN — ejecución parcial autorizada.

## Alcance geográfico de Fase 1 — decisión del autor, 2026-10-10

**Actualización operativa del 2026-10-12:** hoja de viaje v0.2 simplificada tras feedback, con v0.1 preservada. Registro del playtesting revisado a v0.2; Drix conserva efectos, registra uso urbano sin impacto y criterio visual propuesto para Extraordinarias. Idea de cartas para ciudades guardada en `ideas-nuevas/` para más adelante. Véase el cierre correspondiente de `INDICE_CANON.md` v1.99. Esta actualización no mueve ni archiva fuentes.

La geografía y el mapa existentes son suficientes para esta fase. No se amplían ahora ciudades, culturas, rutas ni variantes para completar el mundo por adelantado. Las ubicaciones y decisiones ya confirmadas se conservan; los detalles aún no desarrollados no bloquean la consolidación ni la limpieza documental.

El mapa ofrece la información mínima necesaria para elegir destinos y explorar. El desarrollo se realiza cuando resulte útil para la campaña, con coherencia histórica y narrativa. Pueden incorporarse pueblos, aldeas y otros elementos durante el recorrido; se reserva espacio para aportes de los jugadores. Esta apertura no convierte ideas futuras en hechos del canon ni autoriza al asistente a inventar contenido por su cuenta.

Los cotejos geográficos adicionales y la ampliación de culturas/asentamientos se difieren hasta que sean necesarios. Esto no valida automáticamente cifras o residuos de Azgaar, ni borra contradicciones conocidas: se mantienen señaladas sin exigir resolverlas para esta fase. El JSON y el archivo .map permanecen sin cambios.


Este informe propone destinos; no ejecuta la migración ni declara cerrado el canon en conflicto. Las instrucciones del autor en esta sesión prevalecen sobre las fuentes antiguas. Las contradicciones no resueltas detienen la consolidación de los pasajes afectados. No se eligió una solución narrativa o mecánica por inferencia.

**Ejecución autorizada posterior:** [CONSOLIDACION_TANDA_1.md](./CONSOLIDACION_TANDA_1.md) registra los cuatro destinos ya creados para Romanance/PNJs, la matriz de preservación y las decisiones aplicadas. Las tablas siguientes conservan el plan de la auditoría original; fuentes e imágenes no se movieron. Los pasajes C abiertos siguen detenidos.

**Ampliación tras revisar chats:** [REVISION_CHATS_FASE_1.md](./REVISION_CHATS_FASE_1.md) registra CH01–CH12 con procedencia. El diseño de armas existe y Alba de Hierro es su caso piloto por elección expresa; la afirmación contraria del snapshot es histórica y no rige este diagnóstico. Las fuentes antiguas ausentes fueron consolidadas previamente, según aclaración del autor: no se presume pérdida. Las respuestas y adjuntos no recuperados siguen marcados como límites, sin reconstrucción inventada.

## Estado inicial y alcance

**Recepción posterior:** los seis consolidados nuevos están inventariados con sus destinos y límites en [RECEPCION_SEIS_CONSOLIDADOS.md](./RECEPCION_SEIS_CONSOLIDADOS.md). Esa matriz amplía este plan, sin ejecutar movimientos. Las fuentes se conservan; SC01–SC08 registran desajustes entre los nuevos cortes y la evidencia anterior.

- `git status --short --branch`: `## main...origin/main` y `?? data/`. No se creó ni cambió de rama porque había archivos locales sin seguimiento. No hubo commits, staging ni push.
- Inventario inicial: **412 archivos** fuera de `.git`: 47 Markdown, 1 JSON, 362 archivos de arte (incluye SVG), 1 LICENSE y 1 `.gitignore`. De los Markdown, 27 son fuentes del proyecto en `data/archivos md/`, 19 pertenecen al paquete SRD y 1 es el README raíz.
- Se revisaron las fuentes Markdown de Romanance, las transcripciones y síntesis del snapshot, la estructura del JSON, sus asentamientos, biomas, lagos, estados y rutas. Del SRD se inventariaron todos los archivos y se consultaron documentación y pasajes pertinentes; esto no es una auditoría completa de reglas ni una certificación de su conversión.
- Las imágenes y el SVG se inventariaron por ruta, tamaño y fecha. No se abrieron, modificaron, movieron ni evaluaron visualmente. Los sufijos `v1/v2/v3` no prueban obsolescencia.
- No se encontró `AGENTS.md` en el repositorio ni en sus directorios ascendentes consultados. La mención de `sources/` y de un AGENTS en el snapshot corresponde a otro entorno: esos archivos/carpetas no están aquí.
- Las fuentes existentes siguen en sus rutas originales. Se creó únicamente documentación operativa e infraestructura de carpetas aprobada.

El [inventario inicial](./_archivo/fuentes-historicas/auditoria-2026-10-04/inventario-inicial.csv) registra todos los archivos existentes antes de esta auditoría. Incluye SHA-256 de los 50 archivos de texto/JSON y solo metadatos del arte. Los documentos de auditoría en `_archivo/` no son fuentes antiguas ya migradas.

**Verificación final:** [412 archivos comprobados, cero diferencias](./_archivo/fuentes-historicas/auditoria-2026-10-04/verificacion-integridad.csv): mismos tamaños/fechas y mismos SHA-256 para documentos. La [extracción cartográfica](./_archivo/fuentes-historicas/auditoria-2026-10-04/evidencia-azgaar.json) permite revisar las observaciones por IDs sin editar el mapa original.

## Estructura y destinos

Se prepararon `canon/{lore,pnjs,plots-y-subplots,arcos,oneshots,arte}`, `herramientas-campana/{viajes,mazo-de-drix,armas-legendarias}`, `mundo/{mapas,azgaar}` y `_archivo/{canon-obsoleto,borradores,fuentes-historicas}`. Las carpetas vacías no quedan registradas en Git hasta contener archivos; no se agregaron placeholders de lore.

En la tabla, **D/** significa `data/archivos md/`. Los nombres abreviados conservan exactamente el nombre del archivo fuente mostrado. **Conservar** implica una futura copia de contenido verificado al destino, seguida de archivo de la fuente de importación; no una edición inmediata de la fuente. **Consolidar** requiere contrastar cada sección. **Archivar** es siempre posterior a crear y verificar el reemplazo.

| Archivo actual | Destino activo propuesto / reemplazo nuevo | Tratamiento y archivo histórico propuesto | Contradicciones / límites |
|---|---|---|---|
| `README.md` | Misma ruta | Conservar; enlazar manifiesto e informe en una edición posterior | Hoy solo dice «Estructurar proyecto con SRD 5.5 como base»; no reemplazado en esta auditoría |
| D/`Biblia_de_Romanance_Canon_Base.md` | `canon/lore/canon-base.md`, con remisiones a ciudad, PNJs, trasfondos y economía | Consolidar por secciones; original completo → `_archivo/fuentes-historicas/Biblia_de_Romanance_Canon_Base.md` | R01–R03; C01, C02, C04, C05, C07; no archivar por completo como si todo fuera obsoleto |
| D/`Romanance_Historia_y_Descripcion.md` | `canon/lore/romanance.md` | Consolidar con bloque urbano de Biblia; fuente → `_archivo/canon-obsoleto/` con mismo nombre, tras verificación | R02–R03; mantener texto para jugadores separado de secretos |
| D/`PNJs_Principales_Romanance.md` | `canon/pnjs/pnjs-principales.md` | Consolidar con anexos; fuente → `_archivo/fuentes-historicas/` | C01, C06, C08, C09; Aldren tiene ajuste explícito a Semielfo (R04) |
| D/`Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md` | Sección Aldren en `canon/pnjs/pnjs-principales.md`, con procedencia fundacional | Consolidar; fuente → `_archivo/fuentes-historicas/` | C06, C11: origen/residencia por armonizar; no diseñar ciudad, bastón ni laboratorio |
| D/`ANEXO_Morvath_y_notas_modulo_1-2..md` | `canon/pnjs/morvath.md`; resultado jugado → `canon/oneshots/preludio.md`; opciones de módulo → `_archivo/borradores/morvath-notas-de-modulo.md` | Separar hechos, ficha y opciones sin iniciar publicación; fuente íntegra → `_archivo/fuentes-historicas/` | No convertir los cuatro finales posibles en cuatro hechos; conservar ritual exacto y bendición documentada |
| D/`Anexo_Homebrew_PNJs_Romanance.md` | `canon/pnjs/anexo-mecanico-pnjs.md` | Consolidar remisiones; fuente → `_archivo/fuentes-historicas/` | C06, C08, C09, C17; pendientes de forja/mercadeo desactualizados (R05) |
| D/`Reglas_Forja_Mercadeo_Pociones.md` | `canon/pnjs/forja-mercadeo-y-pociones.md` | Conservar reglas propias con enlaces al anexo; fuente → `_archivo/fuentes-historicas/` | C08; excepción al SRD en documento propio, sin modificar el paquete externo |
| D/`Anexo_Oficial_Romanance_Inteligencias_Hierofante.md` | `canon/lore/inteligencias-encarnadas-y-hierofante.md` | Conservar v1.2; fuente → `_archivo/fuentes-historicas/` tras cotejo | Fundamentos centrales protegidos; C18 son huecos por registrar, no completar |
| D/`Hierofante de la Luz.md` | Reemplazado por el anexo anterior en su destino | Candidato explícito a `_archivo/canon-obsoleto/Hierofante de la Luz.md` | Historial v1.1–1.2 declara reemplazo; conservar rasgos retirados solo históricamente |
| D/`Anexo_Aureliano_Romanance.md` | `canon/lore/aurelianos.md` | Conservar/consolidar con Biblia; fuente → `_archivo/fuentes-historicas/` | C04 resuelto y consolidado parcialmente en canon/lore/juramentos.md con numeración de Biblia aprobada por el autor. Resto del anexo consolidado en Aurelianos v1.0 local; origen sin cerrar, ramas según autor, gramática abierta. Fuente intacta y sin mover |
| D/`El_Silente_Canon_Romanance-2.md` | `canon/lore/el-silente.md` | Conservar v1.0, reparar referencias desde otros documentos; fuente → `_archivo/fuentes-historicas/` | Reemplazo explícito de stub/notas ausentes; sufijo `-2` no es versión 2 |
| D/`Cosmologia_Lumenor.md` | `canon/lore/cosmologia.md` | Ejecución parcial: destino v1.0 creado con contenido cosmológico y sección de la Fuente de la Biblia; fuente intacta, archivo histórico posterior a verificación | C05 resuelto: sin panteón propio desarrollado; deidades de D&D disponibles; verdad filosófica, no dios |
| D/`Culturas_y_Asentamientos_Terenor_Aldenor.md` | `canon/lore/culturas-y-asentamientos.md` | Consolidar v1.2 con mapa y trasfondos; fuente → `_archivo/fuentes-historicas/` | C10–C13; no transformar estados generados en canon automáticamente |
| D/`Biomas_Continentales_Romanance.md` | `canon/lore/geografia.md`; mediciones → `mundo/mapas/revision-cartografica.md` | Consolidar; fuente → `_archivo/fuentes-historicas/` | R01; C10, C13–C15; rótulo «canon cerrado» subordinado a geografía pendiente |
| D/`Tabla_Viaje_Continental_Romanance.md` | `herramientas-campana/viajes/referencia-continental.md`; evidencia → `mundo/mapas/revision-cartografica.md` | Consolidar métodos; fuente → `_archivo/fuentes-historicas/` | C14–C16; distinguir croquis histórico, ruta terrestre y trayecto marítimo |
| D/`trasfondos_personajes_romanance.md` | `canon/lore/trasfondos-personajes-jugadores.md` | Conservar v1.6; fuente → `_archivo/fuentes-historicas/` | R01; C03, C10–C12, C16. Son PJs: no inventar categoría ni clasificarlos como PNJs |
| D/`Historia_Jantry_Emberflame.md` | `canon/lore/jantry-relato-de-trasfondo.md`, remisión desde trasfondos | Conservar relato completo en primera persona; fuente → `_archivo/fuentes-historicas/` | C12, C16; no descartar detalles ausentes de la síntesis |
| D/`CRÓNICAS DE ROMANANCE.md` | `canon/oneshots/preludio.md` y `canon/arcos/estructura-de-campana.md` | Separar registro jugado y plan; original íntegro → `_archivo/fuentes-historicas/` | R01; C02, C07, C15 |
| D/`Plots_y_Arcos_Arco_I_Aurelianos.md` | `canon/plots-y-subplots/arco-i-registro-y-pendientes.md` y `canon/arcos/arco-i.md` | Separar hechos, preparación y dirección futura; fuente → `_archivo/fuentes-historicas/` | R01; C01–C03, C07, C14–C15, C19; preservar pasajes nuevos ausentes del snapshot |
| D/`Gremios_de_Romanance.md` | `canon/lore/gremios.md` (existencia institucional respaldada); reglamento → `_archivo/borradores/gremios-reglamento.md` | Separar estado de cada bloque; original → `_archivo/fuentes-historicas/` | Se declara borrador; no aprobar alícuotas, niveles o reglamentos por organización |
| D/`Moneda_de_romanance_la_luz.md` | `canon/lore/moneda-la-luz.md` | Conservar v1.0 y equivalencias; fuente → `_archivo/fuentes-historicas/` | R06: equivalencias ahora disponibles; no inferir aprobación visual del arte |
| D/`Alfabeto_Aureliano.md` | `canon/lore/alfabeto-aureliano.md` | Conservar v1.0; fuente → `_archivo/fuentes-historicas/`; lámina queda referenciada en ruta actual hasta revisión de arte | R07; sustitución del español no equivale a lengua con gramática terminada |
| D/`Sistema Universal de Viajes para D&D 5.5e — Versión 1.2.md` | `herramientas-campana/viajes/sistema-universal-v1.2-testing.md` | Conservar diseño, limpiar formato/versiones sin rediseño; fuente → `_archivo/fuentes-historicas/` | C19–C20; encabezado 1.1, cuerpo/estado 1.2 Testing; dependencia de Drix y mapa |
| D/`mazo_de_drix.md` | `herramientas-campana/mazo-de-drix/mazo-de-drix-v0.1-testing.md` | Conservar diseño y registrar principio UX actual; fuente → `_archivo/fuentes-historicas/` | R08; C19; no crear nuevas cartas ni usar poker/Deck of Many Things |
| D/`Economia_inmobiliaria_Romanance.md` | [herramientas-campana/economia-inmobiliaria.md](./herramientas-campana/economia-inmobiliaria.md) | Consolidado activo v1.0 creado; original preservado sin mover | C21 resuelto por el autor. Valores de referencia conservados; regla porcentual sustituida por aclaración sobre igualdad de coste y tiempo de construcción |
| D/`instrucciones-proyecto.md` | `_archivo/fuentes-historicas/instrucciones-proyecto.md` | Archivar como instrucciones de publicación futura; contexto vigente → manifiesto operativo | No iniciar módulos/PDF por iniciativa propia |
| D/`Romanance_Consolidacion_Canon_y_Decisiones_2026-10-04.md` | `_archivo/fuentes-historicas/Romanance_Consolidacion_Canon_y_Decisiones_2026-10-04.md` | Preservar snapshot completo; diagnóstico vigente → este plan y `INDICE_CANON.md` | No usar síntesis desactualizada como reemplazo de todo el repositorio |
| `data/Json del mapa de Azgaar/Mundo Sebas Full 2026-10-09-18-07.json` | `mundo/azgaar/Mundo Sebas Full 2026-10-09-18-07.json` | Conservar la última exportación disponible; por instrucción posterior del autor no guardar mapas anteriores | C10, C13–C15; no editar JSON; propuesta de limpieza separada |
| D/`dnd-5e-srd-markdown-master/` (19 MD + LICENSE + `.gitignore`, incluidos `.github/ISSUE_TEMPLATE/`) | `herramientas-campana/referencia-srd-5.2.1/` manteniendo árbol interno | Conservar paquete íntegro de referencia externa; importación → `_archivo/fuentes-historicas/` tras verificar | No es lore; conservar procedencia/licencia; no inyectar reglas propias en SRD |
| `arte/continentes/*` y `arte/romanance/Mapa Romanance.png` | `mundo/mapas/` conservando nombres y procedencia | Conservar; **solo propuesta de referencias**, no ejecutar traslado | Revisión visual y versión preferida pendientes |
| Resto de `arte/*` (incluye `referencias/`, objetos, escenas y variantes) | `canon/arte/` manteniendo subcarpetas; aprobación individual pendiente | Conservar; **solo propuesta de referencias**, no ejecutar traslado | Referencias visuales no se vuelven arte canónico aprobado por ubicación |
| D/`Alfabeto_Aureliano.svg`, `Alfabeto_Aureliano_preview.png`, `CL concepto grupo de choque.png` | `canon/arte/alfabeto/` (dos primeros), `canon/arte/referencias/` (tercero) | Conservar; **solo propuesta**, archivos sin abrir | Mantener vínculos de lámina/preview; concepto de choque sin atribución canónica inferida |

Para los archivos de arte, el inventario inicial es la lista individual completa; `*` en esta tabla describe un grupo, no autoriza reemplazos ni archivos eliminados.

## Correcciones respaldadas: no requieren elegir lore

| ID | Decisión / evidencia | Aplicación propuesta |
|---|---|---|
| R01 | Autor: Preludio 434, campaña 435, Halden reemplaza Lanre. Trasfondos v1.6 también declara Corwin/Selia/Wren en reemplazo de Kvothe/Denna/Auri | Aplicar nombres actuales en documentos activos; conservar nomenclatura original en históricos con equivalencias; no convertir el año de una escena antigua a 435 automáticamente |
| R02 | Autor: Jarsag es Alcalde, no alcaide, llegada hace ~50 años. Biblia:77,220 y ciudad:18 retienen texto antiguo | Corregir cargo y «un siglo» al consolidar; no fijar por inferencia nueva fecha de llegada o de nombramiento |
| R03 | Autor: gobierno por acuerdos; Levit independiente; Lyren ciudad/Zephyr Cónclave; Krâthor Goliath; puertos con administración práctica; Aetherion ruinas | Describir esas decisiones sin etiquetas políticas nuevas; Zephyr histórico solo anecdótico; no aprobar gobernantes/órganos de puertos que siguen como alternativas |
| R04 | PNJs:230 declara «Elfo → Subraza Semielfo» y :234 lo aplica; coincide con canon fundacional | Actualizar encabezado residual de Aldren a Semielfo. El snapshot lo presentaba como conflicto sin resolver; sus propias transcripciones contienen el ajuste |
| R05 | `Reglas_Forja_Mercadeo_Pociones.md` ahora presente; PNJs:282 remite a ese cierre | Pendientes de forja/mercadeo del anexo y falta de fuente del snapshot están desactualizados. Integrar las reglas disponibles sin rediseñarlas |
| R06 | Moneda v1.0 declara fusión y equivalencias: Aurora=5 cobres, Zenith=5 platas, Ocaso=5 oros | La ausencia de equivalencias declarada en el snapshot está desactualizada; conservar las de esta fuente y sus conversiones internas |
| R07 | Alfabeto v1.0 aprobado ahora presente, junto con lámina/preview | Snapshot «alfabeto sin fuente» y pendientes de escritura de Arco I requieren actualización. Fonética/gramática continúan separadas y abiertas |
| R08 | Autor: mazo propio, mayoría de cartas autosuficientes; algunas pueden derivar a tablas | Actualizar «no requiere tablas» sin quitar la excepción ni inventar contenido |
| R09 | Autor: Port Ersag y Licove no canon; JSON `burgs[i=9/16].removed=true` | Mantener excluidos del canon activo; no borrar registros del JSON. Ruta `Lanrean path` aún conserva nombre antiguo |

## Contradicciones y pendientes que detienen la consolidación afectada

Las referencias `archivo:línea` son evidencias locales, relativas a D/ salvo JSON. Una pregunta en esta tabla es una decisión pendiente para el autor; no fue respondida por esta auditoría.

| ID | Evidencia / diferencia | Decisión o información faltante |
|---|---|---|
| C01 | Deren en PNJs:192–201: nivel 16, Escriba, INT 20/SAB 18, PG 160/competencia+5; Arco I:192–198 y Biblia:535–551: Sabio, INT 18/SAB 16, PG 36/+2 | Reemplazo expreso en consolidados general §27 y plots §§10/17 aplicado en PNJs activo: ficha nivel 16. Compilados originales aún sin editar; mantener caracterización compatible y fuente histórica |
| C02 | Biblia:262–277: tres arcos/nueve sesiones; Crónicas:86–207: cinco grandes arcos; Arco I:88–97: fases y duración abierta | Distinción del bloque Fundadores resuelta el 2026-10-06: discípulos fundaron Romanance; no son los Cinco Custodios. Preservación del sello como propósito oculto. Aplicado en fundadores-de-romanance.md. El autor confirma Fundadores como historia descubierta dentro del Arco I, no arco separado en esta etapa. Flujo de investigación y conocimientos de party/PNJs registrados en canon/arcos/arco-i.md. RESUELTO el 2026-10-10: Preludio, primera trilogía de descubrimientos con cierre previsto en Aldenor y segunda trilogía aún sin desarrollar, de mayor intensidad filosófica. Desenlace del Silente condicionado por la party. Cada arco dura lo necesario; cinco bloques antiguos preservados como lore por expandir. Véase canon/arcos/estructura-de-campana.md |
| C03 | Trasfondos:221–223: Spriggan se reencuentra al comenzar campaña; Arco I:8 lo declara ausente. CH03 recupera regreso unos días antes de que Rheem vuelva del bosque, unos ocho meses después de una visita previa | RESUELTO y aplicado por aclaración posterior del autor: Spriggan participó en Morvath/medallón, no fue a la cordillera; durante el año hasta fiesta 435 alterna Romanance y labor de paladín, busca a Rheem e investiga Alba. Kharag lo llama tras unos ocho meses del proceso, antes del regreso desde la emboscada; Identificar narrado como ritual de casi un día, espada +1 con capas aún inaccesibles. Reencuentro posterior sin participación en emboscada. Referencia activa: cronologia-preludio-campana-i.md y trasfondos v1.1; sin fechas exactas inventadas |
| C04 | Anexo Aureliano:172–220 numera Humildad/Compasión/Verdad/Deber/Custodia; Biblia:160–166 ordena tabla Verdad/Deber/Compasión/Humildad/Custodia | RESUELTO por el autor: prevalece el orden de Biblia, Verdad → Deber → Compasión → Humildad → Custodia. El orden alternativo quedó del contexto de valores en un puzzle; ambas progresiones culminan en Custodia. Se permite mencionar posible interpretación de fundadores sobre base aureliana, sin inventar historia. Aplicado en canon/lore/juramentos.md; correspondencias y palabras conservadas, fuentes intactas |
| C05 | Cosmología:4,13 dice cosmología sin panteón del mundo; Biblia:43 permite politeísmo, PNJs:80 conserva Cesa, trasfondos:192 dioses de Aethragar | RESUELTO por el autor: no hay panteón propio desarrollado; deidades de D&D de referencia disponibles. La verdad da poder/conocimiento como filosofía y no es un dios. Aplicado en cosmología v1.0 y trasfondos v1.3; fuentes intactas |
| C06 | Anexo PNJs:52 dice que semielfo reemplaza linajes y no elige uno; :56–70 le asigna Linaje del Lago, y PNJs:234 lo usa | RESUELTO parcialmente por el autor: Semielfo es subraza de Elfo de ascendencia humano-élfica, habilitada para PJ y PNJs, coherente con Kelen/Khalan. Linaje del Lago confirmado como diseño a medida para Aldren con libertad de PNJ; se conserva su combinación. Erudito y Linaje del Lago conviven por decisión del autor. RESUELTO su alcance práctico: beneficios exclusivos de Aldren; PJ semielfo recibe Elfo base más Versátil. Clasificación formal del linaje como parte de la subraza sin fijar. En :148 un sello se dice indefinido y luego limitado al próximo descanso antes de nivel 10; :154 lo vuelve indefinido desde nivel 10. El autor confirma que desde nivel 10 dura hasta desactivación por el creador o disipación según la regla escrita. RESUELTO por aclaración final: sellos puntuales sobre objetos y lugares duran hasta activación/desactivación y no se recargan; objetos imbuidos reutilizables recuperan usos por descanso largo, con cantidades según rasgo. No hay renovación diaria. Vía ritual sin gasto de espacios. Perdurabilidad conserva condiciones de desactivación/disipación; no se cambia Sello Perpetuo de nivel 19. |
| C07 | PNJs:30: Jarsag no fundador, visión con cinco fundadores; Biblia:60,198: discípulos/herederos fundaron ciudad. Crónicas:168: «Karagh», último erudito de la Orden | Visión aclarada directamente por el autor en tanda 1: visita a Cámara después de llegar, visión jugada como disparador de investigación; círculo reservado Jarsag/Kharag y un puñado sin identificar. Aplicado en destino activo, sin mecanismo temporal inventado. C07 RESUELTO: el autor confirma Kharag como nombre canónico y retira el título de último erudito de la Orden. Precisión del 2026-10-06: la caída de la Orden ocurre en 100 D.R.; Morvath advirtió del peligro tras estudiar la Lunargenta, no fue escuchado, la Orden se dividió, se convirtió en lich y destruyó la Orden y a los relacionados con el asunto salvo un miembro fugado, para preservar al mundo y ocultar lo que no debía salir a la luz. Decisión posterior prevalece sobre advertencia de §13 del consolidado general. El autor precisa que Kharag y Jarsag conocen la Orden por historia, como erudito y alcalde respectivamente; Jarsag tiene información que los demás no. Aplicado en PNJs v1.12 y registro de la antigua Orden v1.3. Por aclaración posterior del autor, 100 D.R. convive con «hace 300 años» como expresión narrativa aproximada; flexibilidad idiomática registrada en el manifiesto |
| C08 | PNJs:170–175: Rocío de Ethen narrativo sin coste/tiempo fijo; Reglas:47 y Anexo PNJs:177: herboristas, incluida Ethen, 1 día/25 PO | RESUELTO por el autor: Ethen también usa la receta general. Aplicado en ficha, anexo y reglas activos; crafteo SRD salvo excepciones homebrew explícitas. Fuentes antiguas intactas. |
| C09 | PNJs:4 afirma todos nivel 16–20 pero Temay:136 es nivel 10; anexo único de mecánicas omite Estirpe de Forja y Fe de Batai (PNJs:63); Escriba usa repartos +1/+2/+1 y +2/+1/+1 en listados equivalentes | RESUELTO: cabecera corregida por niveles individuales; Estirpe de Forja y Fe recuperado en §3.3 del anexo, sin cambios; el autor confirma para Deren la ficha Int 20 y Des +1 / Int +2 / Sab +1. Anexo corregido, sin recalcular otras estadísticas. |
| C10 | RESUELTO por el autor, 2026-10-09: Berk, celda 2400, biome 13 = bosque de coníferas, distinto de Taiga=9. El ataque causó daños, pero no destruyó el pueblo; actualmente es mucho más grande | Aplicado en [geografía activa](./canon/lore/geografia-berk-kelen-khalan.md) v1.2, trasfondos v1.4 y relato de Jantry v1.2. Corregido el rótulo histórico «aldea destruida»; fuentes originales intactas. No se deducen población exacta ni gobierno de los campos generados de Azgaar |
| C11 | Lagos RESUELTOS por capturas del autor, 2026-10-09: Kelen — Coënquelián; Khalan — Hucatai. Son lagos distintos. JSON local anterior: lago 13 Yeowey junto a Kelen y lago 11 Noniz'ruhn junto a Khalan | Aplicado en [geografía activa](./canon/lore/geografia-berk-kelen-khalan.md); Nombres nuevos cotejados con JSON del 2026-10-09, sin editarlo. Ciudad natal de Aldren sigue sin fijar. Encuentro del Arco I ya resuelto: opción C, cerca de Dramyler Fork / Werhije Serpentine, sobre Varsak Trail; no convertirlo en origen ni fijar Segundo Santuario |
| C12 | CRITERIO RESUELTO por el autor, 2026-10-09: las descripciones de hogares en los trasfondos no fijan obligatoriamente su escala; el autor amplía detalles según el desarrollo del mundo | No tratar «pequeño pueblo» de Halden como obligación de reducirlo ni inventar una evolución histórica. Levit: las estimaciones 600–900 y 923 no son por sí solas contradicción sustantiva. Se conserva la procedencia de las cifras sin aprobar automáticamente datos/gobiernos de Azgaar. Criterio registrado en manifiesto y trasfondos v1.5; rutas/distancias se revisan en C14–C15 |
| C13 | Canon ya resuelto; ajuste técnico pendiente: estado 7 Zephyr mantiene `form=Monarchy` y `formName=Cónclave`. Ruta 10 conserva el nombre obsoleto Lanrean path. Port Ersag/Licove ya están `removed=true`; Aetherion ya es `ruin` | [Lista concreta por entidad/campo](./mundo/mapas/limpieza-propuesta-azgaar.md) creada. No inventar otro gobierno o nombre propio; autor puede ajustar en Azgaar y reemplazar exportaciones. Ningún JSON o `.map` editado |
| C14 | Levit ↔ ruinas de Morvath RESUELTO: **46 km**, confirmados por el autor el 2026-10-09. Las diferencias pequeñas de otros tramos se tratan como redondeos | Aplicado en [revisión cartográfica](./mundo/mapas/revision-cartografica.md), tabla y compilaciones. Por instrucción expresa se reemplazan las medidas anteriores sin conservar copia histórica. JSON y tiempos jugados sin modificar; cotejo restante de la red pendiente |
| C15 | PARCIALMENTE RESUELTO, 2026-10-09: el autor confirma la red Kelen/Khalan → Berk → Marren, conexión hacia Halden y continuación hacia Aetherion; el sendero poco visible existe | Aplicado en [revisión cartográfica v1.4](./mundo/mapas/revision-cartografica.md). El autor confirma que es una misma ruta con nombres distintos por tramo; esa duda queda resuelta. Opciones hacia Aldren precisadas: terrestre directa ~560 km por el autor; combinada vía Tömörsag/Varsak ~282 a pie + 263 en barco + 168 a pie = ~713 km. Camino terrestre entre puertos ~243 km, separado del barco. La party elige; quedan para cotejo otros totales de la red. No se modifica JSON ni se recalcula el viaje de Jantry |
| C16 | Jantry relato:46: viaje a caballo a Levit 3,5 días tras refugio cercano a Berk; tablas sitúan Berk a~3123 km por ruta desde Romanance. Relato:5,24,56: edad 18–19, huida 11, residencia 5 años. CH06: llegada a Levit casi junto a Elián en 429 D.R., seis años antes | RESUELTO por el autor y aplicado en tanda 2: Jantry 17–18 años, llegada 429 D.R.; cinco años anclados al Preludio de 434. Elián 200, llegó unos días antes en 429. Berk en Gran Oeste de Terenor entre Kelen/Khalan/Marren; recorrido a Levit >3000 km. Viaje de 3½ días obsoleto; pudo durar meses sin plazo exacto aprobado. Ruta, etapas, duración exacta y fechas de nacimiento siguen sin fijar |
| C17 | Anexo PNJs:185–187 mantiene pendientes declarados resueltos en Reglas/PNJs; :148 duración del sello contradictoria (ver C06) | Actualizar registro de pendientes, preservar diseño sin rellenar reglas. La afirmación «sin pendientes» de PNJs no cierra problemas documentales encontrados |
| C18 | Anexo central v1.2 no termina de especificar economía de conjuros, CD y varios límites de linajes; Resonancia básica aclara coste ajeno desde nivel 11 pero no lo explicita antes | Registrar huecos mecánicos sin diseñar soluciones; no reintroducir rasgos v1.0 retirados |
| C19 | Viajes alterna Fogata/Fogón, Arco I:171 incluye Vínculo, mazo:89–90 lo excluye del testing; Arco I:170 dice Bosque favorece Guía/Vigía pero Viajes:266 los penaliza+2 | Registrar dependencia de versión y corregir resumen solo con procedimiento explícito de referencia, sin rediseñar herramientas |
| C20 | Viajes:3 dice 1.1, :243/:493 dice 1.2 Testing; :86–89 indica 15–30 días en 5–6 etapas y cada etapa 1–3 días | Consolidado específico §§2/26 identifica 1.1 anterior y secciones 5–9 de 1.2 vigentes para testing, con máximo Motivación pendiente. Duración de etapas sigue abierta (hasta 18 días con 6×3); no cambiarla por inferencia |
| C21 | RESUELTO por el autor, 2026-10-09: conservar tablas como referencias para responder a los jugadores. Coste de referencia igual para comprar y construir; la construcción requiere tiempo y el gasto se amortiza durante ese período | Aplicado en [economía inmobiliaria activa](./herramientas-campana/economia-inmobiliaria.md), v1.0. Importes y tiempos de todas las tablas conservados. No aplicar descuento porcentual automático ni inventar financiación. Fuente completa intacta, sin mover |
| C22 | PNJs:159 usa Fleet of Foot/Mask of the Wild y Círculo Tierra «Bosque»; SRD local describe otros rasgos | Aclaración del autor: diseño casero admitido. Conservado en destino activo, sin tratar diferencia con SRD como error ni rebalancear. Cualquier cambio mecánico requiere decisión específica |
| C23 | PARCIALMENTE RESUELTO, 2026-10-08: aclaración del autor y crónica DOCX de sesión 2 recibida y leída íntegramente; [cotejo S2-01–S2-08](./REVISION_ARCO_I_SESION_2.md) | Hechos expresos en [registro activo](./canon/plots-y-subplots/arco-i-registro-y-pendientes.md). Farol y visión resueltos; familiar pseudodragón y combate corregidos; conversaciones de Spriggan recibidas y consolidadas. Zapatillas quemadas confirmadas e intento de incendiar el bosque impedido. Kharag revela en mesa el nombre de Aldren; no revela la Orden ni la pertenencia del medallón, según precisión final del autor. La party ya sabía que el medallón era de Morvath y lo usó al convertirse en lich. La nota recuperada sobre revelar la Orden en sesión 2 describe un objetivo de diseño que no ocurrió en mesa. Pendientes: detalles de huida, mentira de Pato sobre intrusos, lo revelado exactamente a la party y viaje. No convertir alternativas preparadas en hechos jugados |
| C24 | Arco I:39 registra «5 de 6 cultistas muertos. 1 se suicidó» y :40 que el líder escapó | RESUELTO por el autor: el suicida está incluido entre los cinco muertos; cuatro abatidos, uno muerto mediante Voto de Silencio, solo el Vigía/líder escapó con vida. Seis atacantes en total. Aplicado en cronología activa v1.1; fuentes intactas |

## Duplicados, versiones y fuentes no recuperables por simple movimiento

- No se detectaron duplicados **binarios exactos** entre los 50 archivos de texto/JSON inventariados. No se comparó contenido binario de imágenes: ninguna se declara duplicada por nombre.
- La Biblia contiene núcleo v1.5 **más** ciudad v1.0, PNJs y trasfondos antiguos v1.4, y economía. No es una única versión homogénea; deben compararse los bloques antes de retirar el compilado.
- El snapshot contiene 18 transcripciones con nombres históricos. El [cotejo con fuentes locales](./_archivo/fuentes-historicas/auditoria-2026-10-04/comparacion-snapshot.csv) encuentra 15 coincidencias ignorando espacios y 3 diferencias: Arco I, Viajes y la tabla continental antigua. La transcripción de la tabla `(2)` sí coincide con la tabla local actual. La comparación no sustituye revisión semántica: PNJs local incluye la corrección Semielfo que su síntesis ignoró. No sobreescribir fuentes actuales desde el snapshot.
- `Hierofante de la Luz.md` es obsoleto **por reemplazo declarado**, no por fecha. Anexo v1.2 conserva fundamentos y modifica/retira rasgos expresamente: esas diferencias son historial válido, no pérdidas accidentales.
- Jantry en trasfondos es una síntesis del relato completo; hay detalles solo en el relato (viaje 3,5 días, secuencia de captura/escape). No es un duplicado descartable.
- Silente v1.0 y Moneda v1.0 declaran sustitución de fuentes antiguas no presentes. El autor confirma consolidaciones previas como explicación de esas ausencias. El índice registra los nombres históricos, sin presumir pérdida ni fingir que se recuperaron los DOCX.
- Alfabeto, Moneda, Culturas, Reglas de Forja, Anexo PNJs y Silente amplían la colección usada por el snapshot. Sus afirmaciones de falta de fuentes son diagnósticos históricos.
- Referencias rotas o históricas: `El_Silente_Canon_Romanance.md` tiene fuente local equivalente con sufijo `-2`; `Hierofante_de_la_Luz.md` aparece con espacios en nombre real; Viajes tiene distintos nombres de exportación; `romanance_actualizado.docx` y DOCX de moneda/Morvath no están localmente. Los fragmentos recuperables de chats de diseño ahora se preservan en el archivo histórico enlazado desde la revisión. No crear archivos vacíos simulando contenido no recuperado.
- «Cuatro Estatuas», «Cuatro Juramentos» e Ilvandor aparecen relacionados pero falta precisar límites/títulos de cada escena. No crear sesiones adicionales para hacer encajar los nombres.

## Orden de migración posterior a revisión

1. Revisar el manifiesto y resolver los conflictos necesarios para cada bloque. El resto puede seguir inventariado mientras un bloque permanece pendiente.
2. Crear primero documentos activos conservando versión fuente, alcance (mundo/mesa/herramienta), origen, cambios editoriales explícitos y pendientes.
3. Mantener una matriz sección original → sección de destino, incluyendo detalles no repetidos y alternativas históricas. Comparar contenido y remisiones; para mapa/SRD, cotejar copia byte por byte.
4. Confirmar que los destinos reúnen toda información válida. Solo entonces mover importaciones a `fuentes-historicas`, versiones expresamente reemplazadas a `canon-obsoleto` y opciones no aprobadas a `borradores`.
5. Actualizar `INDICE_CANON.md` con archivo existente, versión nueva, estado real y reemplazos efectivamente ejecutados. Reparar enlaces y revisar Git; commits/push quedan a cargo del autor.

La auditoría inicial no ejecutó movimientos. La tanda 1 posterior creó cuatro documentos y aplicó correcciones explícitas; no archivó fuentes. Geografía y pasajes con C abiertos siguen pendientes. La fase completa de canon cerrado todavía no está alcanzada.

## Incorporación posterior — Crónica de la Fiesta de las Luces

| Archivo actual | Destino / tratamiento | Estado y límite |
|---|---|---|
| PDF entregado desde Downloads | Copia idéntica preservada en [fuentes históricas](<./_archivo/fuentes-historicas/fiesta-luces-2026-10-04/Crónicas Romance parte  la fiesta de las luces.pdf>); original conservado | Consolidado como resumen activo de contexto/cierre/ganadores. PDF completo preservado como fuente, no sustituido por una transcripción recortada. |
| Misma fuente | Destino activo creado: [canon/oneshots/fiesta-de-las-luces.md](./canon/oneshots/fiesta-de-las-luces.md) | FL01–FL07 documentados en [revisión](./REVISION_CRONICA_FIESTA_LUCES.md). El autor resuelve: solo ganadores, puntajes decorativos; Elián a cargo de biblioteca de Levit con Jantry, sin propiedad ni confusión con El Orco Sabio. Aplicado en resumen y trasfondos. |
| Aclaración directa del autor | [Cronología activa](./canon/arcos/cronologia-preludio-campana-i.md), trasfondos v1.1 y remisión en PNJs v1.9 | C03 resuelto. Secuencia de campaña y estudio de Alba incorporados; no rediseñar la herramienta de Objetos de Legado. |

La evidencia visual del PDF se consultó para lectura, sin extraer ni aprobar sus ilustraciones como arte canónico. [Verificación](./_archivo/fuentes-historicas/fiesta-luces-2026-10-04/verificacion.json): copia PDF idéntica y 56 hashes de fuentes originales sin cambios.
## Recepción del Preludio — 2026-10-06

Tres PDF y tres DOCX adicionales, inventariados sin modificar. [Cotejo y propuesta por archivo](./REVISION_PRELUDIO_SEIS_FUENTES.md). Destinos creados: canon/oneshots/cuatro-estatuas.md y canon/oneshots/quinto-juramento.md, ambos v1.0 local. Resúmenes de lo jugado, fuentes completas intactas; versión literal única de tablilla sin fijar. QJ01 resuelto por el autor: el Guardián se identificó como «Aureliano», sin más explicaciones; la party conoce solo la palabra. Aplicado en Arco I v1.2. CE01 RESUELTO por el autor: visión de Cuatro Estatuas con cuatro fundadores; visión del Quinto Juramento con cuatro fundadores y Jarsag como quinta figura, sin hacerlo fundador. Cinco alrededor del altar: cuatro de Rheem y el Guardián renovando el juramento. La formulación «cinco fundadores» queda precisada; no interpretar literalmente las visiones como cronología. Aplicado en Fundadores v1.2, Arco I v1.3 y PNJs v1.14. QJ02 RESUELTO: encuentro final pacífico; dos centinelas previos vencidos; faroles sin errores y sin trampa/golem; no hubo recompensas materiales. Juramento renovado, nichos y leyenda del Heredero; Guardián los teletransportó junto a Cuatro Estatuas. Resumen activo creado en canon/oneshots/quinto-juramento.md v1.0; fuentes intactas. Preparación no equivale a hecho jugado. C23 de sesión 2 actual continúa pendiente.

## Recepción de crónica de sesión 2 — 2026-10-08

Fuente actual: `data/archivos md/cronica arco1 sesión 2_por jugadores.docx`. Se conserva intacta y en su lugar. El [cotejo](./REVISION_ARCO_I_SESION_2.md) registra el destino histórico propuesto; el [registro activo](./canon/plots-y-subplots/arco-i-registro-y-pendientes.md) consolida solo la aclaración expresa del autor. Arco I actualizado a v1.9; registro v1.5, cotejo v1.5 y cronología v1.2. [Puente de Spriggan](./canon/plots-y-subplots/alba-de-hierro-puente-spriggan.md) creado con conversaciones completas preservadas en la fuente histórica. C23 parcialmente resuelto: las ampliaciones de la crónica siguen pendientes y no se ejecuta su traslado al archivo.

## Mapa vigente y referencias — recepción del 2026-10-09

[Informe de recepción](./RECEPCION_MAPA_Y_REFERENCIAS_2026-10-09.md). El autor reemplaza las exportaciones al actualizar el mapa: no restaurar ni archivar el JSON anterior retirado. Referencias actualizadas al JSON vigente; `.map` cotejado en seis secciones coincidentes. Nombres de lagos de C11 cotejados, origen de Aldren todavía sin fijar. Ocho PDF de reglas inventariados y revisados inicialmente; lectura integral de manuales no realizada ni necesaria para esta recepción. Ningún mapa o PDF recibido fue modificado.

## Ideas futuras reservadas por el autor — 2026-10-09

**Estado: PENDIENTE. Fuera del trabajo de desarrollo actual.** Se conservan estas notas sin convertirlas en acontecimientos ni asignarlas a un arco:

- **Posible aventura de exploración de rutas y comercio:** el autor podría hacer jugar una aventura para encontrar mejores rutas de viaje y comerciar. No se diseñan alternativas, encuentros, beneficios comerciales ni reglas por iniciativa propia.
- **Partida pendiente de fundación:** fundar una ciudad hermana de Romanance al otro lado de las cordilleras. Queda para otro momento. No se fija nombre, emplazamiento concreto, participantes ni fecha; tampoco se considera una ciudad ya fundada o un asentamiento existente en el mapa.

## Aurelianos y Silente — ejecución del 2026-10-09

Destinos creados: `canon/lore/aurelianos.md` y `canon/lore/el-silente.md`, v1.0 local. [Cotejo por bloques](./CONSOLIDACION_AURELIANOS_Y_SILENTE.md). Decisiones previas aplicadas; no hay nuevas contradicciones sustantivas pendientes en los pasajes consolidados. Especie/clase y escritura tienen consolidación propia pendiente. Fuentes completas intactas, sin archivar aún.

## Escritura — referencia estética recibida

[Recepción del 2026-10-09](./RECEPCION_ESCRITURA_AURELIANA_2026-10-09.md): el MD vuelve a copiarse sin cambios de contenido; se aporta la imagen ornamental. SC02 deja de bloquear la localización de esta referencia. Se conserva como base estética; prevalece SVG para geometría. Diferencia visible en V registrada, sin editar arte ni mover fuentes. Consolidación documental del alfabeto continúa pendiente.

## Escritura — ejecución del 2026-10-10

Creados `canon/lore/alfabeto-aureliano.md` v1.0 y `canon/arte/escritura-aureliana.md` v1.0: base gráfica aprobada separada del acabado en desarrollo. Tablas conservadas, fuentes sin mover, imagen vinculada y precedencia del SVG aplicada documentalmente. Se preservan propuestas, pendientes e historial de enfoques reemplazados. El léxico ritual no se elimina ni redefine; lengua completa pendiente. No se abre arte adicional ni se altera la imagen. Las filas del plan original quedan como procedencia; estos dos destinos ya existen.

## Escritura — revisión previa al cierre

[Revisión del HTML externo](./REVISION_CIERRE_ESCRITURA_AURELIANA.md) sin editar ni mover. La herramienta no reemplaza las tablas: siete pares desplazados documentados para corrección posterior. El autor difiere mejorar el transliterador; se consulta solo el alcance de coexistencia con léxico ritual para cerrar la consolidación de escritura.

## Escritura — etapa cerrada por el autor

Decisión del 2026-10-10: conservar alfabeto y léxico y diferir lengua hablada/escrita, posible registro ritual, acabado ornamental, TTF y mejora de transliterador. Referencias del autor registradas como dirección futura, sin implementar sonidos o ideogramas. Alfabeto v1.1 y revisión de cierre v1.1; Aurelianos v1.2 enlaza el alcance vigente. No hay decisiones necesarias de escritura que bloqueen pasar al anexo de Inteligencias Encarnadas/Hierofante. Fuentes e imágenes sin editar ni mover.

**Escritura, ampliación del autor del 2026-10-10:** referencia vedalken para nombres/palabras y estilo de expresión breve asentados en Alfabeto v1.2. Sin generar contenido nuevo; desarrollo lingüístico sigue diferido y etapa documental cerrada.

## Inteligencias Encarnadas y Hierofante — ejecución del 2026-10-10

Destino `canon/lore/inteligencias-encarnadas-y-hierofante.md` creado, v1.0 local: texto íntegro literal del Anexo v1.2. [Revisión H01–H09](./REVISION_INTELIGENCIAS_Y_HIEROFANTE.md). C18 abierto; no se completan reglas por inferencia. La versión antigua independiente está explícitamente reemplazada; permanece en su ruta hasta migración verificada. Fuentes sin editar ni mover.

## Hierofante — base provisional y detalles diferidos

Decisión del autor del 2026-10-10: usar progresión de conjuros por nivel del mago 1–9, sin sus trucos, y selección temática acorde a Inteligencias. H01 base elegida; implementación detallada y H02–H09 diferidos a desarrollo futuro por considerarse suficiente lo existente. No bloquean consolidación actual. Anexo activo v1.1 conserva literalmente la fuente y antepone decisión vigente. Fuentes sin editar/mover. Culto como oposición activa y expectativa sobre no intervención directa del Silente registradas en los documentos correspondientes.

## Moneda y gremios — ejecución y análisis del 2026-10-10

Moneda v1.0 consolidada literalmente. Gremios v1.0 registra decisiones del autor: ingreso por encargo y coste, al menos tres rangos provisionales, trabajo/reputación/padrino, multa y expulsión por reincidencia; porcentajes pendientes de aclaración. Minero sin niveles explota Lunargenta y vende en bruto; prohibición histórica reemplazada. Análisis solicitado en `herramientas-campana/gremios/analisis-y-bases.md`, v0.1 EN DESARROLLO, con referencias y recomendaciones no canonizadas. Fuentes intactas; resto del reglamento pendiente, sin movimientos.

**Gremios — remuneración aclarada:** canon v1.1 y análisis v0.2. 10/35/50% para aventureros; pago total al grupo o PJ registrado; mínimo de 1 PP en básico. Análisis anterior condicional de retenciones superado. Restan alcance de rangos, destino del resto y detalles operativos. Ejemplos no son misiones canónicas; fuentes históricas intactas.

**Gremios — administración y crecimiento:** gremios v1.2 y análisis v0.3 registran cliente → gremio → ejecutor, libertad de contratos externos y afiliación sin empleo en el modelo de encargos. Fundación/cargos como ampliación propuesta con autorización local; nombre gran maestre no definitivo. Destino del resto resuelto como administración gremial, sin desglose inventado.

**Gremios — rango resuelto:** acceso al propio rango y menores; infracción solo al superar límite autorizado. Control por carnet/identificación a criterio del DM. Ascenso a solicitud del afiliado con padrino. Actualizado canon v1.3 y análisis v0.4; quedan grupos mixtos y detalles de sanciones.

**Gremios — colaboración autorizada:** avanzado puede incorporar rangos inferiores bajo su responsabilidad; el gremio no responde si algo sale mal. Resuelto ese caso de grupo mixto. Canon v1.4 y análisis v0.5, sin añadir condiciones económicas o sanciones.


**Gremios — crecimiento institucional y Bastiones:** análisis v0.6 documental. Base conceptual aprobada: nivel del gremio representa crecimiento y reputación pública; evaluación cada año de ficción, resolución narrativa y/o d20 opcional, valor base y aportes de PJ frente a un umbral por definir. Ascensos habilitan mejoras y servicios. Adaptación de Bastiones y viviendas personales autorizada como parte del desarrollo; cifras, requisitos y reglas concretas pendientes. No se altera el rango de afiliación ni se asignan niveles a gremios existentes.


**Gremios — oficio y aventuras:** canon v1.5 y bases v0.7. Cada gremio tiene su grupo de aventureros, con admisión por encargo y reglas de rangos. Los requisitos profesionales se conservan para quienes viven del oficio; afiliación voluntaria, con ventajas y responsabilidades. No se exige pertenencia para ejercer una profesión. Se descarta sustituir requisitos profesionales por el encargo de admisión. La distinción incluye al Minero y no elimina el Gremio de Aventureros.


**Gremios — nota para la versión final:** bases v0.8. Guía de ayuda para llevar gremios en partidas de rol, utilizable completa o seleccionando solo lo necesario para cada mesa. Continúa EN DESARROLLO; esta aclaración no completa valores ni reglas pendientes.


## Organización de herramientas — 2026-10-10

Se reutiliza [herramientas-campana](./herramientas-campana/README.md). Se crean fichas de organización v1.0; no reemplazan fuentes, no hay archivos movidos ni desarrollo de software ejecutado.

| Archivo | Versión | Estado | Reemplaza / notas |
|---|---|---|---|
| [Mazo de Drix](./herramientas-campana/mazo-de-drix/README.md) | 1.0 de ficha | EN DESARROLLO | No reemplaza fuentes; registra alcance y dependencias. |
| [Sistema de Viajes](./herramientas-campana/viajes/README.md) | 1.0 de ficha | EN DESARROLLO | No reemplaza fuentes; registra alcance y dependencias. |
| [Sistema de Gremios y Bastiones (mejorados)](./herramientas-campana/gremios/README.md) | 1.0 de ficha | EN DESARROLLO | No reemplaza fuentes; registra alcance y dependencias. |
| [Sistema de escritura](./herramientas-campana/sistema-de-escritura/README.md) | 1.0 de ficha | EN DESARROLLO | No reemplaza fuentes; registra alcance y dependencias. |
| [Aplicaciones web y mobile](./herramientas-campana/aplicaciones-web-y-mobile/README.md) | 1.0 de ficha | PENDIENTE | No reemplaza fuentes; registra alcance y dependencias. |


**C02 resuelto — estructura de campaña:** [estructura vigente](./canon/arcos/estructura-de-campana.md), v1.0 local, CANON EN CONSOLIDACIÓN para desarrollo futuro. Consolida arquitectura de Biblia, Crónicas y decisión del autor; reemplaza el esquema de cinco arcos como planificación vigente y los límites de sesiones, sin eliminar lore. Arco I v1.11. Fuentes intactas, sin archivar todavía.


**Viajes/Drix — aclaraciones del 2026-10-10:** [cotejo y decisiones](./herramientas-campana/viajes/cotejo-expediciones-y-decisiones.md), v1.0 documental, EN DESARROLLO; no reemplaza íntegramente fuentes. SC04 resuelto: Motivación máxima 5 para playtesting. C20 duración resuelta: días según trayecto/transporte, etapas a elección del DM, fogón al cierre. C19: tabla de CD por rol conservada; preguntas fuera del mazo. SC03 Deseo torcido sigue pendiente de texto completo, sin atribución confirmada a 3.5. Folio externo leído; propuestas de adaptación separadas de reglas vigentes. Fichas de Viajes/Drix v1.1. Fuentes sin modificar ni mover.


## Viajes y Drix — revisión autorizada para testing

| Archivo | Versión | Estado | Reemplaza / alcance |
|---|---|---|---|
| [Viajes](<_archivo/fuentes-historicas/viajes-v1.3-2026-10-24/sistema-universal-v1.3-testing.md>) | 1.3 local de testing | EN DESARROLLO | Revisión de trabajo de 1.2: cinco incorporaciones autorizadas, etapas flexibles, Motivación máxima 5 y nombre Drix. Fuente intacta. |
| [Bases Drix](./herramientas-campana/mazo-de-drix/bases-testing.md) | 1.0 documental | EN DESARROLLO | Criterio de problemas resolubles y concepto de Deseo torcido recuperado. Aún no hay cartas individuales diseñadas; ejemplos históricos no son cartas terminadas. |

Fichas de ambos desarrollos v1.2. No se adopta suministros ni se copian reglas externas literalmente. No se movieron fuentes.


**Folio cerrado y precisión de Drix:** cotejo v1.1; utilidad del folio cerrada por el autor, sin nuevas tareas de adaptación. Bases Drix v1.1: efecto de la carta permanece hasta cumplir el deseo; afecta a quien la sacó, no al grupo. Nombre pendiente de reemplazo, Capricho como candidato sin confirmar. Se conserva íntegra la adición del autor al cotejo.


**Nombre de carta confirmado:** Capricho reemplaza a Deseo torcido. Bases Drix v1.2; nombre anterior solo como referencia histórica, sin cambios de efecto.


**Drix — lote solicitado:** [12 cartas](./herramientas-campana/mazo-de-drix/lote-12-cartas-testing.md), v0.1, EN DESARROLLO / propuestas de playtesting. Tres por intensidad; reemplaza el tamaño de treinta para esta prueba. No sustituye fuentes ni constituye hechos del canon. Bases documentales v1.3.


**Drix — revisión del lote v0.2:** doce cartas, tres por intensidad, con efectos automáticos sin pruebas ni tablas, voz burlona y ambientación. Capricho solo muestra su nombre; efecto reservado al DM. Rojas de impacto extremo. Bases v1.4; sustituye el diseño de pruebas y las instrucciones de uso de v0.1 por decisión del autor.


**Revisión de fichas gremiales:** [cotejo de nueve fichas](./canon/lore/revision-fichas-gremios.md), v1.0 documental, CANON EN CONSOLIDACIÓN; no reemplaza las fuentes. Sedes, beneficios y Consejo cotejados con ciudad y PNJs. Acceso ilimitado de Bibliotecarios frente a restricciones pendiente de decisión.


**Bibliotecarios y Eruditos — acceso resuelto:** gremios v1.6, revisión de fichas v1.1. Aventureros presentes, uso de biblioteca sin zonas restringidas y accesos según pase/rango. Puesto interno habilita recursos de fondos generales; no se concede acceso ilimitado ni se fijan permisos detallados. Fuente histórica intacta.


**Consejo — procedimiento confirmado:** gremios v1.7, revisión de fichas v1.2. Consenso primero; mayoría si no se alcanza; resoluciones aprobadas obligatorias para todos los gremios. Sin reglas adicionales de composición, quórum o desempate.


**Atención sanitaria aclarada:** gremios v1.8, revisión de fichas v1.3 y registro del Arco I v1.7. Hospital de la guardia orientado a milicia; Rheem recibió atención excepcional por urgencia y gravedad. Centros asistenciales de clérigos con médicos separados dentro de la ciudad. Sin nombres, ubicaciones ni dependencia gremial inventados.


**Sanadores confirmado:** canon gremios v1.9, revisión v1.4, bases v0.9. Sede frente a El Orco Sabio; reúne a profesionales de los centros asistenciales de clérigos. No tiene aventureros; exige conocimientos de medicina, botica o labores sanitarias. Excepción explícita aplicada al modelo general. Hospital de la guardia permanece separado.


**Pescadores y Navegantes — sedes confirmadas:** gremios v1.10 y revisión v1.5. Se conservan las tres sedes del borrador: río dentro de Romanance, bosque cercano y costa entre las islas del este. Sin precisión geográfica inventada; fuentes intactas.


**Sedes y organización aventurera confirmadas:** gremios v1.11, revisión v1.6, bases v0.10. Seis sedes restantes ratificadas. Gremio de Aventureros engloba a los aventureros asociados a los demás gremios; encargos propios principalmente de exploración, sin superposición. Regla común de carnet excepto Sanadores. Sin nuevas cuotas o permisos inventados.


**Beneficios gremiales consolidados:** canon gremios v1.12 y revisión v1.7. Beneficios de las nueve fichas conservados con separación de vías, acuerdos sin porcentajes inventados, rescate/mediación sin garantía y ruta futura no disponible aún. Fuente histórica intacta; no se declara migrada íntegramente ni se archiva.


**Obligaciones cotejadas:** revisión de fichas v1.8. Cambios ya autorizados identificados (mineral azul y administración de pagos); deberes profesionales compatibles separados de permisos aventureros. Propuesta de registro solo de encargos gremiales y obligaciones restantes pendientes de confirmación; ninguna nueva tasa o sanción aplicada.


**Contratos externos confirmados:** gremios v1.13 y revisión v1.9. Ajenos al gremio, sin registro obligatorio ni comisión gremial. Registro limitado a encargos gestionados por gremios; no se añade retención al pago ya establecido.


**Obligaciones profesionales aprobadas:** gremios v1.14 y revisión v1.10. Incorporadas las obligaciones de los oficios; registro aventurero limitado a encargos gremiales y avisos de seguridad. Importes y detalles operativos diferidos. Sedes, beneficios y obligaciones revisados; cobertura de la fuente pendiente antes de archivarla.


**Cobertura de gremios verificada:** [informe v1.0](./canon/lore/cobertura-fuente-gremios.md). Canon v1.15 incorpora propósitos/requisitos y coordinación antes solo referenciados. Nueve fichas y bloques generales cotejados; sustituciones expresas trazadas, hash de fuente conservado. Original aún sin mover; apto para la migración histórica con actualización de enlaces.


## Cobertura de Biblia y Crónicas

[Revisión v1.0](./REVISION_COBERTURA_BIBLIA_Y_CRONICAS.md), en curso. Se agregan [Luz y filosofía](./canon/lore/luz-y-filosofia.md), v1.0 CANON EN CONSOLIDACIÓN, y [bloques antiguos por expandir](./canon/arcos/bloques-de-lore-por-expandir.md), v1.0 EN DESARROLLO / planificación histórica. Preservan secciones indicadas, no reemplazan íntegramente las fuentes. Apéndices y otros remanentes pendientes de cotejo; originales sin mover.

## Cobertura de Crónicas y episodio de Morvath — 2026-10-10

| Archivo | Versión | Estado | Qué reemplaza / cobertura | Notas |
|---|---|---|---|---|
| [Morvath y el medallón](canon/oneshots/morvath-y-el-medallon.md) | 1.0 | CANON EN CONSOLIDACIÓN | Crónicas, Preludio I–II; resultado de campaña del anexo Morvath | No reemplaza íntegramente el módulo. Bendición sin efecto mecánico inferido; interludio sin identidad añadida. |
| [Motivos y referencias de Crónicas](canon/arcos/motivos-y-referencias-de-cronicas.md) | 1.0 | CANON EN CONSOLIDACIÓN | Tramo final de Crónicas desde Antagonista principal | Transcripción íntegra con decisiones posteriores y límites de conocimiento de la party. |
| [Revisión de cobertura](REVISION_COBERTURA_BIBLIA_Y_CRONICAS.md) | 1.1 | CANON EN CONSOLIDACIÓN | Actualiza revisión v1.0 | Continúa el cotejo fino de Biblia. No autoriza aún el archivado completo de las fuentes. |

## Actualización — 2026-10-11

| Archivo | Versión | Estado / alcance | Qué reemplaza |
|---|---|---|---|
| [Aurelianos](canon/lore/aurelianos.md) | 1.3 | Heredero en suspenso por Maximus; sin sustitución de línea | Lectura de opciones antiguas como alternativas disponibles para esta campaña |
| [Cobertura Biblia y Crónicas](REVISION_COBERTURA_BIBLIA_Y_CRONICAS.md) | 1.2 | Cotejo de apéndices completado; transferencia fundacional aún no cerrada | Estado anterior de apéndices pendientes |
| [Guía de preparación del viaje](canon/arcos/preparacion-del-viaje-guia-dm.md) | 0.1 | EN DESARROLLO; guía operativa para la sesión, no hechos jugados | No reemplaza canon ni reglas; reúne referencias vigentes |

Se prioriza la preparación de la sesión del 2026-10-11. No se mueve ni archiva ninguna fuente en esta tanda.

## Limpieza de estados resueltos — 2026-10-11

| Archivo | Versión vigente | Cierre aplicado |
|---|---|---|
| canon/lore/romanance.md | 1.4 | Geografía suficiente para fase; porcentajes de gremios definidos; remisiones vigentes |
| canon/lore/fundadores-de-romanance.md | 1.3 | C02 resuelto; estructura enlazada |
| canon/lore/el-silente.md | 1.3 | Consolidación de Inteligencias/Hierofante ya disponible; diseño futuro separado |
| canon/lore/juramentos.md | 1.1 | Rito y hechos jugados ya tienen destinos; Heredero suspendido sin sustitución |
| herramientas-campana/mazo-de-drix/bases-testing.md | 1.5 | Doce cartas, Capricho y ambientación registrados; eliminados estados superados |
| herramientas-campana/mazo-de-drix/README.md | 1.3 | Referencias vigentes y pendiente real de testing |
| canon/arcos/preparacion-del-viaje-guia-dm.md | 0.2 | Nombre El Mazo de Drix explicitado; contenido de sesión conservado |

Estos cierres son documentales. No validan el balance de las herramientas ni resuelven desarrollos narrativos suspendidos. La transferencia fundacional completa de Biblia continúa siendo un trabajo separado; no se marca como finalizada por esta limpieza. Fuentes originales y lote de cartas sin modificaciones.

## Cierre de cobertura de Biblia y Crónicas — 2026-10-11

La [revisión de cobertura v1.3](REVISION_COBERTURA_BIBLIA_Y_CRONICAS.md) completa el cotejo de estas dos fuentes. El material compatible está trasladado; las alternativas y planificaciones históricas conservan ese carácter. El Heredero continúa suspendido por Maximus, sin sustitución.

| Archivo | Versión | Cambio de cobertura |
|---|---|---|
| canon/lore/aurelianos.md | 1.4 | Transmisión, olvido deliberado y actitud del Guardián |
| canon/lore/orden-de-bibliotecarios.md | 1.4 | Morvath, retiro, libros y origen del Culto |
| canon/lore/el-silente.md | 1.4 | Doctrina heredada del Culto y línea familiar suspendida |
| canon/lore/fundadores-de-romanance.md | 1.4 | Propósitos públicos y valores |
| canon/pnjs/pnjs-principales.md | 1.15 | Referencias de Jarsag y límites de conocimiento |
| canon/lore/luz-y-filosofia.md | 1.1 | Inspiración creativa del documento fundacional |
| canon/arcos/estructura-de-campana.md | 1.1 | Inspiración y pregunta de la planificación anterior |
| canon/lore/juramentos.md | 1.2 | Alcance del Quinto y nicho vacío |

La cobertura de contenido está completada para Biblia y Crónicas; antes de moverlas falta preparar sus referencias entrantes. No están ARCHIVADAS todavía. Este cierre no incluye la consolidación integral del anexo de Morvath ni declara terminada toda la Fase 1.

## Migración ejecutada — Biblia y Crónicas, 2026-10-11

**Estado vigente: ARCHIVADO.** Esta entrada reemplaza las notas anteriores de estas dos fuentes que decían «sin mover» o «preparar enlaces».

| Archivo | Versión / estado | Destino / reemplazo |
|---|---|---|
| Biblia_de_Romanance_Canon_Base.md | Versión interna preservada; ARCHIVADO | [_archivo/canon-obsoleto/biblia-y-cronicas-2026-10-11](./_archivo/canon-obsoleto/biblia-y-cronicas-2026-10-11/README.md); reemplazos activos en matriz de cobertura |
| CRÓNICAS DE ROMANANCE.md | Fuente histórica íntegra; ARCHIVADO | Misma carpeta; reemplazos activos en matriz de cobertura |
| [Revisión de cobertura](REVISION_COBERTURA_BIBLIA_Y_CRONICAS.md) | 1.4; cotejo completado y migración ejecutada | Registro de destinos, decisiones e integridad |

Enlaces Markdown entrantes actualizados. No se alteró el contenido de ninguna de las dos fuentes; ambas huellas SHA-256 coinciden con las anteriores. Las rutas antiguas citadas en inventarios o relatos históricos describen su procedencia, no una segunda copia activa. No se movieron otras fuentes ni imágenes. Sin commits ni push.

## Recepción del primer bloque de Morvath — 2026-10-11

[Primer diseño de combate](./_archivo/fuentes-historicas/morvath-primer-diseno-2026-10-11.md): fuente aportada directamente por el autor; ARCHIVADO como antecedente. Recupera estadísticas y conjuros del lich debilitado preparado para cinco PJ de nivel 1. No reemplaza el desarrollo posterior ni el desenlace pacífico jugado. Dar más cuerpo al personaje está autorizado; no se ha aprobado un nuevo bloque mecánico.

## Viajes — variación del clima aprobada para testing, 2026-10-12

| Archivo | Versión / revisión | Alcance |
|---|---|---|
| [Viajes para testing](<_archivo/fuentes-historicas/viajes-v1.3-2026-10-24/sistema-universal-v1.3-testing.md>) | Sistema 1.3; revisión documental 1.3.1 | Clima variable entre etapas y dentro de ellas a criterio del DM; par/impar opcional. Sin intervalos obligatorios ni tabla nueva de intensidad. |
| [Guía de preparación del viaje](canon/arcos/preparacion-del-viaje-guia-dm.md) | 0.3 | Primavera y cuatro biomas indicados por el autor; no fija etapas ni elección de ruta. |
| [Ficha de Viajes](herramientas-campana/viajes/README.md) | 1.3 | Referencia a la revisión vigente y criterio meteorológico. |

Se mantienen las intensidades y modificadores existentes. Esta precisión de testing no constituye un viaje jugado ni altera el JSON del mapa.

## Preparación y banco de eventos — 2026-10-12

| Archivo | Versión / estado | Alcance |
|---|---|---|
| [Preparación del viaje](canon/arcos/preparacion-del-viaje-guia-dm.md) | 0.4; EN DESARROLLO | Secuencia del autor: explicación, roles, aportes, investigación, organización de etapas y espacio de ciudad; posible prueba del Mazo de Drix antes de partir. |
| [Veinte eventos por bioma](ideas-nuevas/eventos-viaje-cuatro-biomas-testing.md) | 0.1; PROPUESTAS PARA TESTING | Cinco por cada bioma indicado; pistas de preparación, decisiones, sidequests y dungeons breves. Selección y desarrollo pendientes. No son hechos jugados ni canon geográfico nuevo. |

Se preserva la tabla d100 de categorías del sistema. Este banco aporta opciones concretas para seleccionar, sin reemplazarla ni exigir una tirada de evento nueva.

## Hojas del viaje — 2026-10-12

| Archivo | Versión / estado | Alcance |
|---|---|---|
| [Hoja compartida](output/pdf/viajes-hoja-de-decisiones.pdf) | 0.1; ayuda de testing | Una página A4, mismo modelo para party y DM, dos copias. |
| [Fichas de roles](output/pdf/viajes-fichas-de-roles.pdf) | 0.1; símbolos propuestos | Dos juegos de cinco roles; sin efectos mecánicos. |
| [Generador editable](herramientas-campana/viajes/generar-hojas-mesa.py) | Fuente de ambos PDF | Permite revisar textos y regenerar desde la raíz del repo. |
| [Guía del viaje](canon/arcos/preparacion-del-viaje-guia-dm.md) | 0.5 | Incorpora hojas y propuesta de fichas. |
| [Ficha de Viajes](herramientas-campana/viajes/README.md) | 1.4 | Referencias al material de mesa. |

Ambos PDF renderizados e inspeccionados visualmente. No se modifica el sistema de roles ni se crea un recurso nuevo.

## Ayudas de mesa incorporadas al sistema — 2026-10-12

**APROBADAS PARA TESTING:** hoja compartida y fichas de roles v0.1. El autor las incorpora al Sistema Universal de Viajes tal como están; mejoras visuales posteriores. No es una validación de balance general ni crea efectos mecánicos nuevos.

[Viajes](<_archivo/fuentes-historicas/viajes-v1.3-2026-10-24/sistema-universal-v1.3-testing.md>): revisión documental **1.3.2**. [Guía de preparación](canon/arcos/preparacion-del-viaje-guia-dm.md): **0.6**. [Ficha de Viajes](herramientas-campana/viajes/README.md): **1.5**. PDF y fuente gráfica sin cambios. Las referencias anteriores a símbolos pendientes de aprobación quedan superadas para esta prueba.


## Migración ejecutada y estado vigente — 2026-10-14

La fuente `data/archivos md/Gremios_de_Romanance.md` se archivó íntegra en [_archivo/borradores/gremios-2026-10-14](./_archivo/borradores/gremios-2026-10-14/README.md). Se verificó la cobertura existente y el SHA-256 antes y después; coincidencia exacta. Enlaces activos actualizados. Esta ejecución supera el destino tentativo anterior para esa fuente; no crea un segundo reglamento antiguo activo.

Canon de gremios 1.16, cobertura 1.1 y revisión de fichas 1.11. Escritura y Hierofante dejan de aparecer como huecos de consolidación en el informe de Aurelianos/Silente; sus desarrollos futuros permanecen diferidos. Revisión del viaje 0.3 incorpora la valoración del autor sobre duración suficiente y preparación posterior de eventos desconocidos para la party.

[Estado operativo](./ESTADO_FASE_1.md): anexo completo de Morvath y migraciones restantes abiertos; Rocío detenido a la espera de decisión sobre la discrepancia entre fuentes. Nombres entregados, limpieza opcional del export pendiente de dependencias. Sin otros movimientos, borrados, imágenes, cambios de mapa, commits ni push en esta tanda.


## Rocío de Ethen conciliado — 2026-10-14

Decisión expresa del autor aplicada a Forja/Mercadeo 1.2, PNJs 1.16 y anexo mecánico 1.10: +1d4 a Medicina, Supervivencia o conjuro curativo; una hora o hasta usarlo; 7 días/25 PO, competencia en Kit de Herbolario y receta de Ethen. Reemplaza la elaboración anterior de 1 día y los bonos fijos/7–8 días de la guía recibida. Las referencias al SRD quedan como recordatorio. Estado de fase 1.1 y aplicaciones 1.3 actualizados; integración técnica pendiente, sin contradicción de canon abierta para este pasaje. No se editan fuentes históricas, SRD ni código del prototipo en esta tanda.


## Migración ejecutada — anexo completo de Morvath, 2026-10-14

Fuente antigua: `data/archivos md/ANEXO_Morvath_y_notas_modulo_1-2..md`, v1.1. Reemplazos creados antes de mover: [PNJ narrativo](canon/pnjs/morvath.md), v1.0, y [módulo](modulos/morvath-y-el-medallon.md), v1.0; [resumen jugado](canon/oneshots/morvath-y-el-medallon.md), v1.1. [Matriz de cobertura](REVISION_COBERTURA_MORVATH.md), v1.0, completa los bloques narrativos y de diseño. Lecturas, instrucciones y modos del ritual verificados literalmente.

Original preservado íntegro en [_archivo/canon-obsoleto/morvath-2026-10-14](./_archivo/canon-obsoleto/morvath-2026-10-14/README.md), SHA-256 `d57790ebdd322aa48b41dc3ad027b6fb0666be5d014f2ed7a451ca3ee523f01c`, idéntico antes y después. Enlaces Markdown activos actualizados. Las antiguas referencias a simple disolución de la Orden quedan reemplazadas por la decisión del autor. No se agrega una nueva ficha de combate, no se fija el efecto de la bendición ni se desarrollan escenas futuras.

Orden v1.5, PNJs v1.17 y estado operativo v1.2 actualizados. Cierre documental del anexo completado; otras fuentes siguen su migración individual, sin declarar terminado todo el repositorio.


## Migración ejecutada — catorce fuentes cubiertas, 2026-10-14

[Informe por fuente](./REVISION_MIGRACION_FUENTES_2026-10-14.md), v1.1. Archivadas: descripción de Romanance, forja/mercadeo/pociones, cosmología, Silente, economía inmobiliaria, moneda, anexo oficial de Inteligencias/Hierofante, Hierofante anterior, PNJs, Aldren fundacional, anexo mecánico de PNJs, trasfondos de PJ, relato de Jantry y anexo aureliano. Se crearon/confirmaron destinos antes de mover; diferencias cotejadas contra decisiones del autor; hashes anteriores y posteriores coincidentes. El anexo aureliano tiene cobertura compartida con Juramentos, y los antecedentes mecánicos retirados quedan solo en su fuente histórica.

Los destinos finales están en el informe y manifiesto; reemplazan los destinos tentativos de la auditoría inicial para estas fuentes. Las fuentes consolidadas se preservan en `_archivo/fuentes-historicas/consolidados-2026-10-14/`; el Hierofante anterior, en `_archivo/canon-obsoleto/hierofante-2026-10-14/`. Los registros de tandas se marcan como historial con cierre vigente. No se mueven adjuntos, imágenes, SVG, SRD ni mapa. Sin borrados, commits o push.

La limpieza no declara cubierta toda la información de los compilados grandes o documentos mixtos que continúan en `data/`. Su cobertura requiere cotejo propio antes de archivarlos. Desarrollo futuro expresamente diferido y testing pendiente no se consideran huecos a inventar.


## Reubicación de documentos mixtos — 2026-10-14

Tres fuentes cubiertas archivadas y dos documentos de desarrollo reubicados íntegros. [Informe de cobertura y destinos](./REVISION_REUBICACION_DOCUMENTOS_MIXTOS_2026-10-14.md). Los cinco hashes coinciden antes y después del movimiento.

Alfabeto, Drix original y Viajes v1.2 pasan al archivo histórico tras cotejo. Objetos de legado pasa a `herramientas-campana/armas-legendarias/`; el consolidado mixto Viajes/Drix queda en el área común de herramientas. Sus propuestas y tensiones permanecen identificadas: reubicarlos no aprueba contenido nuevo ni completa su cobertura. Estos destinos ejecutados sustituyen los tentativos para los cinco archivos.


## Gremios — parte funcional aprobada para testeo, 2026-10-19

Aprobación expresa del autor y aplicación del diff. [Cotejo y procedencia](./REVISION_GREMIOS_2026-10-19.md). Las menciones anteriores a nombres provisionales, multa automática por rango, momento de cobro o ausencia de umbrales quedan reemplazadas por este cierre.

| Archivo | Versión / estado | Reemplaza / notas |
|---|---|---|
| [Guía funcional](./herramientas-campana/gremios/guia-funcional.md) | 0.1 documental / EN DESARROLLO, aprobada para testeo | Aprendiz/Oficial/Maestro; 25/50 PX; saldo único; titular individual o grupo; cobro verificado. Sustituye reglas operativas anteriores incompatibles. |
| [Gremios de Romanance](./canon/lore/gremios.md) | 1.17 / CANON EN CONSOLIDACIÓN | Reemplaza v1.16 en el bloque operativo; conserva las nueve fichas y el lore. |
| [Ficha de herramienta](./herramientas-campana/gremios/README.md) | 1.2 / EN DESARROLLO | Enlaza la guía vigente y el análisis anterior con precedencia explícita. |

El testeo de esta versión todavía no ocurrió según la evidencia disponible; se espera el informe del autor. No se exige afiliación de toda la mesa. Se conserva el mínimo de una pieza de plata no revocado. Crecimiento institucional, cargos detallados y Bastiones continúan pospuestos; no se crean nuevas mecánicas ni interfaces. Fuente recibida y versiones previas preservadas.


## Cotejo de compilados generales — 2026-10-19

[Informe de cobertura](./REVISION_COMPILADOS_GENERALES_2026-10-19.md), v1.0: cotejados los dos cortes generales del 4/10. Matriz de 53 temas, síntesis del snapshot y sus 18 transcripciones (14 equivalentes con normalización, cuatro variantes explicadas). Se registran cierres posteriores sin reabrirlos.

Las dos fuentes permanecen intactas en `data/archivos md/`. Estado: **CANON EN CONSOLIDACIÓN como fuentes de cotejo**, no autoridades que desplacen decisiones posteriores. T01–T04 localizan convenciones editoriales y matices culturales sin traslado activo completo; T05 remite al cotejo visual propio. No se declara cobertura total, no se archivan compilados ni se amplía geografía. La revisión temática de plots y otras fuentes mixtas sigue pendiente.


## Viajes v1.4 para testing — 2026-10-24

El autor revisó el informe y autorizó aplicar sus propuestas y limpiar el reglamento. [Sistema Universal de Viajes v1.4](./herramientas-campana/viajes/sistema-universal-v1.4-testing.md), revisión **1.4.2 / EN DESARROLLO y PLAYTESTING**; [ficha](./herramientas-campana/viajes/README.md), 1.15. Reemplaza como reglamento activo v1.3.5; antecedente y PDF anterior archivados íntegros, con README previo preservado. [Cobertura](./herramientas-campana/viajes/CAMBIOS_V1.4.md).

Adopta secuencia clara de etapa, decisiones de jugadores, roles como responsabilidades, apoyos descriptivos, CD legible, fogón flexible y recapitulación de destino. Conserva valores de terreno/clima y gasto de Motivación 1–2/3–5 con consecuencias. **Motivación negativa confirmada:** se recupera con buenas decisiones, cooperación o soluciones acertadas incluso sin dados, a criterio del DM; no se fija mínimo negativo ni premios automáticos. **Alcance precisado por el autor: acciones del grupo o propias de los roles de viaje, aunque tire un solo personaje; no pruebas estrictamente personales ni gasto en combate.** D02 cerrado.

**Listas d100 por bioma pendientes: las aportará el autor.** Las veinte opciones reorganizadas son antecedente, no tablas finales. No se crean entradas nuevas. El primer testeo y sus apoyos están [importados con evidencia](./herramientas-campana/viajes/playtest-2026-10-23/README.md); [transcripción automática completa](./data/transcripciones/romanance-viaje-2026-10-23/README.md), sin hacerla pasar por crónica cerrada ni adjudicar PX o inventarios. v1.4 requiere una nueva prueba; audio/planos/mapa/imágenes preservados. El Markdown es la referencia vigente; sin PDF v1.4 ni publicación, commits o push.

## Ejecución — asentamientos, 2026-10-26

[Cinco fuentes recibidas integradas y archivadas](./REVISION_ASENTAMIENTOS_TERENOR_2026-10-26.md): destinos en Lore, fichas PJ, dirección visual de Arte, hipótesis en ideas-nuevas y cotejo en mundo/mapas. Se verifica contra JSON del 21/10; imágenes y mapa intactos. Fuente mixta cultural y compilados siguen sin archivar hasta cobertura propia. Esta ejecución no cierra toda la Fase 1.

## Ejecución — dos compilados de plots, 2026-10-26

[30 apartados cotejados y dos originales archivados íntegros](./REVISION_PLOTS_ARCO_I_2026-10-26.md). Nuevos destinos para sesión1, hilos y planificación, con ArcoI y registro sesión2 enlazados. Decisiones posteriores prevalecen; no se activan líneas suspendidas. Los pendientes históricos sobre cotejar estos dos archivos quedan superados por esta ejecución. Fuentes mixtas, T01/T05 y cotejos de crónicas/audio siguen separados.

## Cierre T01 — identidad editorial y Preludios, 2026-10-26

El autor confirmó título/subtítulo y el orden de las tres crónicas de la saga de Preludios; [criterio activo](./README.md#identidad-editorial-y-saga-de-preludios). README, encabezados de resúmenes, estructura, manifiesto y estado actualizados; rutas estables y fuentes/láminas intactas. T01 ya no es pendiente; continuar T05 y fuentes mixtas.

## Integración — Aurelia y Trator, 2026-10-29

[Dos transferencias cotejadas y distribuidas](./REVISION_AURELIA_TRATOR_2026-10-29.md), con fuentes íntegras archivadas, reemplazos explícitos de canon y pasajes pendientes separados. Export29/10 actual en referencias; JSON/.map no modificados. A11 resuelto el 30/10: la referencia al pico al norte de Aethragar corresponde al Primero, en Aldenor; el Quinto está en Terenor cerca de Romanance. Se preservan cambios visuales locales y conocimiento efectivo de Rheem. Fuentes mixtas y desarrollo futuro siguen su proceso propio; no se declara cerrada la fase.

## Ejecución — fuentes mixtas, 31/10/2026

[Once fuentes preservadas y archivadas con cobertura](./REVISION_LIMPIEZA_MIXTOS_2026-10-31.md). Se cierran los bloqueos documentales de generales/T01–T05 y temática cultura/biomas/tablas, escritura, visual y transferencia gremial; módulos conservan solo criterios de etapa futura. Preparación22/10 y Observatorio tienen destinos propios. Mapas, imágenes y crónicas originales no se alteran; desarrollos futuros y hechos inciertos siguen separados.
