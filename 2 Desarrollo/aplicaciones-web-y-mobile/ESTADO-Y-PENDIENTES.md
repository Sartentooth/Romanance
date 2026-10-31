# Estado de la herramienta y pendientes

**Versión documental:** 1.5 · **Corte:** 2026-10-18.
**Producto:** prototipo local 0.2, funcional para pruebas; aplicación integral todavía en desarrollo.  
**Procedencia:** decisiones y pruebas de este chat. No incorpora lore ni reglas nuevas al canon.

[Abrir prototipo](<prototipo/dist/index.html>) · [Decisiones de producto](<base-de-producto.md>) · [Registro de implementación y pruebas](<prototipo/ENTREGA-0.2.md>) · [Fuentes preservadas](<fuentes/README.md>)

Este documento es el resumen operativo vigente. La entrega conserva el recorrido y los estados anteriores; sus pendientes iniciales pueden haber sido resueltos por revisiones posteriores. «Implementado» significa disponible en el prototipo, no aprobación definitiva de cada pantalla ni revisión completa de todas las reglas.

## Dirección que se mantiene

- Un único producto, pensado para publicación y venta; Romanance sirve como caso de uso, sin construir una app personal y otra comercial desde cero.
- Herramientas rápidas para la mesa. **No es un gestor de campañas.** Contexto activo significa contenido y reglas disponibles, no sesiones, misiones, calendario, party o contabilidad.
- Una biblioteca compartida. Las listas propias y las tablas apuntan a fichas; no se crean catálogos separados para cada sección.
- Interfaz minimalista: opciones agrupadas, fichas plegadas, ayudas ocultas y paneles abiertos que se conservan durante la navegación y los cambios de opciones de esa apertura.
- Homebrew como función central, distinguido en turquesa y con alcance global o para los contextos elegidos.
- Funcionamiento sin internet, respaldo e intercambio por JSON. La selección de español/inglés queda para el final del pulido funcional.
- El DM conserva la decisión sobre disponibilidad, entrega, efectos y balance. Las herramientas informan costos y días; no administran encargos ni interpretan cualquier regla escrita como código.

## Lo implementado

| Área | Disponible en el prototipo |
|---|---|
| Interfaz | Vistas compactas web/móvil, temas verde/ámbar/monocromo, navegación de texto, paneles plegables y distintivos separados de rareza/homebrew. |
| Loot | Generación rápida por referencias DMG y modo manual; VD, nivel de party, cantidad máxima de magia elegible y rareza por bandas. Monedas + gemas + 2 Desarrollo/arte/exploraciones/material-previo respetan un presupuesto común, sin excedente automático. Historial, listas guardadas y TXT. |
| Encuentros | Cantidad y nivel de los PJ, presupuesto bajo/moderado/alto por PX del SRD 2024, criaturas por VD y cantidad, generación y armado manual. Filtros por VD, tipo y lista propia; PX de guarida cuando corresponda. Botín opcional y guardado en Loot; sin seguimiento de combate ni campaña. |
| D100 | Veinte tablas por familia/rareza, dado físico, familia aleatoria y sorteo uniforme independiente. Tabla de equipo de cien posiciones. |
| Biblioteca | Listas por tipo, buscador, fichas desplegables, consulta de propiedades y referencias; tablas DMG consultables por separado. |
| Listas propias | Armador de tres columnas: lista propia, orígenes/flechas, selección múltiple. Agregar/quitar sin duplicar fichas, guardar, editar nombre/alcance y consultar cada ficha. JSON de lista con dependencias de homebrew y conservación en el respaldo completo. |
| Mercado | Objetos y servicios, comerciantes, cantidades, descuentos, total, disponibilidad manual o stock aleatorio renovable con mínimo. Precios pendientes identificados. |
| Monedas | Oro/plata/cobre como base; platino, electro y monedas propias solo visibles y computables al habilitarlas. Equivalencias por contexto y vuelto comprobable. Luz de Aurora, Zenith y Ocaso disponibles en Romanance según el canon. |
| Crafteo | Costos de receta, base comprada/fabricada/aportada, extras, total, plazo, requisitos y margen bruto. Fabricación común, mágica, pociones, pergaminos y recetas propias. No bloquea por las herramientas del comerciante. |
| Crear / imbuir magia | Recorridos diferenciados con cálculo compartido. Bonificador opcional, conjuro de biblioteca y/o aptitud escrita, activación, usos, cargas y recuperación. Rareza no concede beneficios automáticamente. +4 según guía de diseño; +5 como excepción con receta propia. |
| Creación aleatoria | Selección de tipo, referencia opcional y magia; produce un borrador editable que requiere guardado explícito. Usa fichas y plantillas disponibles, sin prometer generación arbitraria de efectos equilibrados. |
| Homebrew | Objetos, servicios, conjuros, reglas, dotes, trasfondos, especies, clases, subclases y monstruos. Una acción «Crear homebrew», formulario adaptable, procedencia/autoría, variantes y modificaciones con referencia original consultable. |
| Contextos | Disponibilidad y activación de contenido, exclusiones y detección de reemplazos en conflicto. No es un motor universal de prioridades o ejecución de reglas. |
| Datos | Guardado local, migración del estado anterior, respaldo/restauración con confirmación e importación/exportación de contenido propio. Colisiones omitidas o copiadas con nuevos IDs; dependencias remapeadas. |

