# Revisión de chats frente al repositorio — Fase 1

**Proyecto:** Las Crónicas de Rheem - El Ciclo de Romanance. **Fecha:** 2026-10-04. **Versión del informe:** 1.0. **Estado:** CANON EN CONSOLIDACIÓN.

**Actualización de recepción:** después de este corte se recibieron seis Markdown de los chats. [RECEPCION_SEIS_CONSOLIDADOS.md](<RECEPCION_SEIS_CONSOLIDADOS.md>) registra qué amplían o superan: la arquitectura preliminar de armas ya está localmente disponible y escritura declara una aprobación estética posterior. CH04–CH10 no quedan íntegramente recuperados por esa entrega. Se conserva este diagnóstico inicial como antecedente, sin interpretar sus ausencias como estado actual de toda la colección.

Sí quedó información importante sin volcar en los Markdown locales. El desarrollo de armas existe, Alba de Hierro está expresamente elegida como caso piloto y hay ajustes de Drix, cronología y material de mesa recuperables. Este informe registra esa evidencia; no ejecuta una migración ni modifica fuentes canónicas.

Se consultaron **18 chats de ChatGPT relacionados** y **1 chat operativo de Codex** que produjo el snapshot. La herramienta expuso entre uno y cinco intercambios por conversación. Se siguieron los cursores disponibles hasta agotarlos, pero eso **no equivale a recuperar el historial completo**. Varias respuestas aparecen únicamente como `chatgpt-content-reference`; el texto al que remiten no fue recuperado. Adjuntos, imágenes y memoria del proyecto no forman parte de esta revisión.

Procedencia conservada: [inventario de chats](<../../archivo-historico/fuentes-historicas/revision-chats-2026-10-04/INVENTARIO.md>) y [fragmentos recuperados](<../../archivo-historico/fuentes-historicas/revision-chats-2026-10-04/chats-recuperados.json>). Los IDs de mensaje de abajo permiten localizar cada afirmación allí. Las rutas propuestas son destinos futuros, no documentos ya creados.

## Información ausente o parcialmente volcada

