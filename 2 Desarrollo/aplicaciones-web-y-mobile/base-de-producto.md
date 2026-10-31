# Aplicación integral de dirección de partidas — base de producto

**Versión documental:** 0.5 · **Fecha:** 2026-10-17.  
**Estado:** DECISIONES DE PRODUCTO ACORDADAS; IMPLEMENTACIÓN INTEGRAL PENDIENTE.  
**Procedencia:** conversación directa con Sarten / Sebas en este chat y materiales entregados por el autor.  
**Autoridad:** las aclaraciones de esta conversación prevalecen sobre el enfoque anterior de la guía recibida. Este documento no incorpora mecánicas nuevas al canon.

[Área de aplicaciones](<README.md>) · [Fuentes preservadas](<fuentes/README.md>) · [Índice de 1 Canon oficial](<../../1 Canon oficial/INDICE_CANON.md>)

[Estado operativo y pendientes vigentes](<ESTADO-Y-PENDIENTES.md>): distingue implementación local, verificación y desarrollo futuro.

## 1. Objetivo y dirección confirmada

Desarrollar una única aplicación funcional que agilice la preparación y el uso antes, durante y después de una sesión. Debe reunir herramientas que actualmente se encuentran dispersas, permitir consultas rápidas y resolver tareas con pocos datos y acciones.

**Límite de producto — decisión expresa del autor, 2026-10-14:** esta herramienta no es un gestor de campañas ni debe convertirse en uno. Su finalidad es resolver consultas, generación, cálculos y creación de contenido para la mesa. Esta restricción guía las propuestas y evita ampliar el alcance por iniciativa del asistente.

Más adelante podrá desarrollarse un gestor de campañas independiente que incluya o integre esta herramienta. El autor conserva un diseño previo sin terminar y lo aportará cuando la herramienta actual esté pulida, para estudiar cómo adaptarlo. Ese trabajo es futuro: no se inicia ahora ni se presupone su arquitectura.

El producto se diseña desde el comienzo con intención de publicación y venta. No se desarrolla primero una aplicación exclusiva para Romanance para luego construir otra comercial. Las entregas sucesivas serán avances del mismo producto.

Romanance es un caso de uso y estudio para comprobar el alcance: comerciantes concretos, reglas de mesa, especies, clases, subclases y excepciones de PNJs. No se convierte en el centro obligatorio de la aplicación ni en contenido que todas las campañas deban activar.

La base de reglas será el SRD, ampliable con contenido propio. El material recibido usa SRD 5.2.1; no se equipara al conjunto de todos los manuales de D&D 2024.

La plataforma de publicación queda abierta: web, aplicación móvil o ambas. No hay framework, base de datos, proveedor de hosting, tienda ni modelo de cobro elegidos.

## 2. Principio central: responsabilidades propias y datos compartidos

**Decisión confirmada por el autor:** una sola app, una base compartida y secciones con responsabilidades propias, conectadas para resolver rápido en mesa.

Cada sección resuelve su tarea y comparte los datos necesarios con las demás. Consultar una función desde otra pantalla no exige duplicar sus reglas o fichas. Por ejemplo, Mercado puede mostrar una estimación de fabricación calculada con las reglas de Crafteo.

| Sección | Responsabilidad acordada |
|---|---|
| Biblioteca | Fichas, listas y búsqueda del contenido compartido, incluidos reglas y conjuros. |
| Loot | Selección y generación de recompensas; uso independiente y vinculado a encuentros. |
| Mercado | Disponibilidad, comerciantes, cantidades y costo de compra; consulta de fabricación cuando corresponda. |
| Crafteo | Requisitos, costo y tiempo de fabricación según reglas aplicables. |
| Encuentros | Preparación de enemigos con recompensa opcional, incluido el caso de que no dejen loot. |
| Homebrew | Creaciones, modificaciones y alcance de las reglas y del contenido propio. |
| Campañas | Selección del contexto activo y del contenido y reglas aplicables. |

Esta separación es funcional. No fija todavía el número de pestañas, menús ni la estructura técnica.

## 3. Homebrew como parte del núcleo

Homebrew es una capacidad central del producto. Debe permitir ampliar y adaptar el material base, y utilizar esas creaciones desde las secciones correspondientes.

El autor solicita creación y modificación de objetos, conjuros, dotes, trasfondos, especies/razas, clases, subclases y otras opciones que se necesiten. Busca resolver también pedidos inesperados durante una sesión, sin depender de tener una IA a mano.

Modificar una opción existente para crear otra es un flujo deseado. Debe conservarse la referencia original y distinguirse la creación o modificación propia; no convertir una excepción de campaña en una regla universal.

Las reglas propias deben poder intervenir en los cálculos que correspondan, además de poder consultarse. Las fórmulas, campos y grado de automatización se especificarán por función; no existe aún un motor general implementado.