## Catálogo cargado

**1503 fichas locales**, incluyendo:

- 339 conjuros.
- 330 bloques de criaturas del SRD: 235 de Monstruos A–Z y 95 de Animales.
- 404 objetos mágicos, incluidos ocho artefactos; categorías de armas, armaduras, anillos, bastones, objetos maravillosos, pergaminos, pociones, varas y varitas.
- Equipo, herramientas, monturas, vehículos, arreos y servicios con las propiedades disponibles en las fuentes.
- 154 entradas de glosario, 17 dotes, cuatro trasfondos, nueve especies, doce clases y doce subclases del SRD.
- Veinte tablas aleatorias del DMG enlazadas al catálogo compartido.

Las cifras describen el material importado, no todas las publicaciones de D&D. Hay inglés y español durante las pruebas. La extracción de tesoros ya no deja fichas con el aviso de descripción por incorporar; **texto presente no significa texto cotejado**. Los registros OCR conservan su estado pendiente. [Informe generado de cobertura](<prototipo/dist/catalog-coverage.json>).

## Romanance: qué está integrado y qué no

Están cargados los comerciantes de referencia Batai, Tömörbaatar, Ethen y Temay, sin inventarios narrativos supuestos. Se consulta Yunque Certero y está integrado Rocío de Ethen según la decisión del 2026-10-14: 25 PO y siete días de fabricación; venta pendiente. Las denominaciones de Luz mantienen las equivalencias aprobadas.

No se importaron como paquetes mecánicos completos todas las reglas de Aldren, Deren, Kharag, Jarsag, Aurelianos o El Silente. Incorporarlas requiere cotejar el 1 Canon oficial vigente y distinguir regla general, excepción de PNJ, propuesta y mecánica aún sin resolver. El formulario permite cargarlas, pero eso no sustituye ese trabajo.

## Verificación realizada

Las pruebas de lógica existentes pasan: rangos y referencias de las veinte tablas D100, presupuestos exactos de tesoro, límites de magia, monedas, recetas, separación de base, migración, respaldos y paquetes con colisiones. Las pruebas de listas verifican cobertura del catálogo, ausencia de referencias duplicadas, guardado, dependencias y remapeo de IDs.

En navegador se probaron creación/edición, compra y vuelto, magia sin bonificador, paneles que permanecen abiertos, selección múltiple, quitar/reagregar a una lista, guardar y recuperar tras recargar. Los recorridos registrados terminaron sin errores de consola. Vista móvil de 390 × 844 sin desborde horizontal del documento; la navegación tiene su propio desplazamiento. Esto no equivale a una matriz completa de dispositivos y navegadores.

Las fichas/listas identificadas como pruebas o ejemplos no son canon. Abrir por archivo y por HTTP puede usar almacenamientos distintos: exportar/restaurar si se necesita trasladar datos. La herramienta original y sus fuentes permanecen preservadas; no hubo publicación, commits ni push.