| ID | Información recuperada y autoridad | Comparación con el repo | Destino propuesto / tratamiento |
|---|---|---|---|
| CH01 | **Diseño de armas existente.** El autor declara raras las armas; sus propiedades se descubren mediante historia, investigación y decisiones; Identify revela solo la capa despierta; hay propiedades selladas desde el principio y progreso por hitos narrativos. El sistema debe poder usarse en otras campañas de D&D. El autor aprueba usar el sistema preliminar como guía y conserva libertad de adaptación. | El snapshot solo registra principios generales y no recuperó ese chat. No hay documento local independiente con el diseño preliminar completo. | `2 Desarrollo/herramientas-campana/objetos-de-legado/estado-y-dependencias.md`. EN DESARROLLO. Registrar principios y procedencia; recuperar el texto preliminar antes de afirmar que se preservó el sistema completo. No asignar número de versión inexistente. |
| CH02 | **Alba de Hierro es el caso piloto**, elegido expresamente por el autor. Tömörbaatar detectó rastros de Lunargenta en la aleación; Kharag hizo un ritual de casi un día y solo identificó la espada como **+1**, sospechando capas ocultas. No desarrollar todos sus poderes. | Trasfondos conserva espada, Aldric y antigüedad, pero no esos resultados de estudio. El snapshot afirma que no hay decisión de incorporarla al sistema: esa afirmación quedó contradicha por evidencia directa del chat. | Estado del sistema y registro de Spriggan en `1 Canon oficial/plots-y-subplots/arco-i-registro-y-pendientes.md`, con remisión desde trasfondos. Conservar el snapshot íntegro como diagnóstico histórico; no extender esta elección a otras armas. |
| CH03 | **Cronología de Spriggan:** aproximadamente ocho meses después de una visita anterior, vuelve a Romanance unos días antes de que Rheem regrese del bosque de la emboscada. Ahí alcanza la línea temporal del grupo y se reencuentran. Declaración directa del autor. | Trasfondos:221–223 dice que encuentra al grupo cuando llega a Romanance «al arranque de la Campaña I»; Arco I lo declara ausente en la emboscada. El chat aporta precisión, pero deben alinearse los alcances de «arranque» y de la visita anterior. | Mismos destinos del registro y trasfondos. C03 resuelto posteriormente por el autor y aplicado en [cronología activa](<../../../1 Canon oficial/arcos/cronologia-preludio-campana-i.md>) y trasfondos v1.1. No participó en emboscada; no se fijan fechas exactas. |
| CH04 | **Drix:** el autor define el mazo como caos mágico; efectos rápidos y concretos para evitar que el DM deba decidir qué aparece. Naranja y rojo deben diferenciarse por consecuencias, con rojo extremo; intensidad aumenta magnitud, no complejidad del reglamento. | `mazo_de_drix.md` v0.1 conserva colores, categorías y ejemplos, pero no esos ajustes completos. | `2 Desarrollo/herramientas-campana/mazo-de-drix/estado-y-ajustes-pendientes.md`. EN DESARROLLO. Registrar directrices sin redactar nuevas cartas. |
| CH05 | **Deseo torcido:** el autor indica que se activa solo si alguien expresa el deseo en mesa y que no hay que explicar su activación. Luego responde «Queda» al último ajuste. | No aparece esa carta ni regla en la fuente local. La respuesta intermedia del asistente solo es una referencia; no se recuperó el efecto completo aprobado. | Mismo registro de Drix. Conservar nombre y regla expresada, marcar texto completo PENDIENTE. No reconstruirlo copiando el suplemento 3.5. |
| CH06 | **Llegadas a Levit:** el autor sitúa a Elián allí seis años antes, en **429 D.R.**; Jantry llegó casi al mismo tiempo, directamente desde su pueblo. Elián tiene alrededor de **200 años**. | Trasfondos no incluye esa fecha ni edad de Elián. El relato de Jantry dice cinco años en Levit; su edad/huida y viaje ya motivan C16. Cinco y seis años podrían referirse a 434/435, pero no se asumió esa explicación. | `1 Canon oficial/lore/trasfondos-personajes-jugadores.md` y relato de Jantry. RESUELTO posteriormente por el autor en tanda 2: Jantry 17–18, Elián 200; llegada 429, Elián unos días antes; cinco años referidos a 434. Viaje largo desde Gran Oeste, >3000 km; plazo exacto pendiente. |
| CH07 | **Calendario:** Aurora inicia la primavera y equivale a septiembre; estaciones como Argentina. Declaración directa del autor. | Las fuentes registran la fiesta al inicio de primavera y Aurora como moneda, pero no el calendario mensual. | `1 Canon oficial/lore/calendario.md`, únicamente cuando se consolide. La equivalencia Aurora/septiembre está respaldada; los otros once nombres siguen como propuesta del asistente sin aprobación recuperada. |
| CH08 | **Fiesta de las Luces:** hay material para el DM con ocho juegos y reglas concretas. El autor pide quitar los premios prefijados: los asignará personalmente; cada juego entrega su premio. | Historia urbana solo registra la celebración. No hay documento local independiente de juegos. | `2 Desarrollo/herramientas-campana/fiesta-de-las-luces.md`. EN DESARROLLO: preservar borrador y reglas aportadas sin completarlas ni usar PNJs añadidos por el asistente como aprobación automática. |
| CH09 | **Alegre Vagabundo:** el autor registra que un guerrero nuevo compró laúd y funda de buena calidad por **6 PO**. Laúd de arce, cuerdas de tripa, barniz cálido; funda rígida de cuero con forro y correa. Es **no mágico, sin bonus mecánico**; anima al grupo en sentido narrativo. | No aparece en los Markdown locales. No hay identificación explícita del comprador con Corwin en el fragmento recuperado. | `1 Canon oficial/oneshots/preludio.md`, dentro del registro de esa sesión. Conservar el objeto y compra sin adjudicarle portador por inferencia. |
| CH10 | **Resultado de mesa del Enigma:** el autor relata que necesitó orientar bastante a los jugadores, que esperaban combate final pero recibieron conocimiento, y que hubo fallos peligrosos en el puente humano. Cambia expresamente el título a **Las Crónicas de Rheem - El Enigma de los 4 juramentos**. | Crónicas incluye título y resumen general, pero no esos detalles de mesa. Conserva numeración «II»; el autor había pedido no usar volúmenes para aquellas crónicas aisladas. Esa preferencia editorial histórica no anula la campaña posterior. | Registro del preludio, distinguiendo título, resultado jugado y estructura posterior de campaña. No identificar automáticamente todos los títulos de escenas como aventuras distintas. |
| CH11 | **Escritura aureliana:** retoque cosmético; conservar símbolos originales y facilidad de escritura a mano. El autor propone familias visuales para vocales, consonantes y RR/LL/CH, y pide comparar alternativas sin cerrar el diseño todavía. | Alfabeto conserva base y carácter cosmético pendiente, pero no todos esos criterios de diseño y uso en mesa. | Notas de diseño en `1 Canon oficial/arte/` con enlace al alfabeto de lore. EN DESARROLLO. No alterar equivalencias, glifos base ni gramática. |
| CH12 | **Dirección visual:** el autor acuerda con dos resultados del análisis y propone escenas por entorno, personajes/props y dos o tres pruebas por continente usando mapa y trasfondos. El análisis del asistente favorece formas expresivas, color organizado, sombras legibles y evitar puntitos blancos; las pruebas posteriores siguen abiertas. | Referencias locales presentes; no hay guía textual equivalente. No se verificó correspondencia entre cada aprobación del chat y cada imagen local. | `1 Canon oficial/arte/direccion-visual-en-desarrollo.md`. Registrar preferencias y pruebas como desarrollo, sin declarar arquitectura/culturas continentales ni imágenes aprobadas por mera ubicación. |