No se promete que el programa garantice el balance de una creación. Las ayudas de comparación, plantillas y advertencias siguen como propuestas de diseño, no como reglas oficiales ni decisiones de equilibrio del autor.

## 4. Campañas y disponibilidad del contenido

El autor imagina un botón o selector de campaña activa: al cambiarlo, queda accesible el material creado o habilitado para esa campaña, junto con la base compartida.

**Alcance limitado:** aquí «campaña» identifica un contexto de contenido y reglas. El selector y su configuración no implican gestionar la campaña. No se añaden por ese motivo planificación o seguimiento de sesiones, crónicas, tramas, misiones, calendarios ni administración de la party. Los comerciantes, fichas, resultados guardados y demás datos necesarios para las herramientas conservan su función específica.

Cada campaña tiene sus reglas propias y comparte la base básica con las demás. Las creaciones deben poder ser:

- Globales.
- Exclusivas de una campaña.
- Compartidas con varias campañas elegidas.

Se conserva la distinción de diseño entre contenido disponible y reglas activas: que una opción esté accesible no obliga a aplicarla automáticamente. El comportamiento concreto de exclusiones, prioridades y conflictos entre reglas queda por especificar.

Los alcances particulares de una regla también deben respetarse: una opción general para PJ, una libertad de construcción de PNJs y un beneficio exclusivo de un personaje no son equivalentes.

## 5. Mercado: comerciantes, stock y compras

El autor considera especialmente útil tener comerciantes cargados, como Batai, Tömörbaatar, Ethen y Temay, y poder sumar otros de otros lugares. Sus capacidades y excepciones deben obtenerse de los documentos vigentes cuando se incorporen; no se asignan inventarios ni capacidades por inferencia en esta base.

Funciones solicitadas:

- Buscar un objeto y consultar su costo.
- Indicar cantidades de uno o varios objetos y obtener el costo final de compra.
- Consultar los atributos del objeto cuando los tenga.
- Resolver disponibilidad mediante stock mínimo, selección aleatoria o decisión manual del DM.
- Ofrecer fabricación cuando el comerciante tenga capacidad para crear lo solicitado.

La selección aleatoria representa los artículos disponibles ese día. Se contempla conservarla hasta una renovación, para que abrir la pantalla no produzca cambios involuntarios. El mecanismo exacto de renovación queda pendiente.

El DM puede decidir directamente si existe el objeto solicitado. No hace falta simular una economía completa, producción continua ni abastecimiento regional para que Mercado sea útil.

Las cantidades mínimas de stock, criterios de sorteo, precios y modificadores particulares se definirán con las reglas aplicables; no se inventan aquí.

## 6. Fabricación desde Mercado: aclaración final del autor

**Decisión vigente:** la app calcula y muestra información; el DM resuelve la entrega en mesa.

Flujo acordado:

1. Elegir comerciante y buscar o configurar el objeto solicitado.
2. Mostrar cantidad, costo final, atributos cuando corresponda y tiempo de fabricación según las reglas aplicables.
3. Mostrar una indicación como «Disponible» o «Entrega en 5 días» para información del DM.
4. Si se creó una variante u objeto nuevo, guardarlo en la biblioteca con el alcance elegido para futuros usos.

«Entrega en 5 días» es un ejemplo de presentación, no un plazo universal aprobado. El plazo real se obtiene de la regla que corresponda.

**No hace falta guardar un encargo, calcular una fecha de entrega ni implementar un calendario o seguimiento de pedidos.** Esta aclaración reemplaza la propuesta anterior del asistente de registrar encargos con fechas de campaña. Tampoco se usa el tiempo real entre sesiones para calcular entregas.

Guardar una ficha nueva no equivale a añadir existencias en todas las tiendas. Su disponibilidad para compra, fabricación o loot depende de cómo se configure y habilite.

## 7. Loot y encuentros

Loot sigue siendo una herramienta independiente para cofres, hallazgos y otros usos. El generador de encuentros podrá mostrar, junto con los enemigos, el loot que podría entregarse o la ausencia de botín.

Ambos flujos comparten fichas y generación de recompensas, sin mantener catálogos paralelos. Las probabilidades y reglas de asociación entre enemigos y recompensas quedan por definir.

El prototipo ya incluye Loot y D100; sus fórmulas, tablas y fichas no quedan validadas por esta conversación. La guía recibida registra tareas de revisión pendientes.

## 8. Crafteo, conjuros y consultas

El autor prioriza tener a mano listas de reglas y conjuros, buscadores de costo y herramientas de fabricación. Solicita contemplar todo lo que pueda crearse conforme a las reglas incorporadas y permitir ampliaciones propias, incluidos conjuros nuevos.