## Pendientes concretos

| Pendiente | Estado y límite actual |
|---|---|
| Pruebas del autor | Seguir con casos reales de mesa y corregir fricción, errores de cálculo, búsqueda o presentación que aparezcan. Lo funcional sigue sujeto a esos ajustes. |
| Cotejo editorial del catálogo | Revisar contra PDF cifras, propiedades, tablas internas, alias/variantes y separación de fichas OCR. Cerrar los estados pendientes antes de tratar la biblioteca como validada. |
| Reparto de gemas y 2 Desarrollo/arte/exploraciones/material-previo | El presupuesto es exacto; el reparto actual es una simplificación del generador. Revisar catálogos/frecuencias y su integración en las listas compartidas, sin atribuir la simplificación al DMG. |
| Precios y recetas sin resolver | Venta de Rocío, discrepancia de comida lujosa y fichas dependientes de base/nivel. No reemplazar un dato pendiente por cero ni inventar ingredientes, tiempo o precio. |
| Uso de listas propias desde otras herramientas | Ya se crean, consultan, guardan y comparten; Encuentros permite elegirlas como fuente de criaturas. Falta definir e implementar su elección directa como fuente/filtro en Loot, Mercado o Crafteo; compartir fichas no significa que ese selector ya exista en cada pantalla. |
| Homebrew de Romanance | Preparar paquetes cotejados de las reglas y opciones propias acordadas, con alcance y procedencia. No resolver huecos del 1 Canon oficial por inferencia. |
| Ayudas para diseñar contenido | La edición y las plantillas básicas funcionan. La comparación de efectos, progresiones y balance, especialmente para conjuros, dotes y clases nuevos, necesita más diseño; no hay garantía de equilibrio automática. |
| Combinación de materiales | Cristales, minerales, piedras y materiales aportados por PJ quedan como ampliación futura. No existe todavía un sistema de interacciones tipo juego de fabricación. |

| Viajes y Mazo de Drix | Integraciones futuras; respetar el estado de testing y los documentos vigentes de cada sistema. |
| Resistencia y portabilidad | Ampliar pruebas entre navegadores/dispositivos, paquetes grandes, errores de almacenamiento y flujos de recuperación. El guardado actual depende del navegador, con respaldo exportable. |
| Bilingüe | Diferido por decisión del autor hasta pulir las funciones. Hace falta revisar traducciones y definir la presentación en ambos idiomas. |
| Alpha web | GitHub Pages elegido por el autor para compartir pruebas con otros DM, usando el repositorio existente Sartentooth/Romanance. Alpha publicada por el autor desde main/root; paquete limitado a la app todavía pendiente. Ver revisión de publicación al final de este documento. |
| Publicación y venta | Plataforma comercial y modelo pendientes. Separar el material distribuible, revisar procedencias y cerrar avisos de derechos/atribución. El uso local del DMG no declara distribuible su texto. |

## Orden de continuación sugerido

Propuesta de trabajo, **sin cronograma aprobado**: continuar las pruebas del autor y corregir fallos; cotejar la base de datos; cerrar cómo consumen las listas propias las otras herramientas; incorporar paquetes de homebrew cotejados. Después, ampliar las integraciones elegidas y pulir Encuentros según las pruebas de mesa. El bilingüe y la preparación comercial se mantienen para una etapa posterior del mismo producto.

No abrir ahora un gestor de campañas ni una simulación económica completa para resolver esas tareas.

## Alpha web: GitHub Pages — 2026-10-18

El autor elige GitHub Pages para la alpha compartida con sus amigos DM y solicita reutilizar https://github.com/Sartentooth/Romanance. La revisión por el conector confirma que el repositorio es público, usa `main` y ya contiene `prototipo/dist/`. No es necesario crear otro repositorio. Se propone desplegar mediante GitHub Actions un paquete limitado a la app, sin convertir la raíz documental en el sitio. No se decide todavía el alojamiento del producto comercial.