## Mensajes que sustentan el cruce

Los títulos se conservan tal como los devuelve la app; los mensajes completos recuperados están en el archivo de evidencia.

| Hallazgo | Chat | ID de mensaje del autor |
|---|---|---|
| CH01–CH02 | Diseño sistema armas leyenda | `8e34e881-9759-4e97-ab75-c503b34d2f47` |
| CH01, portabilidad | Diseño sistema armas leyenda | `ec331d74-ee78-4862-bf4c-461f21843ae7` |
| CH01, guía preliminar | Diseño sistema armas leyenda | `1bc511a6-190c-428d-8e3a-c1673f62c5f1` |
| CH02–CH03 | Revisión de plots Aurelianos | `26bf4652-dfac-4f38-8fe4-360aef05f073` |
| CH04 | Herramientas de campaña | `bbb21acb-3a13-44a3-9d4f-221ad37bc43b` |
| CH05 | Herramientas de campaña | `bbb2138b-d3d6-4b0e-927b-84b516a6f058`; `bbb21ce0-ffe3-4617-8829-f98f4733957e` |
| CH06 | Desarrollo de Aldren | `bbb21c9c-88d3-45f0-93f6-278fd986af42` |
| CH07 | Material para el DM | `bbb214e5-7e6b-4c67-8ce6-84c59486fa0a` |
| CH08 | Material para el DM | `bbb21d11-d642-441d-a008-479f7e867662` |
| CH09–CH10 | Enigma y Acertijo Romanance | `bbb21eac-fe8b-49c0-862a-2e79277f6d4a`; título `bbb21306-062c-480c-9a62-64b4cc638e6c`; volúmenes `bbb21ec9-b257-468d-845f-d67a110c5236` |
| CH11 | Sistema de escritura aureliano | `621b8d1d-0a0e-4431-a547-bf80835aac03`; `18cd2cb2-a729-4775-ab81-6453961343cc`; `91a80867-c653-4260-b4f7-faa94ff33d9f` |
| CH12 | Análisis visual de Romanance | `8ae87d7e-4b59-4802-a8d5-96ff74c8ee2e` |

## Borradores y afirmaciones que no se adoptaron como 1 Canon oficial

- Armas: Dormida/Despertar/Resonancia/Legado/Revelación son alternativas en el pedido del autor, no una progresión definitiva recuperada. La propuesta de culminar el hilo de la espada en Arco III/Aldenor no cierra ese recorrido. No conectar al mago histórico Zephyr con armas, linajes o plots.
- Drix: sacar combates de Problema y la aparición de un dragón rojo extraordinario son posibilidades discutidas, no cartas cerradas. La referencia al Mazo de Maravillas 3.5 es histórica; no convierte Drix en Deck of Many Things ni autoriza copiar efectos oficiales.
- Calendario: Floreal/octubre, Luminaria/noviembre, Solsticio/diciembre, Zenith/enero, Brasa/febrero, Cosecha/marzo, Ocaso/abril, Hojasca/mayo, Escarcha/junio, Umbría/julio y Renacer/agosto provienen de una propuesta del asistente. No se recuperó aprobación posterior.
- Fiesta: el borrador usa «Carrera de Sacos del Alcaide»; la respuesta del asistente introduce Alcaide Orven. No se incorporaron nombre/cargo ni se aplicó ese título a Jarsag. También faltan criterios de resolución en algunos juegos; no se corrigieron mecánicas ni se conservaron premios que el autor pidió quitar.
- La crónica escrita por el asistente menciona cuatro fundadores y «Corazón de la Piedra». Sin recuperar el adjunto de sesión, no se usan esas expresiones para revocar los cinco fundadores ni Lunargenta de las fuentes actuales. No se introduce una contradicción nueva a partir de una narración no verificada.
- Las escenas visuales, sus edificios, props y culturas añadidos no se convierten en lore por aparecer en una prueba. El JSON adjuntado al chat visual es de septiembre; el local de octubre sigue siendo la exportación más reciente disponible.