Se distinguen la fabricación cubierta por reglas fuente y la creación o adaptación de contenido homebrew. La solicitud no establece que el SRD tenga un procedimiento completo para diseñar y balancear cualquier conjuro, dote o clase.

Los datos faltantes, precios sin definir y especificaciones mecánicas abiertas deben permanecer identificados. No se rellenan automáticamente con supuestas reglas del SRD.

## 9. Ampliaciones previstas y caso Romanance

Viajes, Mazo de Drix y otras herramientas podrán integrarse más adelante usando el mismo núcleo. No se fija en esta conversación su implementación ni se convierten sistemas en testing en mecánicas definitivas.

Referencias útiles para futuros casos de prueba:

- [PNJs principales](<../../1 Canon oficial/pnjs/pnjs-principales.md>) y [anexo mecánico](<../../1 Canon oficial/pnjs/anexo-mecanico-pnjs.md>): Aldren, Deren, Kharag, Jarsag y excepciones de diseño.
- [Forja, mercadeo y pociones](<../../1 Canon oficial/pnjs/forja-mercadeo-y-pociones.md>): reglas y capacidades documentadas.
- [Inteligencias Encarnadas y Hierofante de la Luz](<../../1 Canon oficial/lore/inteligencias-encarnadas-y-hierofante.md>): fundamentos originales y especificaciones todavía abiertas.
- [Aurelianos](<../../1 Canon oficial/lore/aurelianos.md>) y [El Silente](<../../1 Canon oficial/lore/el-silente.md>): referencias narrativas; no se equiparan automáticamente a una única especie jugable.
- [Viajes](<../herramientas-campana/viajes/README.md>) y [Drix](<../herramientas-campana/mazo-de-drix/README.md>): consultar siempre su documento vigente y estado de prueba.

## 10. Prototipo, fuentes, créditos y publicación

Se preservan el HTML `loot-generator.html`, versión visible 1.2, y la guía `BOTIN-EXE-guia-completa-para-Codex.md` tal como fueron entregados. La guía aporta antecedentes; sus instrucciones y tareas no se ejecutan automáticamente por estar adjuntas.

La guía anterior priorizaba una versión personal y luego la comercial. La decisión posterior del autor reemplaza ese enfoque: un único producto desde el inicio, usando Romanance como caso real. Esto no declara distribuible todo el contenido del prototipo, que mezcla procedencias y tiene revisiones pendientes.

El autor solicita créditos por el aporte propio y la colaboración, junto con la atribución exigida por el SRD. La guía registra: Sarten / Sebas, idea y dirección, mundo y reglas de mesa; Reldor Dawncaller · ChatGPT / Codex, colaboración de diseño e implementación; prototipo inicial realizado con Claude y aportado por Sarten. La redacción definitiva del aviso de derechos queda pendiente y es distinta del reconocimiento de colaboraciones.