Revisión inicial: `prototipo/dist/` no es todavía un paquete público. `catalog-data.js` integra descripciones del DMG y contenido de Romanance; `dmg-source.json` contiene la extracción del manual. Además hay referencias a fuentes locales y valores iniciales propios de Romanance. No subir esa carpeta completa sin preparar el perfil distribuible.

Preparación pendiente: generar desde las fuentes SRD permitidas y el código propio; conservar atribución y licencia; resolver explícitamente qué tablas y fichas están disponibles en la alpha, sin presentar sorteos propios como tablas del DMG; excluir fuentes privadas y datos de pruebas; comprobar navegación, generación, respaldos e importación en una URL de proyecto de Pages. Se mantiene un único producto con un paquete de publicación controlado, no una segunda implementación.

Cada visitante tendrá sus datos en su navegador, sin cuenta ni sincronización entre amigos. Respaldar mediante JSON seguirá siendo necesario para trasladarlos. El asistente no ha realizado commit, push ni despliegue. La revisión remota confirma que `catalog-data.js` y `dmg-source.json` ya están en el repositorio público; excluirlos del sitio no cambia su visibilidad en GitHub. No se modificó ni eliminó contenido remoto.


## Actualización: Encuentros y bestiario — 2026-10-17

A pedido del autor se incorpora Encuentros y el bestiario íntegro del SRD local; no se busca completar el Manual de Monstruos con fuentes adicionales. Las criaturas que falten pueden crearse manualmente como homebrew. El cálculo usa PX por nivel y cantidad de PJ, sin sumar VD ni aplicar multiplicadores de 2014. La generación propone hasta tres fichas distintas y el máximo de criaturas configurado; es una heurística del prototipo, no una garantía de balance.

El botín empieza en «Sin botín». Puede generarse personal por VD/cantidad o acumulado por el VD más alto, elegidos por el DM, y guardarse explícitamente en Loot. Cambiar los enemigos o parámetros invalida la vista previa de botín. Se conserva la consulta actual por contexto en el respaldo, sin crear historia de encuentros, iniciativa, seguimiento de PG ni gestión de sesiones.

Pruebas de lógica: 330 bloques contabilizados contra las fuentes, fracciones de VD, guaridas, ejemplos de presupuestos del SRD, 240 generaciones, límites, fichas no disponibles, botín exacto, respaldo y monstruos homebrew. En navegador: cinco PJ de nivel 3 y dos druidas + nueve estirges suman 1125 PX, exactamente el presupuesto moderado; botín generado y guardado, filtro de VD, alta manual, persistencia de la consulta y móvil sin desborde horizontal. No se observan errores de consola en el recorrido. Los textos del bestiario están en inglés, con cotejo español pendiente.


## Fichas legibles y alpha publicada — 2026-10-18