## Datos ya volcados y fuentes históricas

**Biblioteca:** el autor especificó al menos cuatro pisos, a dos cuadras de la plaza y en una esquina, como símbolo del saber, en «Imágenes referenciales one-shot», mensaje `5da9b0e7-fc9b-4694-a283-967362b0ad45`. Cuatro pisos y dos manzanas ya figuran en Historia:34 y PNJs:101. La ubicación en esquina y el carácter de símbolo quedan como detalle adicional a cotejar durante organización de referencias, sin tocar el mapa.

**Aldren:** el cierre fundacional y Semielfo ya tienen fuente local; no se trata su ficha como perdida porque la respuesta del chat aparezca como referencia. Conservar R04 del plan: el compilado de PNJs ya contiene una corrección explícita de su especie.

**Economía inmobiliaria:** «Puzzle en Dungeon Lúgubre» enlaza el Markdown ya presente con el mismo nombre. Los precios sugeridos antes de esa exportación son borradores; no desplazan automáticamente la tabla consolidada. La contradicción local C21 sigue pendiente.

**Moneda:** «Confusión en símbolos monetarios» conserva preferencias de reverso unificado y farol/seis símbolos. El documento local ya consolida moneda y equivalencias. La afirmación antigua de que aún faltaban PNJs o continentes refleja esa etapa y no describe el estado actual.

**Fuentes antiguas ausentes:** el autor aclaró en esta sesión que faltan porque fueron consolidadas anteriormente. Se registra esa explicación como procedencia histórica, sin reclamar su recreación ni suponer pérdida de contenido. Este informe no certifica identidad de todo archivo antiguo que no está disponible. Un desarrollo posterior no volcado es un caso distinto de una fuente anterior reemplazada.

**Otros chats:** los fragmentos de «PNJ para partida rol» tratan entregas y arte; «Valoración rápida de PJs», ayudas de reglas; «Crónicas de Rheem 2», una referencia de vestuario sin personaje identificable; «Imagen Lunargenta Ambient», una portada musical solicitada. No aportan, en lo recuperado, fundamentos que autoricen cambiar el 1 Canon oficial local. No se abrieron imágenes ni enlaces externos.

## Contradicciones que siguen detenidas

- **C03 resuelto posteriormente:** secuencia Morvath → cordillera → año intermedio → fiesta 435 → emboscada → reencuentro documentada por el autor y aplicada en cronología activa y trasfondos v1.1. El estudio de Kharag ocurrió antes del regreso de Rheem del bosque; no se inventan fechas exactas ni viajes intermedios.
- **C16 temporal resuelto posteriormente:** el autor confirma llegada 429 D.R., cinco años al Preludio de 434 y aproximadamente seis a Campaña I de 435; Jantry 17–18 y Elián 200, llegado unos días antes. Aplicado en [tanda 2](<CONSOLIDACION_TANDA_2.md>). Viaje de 3½ días obsoleto tras desarrollo continental; ruta y duración exacta pendientes.
- **C23:** el autor entregó «parte de la sesión de ayer» para revisión antes de canon, en «Revisión de plots Aurelianos», mensaje `bbb211f2-7228-49d0-8985-bfda59993df7`. Hay narración de sesión posterior, pero el adjunto y la respuesta no se recuperaron. Eso no certifica que todas las opciones preparadas para sesión 2 ocurrieron.
- Los demás C del [plan de migración](<PLAN_MIGRACION_FASE_1.md>) no quedan resueltos por esta ronda.

## Propuesta operativa siguiente

1. Crear registros de estado de armas y ajustes de Drix a partir de CH01–CH05, con sus fuentes y límites; sin rediseñar sistemas ni completar cartas.
2. Recuperar el texto preliminar de armas y el efecto completo de Deseo torcido antes de declarar esas herramientas íntegramente volcadas.
3. Consolidar detalles explícitos sin conflicto —Aurora/septiembre, compra del laúd, notas cosméticas— en sus destinos, siguiendo la matriz de preservación del plan.
4. Mantener cronología de Jantry, resultados de sesión y mecánicas ambiguas fuera de cualquier cierre automático hasta resolverlos.

En esta ronda solo se crearon evidencias e informe y se actualizó el diagnóstico operativo del índice/plan. No se editaron, movieron ni borraron fuentes existentes; no se tocaron imágenes ni el JSON de Azgaar. No hubo commits ni push.