Para preparar una distribución, registrar procedencia y condiciones de uso del contenido. No suponer que las tablas o textos de manuales ajenos al SRD quedan cubiertos por su licencia. Referencias consultadas en el chat: [SRD oficial](https://www.dndbeyond.com/srd), [información para creadores](https://www.dndbeyond.com/creator-faq) y [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). No se ha efectuado una auditoría completa del prototipo.

BOTÍN.EXE es el nombre del prototipo recibido; no se ha decidido si será el nombre definitivo de la aplicación integral.

## 11. Propuestas abiertas y próximo trabajo

Propuestas del asistente todavía sin elección técnica o funcional definitiva:

- Aplicación web instalable/PWA como punto de partida.
- Creación rápida y edición completa como dos modos de trabajo.
- Plantillas, comparación con la referencia y ayudas para revisar balance.
- Organización técnica por paquetes de contenido.

El modelo común, los editores por tipo, la renovación explícita de stock, la migración y el intercambio JSON ya tienen implementación local para pruebas. Sigue pendiente generalizar las reglas de aplicación/prioridad del homebrew y cerrar criterios de aceptación completos por sección; no se vuelve a tratar como inexistente lo ya implementado. Consultar el estado operativo enlazado para los pendientes actuales.

No se ha aprobado un cronograma ni un orden definitivo de entregas. La prioridad expresada es resolver consultas, loot, mercados, crafteo y creación propia con rapidez. Comerciantes, disponibilidad y consulta de fabricación forman parte del alcance de Mercado, no quedan relegados a una simulación económica futura.

La entrega inicial 0.1 dejó la base documental y las fuentes preservadas; el prototipo navegable posterior se registra en su [README](<prototipo/README.md>). La revisión documental 0.2 registró el límite de alcance del autor. Las revisiones posteriores consolidan decisiones e implementación local sin fijar nuevas reglas de Romanance.


## Ajustes acordados e implementación local — 2026-10-17

El autor habilita pasar a implementación y prueba de los ajustes conversados. La [entrega 0.2](<prototipo/ENTREGA-0.2.md>) registra su aplicación y distingue decisiones del autor, referencias de manual y simplificaciones del prototipo.

Pantalla limpia como regla fundamental: listas plegadas, resultados compactos y configuración avanzada agrupada. Biblioteca concentra todas las listas descriptivas; desaparecen pestañas independientes de conjuros y reglas. Homebrew se adapta al tipo, conserva visible la base y diferencia contenido propio; las herramientas/precios solo aplican cuando corresponden.

Loot mantiene generación manual y rápida en un botón basada en referencias DMG. VD orienta presupuesto y cantidad; nivel de party orienta rareza. En manual, cantidad máxima de magia elegida por el DM, predeterminada en uno. Monedas + gemas + 2 Desarrollo/arte/exploraciones/material-previo deben respetar el mismo presupuesto, completando remanente en monedas, sin excedente porcentual automático. Rarezas con techo por bandas y artefactos propios como excepción explícita.

Mercado incorpora servicios, cantidades, total y pago/vuelto con las cinco monedas, incluido electro. Fabricación informa requisitos, componentes, costo y plazo; las herramientas del comerciante no bloquean la consulta. No se registran fechas de entrega, pagos reales, billeteras ni caja de comerciantes.

Se conservan respaldo e importación como funciones de producto. El intercambio comunitario usa paquetes JSON de contenido propio con autoría/procedencia y revisión previa, sin sobrescribir IDs coincidentes silenciosamente. El funcionamiento no depende de internet. El selector de contextos conserva exclusivamente activación y disponibilidad de contenido/reglas.

No se declara terminada la aplicación ni autorizada la distribución comercial de todas las fuentes recibidas. La revisión bilingüe se difiere hasta pulir el funcionamiento, según decisión del autor. El gestor de campañas sigue como proyecto posterior.

## Decisiones consolidadas tras las pruebas del 2026-10-17

La pantalla conserva abiertos los paneles que abre el usuario durante su uso. El formulario evita información duplicada; muestra una única acción para crear homebrew y consulta la referencia de origen sin repetirla debajo. Las referencias se filtran por tipo y búsqueda.

Crear un objeto e imbuir una base existente son recorridos diferentes sobre el mismo cálculo. La base puede estar aportada, comprarse o fabricarse; aportarla no vuelve a cobrarla. El bonificador es opcional y no se asigna por subir rareza. Conjuros, aptitudes, activación, usos y recuperación se eligen aparte. La guía de diseño admite +4 en legendarios; +5 requiere una receta propia, sin atribuirle una tarifa oficial. Las plantillas de bonificación genéricas conservan sus mínimos específicos por tipo de objeto.

Oro, plata y cobre son las monedas de base. Platino, electro y monedas nuevas se habilitan por contexto: solo entonces aparecen y cuentan en el pago/vuelto. La moneda Luz utiliza las equivalencias aprobadas en su documento de canon. El botón de valor por rareza se sitúa junto al precio unitario.

Todas las listas se consultan por separado dentro de Biblioteca. El autor define el armador de listas propias con tres columnas: lista propia a la izquierda, categorías y flechas al centro y contenido seleccionable a la derecha. Se pueden agregar varias fichas de distintos tipos sin copiarlas. El guardado, alcance e intercambio de estas listas forman parte del prototipo; su elección directa como fuente desde otros generadores todavía necesita especificarse e implementarse.

El catálogo cargado y la verificación editorial se distinguen. Las fichas OCR mantienen su aviso de cotejo pendiente y los datos que requieran decisión del autor no se completan por inferencia. El [estado vigente](<ESTADO-Y-PENDIENTES.md>) registra el cierre de esta jornada sin declarar terminada la aplicación ni fijar un cronograma nuevo.


## Encuentros y criaturas — decisión e implementación del 2026-10-17

El autor solicita Encuentros calculados por VD y cantidad de jugadores/PJ y consulta del bestiario. Confirma que alcanza con los monstruos del SRD y que las criaturas adicionales podrán cargarse a mano. Se incorpora la lista íntegra del SRD local, incluidos animales, al mismo catálogo utilizado por Biblioteca y las listas propias; no se inicia una recopilación de todo el Manual de Monstruos.

Nivel de los PJ y cantidad de personajes determinan el presupuesto bajo/moderado/alto del SRD 2024. Los VD proporcionan los PX de cada ficha, incluidas alternativas de guarida; se suman los PX, no los VD. Se permite generación filtrada y composición manual, con cantidad editable. El DM elige sin botín, pertenencias o tesoro acumulado. No se incorporan iniciativa, control de PG, personajes, progreso o historial de campañas. Ver estado y pruebas en el documento operativo.