El autor activó Pages desde `main / (root)`. El asistente verificó la pantalla de Loot en [la alpha web](https://sartentooth.github.io/Romanance/herramientas-campana/aplicaciones-web-y-mobile/prototipo/dist/index.html). No se implementó todavía el despliegue exclusivo de la carpeta de la app; la revisión del material distribuible sigue pendiente.

Ajuste local posterior: se preservan las tablas HTML del SRD como datos de celdas y se reconstruyen con contenido escapado. Las características de las 330 criaturas se muestran en seis filas con puntuación, modificador y salvación; CA, iniciativa, PG, velocidad y demás datos reconocidos usan tablas de referencia. Se conservan las tablas internas de clases, conjuros y demás fichas SRD, y encabezados de sección. La vista compartida se usa en Biblioteca, consulta de Encuentros, Crafteo y referencias, además de fichas de resultados que tengan esos datos. El texto plano sigue disponible para edición, búsqueda y TXT; no se calculan ni alteran estadísticas. Si se modifica el texto de una tabla, no se muestra su representación anterior.

Pruebas: `check-sheets.cjs`, `check-v2.cjs`, `check-lists.cjs` y `check-encounters.cjs`. Se comprobaron Aboleth en escritorio/móvil y tablas de Wizard en móvil: columnas alineadas, desplazamiento propio de las tablas anchas, sin desborde del documento ni errores de consola en ese recorrido. [Escritorio](<prototipo/capturas/fichas-tablas-0.2.png>) · [Móvil](<prototipo/capturas/fichas-tablas-mobile-0.2.png>). Estos cambios quedan locales para commit y push del autor; aún no se verificaron en la URL pública.


## Textos OCR y actualización web — 2026-10-18

El push `d68a002` del autor está en `main`; el despliegue Pages terminó correctamente. Se compararon por HTTP `index.html`, `app-v2.js`, `sheet-view.js`, `compact.css` y `catalog-data.js`: coinciden con esa versión local, normalizando saltos CRLF/LF. Una pestaña ya abierta puede conservar recursos previos; recargar con Ctrl+F5. Los resultados de loot guardados contienen una copia del texto anterior: no se sobrescriben al actualizar el catálogo ni se debe borrar el almacenamiento para actualizar la interfaz.

Nueva revisión local: reconstrucción de párrafos OCR sin los cortes de renglón del PDF; separación preventiva al detectar la ficha siguiente; propiedades iniciales destacadas; tablas de conjuros/cargas reconocibles como tablas. Cifras ilegibles quedan pendientes, sin inferirlas. La separación automática no equivale al cotejo editorial de cada ficha. Se verificaron visualmente Ojo de imitación (p. 298, contaminado por Ojo y Mano de Vecna) y la tabla de conjuros/cargas del Bastón de poder (p. 249); la tabla cotejada no cambia el estado de revisión del resto de esa ficha. El PDF y `dmg-source.json` se preservan intactos.

`build-data.mjs` agrega versiones por contenido a las URLs de JS y CSS de `dist/index.html`, reproducibles entre Windows y el servidor. Ejecutarlo después de cambiar datos, scripts o estilos y antes del commit. Una pestaña abierta sigue necesitando recarga para leer el HTML nuevo. No se agrega ningún borrado ni migración del almacenamiento.

Pasan las pruebas de formato/URLs (`check-formatting.mjs`), fichas, loot, listas y encuentros. Navegador: Ojo de imitación correcto, Bastón de poder con párrafos y tabla cotejada, móvil sin desborde y sin errores de consola observados. [Textos en escritorio](<prototipo/capturas/textos-ocr-corregidos-0.2.png>) · [Tabla en móvil](<prototipo/capturas/textos-tablas-mobile-0.2.png>). Revisión local lista para commit/push del autor; no publicada por el asistente.


## Pendiente para la próxima sesión: presentación y revisión editorial — 2026-10-18

**Pedido explícito del autor: dejar pendiente, no implementar hoy.** Revisar juntos en la próxima sesión.

- Mejorar las descripciones de conjuros y aplicar el mismo criterio a objetos: párrafos, separación clara de efectos, condiciones y cantidades. No exigir tablas donde baste una lista o texto bien organizado; mantener la interfaz minimalista.
- Caso de reproducción aportado: Biblioteca → Poción de curación. Las variantes, PG recuperados y rarezas aparecen concatenados. Organizar cada variante y sus datos por separado, cotejando la fuente sin deducir valores del OCR.
- En esa ficha aparecen «CURACIÓN», «N DE ALIENTO» y «GO» como texto suelto. Investigar su procedencia y separar residuos de ilustraciones, títulos o fichas vecinas del efecto real. No asignarles significado de regla ni eliminarlos globalmente sin cotejo. Captura aportada: `C:/Users/Sarten/AppData/Local/Temp/codex-clipboard-19719665-4fde-4a64-b494-4fe0caab6e31.png`.
- Evaluar una opción «A revisión» por ficha con listado/log consultable, identificador y nota del problema. El autor propone también un editor in situ; son alternativas a diseñar, no funciones ya aprobadas o implementadas. Aclarar cómo distinguir corrección editorial de homebrew, conservar procedencia y originales y trasladar las observaciones/correcciones mediante respaldo o exportación, sin depender de internet ni convertir la herramienta en gestor de campañas.

Propuesta para conversar: empezar con marca de revisión y nota, y definir después si la edición directa guarda una corrección local diferenciada de las reglas caseras. No ejecutar ninguna de estas opciones hasta retomar con el autor.
