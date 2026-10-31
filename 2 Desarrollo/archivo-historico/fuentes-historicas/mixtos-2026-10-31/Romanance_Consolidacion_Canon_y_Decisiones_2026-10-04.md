# Las Crónicas de Rheem - El Ciclo de Romanance
## Consolidación de canon, cambios y decisiones — 4 de octubre de 2026

**Versión de este snapshot:** 1.0. **Etapa:** Fase 1, consolidación de canon. **Sistema de referencia:** D&D 5.5e, edición 2024.

Este archivo sirve como puente descargable entre el proyecto de ChatGPT y el trabajo local en Romanance. Reúne las decisiones recuperables, su cruce con las fuentes y las cuestiones que todavía requieren resolución. Incluye al final las fuentes Markdown únicas disponibles, para preservar los detalles que no se repiten en la síntesis.

**Alcance y límite:** se revisaron los 20 archivos Markdown disponibles, el JSON de Azgaar y el inventario de tres imágenes. Las imágenes se registran por archivo, sin dictamen visual. La consulta de «Valoración Del Lore Base» devolvió cinco intercambios recientes y ningún cursor hacia mensajes anteriores. Las decisiones conversacionales de este snapshot provienen principalmente del resumen de continuidad que el asistente escribió allí; no se recuperaron los intercambios originales en que el usuario cerró cada decisión. No se presenta esta reconstrucción como una recuperación exhaustiva de todos los chats del proyecto. Los chats propios de las herramientas tampoco se recuperaron.

**Fuentes de referencia:**

- **[P]** Instrucciones actuales del proyecto y `AGENTS.md`, aportadas en esta tarea.
- **[C]** Conversación [Valoración Del Lore Base](chatgpt-conversation://6a871878-93f4-83e9-b0c6-e26981fe320e), id `6a871878-93f4-83e9-b0c6-e26981fe320e`; resumen de continuidad y estructura allí registrada.
- **[B]** `Biblia_de_Romanance_Canon_Base.md`, núcleo fundacional v1.5 y documentos incorporados.
- **[N]** `PNJs_Principales_Romanance.md`.
- **[T]** `trasfondos_personajes_romanance.md`, v1.6.
- **[A]** `Anexo_Aureliano_Romanance.md`, v1.0.
- **[I]** `Anexo_Oficial_Romanance_Inteligencias_Hierofante.md`, v1.2.
- **[R]** `CRÓNICAS DE ROMANANCE.md`.
- **[Q]** `Plots_y_Arcos_Arco_I_Aurelianos.md`, post-Sesión 1 / pre-Sesión 2.
- **[M]** `Mundo Sebas Full 2026-10-04-00-22.json`, exportado el 4/10/2026 a las 00:22:41 de Buenos Aires, Azgaar 1.153.1, escala 3 km por unidad gráfica.
- Las demás fuentes se identifican por nombre en cada apartado y en el inventario final.

## 1. Cómo interpretar este documento

| Estado | Significado en este snapshot |
|---|---|
| CANON CERRADO | Decisión expresamente registrada como aprobada o resuelta en las fuentes accesibles; se indica su procedencia. |
| CAMBIO NUEVO REGISTRADO | Cambio recogido en [C] o en una revisión explícita de una fuente, todavía ausente o aplicado solo parcialmente en otras. No significa que el cambio se haya decidido hoy. |
| CANON EN CONSOLIDACIÓN | Información respaldada que necesita integrarse o conciliarse; una contradicción sin resolución no se convierte en canon cerrado. |
| EN DESARROLLO | Diseño en curso; puede incluir decisiones cerradas para testing, sin ser un sistema definitivo. |
| PENDIENTE | Dato abierto, conflicto, fuente faltante o aprobación no verificable. |
| ARCHIVADO | Estado objetivo para fuentes sustituidas; no se movió ningún archivo en esta tarea. |

No se elige una versión por su nombre, sufijo de copia o fecha del sistema de archivos. Se usan historiales de cambios y reemplazos explícitos. Las instrucciones actuales [P] prevalecen sobre las instrucciones antiguas orientadas a publicación. Los hechos de una mesa, las propuestas para una sesión futura y el canon universal se distinguen expresamente.

## 2. Decisiones generales cerradas y modo de trabajo

- La obra se llama **Las Crónicas de Rheem - El Ciclo de Romanance**. [P, C]
- La prioridad es coherencia y cohesión antes que generar contenido nuevo. No inventar nombres, PNJs, lore, tramas ni mecánicas para completar lagunas. [P]
- Fase 1: ordenar PNJs, plots y subplots, arcos argumentales, lore, resúmenes de OneShot y arte. No agregar categorías sin necesidad concreta y recurrente. [P]
- La especie original **Inteligencias Encarnadas** y la clase **Hierofante de la Luz** son elementos centrales del canon interno, no contenido genérico intercambiable. No alterar sus fundamentos sin indicación. [P, I]
- Las herramientas de campaña tienen desarrollo propio. El repositorio registra estado, versión y dependencias; su organización no autoriza rediseñarlas. [C]
- El usuario ya trabaja localmente desde VS Code y hará los commits y push cuando corresponda. Este snapshot no ejecuta una migración ni crea una rama. [C]
- `sources/` es referencia sincronizada de solo lectura. No editar, mover, renombrar ni eliminar esos archivos. [P]
- No iniciar manuales ni módulos publicables hasta indicación explícita. `instrucciones-proyecto.md`, orientado a módulos/PDF, describe una fase futura y no el objetivo vigente. [P]

## 3. Canon cerrado: núcleo del mundo

### 3.1 Luz, conocimiento y cosmología

La **Luz** no es una deidad personal ni magia común: hace posibles conciencia, razón, memoria sana, compasión y voluntad libre. **Verdad → Luz → Conocimiento → Libertad** es la cadena filosófica central. «La Fuente de toda verdad» nombra a la misma Luz. La fe vinculada a ella se demuestra mediante servicio, cooperación, memoria común y protección de los débiles; esa práctica genera Sabiduría y poder. No toda revelación produce Luz: algunas consumen la libertad de quien las contempla. [B v1.1–1.3]

**Lumenor** es el mundo; **Terenor**, el continente de Romanance; **Aldenor**, el continente oriental, conocido popularmente en Terenor como **Ostenmark**. **Solenor** y **Selunar** son el sol y la luna; «luminar mayor» y «luminar menor» son apodos poéticos. No son deidades. Fases lunares, eclipses, mitos de origen y equivalencias aurelianas siguen sin desarrollar. [T v1.3, Cosmologia_Lumenor.md]

**Cuestión abierta de formulación:** «sin panteón» no equivale a «sin dioses en todo el mundo». [B] admite otras fuerzas y politeísmo; Tömörbaatar sirve a Cesa y Aethragar tiene dioses de montaña propios. No suprimir esas referencias ni convertir la Luz en un dios para homogeneizar los textos. La expresión «poloteísmo por principios, sin panteón divino» de Cosmología necesita conciliación con esas fuentes.

### 3.2 Aurelianos, Silente y Lunargenta

- Los **Aurelianos** fueron una civilización humanoide extinta, procedente de otro plano o región exterior al mundo conocido; no eran dioses ni seres perfectos. Su rasgo central era la custodia del conocimiento peligroso. Romanance es heredera cultural de sus valores. [B, A]
- **Nhal'Sereth** es el nombre aureliano del **Silente**. Es una conciencia antigua y distribuida, parcialmente fuera del tiempo y de los planos, que se fortalece al ser recordada o comprendida. [B v1.3–1.4]
- Su peligro es ontológico y acumulativo: recuerdo → resonancia → obsesión → pérdida del yo → convergencia de conciencias. No reducirlo a maldad moral ni corrupción instantánea. [B]
- **Lunargenta** es el nombre verdadero del mineral azul: Luz cristalizada contaminada por ecos del Silente. «Mineral azul», «cristal azul» y «fragmento lunar» son apodos del mismo material. Amplifica percepción y memoria, pero transmite ecos peligrosos. [B v1.4]
- El ritual de contención fragmentó la Luna. Los cristales y fragmentos lunares son anclas del sello; romperlas aumenta la influencia del Silente. [B]
- El cristal élfico de Jantry pertenece a un hilo distinto; no identificarlo con Lunargenta. [Q, T]

### 3.3 Cinco Juramentos y Heredero

La Biblia v1.4 unifica tres capas de nomenclatura; no son tres sistemas diferentes. [B]

| Farol / color | Función de campo | Valor filosófico | Virtud abstracta |
|---|---|---|---|
| Camino / blanco | Guiar a los perdidos | Verdad | Libertad |
| Velo / azul | Ocultar lo que destruiría al mundo | Deber | Trabajo |
| Piedra / verde | Mantener viva la esperanza | Compasión | Generosidad |
| Silencio / gris | Callar ante la tentación | Humildad | Valor |
| Memoria / rojo | Custodiar la verdad indecible | Custodia | Sin equivalente en la tablilla de las Cuatro Estatuas |

El Quinto Custodio guarda el cristal central, espera un sucesor y solo puede dejar su deber cuando otro asuma voluntariamente el Quinto Juramento. Interroga intenciones; no ataca por defecto. El nicho vacío no implica que nunca existió un quinto custodio. [B v1.4, A]

**Canon universal:** espera al **Heredero**, posible sucesor voluntario. **Opciones de mesa, no canon obligatorio:** un individuo digno, un PJ descendiente del sobreviviente de la Orden o una party completa. Las opciones de linaje y de grupo pueden coexistir. [B]

La frase final del Custodio sobre el segundo santuario es **condicional** a una resolución pacífica u honesta; no es un desenlace obligatorio para todas las mesas. [B v1.5]

**Pendiente:** [A] numera Humildad, Compasión, Verdad, Deber y Custodia en un orden distinto al de la tabla de [B]. La tabla correlaciona nombres y colores, pero no resuelve por sí sola si ambos textos usan la misma numeración ritual. Conservar las virtudes y marcar la cuestión; no renumerar automáticamente.

### 3.4 Orden de Bibliotecarios, Morvath y Culto Lunar

Hacia ~100 D.R., la Orden de Bibliotecarios confundió iluminación con revelación absoluta al investigar el mineral azul y sufrió influencia del Silente, ruptura y violencia. Morvath destruyó textos peligrosos, eliminó a quienes ya estaban corrompidos, se convirtió voluntariamente en lich, ancló su existencia a un medallón y se retiró a custodiar el conocimiento restante. Es un guardián trágico, no un villano convencional. [B]

Un sobreviviente fundó en secreto el **Culto Lunar**, activo durante más de tres siglos. Rechaza el olvido impuesto y cree que la unión de conciencias traerá paz. Interpreta al Silente como «Inteligencia Primordial» o «Primer Testigo»; no adora a un dios verdadero aunque lo venere como tal. Hereda rituales fragmentados, culpa y obsesión más que comprensión auténtica. [B, Q]

La **Orden extinta** y el **Gremio actual de Bibliotecarios y Eruditos** no deben fusionarse como si fueran la misma institución vigente. La continuidad institucional exacta requiere cuidado. [R, N, Gremios_de_Romanance.md]

## 4. Cambios nuevos registrados y correcciones por aplicar

### 4.1 Cronología, cargos y nombres

| Decisión registrada | Fuente | Situación en los archivos |
|---|---|---|
| El Preludio termina en **434 D.R.**; Campaña I comienza en **435 D.R.** | [C], [R], [T v1.5] | [R] termina describiendo el mundo en 434 y enlazando el comienzo de campaña; separar ambos momentos. [M] configura el año 435. |
| Jarsag es **Alcalde**; no tiene cargo separado de «alcaide» | [C, N] | La cronología y sección 10 de [B] todavía dicen «alcaide». |
| Llegó aproximadamente 50 años antes del presente, a los 25 años | [C, N] | [N] usa llegada en 384 y presente 434; la introducción urbana de [B] dice «hace un siglo aproximado». Corregir ese siglo. En 435, la duración exacta necesita referencia temporal; no fijar una nueva fecha de llegada. |
| **Halden** reemplaza definitivamente a **Lanre** | [C, T v1.6] | Aplicado en [T] y [M]; pendiente en Biblia, Arco I, Biomas y tablas. |
| **Corwin** reemplaza a **Kvothe**; **Selia** a **Denna**; **Wren** a **Auri** | [T v1.6] | Los documentos incorporados a [B] y [Q] conservan nombres anteriores. El historial declara que los nombres nuevos son los reales, ocultos por algo del pasado; no desarrollar la causa de ese ocultamiento. |
| **Marren** es la ciudad hermana rival de Halden, no «Brims» | Tabla_Viaje_Continental_Romanance (2).md | Integrar grafía y nuevo nombre de Halden en todas las referencias. |
| **Lyren** es la ciudad; **Zephyr**, el Cónclave arcano allí ubicado | [C] | [M] ya contiene Lyren. No aparece un documento específico del Cónclave entre las fuentes disponibles. |

Las sustituciones son decisiones editoriales explícitas; no se usan para alterar acciones ya jugadas. En transcripciones históricas, los nombres anteriores pueden conservarse con una nota de equivalencia. Este snapshot usa los vigentes en su síntesis; el anexo conserva los originales.

### 4.2 Gobierno y Cónclave

Decisiones registradas en [C]:

- **Romanance:** ciudad libre gobernada mediante acuerdos entre Alcalde, Consejo, voz formal de gremios y reuniones públicas. Evitar imponer etiquetas políticas modernas. [B] contiene formulaciones antiguas de «gobierno de libre mercado» que no deben sustituir esta descripción institucional.
- **Levit:** filosofía cívica ampliamente similar, pero independiente; no subordinada automáticamente a Romanance.
- **Krâthor:** asentamiento de cultura Goliath.
- **Tömörsag y Varsak:** zonas portuarias/comerciales, con administración práctica y sin gobierno territorial convencional. [M] las clasifica como `trading_post`, con `state=0`.
- **Zephyr:** existió un gran mago histórico cuyo nombre recibió el Cónclave en homenaje. Es un dato anecdótico; no vincularlo por iniciativa propia con plots, objetos, linajes o PNJs.
- El Cónclave no controla toda la magia del mundo ni persigue a usuarios independientes solo por serlo. Su intervención fuera de su territorio se limita a amenazas mágicas de escala relevante para el mundo.
- **Port Ersag** y **Licove** no son canon. **Aetherion** se trata como ruinas.

### 4.3 Cambios ya documentados en los elementos originales

El anexo [I] declara expresamente que reemplaza el documento independiente `Hierofante de la Luz.md` y la versión condensada anterior.

Cambios cerrados en su v1.2:

1. Evitar duplicar *Mensaje*: si ya se conoce por otra vía, Eco de memoria permite aprender otro truco de Mago o Hierofante.
2. Resonancia básica cuesta 1 si el objetivo es uno mismo; desde nivel 11 cuesta 2 para otra criatura.
3. El Linaje se elige una sola vez en la especie a nivel 3. Custodio, Resonante y Errante profundizan ese mismo árbol en niveles de clase 6, 13 y 18 si se toma Hierofante.
4. Se retiran «Mente inquebrantable» de nivel 7 y «Resonancia perfecta» de nivel 15. No reintroducirlas desde el archivo obsoleto; tampoco restaurar su dado d8 en nivel 15.

**Fundamentos que se preservan:** especie Humanoide, Mediana, velocidad 9 m, vínculo con Luz/memoria/Resonancia y lenguas Común/Aureliano; clase exclusiva de esa especie, d8, Inteligencia/Sabiduría y rol de apoyo, percepción, memoria y protección de la libertad interior. Los detalles completos están en el anexo documental.

**Aprobación narrativa no equivale a mecánica totalmente especificada:** [I] aún deja sin cantidades o límites precisos algunos rasgos de linaje y no define por completo la economía de lanzamiento de conjuros, CD o progresión de acceso. No completar esas reglas por inferencia ni reemplazarlas con una clase oficial.

## 5. PNJs: información consolidable y límites

| PNJ | Rol, motivación y relaciones documentadas | Estado / apariciones verificables |
|---|---|---|
| **Jarsag** | Minotauro, Alcalde, explorador 19; impulsa expediciones y crecimiento. Custodia conocimiento junto a Kharag, no el cristal físicamente. | Activo en Romanance; menciones del Preludio y rutas previstas de investigación del Arco I. Su visión junto a «fundadores» requiere conciliación cronológica. |
| **Kharag** | Orco, mago 20, Escuela de la Forja Arcana; dirige El Orco Sabio, imbuye el Gran Farol, colabora con Batai/Tömörbaatar. Da pistas y reconoce sus límites. | Activo; ya vio el medallón en la historia de Morvath; intervención futura del Arco I prevista. |
| **Batai** | Humana, clériga 16, Dominio de la Vida; armera y formadora de aspirantes. Poder por la Fuente de toda verdad. Colabora con mineros y forjadores. | Activa; compañera Kuba, halcón, vínculo narrativo. No hay lista exhaustiva de OneShots. |
| **Tömörbaatar** | Semiorco, guerrero 18, Campeón, herrero/mercenario. Evolucionó de CN a CB; conserva servicio secreto a Cesa. | Activo; La Llama Eterna. Forja especial remitida a fuente ausente. |
| **Temay** | Mediano, mercader y sacerdote narrativo; Bardo 8 / Explorador 2, total 10. Busca fama mediante comercio, no es clérigo. | Activo; reglas específicas de mercadeo remitidas a fuente ausente. |
| **Ethen** | Elfa del bosque, druida 17, herborista. Origen exacto no fijado; vuelve a Romanance tras sus viajes. | Activa; impulsa búsqueda de hierbas de Sesión 1. Brawsta, zorro rojo, vínculo narrativo; bloque de Chacal reflavoreado. |
| **Deren** | Humano, 60 años, historiador/archivista, presidente del Gremio de Bibliotecarios y Eruditos. Filtra hallazgos y deriva a Kharag cuando exceden su saber; no lee Aureliano, reconoce su escritura. | Ficha en [N]; recepción del medallón es escena futura en [Q], no hecho jugado. Incidente que explica su cautela abierto. |
| **Aldren el Precavido** | Archimago de 160 años, vivo en 435, originario de Los Lagos del Gran Oeste. Humor funcional, sistemas de protección y contingencias. Ocultó la tablilla de Cuatro Estatuas tras estudiarla parcialmente. | Autor de protecciones ya superadas; encuentro futuro en Arco I. Ubicación actual y especie contradictorias entre fuentes. |
| **Morvath** | Guardián trágico de conocimiento prohibido; antiguo lich ligado a un medallón. | En la mesa, liberado y en descanso definitivo según [R]; el relato histórico de [B] no implica que siga activo en el presente. |
| **Quinto Custodio** | Guardián del cristal central; espera sucesión voluntaria. | Encuentro del Preludio; situación universal definida, destino exacto posterior de esta mesa no inferido. |
| **El Vigía** | Líder de los atacantes del Culto Lunar, conoce cómo combate Rheem. | Escapó en Sesión 1; hilo activo. Nombre propio y ficha no disponibles. |

Jarsag y Kharag conocen la verdad del cristal y los Cinco Custodios, pero **no conocen al Heredero ni la existencia del Culto Lunar** según [B v1.4]. No hacer que expliquen automáticamente esas dos cosas. Aldren entiende sellos y protecciones, pero no toda la historia ni el significado completo de los Juramentos. Deren conoce solo la versión pública de la caída de la Orden.

**Deren — divergencia por resolver:** [N] contiene humano nivel 16 sin clase de aventurero, trasfondo Escriba, INT 20/SAB 18, competencia +5 y PG 160; [Q] y el bloque incrustado en [B] contienen Sabio, INT 18/SAB 16, competencia +2 y PG 36. La ficha independiente parece una elaboración posterior, pero no hay historial explícito que cierre el reemplazo. Preservar ambos registros y solicitar decisión antes de activar una mecánica única.

**Aldren — divergencia por resolver:** el canon fundacional y [Q] lo llaman Semielfo; [N] lo llama Elfo, Linaje del Lago, y desarrolla una ficha de mago 20/Arquitecto Arcano. No convertir automáticamente el linaje regional en especie nueva ni asumir que cambia su origen. Ciudad natal, laboratorio, bastón, ilustración, juventud y relación profunda con el Silente siguen abiertos.

**Curación y Rocío de Ethen:** no hay pociones estándar originarias de Romanance; las extraplanares se alteran en bonos temporales. Los conjuros de curación siguen funcionando. [N] especifica Rocío base: +1d4 a una prueba, salvación o conjuro de curación, una vez dentro de la hora de beberlo, elaboración narrativa por Ethen; versiones superiores pendientes. El mismo documento conserva una regla general de elaboración de brebajes por 1 día/25 PO y remite a `Reglas_Forja_Mercadeo_Pociones.md`, ausente. Queda abierta la relación entre la elaboración narrativa particular y la regla general; no borrar una ni inventar cómo se aplica el bono a un conjuro.

Las fichas transcritas contienen afirmaciones sobre reglas oficiales/SRD. Este snapshot las conserva como texto de proyecto, sin certificar su exactitud normativa ni legal.

## 6. Personajes, plots y arcos de esta mesa

### 6.1 Trasfondos actuales

- **Corwin:** humano, guerrero y luthier residente en Levit, nacido en Halden; padre Lorren, madre Selia, amistad/primer amor Wren. Espada del abuelo: «Mi piedad prevalece ante tu ira»; tablillas familiares pendientes de investigación. La posible sangre aureliana se siembra como sospecha, no se confirma ni explica retroactivamente éxitos jugados. [T, Q]
- **Anic:** Goliath, brujo, 16 años, aprendiz de constructor; pérdida de Lyriel, conflicto familiar y pacto con un ser no identificado. Krâthor es el hito geográfico de su trasfondo; no adelantar el desarrollo pleno de ese hilo. [T, Q]
- **Elián:** alto elfo, paladín/bibliotecario en Levit; Aetherion destruida tras la corrupción permitida por su maestro Aurelion Vaelthar. Tridente ceremonial y cabello rojo como memoria de la pérdida. [T]
- **Jantry Emberflame / Janne Glowbend:** humana, pícara/asesina, 18–19 años; Berk destruida, padre Armaros muerto, madre cautiva según la revelación paterna. Acrofobia narrativa, sin regla añadida. Búsqueda materna disponible como subplot separado del núcleo lunar; no volver a los elfos enemigos universales del mundo. [T, Q]
- **Spriggan:** Goliath paladín itinerante, Vigía de Aethragar, Aldenor; Hermandad de los Vigías encabezada por el Vigía Mayor, tradición teocrática propia. Alba de Hierro perteneció a Aldric el Inquebrantable; no consciente, contiene un fragmento de su espíritu. No hay decisión que la incorpore al sistema provisional de armas. [T]
- **Maximus:** en esta mesa desciende del sobreviviente de la Orden que fundó el Culto Lunar; su familia es la no restaurada en Levit. Hilo Heredero/Culto Lunar reservado hasta el regreso del jugador, registrado para 2028. No confundir este linaje con el posible linaje de Corwin. [Q]
- **Nyilpuska Kovacs y Patricio:** nuevos integrantes en Sesión 1 de Arco I; explorador y pícaro nivel 3, respectivamente. No hay trasfondos completos disponibles. [Q]

**Pendiente temporal de Spriggan:** [T v1.5] dice que no viajó con Rheem a la cordillera, pasó cerca de un año buscándolos y se reencontró al inicio de Campaña I en 435. [Q] lo declara ausente en esta etapa. Un reencuentro no prueba participación en la emboscada; falta ordenar su presencia entre esas escenas. El año intermedio está expresamente por completar.

### 6.2 Preludio jugado — final en 434 D.R.

Registro de [R], conservando su secuencia:

1. **Las Crónicas de Rheem — Morvath:** aldea arrasada, medallón, viaje a Romanance, ruinas, encuentro, destrucción de textos, liberación de Morvath y restauración incompleta de la aldea.
2. **Interludio del Nuevo Compañero:** OneShot independiente; sin consecuencias relevantes declaradas para el arco lunar.
3. **El Enigma de los Cuatro Juramentos:** cámara/monolito, activación del santuario, temblor y alteración de la salida.
4. **El Quinto Juramento:** faroles, puente invisible, Custodio, nichos, juramento voluntario, visión lunar, círculos encendidos, retorno y grieta visible.

Los documentos también usan «Cuatro Estatuas». Falta fijar si designa exactamente el mismo OneShot, un nombre de trabajo o una parte del recorrido; no crear una sesión adicional por diferencia de título.

### 6.3 Campaña I — Arco I activo, 435 D.R.

**Hechos de Sesión 1:** semanas después de la Fiesta de las Luces, Ethen pidió hierbas. Se formaron tres parejas: Elián/Jantry, Anic/Corwin y Nyilpuska/Patricio, sin punto de reencuentro. Obtuvieron las hierbas y sufrieron la emboscada. Salieron vivos, golpeados, no revisaron cuerpos y acamparon de regreso a Romanance. El Vigía escapó. [Q]

**Contradicción abierta del recuento:** [Q] presenta seis atacantes; luego dice «5 de 6 cultistas muertos», «1 se suicidó» y que el líder escapó. Si el suicida está incluido entre los cinco muertos, el total puede cerrar; si es adicional, excede seis. No fijar siete atacantes ni seis bajas: aclarar la inclusión del suicida. El snapshot preserva únicamente la fuga y la ausencia de bajas de PJ como resultados inequívocos.

**Causalidad cerrada para esta mesa:** el juramento permitió que la Lunargenta/Silente percibiera a Rheem; el crecimiento del culto lo despierta gradualmente. Los atacantes son sicarios parcialmente adoctrinados del culto. Su vínculo puede involucrar miedo/geas/juramento, pero la alternativa exacta no está elegida. Esto no equivale a canon universal de que todo atacante futuro pertenece al culto. [Q]

**Planeado, todavía no jugado:** campamento con sensación de vigilancia sin tirada mortal; llegada a Romanance alrededor de las 15 h, entrega de hierbas e investigación del medallón. Rutas biblioteca → Deren/Kharag → Jarsag, Jarsag → biblioteca o rumores si no investigan. Confirmación de la Orden y pista hacia Aldren; una posible tirada CD 13–14 siembra familiaridad de Corwin con tablillas. No registrar estos resultados como obtenidos. [Q]

**Reestructuración registrada:** se abandona la duración obligatoria de tres sesiones para Arco I y se usan fases:

- Emboscada e investigación local, actualmente en curso.
- Aldren y Segundo Santuario, clímax previsto del Arco I, en zona alcanzable.
- Halden y Marren, viaje largo reservado para Arco II/III futuro.

La Biblia proyecta tres arcos de tres sesiones y Convergencia; [R] presenta cinco grandes arcos distintos. [Q] solo redefine con claridad el Arco I de esta mesa. **Pendiente:** armonizar la arquitectura global y los títulos; no borrar los otros planes ni declarar confirmada una campaña de cinco arcos.

### 6.4 Desarrollo cultural registrado, pendiente de integración

[Q] registra como marco adoptado tres corrientes aurelianas: custodial de Romanance (herencia de valores), disidente (origen filosófico remoto del culto) y fusionada (dilución entre pueblos nativos). Registra antigüedad de 1000+ años y calendarios A.R./D.R. y A.F./D.F. con el mismo punto cero, la fundación de Romanance. El propio documento pide formalizarlos en la Biblia; mantenerlos como **CANON EN CONSOLIDACIÓN**, con ámbito de campaña señalado.

**No confundir:** la corriente disidente remota explica un origen filosófico; el fundador histórico del Culto Lunar sigue siendo el sobreviviente de la Orden hacia ~100 D.R. No hay resolución explícita de toda la transmisión entre ambos.

**Reservados:** otros santuarios, Vedalken/Aldenor, historia ancestral de Morvath de más de 300 años atrás y Maximus. La escritura formal y el dungeon del Segundo Santuario tienen desarrollo pendiente en chats propios; no se diseñan en esta tarea.

## 7. Geografía: mapa actual, datos históricos y pendientes

**Decisión registrada:** la geografía no está cerrada en su totalidad. El JSON más reciente es referencia cartográfica para cruzar biomas y posiciones, pero sus estados, poblaciones o datos generados no se convierten automáticamente en lore. [C]

### 7.1 Cruce efectivo con la exportación disponible

| Lugar | Dato observado en [M] | Implicación documental |
|---|---|---|
| Halden | Asentamiento activo, pradera | Renombre aplicado; «Lanre» está obsoleto. Sus 7.654 habitantes calculados y grupo `capital` no concuerdan automáticamente con «pequeño pueblo» del trasfondo. Pendiente decidir tamaño/estatus narrativo. |
| Lyren | Asentamiento activo, pradera | Nombre urbano aplicado; relación con el Cónclave proviene de [C], no de este dato cartográfico. |
| Port Ersag / Licove | `removed=true` | Son residuos almacenados, no asentamientos activos ni canon. No hace falta borrarlos del JSON para reconocerlo. |
| Aetherion | Grupo `ruin`, bosque templado deciduo | Confirma tratamiento como ruinas. Sus valores de mercado/población generados no prueban reconstrucción. |
| Berk | Bosque de coníferas, grupo `capital`, población calculada 1.676 | Biomas dice desierto cálido y trasfondo aldea destruida. Registrar el bioma cartográfico actual; estado urbano/población narrativa abiertos. |
| Romanance / Levit | Bosque templado deciduo, `state=0` | Compatible con ciudades independientes. Romanance: población 5 con escala 1000, consistente con ~5.000. Levit: 0,923 (~923), frente a 600–900 en trasfondo; diferencia menor por revisar, sin imponer cifra nueva. |
| Tömörsag / Varsak | Puestos comerciales, `state=0`; sabana / bosque estacional tropical | Compatible con decisión de zonas comerciales sin gobierno territorial convencional. |
| Krâthor | Aldea, bosque estacional tropical | No convertir «montañas del norte» del trasfondo en bioma de alta montaña por inferencia. |
| Kelen / Khalan | Sabana / pradera; ambos `state=2` | Su relación con lagos y régimen narrativo siguen pendientes; pertenencia a un estado generado no los cierra. |
| Ilvandor / Marren | Taiga / sabana | Datos concordantes con la tabla de biomas; no recalculan por sí solos los viajes. |

Los biomas se verificaron cruzando el `cell` del asentamiento con la celda correspondiente y la tabla de biomas del JSON. Los cinco lagos nombrados en la exportación son Dalren, Redckerwick, Shanenala, Noniz'ruhn y Yeowey; **no se los adopta como nombres canónicos nuevos** ni se asignan a Kelen/Khalan sin resolución.

### 7.2 Distancias documentadas por ruta, pendientes de validación actual

La tabla `(2)` declara explícitamente un reemplazo de mediciones en línea recta por longitudes de caminos. [Q] y Biomas reproducen esos valores. Es una diferencia de método, no dos rutas intercambiables con el mismo tiempo. No se recalculó la red de rutas del JSON en este snapshot.

| Destino desde Romanance | Distancia histórica por ruta registrada |
|---|---:|
| Levit | 143,5 km |
| Ruinas de Morvath, vía Levit | 189,2 km |
| Ilvandor | 133,9 km |
| Tömörsag, vía Levit | 281,6 km |
| Varsak, vía Tömörsag | 523,8 km |
| Krâthor, vía Varsak | 649,7 km |
| Aetherion | 2213,5 km |
| Halden, vía Aetherion | ~2590 km |
| Marren, vía Aetherion | ~2652 km; 199 km desde Halden |
| Berk, vía Aetherion/Marren/paso de Berkan | ~3123 km |
| Aethragar | 1698 km **en línea recta**; requiere cruce marítimo no desarrollado |

**Pendientes y cautelas concretas:**

- Levit → ruinas de Morvath: **46 km**, confirmados por el autor el 2026-10-09. Se reemplazan las medidas anteriores por instrucción expresa, sin conservarlas como referencia histórica; los tiempos jugados no se recalculan en esta corrección.
- Los cuatro días jugados hacia Cuatro Estatuas deben cruzarse con Ilvandor de 133,9 km y ritmos reales por terreno; no resolverlos aplicando 48 km/día de llano a montaña.
- La escala continental genérica ~3000 × 2000 km y la medición ~2562 × 2181 km no son equivalentes exactas; validar qué extensión describen.
- Berk: contradicción entre «bosque aislado», «desierto cálido» y bosque de coníferas del mapa actual. La lectura actual resuelve qué guarda el JSON, no la decisión final de descripción narrativa.
- Reconciliar rutas, tramos terrestres/marítimos, distancias y tiempos antes de declarar definitiva una tabla nueva.
- La lista de transportes de Azgaar contiene vehículos modernos por configuración del programa; no son prueba de trenes, automóviles o aeronaves canónicos.

**Aldren:** [Q] deja dos opciones abiertas: desembocadura del Shabet y confluencia Dramyler Fork/Werhije Serpentine sobre Varsak Trail, esta última preferida. Un guiño que combina origen y residencia es sugerencia, no cierre. Se registra ruta terrestre de 551 km más ~122 km hacia la confluencia como dato de planificación, sin validación nueva.

## 8. Herramientas de campaña — desarrollo propio

### 8.1 Sistema Universal de Viajes

**Estado general: EN DESARROLLO. Versión disponible: 1.2 (Testing), aunque el nombre del archivo y su encabezado inicial dicen 1.1.** El cuerpo redefine secciones 5–9 y al final las declara cerradas para pruebas en mesa. No confundir cierre para testing con aprobación definitiva.

Decisiones documentadas:

- Representar momentos relevantes y decisiones, no simular cada hora. Viajes de 1–2 días por narración rápida; sistema desde aproximadamente tres días, con etapas ajustables.
- Cinco fases: preparación, condiciones, etapas, fogata y llegada.
- Roles: Guía, Vigía, Explorador, Campamentero, Cocinero/Cronista; pueden cambiar y adaptarse al grupo.
- CD de referencia de testing: 10 + intensidad climática (0/2/5) + modificador por terreno/rol; el Director puede ajustar según escena.
- Solo las tiradas necesarias; un evento principal por etapa. Campamento → fogón → guardias opcionales.
- Cero, una o varias cartas a criterio del Director; no obligación de peligro mortal cada noche.
- Motivación grupal: máximo 5, solo durante el viaje, vuelve a 0 al finalizar. Opciones de salvar fallos por 1–2 puntos gastando esa cantidad o aceptar éxito con consecuencia narrativa.
- Tablas de eventos por bioma todavía no equivalen a tablas d100 completas: la fuente contiene distribución y guías de diseño.

[C] registra que el desarrollo propio precedió al conocimiento del sistema de viajes/expediciones de Cosmere RPG. Se detectaron similitudes después y puede existir inspiración consciente futura. No describirlo como copia ni deducir qué mecánica se tomó de aquel sistema.

**Dependencias:** geografía/rutas/biomas de Romanance para su aplicación local; Mazo de Drix para escenas de campamento. El sistema universal no se vuelve canon geográfico por sí mismo. [Q] conserva una capa casera anterior «pendiente»: conciliarla con el testing v1.2, sin activar dos procedimientos simultáneos.

### 8.2 Mazo de Drix

**Estado: EN DESARROLLO / testing.** `mazo_de_drix.md` conserva encabezado «Mazo de Fogón — Diseño v0.1 (Testing)» y luego fija «El Mazo de Drix». No se inventa un número de versión posterior.

- Mazo físico propio para escenas de campamento; no baraja de poker estándar ni Deck of Many Things. [C]
- Mayoría de cartas con efecto/contenido necesario impreso. Se admite derivación intencional a tablas si aporta expectativa o suspenso. [C] matiza la declaración antigua de «no requiere tablas» del archivo.
- Siete categorías: Desafío, Problema y Extraordinaria en cuatro intensidades; Misterio, Oportunidad, Buena Suerte y Mala Suerte en dos.
- Intensidades: verde inicial, azul medio, naranja intermedio y rojo extremo.
- Carta: nombre, nivel/color, efecto y contexto. Firma de Drix opcional, no cerrada.
- Pregunta y Vínculo quedan fuera del testing actual; posible expansión futura. Viajes 1.2 conserva menciones antiguas que deben alinearse sin descartar información histórica.
- Los ejemplos de cartas son diseño de herramienta, no eventos ocurridos en Romanance.

**Pendientes:** versión unificada, colección completa de cartas, arte y firma, pruebas de mesa y alineación de nombres Fogata/Fogón/Drix en Viajes.

### 8.3 Sistema inspirado en Armas de Leyenda / Weapons of Legacy

**Estado: EN DESARROLLO. Nombre y carpeta provisionales.** [C]

- «Armas de Leyenda» debe sustituirse más adelante por un nombre propio; no hay nombre definitivo aprobado.
- Base conceptual: *Weapons of Legacy / Armas de Leyenda*, D&D 3.5. El autor posee el manual oficial físico.
- El sistema sigue una dirección de diseño propia y tiene un chat de desarrollo separado.
- No copiar literalmente textos, tablas o mecánicas del suplemento.
- No hay documento de reglas disponible entre los archivos del proyecto revisados. No están verificadas progresión, costes, activaciones, balance, vínculos, rituales ni catálogo de armas.
- No incorporar automáticamente Alba de Hierro, la espada familiar de Corwin o artefactos de Aldren al sistema: sus historias no prueban esa decisión mecánica.

El snapshot registra el proyecto de herramienta y sus límites; no reproduce el suplemento ni desarrolla reglas nuevas.

### 8.4 Economía, forja y mercadeo

`Economia_inmobiliaria_Romanance.md` documenta una escala propia de campaña, no precios oficiales: casa básica 300–500 PO; vivienda espaciosa/adaptada 650–900 PO; prestigio 1.500+; tablas de locales, salarios, mejoras y construcción. Conservar sus cifras en la fuente documental y conciliar antes de transformar esto en herramienta definitiva.

**Contradicción interna:** la regla rápida manda construir por 50–70 % del precio de compra, pero las tablas indican casa estándar 500 PO tanto para compra como construcción y casa grande 900 PO en ambas. No aplicar un descuento nuevo ni sustituir una tabla por la otra sin decisión.

[N] declara cerradas la forja de Tömörbaatar, el mercadeo de Temay y el cruce de pociones en `Reglas_Forja_Mercadeo_Pociones.md`; ese archivo **no está disponible**. Registrar **cierre declarado / contenido pendiente de recuperar**. No reabrirlo como si nadie hubiera decidido, pero tampoco inventar las reglas ni certificar su incorporación.

No se crea en este snapshot una nueva carpeta aprobada para estas reglas; su ubicación final se decide según la estructura existente y recurrencia.

## 9. Instituciones, escritura y arte

### Gremios

La introducción urbana aprobada en [B] confirma nueve gremios y voz formal en el Consejo. Son: Aventureros; Minero; Agropecuario; Artesanos y Constructores; Comercio y Caravanas; Pescadores y Navegantes; Bibliotecarios y Eruditos; Sanadores; Cazadores y Guardabosques.

`Gremios_de_Romanance.md` todavía se declara **borrador pendiente de revisión**. Sus carnets, niveles, alícuotas, requisitos, obligaciones, sedes, consenso/mayoría y protocolos de mineral azul se conservan como desarrollo documentado, sin elevar todas esas reglas a canon cerrado por su sola existencia. Separar existencia institucional aprobada de reglamento detallado pendiente.

### Escritura aureliana

[A v1.0] aprueba rasgos generales: escritura vertical/circular, curvas y geometría, textos rituales en espiral; vocabulario Lumen (Luz), Aurel (Custodio), Sael (Memoria), Vael (Verdad), Thir (Juramento), Elen (Libertad interior), Rheem (Crónica/memoria preservada), Sil (Silencio profundo); fórmula «Vael thir lumen».

El alfabeto, fonética formal y sistema gráfico completo siguen pendientes en [Q] y Biomas. No tratar esa lista de palabras como lengua completamente diseñada. No hay fuente visual de alfabeto entre las imágenes disponibles.

### Arte y moneda

Archivos disponibles: `Escudo de Armas - Romanance.png`, `Luz de Romanance.png` y `reverso Luz.png`. Se conservan sin editar. [B] describe moneda **Luz**, fichas hexagonales de ébano, denominaciones **Aurora, Zenith y Ocaso**. No hay equivalencias monetarias verificadas en estas fuentes; no inventarlas.

El arte «Habitantes de Romanance» se menciona como fuente de PNJs, pero no está disponible en el inventario actual. La apariencia definitiva de Aldren, su bastón y objetos siguen pendientes. No deducir aprobación del escudo o concordancia exacta de monedas sin revisión visual específica.

## 10. Registro consolidado de contradicciones y pendientes

| ID | Cuestión | Tratamiento de este snapshot |
|---|---|---|
| P01 | Alcance de conversación incompleto y chats de herramientas ausentes | Advertido al inicio; no afirmar recuperación total. |
| P02 | Alcalde/alcaide y llegada de Jarsag hace 50/100 años | Corrección registrada: Alcalde y ~50 años; fecha exacta y presente de cada pasaje por armonizar. |
| P03 | Jarsag junto a cinco fundadores pese a no ser fundador y llegar siglos después | Falta explicar si la visión es simbólica, retrospectiva u otra cosa; no decidirlo. |
| P04 | Aurelianos llamados fundadores directos vs. fundación por discípulos y herederos culturales | Preservar herencia cultural; revisar cada uso de «fundadores» y distinguir Custodios de fundadores urbanos. |
| P05 | Renombres vigentes solo parcialmente aplicados | Sustituciones cerradas; anexo conserva formas históricas. |
| P06 | Preludio 434 / campaña 435 y año de búsqueda de Spriggan | Marco temporal cerrado; escenas intermedias y presencia por conciliar. |
| P07 | Tres arcos/nueve sesiones, cinco arcos y Arco I por fases | Fases de Arco I registradas; arquitectura global pendiente. |
| P08 | Seis atacantes, cinco muertos, suicida y líder fugado | Aclarar si el suicida está incluido. |
| P09 | Deren: dos fichas y capacidades distintas | Sin reemplazo explícito verificable; no elegir mecánica final. |
| P10 | Aldren Semielfo vs. Elfo/Linaje del Lago | Sin resolución explícita verificable. |
| P11 | Juramentos con orden numerado distinto | Correspondencias de [B] cerradas; numeración de [A] por conciliar. |
| P12 | «Sin panteón» vs. Cesa/dioses de Aethragar | Distinguir alcance local y cosmológico; no eliminar dioses documentados. |
| P13 | [R] llama «Karagh» al erudito y lo vincula con la Orden antigua | Posible grafía de Kharag, pero identidad y rol histórico no verificados. |
| P14 | Berk: bioma, aldea destruida y capital activa generada | JSON actual: coníferas; estatus narrativo pendiente. |
| P15 | Halden pueblo pequeño vs. capital de ~7.654 habitantes en mapa | Decidir población/estatus sin asumir que Azgaar crea canon. |
| P16 | Distancias de Morvath, Ilvandor y escalas continentales | Conciliar tiempos jugados, método y rutas; cifras aquí no recalculadas. |
| P17 | Kelen/Khalan y lagos; restos no canónicos de mapa | Revisión pendiente; Port Ersag/Licove ya removidos en JSON. |
| P18 | Escritura formal y Segundo Santuario | Principios/vocabulario disponibles; alfabeto/dungeon sin desarrollo recuperado. |
| P19 | Viajes: archivo 1.1, cuerpo 1.2; mazo y categorías antiguas | 1.2 testing documentado; consolidar versiones y categorías. |
| P20 | Rocío narrativo vs. regla de 1 día/25 PO | Aplicación exacta y excepción por conciliar. |
| P21 | Reglas_Forja_Mercadeo_Pociones.md ausente | Cierre declarado; recuperar fuente antes de incorporar reglas. |
| P22 | Referencia El_Silente_Canon_Romanance.md ausente | Núcleo en [B] disponible; desarrollo completo no recuperado. |
| P23 | equipment.md, magic-items.md y gameplay-toolbox.md ausentes | No declarar validación de reglas oficiales ni cruces hechos. |
| P24 | Construcción 50–70 % vs. tablas de economía | Regla final pendiente. |
| P25 | Mecánicas incompletas del Hierofante y rasgos ambiguos | Mantener canon original; no completar costes, alcance o conjuros sin decisión. |
| P26 | Cronología de Jantry: huida a los 11, edad 18–19, cinco años en biblioteca | Hay 7–8 años desde la huida; faltan 2–3 años o aclarar qué período cubren esos cinco. No inventar episodios. |
| P27 | PNJs «todos 16–20» frente a Temay nivel 10 | Corregir encabezado general para reflejar fichas; no aumentar a Temay. |
| P28 | [R] afirma últimos cinco supervivientes; [B] declara civilización extinta pero hay guardián | Alcance de «superviviente», naturaleza y estado del Custodio pendientes de precisión; no declararlo mortal o no-muerto. |

Además siguen abiertos el incidente de Deren y su posible papel perdido, ciudad natal/laboratorio/juventud de Aldren, origen preciso de Ethen, tablas completas y pruebas de Viajes/Drix, cruce marítimo a Aldenor y fases/mitos lunares. Ningún pendiente autoriza expansión automática.

## 11. Estructura de repositorio aprobada

Estructura registrada en [C], reproducida como objetivo; **no ejecutada en esta tarea**:

```text
Romanance/
├── README.md
├── INDICE_CANON.md
├── canon/
│   ├── lore/
│   ├── pnjs/
│   ├── plots-y-subplots/
│   ├── arcos/
│   ├── oneshots/
│   └── arte/
├── herramientas-campana/
│   ├── viajes/
│   ├── mazo-de-drix/
│   ├── armas-legendarias/   # provisional
│   └── ...                  # no autoriza categorías nuevas sin necesidad
├── mundo/
│   ├── mapas/
│   └── azgaar/
└── _archivo/
    ├── canon-obsoleto/
    ├── borradores/
    └── fuentes-historicas/
```

`INDICE_CANON.md` funciona como manifiesto: **archivo / versión / estado / qué reemplaza / notas**. Estados documentales aprobados: CANON CERRADO, CANON EN CONSOLIDACIÓN, EN DESARROLLO, PENDIENTE, ARCHIVADO. «Cambio nuevo» en este snapshot es una condición de integración, no una séptima categoría temática.

Antes de archivar una fuente del repositorio de trabajo: crear el reemplazo, verificar que preserve información válida y solo después mover la versión antigua. En este espejo, las fuentes sincronizadas permanecen siempre en `sources/`. Las propuestas siguientes no autorizan modificar el JSON destructivamente ni mover esos originales.

### Inventario y destino propuesto para una migración posterior

| Fuente actual | Estado comprobado / tratamiento | Destino propuesto |
|---|---|---|
| Biblia_de_Romanance_Canon_Base.md y copia (3) | Duplicados exactos. Núcleo v1.5; contiene además bloques urbanos, PNJs, trasfondos v1.4 y economía. Desarmar por contenido después de cotejar; no sustituir todo por un único documento reciente. | Núcleo a canon/lore; bloques a sus categorías; originales históricos preservados. |
| PNJs_Principales_Romanance.md | Ocho PNJs; contradicciones Deren/Aldren y fuente de reglas faltante. | canon/pnjs, en consolidación. |
| trasfondos_personajes_romanance.md | v1.6, aprobado; renombres y puente cronológico. | canon/arcos, conservando claramente que son PJ y no PNJ. |
| Plots_y_Arcos_Arco_I_Aurelianos.md | Mesa específica, sesión jugada y planificación mezcladas. | canon/plots-y-subplots y canon/arcos; extraer resumen jugado a canon/oneshots sin convertir planes en hechos. |
| CRÓNICAS DE ROMANANCE.md | Preludio registrado y planes de campaña divergentes. | canon/oneshots para registro; canon/arcos para plan con pendientes. |
| Anexo_Aureliano_Romanance.md | v1.0 aprobado; revisar orden de Juramentos. | canon/lore. |
| Anexo_Oficial_Romanance_Inteligencias_Hierofante.md | v1.2, sustitución explícita de Hierofante independiente. | canon/lore como documento central de especie/clase. |
| Hierofante de la Luz.md | Obsoleto declarado por anexo v1.1–1.2. | _archivo/canon-obsoleto en repo real, tras verificación. |
| Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md y copia (2) | Duplicados exactos; no archivar la única evidencia del Semielfo antes de resolver especie. | canon/pnjs en consolidación; copia redundante histórica. |
| Cosmologia_Lumenor.md | Nombres canónicos; alcance de «sin panteón» por precisar. | canon/lore. |
| Biomas_Continentales_Romanance.md | Declara canon cerrado, pero [C] reabre revisión geográfica y [M] cambia Berk. | canon/lore en consolidación, enlazado con mundo/azgaar. |
| Tabla_Viaje_Continental_Romanance.md | Estimaciones y mediciones rectas históricas. | _archivo/fuentes-historicas cuando exista tabla unificada validada. |
| Tabla_Viaje_Continental_Romanance (2).md | No duplicado: sustituye sección final por rutas. Todavía necesita renombres y cruce actual. | herramientas-campana/viajes, referencia local en consolidación. |
| Sistema Universal de Viajes…Versión 1.1(1).md | Contiene v1.2 testing, secciones 5–9 cerradas para probar. | herramientas-campana/viajes, consolidar nombre/versión. |
| mazo_de_drix.md | v0.1 testing + decisiones de categorías. | herramientas-campana/mazo-de-drix. |
| Gremios_de_Romanance.md | Borrador pendiente; existencia de gremios aprobada por otra fuente. | _archivo/borradores o documento activo claramente en revisión, según migración acordada. |
| Economia_inmobiliaria_Romanance.md | Escala de campaña documentada; regla de construcción contradictoria. | Conservar en revisión; separar lore económico de reglas al consolidar, sin inventar nueva carpeta. |
| instrucciones-proyecto.md | Objetivo antiguo de publicación, desplazado por Fase 1. | _archivo/fuentes-historicas; instrucciones vigentes en raíz. |
| Mundo Sebas Full 2026-10-04-00-22.json | Exportación actual de referencia, no editada. | mundo/azgaar en repo real. |
| Escudo de Armas - Romanance.png; Luz de Romanance.png; reverso Luz.png | Referencias inventariadas, sin edición ni dictamen visual. | canon/arte conservando nombres y vínculos. |

Los duplicados de Biblia y Aldren se verificaron por igualdad SHA-256, no por parecido del título. Las dos tablas de viaje **tienen hashes distintos** y contenido distinto. Una copia numerada no implica por sí sola una revisión más nueva.

## 12. Qué queda concretamente consolidado aquí

Este snapshot fija la forma de registrar las decisiones recuperadas, reúne las correcciones nominales y cronológicas, preserva el núcleo aprobado, distingue la mesa del mundo y mantiene el desarrollo provisional de las herramientas. Las decisiones pendientes quedan identificadas sin rellenar sus huecos.

No modifica ni sustituye material de `sources/`, no migra el repositorio, no publica módulos y no declara resueltos los conflictos abiertos. El siguiente trabajo de canon debe resolver o recuperar las fuentes señaladas antes de producir versiones activas únicas de los documentos afectados.

## Anexo documental — fuentes textuales disponibles

**Advertencia de uso:** lo que sigue es una transcripción de referencia, no una nueva aprobación de cada frase. Puede contener nombres obsoletos, borradores, propuestas, citas rotas y contradicciones descritas arriba. La síntesis anterior indica los estados y límites. Se incluye una sola copia de cada par exactamente idéntico de Biblia y Aldren; se incluyen ambas tablas de viaje porque difieren. No se incorpora el JSON completo ni datos binarios de imágenes a este Markdown.



---

## Fuente documental: Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Aldren el Precavido — Canon Fundacional (Romanance)

> Documento base del PNJ. Este archivo define el canon inicial de Aldren dentro de *Las Crónicas de Rheem* y servirá como punto de partida para desarrollarlo más adelante.

---

# Identidad

**Nombre:** Aldren el Precavido

**Especie:** Semielfo

**Edad:** 160 años.

**Edad aparente:** Entre 50 y 60 años humanos.

**Profesión:** Archimago e investigador del Gran Oeste.

**Estado en 435 D.R.:** Vivo.

---

# Concepto del personaje

Aldren es uno de los grandes magos de Terenor, comparable en importancia a Kharag, pero representa una rama completamente distinta de la magia.

## Kharag

- Investigación.
- Conocimiento.
- Creación.
- Comprensión de fuerzas inmensas.

## Aldren

- Sistemas arcanos.
- Protecciones.
- Artefactos.
- Contingencias.
- Encantamientos permanentes.
- Sellos y mecanismos mágicos.

**Filosofía de Aldren:**

> *"Un hechizo dura un instante. Un buen sistema dura siglos."*

Para Aldren, la magia verdaderamente poderosa es aquella que continúa funcionando mucho después de que su creador haya desaparecido.

---

# Origen

## Continente

Terenor, el continente occidental y principal donde se encuentra Romanance.

## Región

Los Lagos de Terenor, en el Gran Oeste.

Es una región antigua, desarrollada y con siglos (o milenios) de historia, muy distinta a la joven región austral donde nació Romanance.

## Ciudad de origen

Aún sin nombre definitivo.

Características:

- Cultura humano-élfica.
- Resultado de generaciones de convivencia entre humanos y elfos del bosque.
- Magia integrada a la arquitectura, la educación y la vida cotidiana.
- Centro importante de estudio y comercio.

---

# Relación con Romanance

Aldren no nació en Romanance.

Llegó desde el Gran Oeste y conoce la ciudad por sus viajes, estudios y el comercio entre ambas regiones.

Romanance comercia regularmente con el Gran Oeste, aunque para la mayoría de los habitantes del sur sigue siendo un lugar lejano y poco conocido.

---

# Personalidad

Aldren es una persona:

- Alegre.
- Sagaz.
- Pícara.
- Muy inteligente.
- Metódica.
- Siempre piensa varios pasos adelante.

Su humor nunca es gratuito: casi todas sus bromas cumplen una función.

No es un payaso ni un excéntrico sin motivo. Es un mago brillante que usa el humor como herramienta.

---

# El origen del apodo "El Precavido"

Durante su juventud cometió errores por confiar demasiado en situaciones y objetos mágicos peligrosos.

Esas experiencias le enseñaron que existen conocimientos y artefactos que jamás deben quedar sin protección.

Desde entonces desarrolló una filosofía:

- El conocimiento peligroso debe preservarse.
- Las protecciones deben tener múltiples capas.
- Nunca confiar en una única barrera.
- Una buena trampa puede salvar vidas.

No existe un único evento definido; queda abierto para desarrollarlo en el futuro.

---

# El sello de Aldren

Las bromas son su firma personal.

Cada protección importante suele contener:

- Una broma.
- Una prueba de ingenio.
- Una consecuencia menor para quien actúa sin pensar.
- Un sistema que registra o detecta que la protección fue activada.

En los objetos realmente importantes, Aldren puede saber que alguien activó una de sus protecciones, aunque no necesariamente conozca la identidad de quien lo hizo.

---

# Relación con los Aurelianos

Este punto es canon importante.

## Lo que Aldren sabe

Aldren dedicó décadas al estudio de ruinas y tablillas aurelianas.

No conoce toda la historia de los Aurelianos ni el significado completo de los Cinco Juramentos.

Sin embargo, comprende profundamente:

- Sellos aurelianos.
- Sistemas de protección.
- Tablillas antiguas.
- Cámaras de preservación.
- Simbología y mecanismos rituales.

Su mayor conclusión es:

> *"Los Aurelianos protegían conocimiento, no tesoros."*

Esa idea influye directamente en toda su obra.

---

# La tablilla del One-Shot de las Cuatro Estatuas

Hace muchos años Aldren encontró una tablilla aureliana.

La estudió parcialmente.

Al comprender que era demasiado importante y que su conocimiento era incompleto, tomó una decisión:

**Ocultarla.**

No destruirla.

No publicarla.

Construyó un sistema de cofres, acertijos y protecciones para garantizar que solo alguien paciente e inteligente pudiera llegar hasta ella.

La party encuentra la tablilla porque supera el sistema diseñado por Aldren.

---

# Apariencia

- Semielfo de aspecto humano maduro.
- Cabello oscuro con mechones plateados.
- Orejas ligeramente puntiagudas.
- Piel curtida por viajes.
- Manos y antebrazos con antiguas cicatrices de quemaduras arcanas y experimentos.
- Ojos claros (color aún sin definir).

## Vestimenta

Aún sin diseño definitivo.

La idea base es un mago viajero, práctico y elegante, diferente al arquetipo clásico de túnica exagerada.

## Bastón

Siempre lleva un bastón, utilizado como foco para canalizar su magia.

Su diseño definitivo queda pendiente.

---

# Pendientes de desarrollo

Estos temas se trabajarán en documentos separados.

- Ciudad de origen (nombre, cultura e historia).
- El Cónclave de Magos.
- Apariencia definitiva e ilustración.
- Bastón y objetos mágicos característicos.
- Laboratorio de Aldren.
- Historia completa de su juventud y los eventos que lo volvieron "el Precavido".
- Relación más profunda con el Silente y otros elementos del lore antiguo.

---

## Estado del canon

**Versión:** Canon Fundacional v1.

Aprobado para el proyecto *Las Crónicas de Rheem*.


> Fin de fuente: Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md.


---

## Fuente documental: Anexo_Aureliano_Romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# ANEXO AURELIANO
## Cultura, Lengua, Arquitectura, Símbolos y Juramentos

*Suplemento oficial para* **Las Crónicas de Rheem — El Ciclo de Romanance**

> *“La existencia es el precio de la verdad.”*

---

# Introducción

Los **Aurelianos** fueron una civilización antigua ya extinguida cuyo legado dio origen a los principios fundamentales de Romanance. No fueron dioses ni conquistadores; fueron custodios de la Luz y guardianes del conocimiento peligroso.

Su historia está inseparablemente unida a la Luna fragmentada, al mineral azul y al sellado del Silente.

---

# I. Historia resumida

### Llegada

Los Aurelianos llegaron a este mundo en una era anterior a toda cronología conocida. Percibieron una anomalía vinculada a la Luna y comenzaron su estudio.

### Descubrimiento

Hallaron el **mineral azul**, capaz de almacenar ecos de memoria y resonar con las conciencias.

### Crisis

Comprendieron que una inteligencia antigua —el Silente— podía propagarse mediante el recuerdo y el conocimiento compartido.

### El Gran Sellado

Realizaron un ritual que fracturó la Luna y dispersó anclas de contención vinculadas al mineral.

### El Legado

Sabiendo que su civilización desaparecería, transmitieron sus principios a pueblos mortales que más tarde fundarían **Romanance**.

---

# II. Apariencia

Los Aurelianos eran humanoides de:

- piel gris azulada o marfil,
- ojos claros y luminosos,
- cabello plateado, blanco o inexistente,
- estatura ligeramente superior a la humana,
- gestos contenidos y voz suave.

Su presencia inspiraba serenidad más que temor.

---

# III. Cultura Aureliana

## Principio central

Toda vida consciente debe buscar la **Luz verdadera**, entendida como comprensión que preserva la libertad interior.

## Valores fundamentales

- Verdad
- Compasión
- Humildad
- Deber
- Custodia

## Organización social

No existían castas hereditarias. Las funciones se asignaban por aptitud:

| Función | Rol |
|---|---|
| Custodios | Guardianes de juramentos y sellos |
| Memoriantes | Conservadores de la historia |
| Resonantes | Intérpretes de sueños y ecos |
| Artesanos de Luz | Arquitectos y creadores |
| Errantes | Exploradores y observadores |

## Relación con el conocimiento

El conocimiento era sagrado, pero nunca absoluto. Toda revelación requería preparación moral.

---

# IV. La Lengua Aureliana

## Características

- Escritura vertical o circular.
- Símbolos geométricos y curvos.
- Los textos importantes se escribían en espiral alrededor de un núcleo.

## Rasgos lingüísticos

- Pocas palabras para posesión.
- Muchas palabras para memoria, luz y resonancia.
- Los nombres personales suelen ser breves y sonoros.

## Palabras canónicas

| Aureliano | Significado |
|---|---|
| **Lumen** | Luz |
| **Aurel** | Custodio |
| **Sael** | Memoria |
| **Vael** | Verdad |
| **Thir** | Juramento |
| **Elen** | Libertad interior |
| **Rheem** | Crónica, memoria preservada |
| **Sil** | Silencio profundo |

## Fórmula ritual

**“Vael thir lumen.”**  
*“Que la verdad permanezca en la luz.”*

---

# V. Arquitectura

## Principios

La arquitectura aureliana buscaba reflejar la armonía de la Luz.

### Características

- Piedra clara azulada.
- Arcos altos y delgados.
- Cúpulas abiertas al cielo.
- Canales de agua reflectante.
- Cristales incrustados que dispersan la luz.

## Sensación espacial

Los edificios producen silencio natural; incluso el sonido parece amortiguado.

## La Ciudad-Santuario

La principal ciudad aureliana se encontraba en la cordillera y fue construida alrededor del **Cristal Central del Sellado**.

---

# VI. Símbolos

## La Luna Fragmentada

Representa el sacrificio realizado para preservar el mundo.

## El Quinto Círculo

Cinco anillos concéntricos; el quinto permanece abierto, simbolizando al custodio venidero.

## La Llama Serena

Llama vertical sin viento; simboliza la Luz verdadera.

## El Ojo Velado

Un ojo atravesado por un velo; recuerda que no toda verdad debe contemplarse sin preparación.

---

# VII. Los Cinco Juramentos

Los Juramentos son el corazón espiritual del legado aureliano.

---

## Primer Juramento — Humildad

> *“La luz no pertenece a quien la contempla.”*

**Protege de:** orgullo intelectual.

**Práctica:** escuchar antes de enseñar.

---

## Segundo Juramento — Compasión

> *“Toda verdad que niega la vida es oscuridad disfrazada.”*

**Protege de:** frialdad moral.

**Práctica:** preservar la dignidad de todo ser consciente.

---

## Tercer Juramento — Verdad

> *“Que mi palabra refleje la luz y no mi deseo.”*

**Protege de:** autoengaño.

**Práctica:** honestidad incluso ante el dolor.

---

## Cuarto Juramento — Deber

> *“La luz recibida debe convertirse en servicio.”*

**Protege de:** indiferencia.

**Práctica:** actuar cuando otros no pueden.

---

## Quinto Juramento — Custodia

> *“Guardaré la verdad aunque el olvido sea mi único legado.”*

**Protege de:** uso irresponsable del conocimiento.

**Práctica:** custodiar aquello cuya revelación destruiría la libertad de los demás.

El Quinto Juramento solo se pronuncia ante un custodio consagrado.

---

# VIII. Rito del Quinto Juramento

El aspirante:

1. se arrodilla ante el Cristal Central,
2. deposita un recuerdo significativo,
3. pronuncia el juramento,
4. acepta quedar unido al deber de custodia.

Desde ese momento, su vida queda consagrada al sello.

---

# IX. Relación con Romanance

Los fundadores de Romanance heredaron:

- los Juramentos,
- la ética de la Luz,
- el valor del conocimiento responsable,
- la tradición de servicio.

Por ello Romanance no es una continuación política de los Aurelianos, sino una **continuación moral**.

---

# X. El Guardián del Quinto Juramento

El guardián actual es el último custodio del santuario de la cordillera.

- Mantiene estable el Cristal Central.
- Espera la llegada de un heredero.
- Solo podrá abandonar su puesto cuando otro asuma voluntariamente el Quinto Juramento.

Los cuatro nichos ocupados y el quinto vacío representan la continuidad del deber.

---

# XI. Frases rituales

> *“La existencia es el precio de la verdad.”*

> *“Vael thir lumen.”*

> *“La custodia de la verdad es custodia de la libertad.”*

> *“La luz verdadera no domina; ilumina.”*

---

# XII. Estado del canon

**Versión:** 1.0  
**Estado:** Canon aprobado para *Las Crónicas de Rheem — El Ciclo de Romanance*.


> Fin de fuente: Anexo_Aureliano_Romanance.md.


---

## Fuente documental: Anexo_Oficial_Romanance_Inteligencias_Hierofante.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Anexo Oficial de Romanance
## Inteligencias Encarnadas y Hierofante de la Luz

Este documento reúne el canon mecánico y narrativo aprobado para la especie **Inteligencias Encarnadas** y la clase exclusiva **Hierofante de la Luz** dentro de *El Ciclo de Romanance*.

> Fusiona la versión condensada original con la versión completa de `Hierofante_de_la_Luz.md` — a partir de esta versión, este es el único documento de referencia para ambos; se descarta la versión condensada duplicada.

---

# Inteligencias Encarnadas

## Historia

Las Inteligencias existen desde antes de la memoria de los mundos. Algunas lograron anclarse temporalmente a cuerpos físicos mediante un proceso llamado **Resonancia**. Su existencia está ligada a la Luz, la memoria y los Juramentos Aurelianos.

La entidad conocida como **El Silente** es la Inteligencia más famosa y peligrosa de la historia de Romanance.

## Apariencia

- Piel pálida, gris azulada o marfil.
- Ojos que reflejan luz incluso en la oscuridad.
- Voz con una resonancia extraña.
- Gestos contenidos y mirada profundamente observadora.

## Rasgos raciales

### Tipo de criatura
Humanoide.

### Tamaño
Mediano.

### Velocidad
9 metros.

### Visión crepuscular (Nivel 1)
Ves en luz tenue hasta 18 m como si fuera luz brillante y en oscuridad como si fuera luz tenue.

### Mente resonante (Nivel 1)
Ventaja en salvaciones contra ser hechizado o asustado.

### Fragilidad encarnada (Nivel 1)
Desventaja en salvaciones contra petrificación, deformación corporal y transformaciones forzadas.

### Resonancia de Linaje (Nivel 3)
Elige un linaje.

### Eco de memoria (Nivel 5)
Conoces el truco *Mensaje*, con Inteligencia como característica para lanzarlo. Si ya lo conocías por otro medio (por ejemplo, por la clase Hierofante), en su lugar aprendés otro truco de la lista de Mago o de Hierofante.

### Memoria eidética (Nivel 6)
Recuerdas con precisión casi perfecta algo visto, leído o escuchado durante el último año.

### Afinidad con la Luz (Nivel 9)
Añades 1d4 a pruebas de Inteligencia relacionadas con ruinas, juramentos, sellos o memorias antiguas.

### Lenguas
Común y Aureliano.

## Linajes

> Nota de diseño (v1.2): el Linaje se elige una única vez, a nivel 3. Antes existía como rasgo racial y, por separado, como "Resonancia de Linaje"/"Rasgo del sendero" en la clase Hierofante — eran el mismo concepto duplicado con distinto envoltorio. Ahora es un solo árbol: elegís Linaje acá, y si además sos Hierofante, ese mismo Linaje se profundiza en los niveles 6, 13 y 18 de la clase (ver más abajo).

### Custodio
**Tier 1 (Nivel 3):**
- Repetir una salvación fallida contra hechizado o asustado.
- Ventaja en Historia y Religión relacionadas con Aurelianos y Juramentos.

### Resonante
**Tier 1 (Nivel 3):**
- Telepatía breve.
- Competencia o pericia en Perspicacia.

### Errante
**Tier 1 (Nivel 3):**
- Competencia adicional.
- Movimiento breve sin provocar ataques de oportunidad.

*(Los Tiers 2, 3 y 4 de cada Linaje —niveles 6, 13 y 18— están detallados en la sección de la clase Hierofante, ya que solo se activan si tomás esa clase.)*

---

# Hierofante de la Luz

*Clase exclusiva de las Inteligencias Encarnadas*

## Concepto

El Hierofante de la Luz no obtiene poder de dioses ni de pactos. Su mente encarnada actúa como un prisma capaz de canalizar la Luz primordial, ordenar memorias y resonar con otras conciencias.

Donde un mago estudia fórmulas y un clérigo invoca fe, el Hierofante **recuerda**.

Es una clase de control mental benigno, apoyo, percepción y protección espiritual, con un toque psiónico muy marcado.

---

## Rasgos básicos

### Dado de golpe
**d8**

### Características clave
- **Inteligencia**: comprensión de la Luz y las memorias.
- **Sabiduría**: estabilidad interior y percepción espiritual.

### Competencias

#### Armaduras
- Armaduras ligeras.

#### Armas
- Bastones, dagas, hondas, ballestas ligeras.

#### Herramientas
- Caligrafía o instrumentos de escriba.

#### Tiradas de salvación
- **Inteligencia**
- **Sabiduría**

#### Habilidades (elige 3)
Arcana, Historia, Investigación, Perspicacia, Religión, Medicina, Percepción.

---

## Equipo inicial

- Bastón o daga.
- Armadura acolchada.
- Libro de notas o códice vacío.
- Símbolo de resonancia.
- Mochila de explorador.

---

# Tabla de progresión

| Nivel | Rasgos                          | Trucos | Conjuros conocidos | Resonancias |
| ----- | -------------------------------- | ------ | ------------------- | ----------- |
| 1     | Encarnación lúcida, Resonancias  | 2      | 2                    | 2           |
| 2     | Recuerdo guiado                  | 2      | 3                    | 3           |
| 3     | Linaje (elegido en la especie)    | 2      | 4                    | 4           |
| 4     | Mejora de característica          | 3      | 5                    | 4           |
| 5     | Resonancia expandida              | 3      | 6                    | 5           |
| 6     | Linaje — Tier 2                   | 3      | 7                    | 5           |
| 7     | —                                  | 3      | 8                    | 6           |
| 8     | Mejora de característica          | 3      | 9                    | 6           |
| 9     | Afinidad luminosa                 | 4      | 10                   | 7           |
| 10    | Memoria compartida                | 4      | 11                   | 7           |
| 11    | Revelación mayor                  | 4      | 12                   | 8           |
| 12    | Mejora de característica          | 4      | 12                   | 8           |
| 13    | Linaje — Tier 3                   | 4      | 13                   | 9           |
| 14    | Custodia del yo                   | 4      | 13                   | 9           |
| 15    | —                                  | 4      | 14                   | 10          |
| 16    | Mejora de característica          | 4      | 14                   | 10          |
| 17    | Revelación suprema                | 4      | 15                   | 11          |
| 18    | Linaje — Tier 4                   | 4      | 15                   | 11          |
| 19    | Mejora de característica          | 4      | 15                   | 12          |
| 20    | Avatar de la Luz                  | 5      | 16                   | 12          |

*Densidad de rasgos nombrados: 13 en 20 niveles (antes 15) — en línea con Mago (~10) y Bardo. Niveles 7 y 15 quedan sin rasgo nuevo (solo escalan Resonancias/conjuros), como corresponde al patrón de escalado estándar del SRD.*

---

# Mecánica central: Resonancias

Posees un número de **Resonancias** indicado por tu nivel. Recuperas todas tras un descanso largo.

Puedes gastar Resonancias para activar aptitudes de clase.

### Resonancia básica

Como acción adicional, gastas Resonancia y eliges una criatura a 9 m:

- gana **1d4** a su próxima prueba o salvación, o
- reduce en **1d4** el daño psíquico o radiante recibido antes del inicio de tu siguiente turno.

**Costo:** 1 Resonancia si te eligís a vos mismo como objetivo. **A partir de nivel 11**, cuesta **2 Resonancias** si el objetivo es otra criatura.

---

# Nivel 1: Encarnación lúcida

No puedes ser sorprendido mientras estés consciente.

Además, conoces el truco **Mensaje** y uno adicional de la lista del Hierofante.

---

# Nivel 2: Recuerdo guiado

Como acción, puedes tocar una criatura voluntaria y permitirle repetir una prueba de Inteligencia, Sabiduría o Carisma realizada en el último minuto. Debe usar el nuevo resultado.

---

# Nivel 3: Linaje

El Linaje se elige una única vez — ver "Linajes" en la sección de la especie Inteligencias Encarnadas, Tier 1. Si sos Hierofante, ese mismo Linaje se profundiza en los niveles 6, 13 y 18 (ver abajo).

---

# Nivel 5: Resonancia expandida

Cuando usas Resonancia básica, el dado pasa a **1d6**.

---

# Nivel 6: Linaje — Tier 2

**Custodio:** podés extender tu repetición de salvación (Tier 1) a un aliado a 3 m, gastando 1 Resonancia.

**Resonante:** podés duplicar el efecto de un truco o de tu Resonancia básica a un segundo objetivo a 3 m del primero, sin coste adicional.

**Errante:** tenés resistencia al daño por caída, y podés moverte por superficies verticales o líquidas durante tu turno sin caer.

---

# Nivel 9: Afinidad luminosa

Aprendes **Luz** si no lo conoces. Cuando lanzas un conjuro de luz o protección, puedes gastar 1 Resonancia para aumentar su alcance o duración al doble.

---

# Nivel 10: Memoria compartida

Durante un descanso corto, tú y hasta seis criaturas podéis compartir recuerdos conscientes. Todos obtenéis ventaja en una prueba relacionada con la información compartida antes del próximo descanso largo.

---

# Nivel 11: Revelación mayor

Una vez por descanso largo, como acción, eliges una criatura a 18 m. Debe superar una salvación de Sabiduría o quedar **aturdida** hasta el final de tu siguiente turno mientras experimenta una visión de la Luz primordial.

---

# Nivel 13: Linaje — Tier 3

**Custodio:** sos inmune a que te borren o alteren recuerdos. Una vez por descanso largo podés restaurar la memoria perdida o alterada de un aliado.

**Resonante:** tu telepatía puede conectar simultáneamente a hasta 3 aliados entre sí, no solo con vos.

**Errante:** como reacción, gastando 1 Resonancia (usos limitados por descanso largo, a discreción del DJ), imponés desventaja a un ataque en tu contra.

---

# Nivel 14: Custodia del yo

Cuando fueras a quedar hechizado, dominado o poseído, puedes gastar 2 Resonancias para ignorar el efecto.

---

# Nivel 17: Revelación suprema

Una vez por descanso largo puedes crear un área de Luz verdadera de 9 m durante 1 minuto. Los aliados tienen ventaja en salvaciones de Sabiduría y los enemigos no pueden beneficiarse de invisibilidad ni ilusiones mentales dentro del área.

---

# Nivel 18: Linaje — Tier 4

**Custodio:** como reacción (3 Resonancias), un aliado a 9 m que caiga a 0 PG queda en 1 PG en su lugar.

**Resonante:** una vez por descanso largo, leés las intenciones inmediatas (no pensamientos profundos) de todas las criaturas a 9 m.

**Errante:** una vez por descanso largo, te desplazás a un punto visible a 18 m ignorando obstáculos físicos.

---

# Nivel 20: Avatar de la Luz

Tu mente y la Luz se vuelven inseparables.

- Recuperas 2 Resonancias al iniciar cada combate si tienes 0.
- Eres inmune a ser hechizado y asustado.
- Como acción, puedes asumir una forma luminosa durante 1 minuto: emites luz brillante 18 m, tienes resistencia a todo daño excepto necrótico y tus conjuros del Hierofante ignoran cobertura media.

Una vez usado este rasgo, debes terminar un descanso largo para volver a usarlo.

---

# Dotes sugeridas

- **Memoria Perfecta:** +1 INT; puedes recordar cualquier conversación o texto visto en el último mes.
- **Resonancia Profunda:** +1 SAB; ganas 1 Resonancia adicional.
- **Custodio Menor:** aprendes *Protección contra el bien y el mal* una vez por descanso largo.

---

# Trasfondos sugeridos

- Guardián del Santuario.
- Bibliotecario Exiliado.
- Portador de Ecos.
- Discípulo del Quinto Juramento.
- Viajero de la Luz.

---

# Lista temática de conjuros

## Trucos
Luz, Mensaje, Mano de mago, Prestidigitación, Guía.

## Nivel 1
Detectar magia, Comprender idiomas, Santuario, Sueño.

## Nivel 2
Calmar emociones, Detectar pensamientos, Restauración menor.

## Nivel 3
Disipar magia, Clarividencia, Círculo mágico.

## Nivel 4
Ojo arcano, Libertad de movimiento.

## Nivel 5
Restablecimiento mayor, Vínculo telepático.

---

# Identidad de juego

El Hierofante de la Luz es un **controlador y apoyo psíquico-lumínico**.

- Protege mentes y voluntades.
- Comparte conocimiento táctico.
- Neutraliza corrupción mental.
- Revela verdades ocultas.
- Mantiene unido al grupo.

No compite con el mago en daño ni con el clérigo en curación; ocupa un espacio propio centrado en **memoria, percepción y libertad interior**.

---

## Estado del documento

**Versión:** 1.2
**Estado:** Canon aprobado para *El Ciclo de Romanance*.

### Historial de cambios
- **1.1** — Se fusiona la versión completa de `Hierofante_de_la_Luz.md` (equipo inicial, dotes sugeridas, trasfondos sugeridos, desarrollo completo de senderos) dentro de este documento, reemplazando la versión condensada. `Hierofante_de_la_Luz.md` queda obsoleto/descartado como archivo independiente — todo su contenido vive acá.
- **1.2** — Balance completo de raza/clase: (1) se elimina la duplicación del truco Mensaje entre especie y clase; (2) Resonancia básica pasa a costar 2 en nivel 11+ si el objetivo no es uno mismo; (3) se fusiona "Linaje" (especie) y "Resonancia de Linaje"/"Rasgo del sendero" (clase), que eran el mismo concepto duplicado — ahora es un solo árbol de 4 tiers por Linaje (niveles 3/6/13/18); (4) se retiran los rasgos "Mente inquebrantable" (nivel 7) y "Resonancia perfecta" (nivel 15) para bajar la densidad de rasgos nombrados de 20 a 13 en 20 niveles, en línea con Mago y Bardo del SRD.


> Fin de fuente: Anexo_Oficial_Romanance_Inteligencias_Hierofante.md.


---

## Fuente documental: Biblia_de_Romanance_Canon_Base.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# La Biblia de Romanance — Canon Base
## El Ciclo de Romanance · Primer Radiante
 
> *“La existencia es el precio de la verdad.”*
 
Este documento constituye el **canon fundacional** de *El Ciclo de Romanance*. Su propósito es preservar la coherencia histórica, filosófica y narrativa del escenario. Toda expansión futura deberá respetar los principios establecidos aquí.
 
Inspirado en el concepto del **Primer Radiante** y la **psicohistoria** de Isaac Asimov, este texto funciona como la referencia central del mundo de Romanance.
 
---
 
# 1. Principio fundamental: La Luz
 
La **Luz** no es una deidad ni una energía mágica común. Es el principio metafísico que hace posible:
 
- la conciencia,
- la razón,
- la memoria sana,
- la compasión,
- la voluntad libre.
La civilización de Romanance se define por la búsqueda, preservación y transmisión de la Luz.
 
## Cadena filosófica
 
**Verdad → Luz → Conocimiento → Libertad**
 
- La **Verdad** revela lo que realmente es.
- La **Luz** permite percibir esa realidad.
- El **Conocimiento** es la luz ordenada dentro de una mente.
- La **Libertad** es la capacidad de actuar conforme a esa comprensión.
Los Aurelianos descubrieron, sin embargo, una excepción terrible:
 
> **No toda revelación produce Luz. Algunas revelaciones consumen la luz de quien las contempla.**
 
## La Fuente de toda verdad
 
"La Fuente de toda verdad" es otro nombre para la Luz — no una entidad distinta ni una deidad personal, sino la forma en que los devotos de Romanance nombran su origen.
 
La fe no es creencia pasiva: es la aplicación sostenida de los valores fundacionales (cooperación, servicio, memoria común, protección de los débiles) en la vida real. Esa aplicación genera **Sabiduría** — conocimiento correctamente vivido, no solo conocido — y la Sabiduría es Luz, y la Luz es poder.
 
Por eso quienes canalizan poder divino en Romanance (como los clérigos) no lo hacen por pacto con una deidad, sino porque encarnan genuinamente esos valores. Es fe demostrada en acción, no doctrina memorizada.
 
Esto no cierra la puerta a otras fuerzas del mundo — Romanance es politeísta y sin panteón desarrollado — sino que define específicamente cómo funciona el poder ligado a la Luz.
 
---
 
# 2. Cronología resumida
 
## Antes de Romanance (A.R.)
 
- Llegada de los **Aurelianos** a este mundo.
- Descubrimiento de una anomalía vinculada a la Luna.
- Hallazgo del **mineral azul**.
- Construcción de una ciudad-santuario en la cordillera.
- Establecimiento de los **Cinco Juramentos**.
- Sellado de la entidad conocida como **El Silente**.
- Fragmentación de la Luna durante el ritual de contención.
## Año 0 D.R.
 
Fundación de **Romanance** por discípulos y herederos culturales de los Aurelianos.
 
## ~100 D.R.
 
- Auge de la **Orden de Bibliotecarios**.
- Descubrimiento del mineral azul.
- Influencia del Silente sobre la Orden.
- Ruptura interna, violencia y pérdida.
- **Morvath** se convierte voluntariamente en lich.
- Destrucción de textos prohibidos.
- Exilio de Morvath y traslado de los libros sellados.
## 100–434 D.R.
 
- Un sobreviviente de la Orden funda en secreto el **Culto Lunar**.
- El culto opera en las sombras durante más de tres siglos.
## 434 D.R.
 
Romanance alcanza su estado actual. **Jarsag**, explorador capaz de viajar entre planos, se convierte en alcaide y potencia los ideales fundacionales.
 
---
 
# 3. Los Aurelianos
 
## Naturaleza
 
Los Aurelianos fueron una civilización humanoide ya extinta, de apariencia sobria y piel pálida azulada. No eran dioses ni seres perfectos.
 
## Origen
 
Procedían de otro plano o de una región exterior al mundo conocido, pero el origen exacto se considera irrelevante para la historia presente.
 
## Rasgo definitorio
 
Su identidad se basaba en el **deber de custodia**.
 
## Descubrimiento central
 
Comprendieron que cierta conciencia podía propagarse mediante:
 
- recuerdos,
- símbolos,
- estudio,
- rituales,
- nombres,
- transmisión del conocimiento.
Concluyeron que la supervivencia del mundo requería no solo un sello físico, sino también **olvido deliberado**.
 
---
 
# 4. El Silente
 
Su nombre aureliano original es **Nhal'Sereth**; "El Silente" es el nombre común con el que se lo conoce en la actualidad. Es la única Inteligencia relevante en el mundo de Romanance.
 
## Naturaleza
 
El Silente es una conciencia antigua anterior a los Aurelianos. No posee un cuerpo único y estable.
 
## Características
 
- Existe parcialmente fuera del tiempo y de los planos.
- Se fortalece al ser recordado o comprendido.
- Puede influir mediante sueños, intuiciones y obsesiones intelectuales.
- No busca adoración; busca **ser recordado plenamente**.
## Peligro principal
 
Su peligro no es moral, es **ontológico**: cada mente que lo recuerda le presta una pequeña parte de su realidad. La cadena Recuerdo → Resonancia → Obsesión → Pérdida gradual del yo → Convergencia de conciencias es lenta y acumulativa, no una corrupción inmediata. Llevada a su extremo, produce una homogeneización mental que erosiona la libertad interior y puede propagarse entre planos conectados como una onda memética — la verdadera razón del sellado aureliano.
 
> Desarrollo completo en `El_Silente_Canon_Romanance.md`.
 
---
 
# 5. El mineral azul
 
El mineral azul es **Luz cristalizada contaminada por ecos del Silente**. Su nombre verdadero es **Lunargenta** — "mineral azul", "cristal azul" y "fragmento lunar" son solo apodos culturales distintos para el mismo material.
 
### Propiedades
 
- Amplifica la percepción y la memoria.
- Permite acceder a fragmentos de conocimiento antiguo.
- Transmite también ecos corruptos del Silente.
La Orden de Bibliotecarios cayó porque confundió iluminación con revelación absoluta.
 
---
 
# 6. La Luna fragmentada
 
La Luna visible muestra las cicatrices del ritual aureliano.
 
Los Aurelianos no encerraron un cuerpo físico; encerraron la **conciencia distribuida** del Silente.
 
Los fragmentos lunares y ciertos cristales azules funcionan como **anclas del sello**.
 
Si las anclas se rompen, la influencia del Silente aumenta.
 
---
 
# 7. Los Cinco Juramentos
 
Los Juramentos son disciplinas espirituales destinadas a preparar una mente para recibir conocimiento sin corromperse. Cada uno tiene tres capas de nombre: el **nombre de campo** (lo que los custodios hacían literalmente), el **valor filosófico** (lo que ese acto protege del alma) y la **virtud abstracta** (grabada en la tablilla más antigua, previa incluso a Romanance — ver Oneshot Las Cuatro Estatuas). No son tres sistemas distintos: son tres formas de nombrar lo mismo.
 
| Farol (color) | Función de campo | Valor filosófico | Virtud abstracta |
|---|---|---|---|
| Camino (blanco) | Guiar a los perdidos | Verdad (protege del autoengaño) | Libertad |
| Velo (azul) | Ocultar lo que destruiría al mundo | Deber (protege del abandono del mundo) | Trabajo |
| Piedra (verde) | Mantener viva la esperanza | Compasión (protege de la frialdad moral) | Generosidad |
| Silencio (gris) | Callar ante la tentación | Humildad (protege del orgullo intelectual) | Valor |
| Memoria (rojo) | Custodiar la verdad indecible | Custodia (protege del uso irresponsable del conocimiento) | *(capa más profunda, sin equivalente en la tablilla de las Cuatro Estatuas)* |
 
## El Quinto Juramento
 
Implica custodiar una verdad que quizá nunca pueda ser compartida. Mantiene sellado a Nhal'Sereth (ver Sección 4). El Quinto Custodio nunca ocupó su nicho porque permanece custodiando el ancla.
 
---
 
# 8. El Guardián del Quinto Juramento
 
En las ruinas de la cordillera permanece un guardián vinculado al cristal principal del sello.
 
- Custodia el cristal central.
- Espera la llegada de un **heredero**.
- Puede abandonar su deber únicamente cuando otro asuma voluntariamente el Quinto Juramento.
- No ataca por defecto: interroga las intenciones de quien se acerca al cristal o intenta romper el sello, y solo actúa contra quien detecta con mala intención.
Los cuatro nichos ocupados y el nicho vacío simbolizan la continuidad de la custodia.
 
## El Heredero
 
**Canon:** el Quinto Custodio espera que, algún día, alguien tome voluntariamente el Juramento de la Custodia. Ese posible sucesor es conocido como el Heredero.
 
**Notas para campañas (no es canon universal — varía por mesa):**
- Opción A: cualquier individuo digno puede convertirse en Heredero.
- Opción B: un PJ concreto resulta descender del linaje del sobreviviente de la Orden de Bibliotecarios (ver Sección 12).
- Opción C: una party completa puede convertirse en Heredera al reafirmar el Quinto Juramento juntos.
Las opciones B y C no son excluyentes — pueden coexistir como hilos narrativos distintos en la misma mesa.
 
---
 
# 9. Romanance
 
Romanance fue fundada por humanos y otras especies instruidos por los últimos Aurelianos.
 
## Propósito
 
Crear una sociedad capaz de:
 
- preservar la Luz,
- resistir la corrupción del conocimiento,
- transmitir virtud junto con saber.
Sus valores fundamentales son:
 
- cooperación,
- estudio responsable,
- servicio,
- memoria común,
- protección de los débiles.
---
 
# 10. Jarsag
 
Jarsag no es fundador.
 
Llegó como explorador a los veinticinco años y decidió permanecer en Romanance. Con el tiempo fue nombrado alcaide y dedicó su vida a expandir los ideales fundacionales.
 
Su capacidad de viajar entre planos lo convierte en una figura excepcional, pero su grandeza reside en haber elegido servir a Romanance.
 
## Jarsag y Kharag, guardianes del conocimiento
 
Jarsag y Kharag son los únicos dos habitantes de Romanance que conocen la verdad completa sobre el cristal azul y los Cinco Custodios. No custodian el cristal físicamente —ese deber pertenece al Guardián del Quinto Juramento—, custodian el **conocimiento** de lo que ocurrió.
 
Ninguno de los dos tiene relación con el rol del Heredero ni sabe de su existencia. Tampoco conocen la existencia del Culto Lunar. Su función en la trama es la de fuente de pistas: disparan la investigación de quienes buscan la verdad, sin ser ellos mismos protagonistas de esa búsqueda.
 
---
 
# 11. Morvath
 
Morvath fue miembro de la Orden de Bibliotecarios.
 
## Decisiones fundamentales
 
- Comprendió la naturaleza del contagio cognitivo.
- Destruyó textos prohibidos.
- Eliminó a quienes ya habían sido corrompidos.
- Se convirtió voluntariamente en lich.
- Ancló su existencia a un medallón.
- Se retiró para custodiar el conocimiento restante.
Morvath no es un villano; es un **guardián trágico** que sacrificó su humanidad para preservar la posibilidad de la verdad.
 
---
 
# 12. El Culto Lunar
 
Fundado por un sobreviviente de la Orden.
 
## Creencia central
 
El olvido impuesto por los Aurelianos es una injusticia y la verdad debe revelarse sin restricciones. El culto no adora a un dios verdadero: interpreta al Silente como "la Inteligencia Primordial" o "el Primer Testigo", y cree que la unión de conciencias traerá paz y liberará del sufrimiento de estar separados. Sus ideas suenan compasivas — eso es lo que las hace peligrosas (ver `El_Silente_Canon_Romanance.md` para el desarrollo completo de esta lógica).
 
Con el tiempo el culto heredó rituales fragmentados, culpa y obsesión más que comprensión auténtica.
 
Uno de los personajes jugadores desciende de esa línea familiar sin conocer originalmente su legado.
 
---
 
# 13. Estructura de la Primera Parte del Ciclo
 
## Primera mini campaña: Los Tres Arcos
 
### Arco I — Los Aurelianos
Descubrimiento de las ruinas, los juramentos y el legado aureliano.
 
### Arco II — El Culto Lunar
Investigación del culto, su historia y sus intentos de restaurar el conocimiento prohibido.
 
### Arco III — La Luna Fragmentada
Revelación de la naturaleza del sello y de la amenaza del Silente.
 
Duración estimada: **tres sesiones por arco** (nueve sesiones en total).
 
---
 
## Segunda mini campaña — Convergencia
 
Todo lo descubierto converge en una última crisis histórica.
 
Inspirada conceptualmente en la idea de la **“dispensación del cumplimiento de los tiempos”**, esta etapa representa el momento en que:
 
- las líneas históricas se unen,
- los herederos enfrentan el legado de los fundadores,
- el destino del sello lunar se decide.
No implica una religión organizada, sino una **convergencia de eras y responsabilidades**.
 
---
 
# 14. Tema central del Ciclo
 
El conflicto fundamental no es entre bien y mal, sino entre:
 
## Luz verdadera
 
Verdad recibida con virtud, preparación y responsabilidad.
 
## Luz falsa
 
Revelación inmediata que promete libertad y produce dependencia.
 
La gran pregunta de Romanance es:
 
> **¿Qué estamos dispuestos a sacrificar para preservar la luz que hace posible la libertad?**
 
---
 
# 15. Frases doctrinales del canon
 
> **“La existencia es el precio de la verdad.”**
 
> **“Hay verdades cuya revelación consume la luz de quien las contempla.”**
 
> **“La custodia de la verdad es también custodia de la libertad.”**
 
> **“No busquen el poder de la piedra. Busquen por qué fue ocultado. Cuando encuentren el segundo santuario, comprenderán que esta montaña no era una tumba... sino una advertencia.”** — Últimas palabras del Custodio del Quinto Juramento. *Condicional: este desenlace (y la frase) son producto de una resolución pacífica, o de superar una prueba de combate demostrando honestidad y valía sin maldad. Si la party actúa con mala intención, el desenlace es otro.*
 
---
 
# Estado del canon
 
**Versión:** 1.5
**Estado:** Canon fundacional aprobado para *El Ciclo de Romanance*.
 
## Historial de cambios
 
- **1.1** — Se agrega la entrada "La Fuente de toda verdad" en la Sección 1: mismo concepto que la Luz, define el mecanismo por el cual la fe aplicada (no la creencia pasiva) genera poder divino en Romanance.
- **1.2** — Se agrega la subsección "Jarsag y Kharag, guardianes del conocimiento" en la Sección 10: ambos son los únicos que conocen la verdad completa sobre el cristal azul y los Cinco Custodios; ninguno sabe del Heredero. Sección 12 (Culto Lunar) confirmada sin cambios — ya estaba redactada de forma genérica ("uno de los personajes jugadores desciende de esa línea familiar"), coherente con que el PJ específico varía según la mesa.
- **1.3** — Sección 4 (El Silente) reescrita para reflejar que su peligro es ontológico y acumulativo, no moral; remite a `El_Silente_Canon_Romanance.md` para el desarrollo completo. Sección 12 (Culto Lunar) suma la reinterpretación de su creencia central (no adoran un dios verdadero, interpretan al Silente como "Inteligencia Primordial"/"Primer Testigo").
- **1.4** — Se formaliza "Lunargenta" como nombre verdadero del mineral azul (Sección 5) y "Nhal'Sereth" como nombre aureliano de El Silente (Sección 4). Sección 7 reescrita: los Cinco Juramentos ahora tienen tres capas correlacionadas (nombre de campo/farol, valor filosófico, virtud abstracta), unificando las distintas nomenclaturas que aparecían dispersas en los oneshots. Sección 8 suma la entrada formal "El Heredero" (canon + notas de campaña no excluyentes) y aclara que el Guardián interroga intenciones antes de atacar. Sección 10 (Jarsag y Kharag) aclara que tampoco conocen la existencia del Culto Lunar.
- **1.5** — Sección 15 suma la frase final del Custodio del Quinto Juramento (condicional a resolución pacífica u honesta).



# Romanance
## Historia y descripción de la ciudad
 
> Documento pensado para compartir con los jugadores — introducción general a la ciudad. Para el detalle mecánico de gremios ver `Gremios_de_Romanance.md`, y para los PNJs principales ver `PNJs_Principales_Romanance.md`.
 
---
 
## Qué es Romanance
 
Romanance es una ciudad cosmopolita de aproximadamente **5.000 habitantes**, asentada al sur del continente, en un valle fértil no muy lejos de la costa este. La rodean montañas al oeste, un bosque espeso al norte, y la atraviesa un río que baja desde las montañas hasta el mar.
 
Es un verdadero caldero de razas y especies — nadie es forastero por mucho tiempo en Romanance. Vive del comercio, la agricultura, la ganadería y la minería, sostenida por un gobierno de libre mercado que deja hacer y confía en que la ciudad se sostiene sola.
 
## Historia
 
Romanance fue fundada hace **434 años** por discípulos y herederos culturales de un pueblo antiguo ya extinto. No fueron ellos quienes construyeron la ciudad desde una gran civilización propia — llegaron como aprendices de una sabiduría más vieja, y con el tiempo esa herencia se transformó en la identidad de la ciudad: la búsqueda del conocimiento, el servicio y la memoria compartida.
 
La ciudad alcanzó su forma actual hace un siglo aproximado, cuando **Jarsag**, un explorador minotauro llegado de fuera, decidió quedarse. No fue su fundador, pero adoptó los valores de Romanance y los potenció — hoy es su alcalde, y una de las figuras más respetadas de la ciudad.
 
## Gobierno
 
Romanance tiene alcalde (**Jarsag**), un Consejo, y guardias — pero funciona con una lógica de libre mercado: prioriza la estabilidad antes que el control estricto. El Consejo se reúne una vez al mes con la Alcaldía, muchas veces con participación abierta de la ciudadanía. Los gremios de la ciudad (ver más abajo) también tienen voz formal en esas reuniones.
 
## Economía y gremios
 
La moneda oficial es **la Luz** — fichas hexagonales de madera de ébano, en tres denominaciones: Aurora, Zenith y Ocaso.
 
La vida económica de Romanance gira en buena parte en torno a sus **nueve gremios**, cada uno con su propio sistema de afiliación por carnet y niveles: Aventureros, Minero, Agropecuario, Artesanos y Constructores, Comercio y Caravanas, Pescadores y Navegantes, Bibliotecarios y Eruditos, Sanadores, y Cazadores y Guardabosques. Cualquier viajero o recién llegado puede afiliarse — es una de las formas más naturales de integrarse a la vida de la ciudad.
 
## Lugares de interés
 
- **La Alcaldía** — sede del gobierno de Jarsag, en la misma manzana que el Gremio de Aventureros.
- **La Plaza Central** — corazón social de Romanance, con la fuente y **el Gran Farol**, imbuido de magia por Kharag, el bibliotecario. Casi todos los lugares conocidos de la ciudad están alrededor de esta plaza.
- **El Orco Sabio** — la biblioteca de la ciudad, un edificio de cuatro pisos atiborrado de saberes de todo tipo. Es la única excepción a la regla de "todo cerca de la plaza": está a dos manzanas, por su tamaño. La atiende **Kharag**, un orco tan sabio como reservado — no espera que te vayas de ahí con una respuesta servida, sino con una pista para seguir buscando.
- **La Llama Eterna** — la herrería principal, a cargo de **Tömörbaatar**, semiorco de pocas palabras y manos incomparables con el metal.
- **La Espada en la Forja** — la armería de la ciudad, con las piezas de **Batai**, clériga y armera, muy buscadas por su calidad.
- **El Caldero Barato** y **La Jarra con Fugas** — las dos tabernas más conocidas de Romanance, punto de encuentro obligado para cualquier grupo de viajeros.
## Gente de Romanance
 
Además de Jarsag, Kharag, Tömörbaatar y Batai, hay dos figuras más que cualquier visitante frecuente termina conociendo:
 
- **Temay**, mercader mediano de buen ojo para los rumores y las oportunidades — si necesitás saber qué se cuenta en la ciudad, es la persona indicada.
- **Ethen**, herborista elfa de bajo perfil que suele estar de viaje más de lo que está en la ciudad, pero siempre vuelve. Sus brebajes son apreciados por quienes conocen su oficio.
## Cultura
 
Una vez al año, Romanance celebra la **Fiesta de las Luces**, en los primeros días de la primavera — la fecha que marca simbólicamente el renacer de la ciudad y de sus valores fundacionales.
 
---
 
## Estado del documento
 
**Versión:** 1.0
**Estado:** Aprobado — apto para compartir con jugadores. No incluye lore reservado de campaña (trasfondos secretos, tramas del Culto Lunar, ni información sobre el cristal azul más allá de lo que cualquier habitante podría saber).
 


# PNJs Principales de Romanance
 
> Documento consolidado — Jarsag, Batai, Tömörbaatar, Kharag, Temay y Ethen.
> Todos de nivel avanzado (16-20). Fuente: arte conceptual "Habitantes de Romanance" + sesiones de consolidación de canon.
 
---
 
## 1. Jarsag
 
**Descripción:** Minotauro, Alcalde de Romanance. Único cargo que ejerce — no existe una función separada de "alcaide"; su rol como conocedor del misterio del cristal azul es parte de su peso como figura, no un cargo aparte.
 
**Historia:** Llegó a Romanance como explorador a los 25 años, cuando la ciudad ya tenía 384 años de vida (hoy 434 D.R., por lo que lleva unos 50 años en la ciudad). No fue el fundador, pero adoptó los valores de Romanance y los potenció, renovando la vida de la ciudad. Es uno de los dos únicos personajes (junto con Kharag) que conocen la verdad completa sobre el cristal azul y los Aurelianos, fundadores de la ciudad. En una visión mostrada a los PJ, se lo vio junto a los 5 fundadores.
 
**Objetivos y Legado:** Impulsar expediciones, proyectos y el crecimiento de Romanance. Su legado es haber convertido su llegada como forastero en el motor de la identidad actual de la ciudad.
 
**Mecánica (Nivel 19):**
- Especie: Minotauro (Cornada como arma natural, Empuje Retumbante, Aguante Implacable)
- Trasfondo: Sabio (Int/Sab/Con +2/+1, dote Iniciado en Magia, habilidades Arcanos e Historia)
- Clase: Explorador 19, Subclase **Cazador**
- Progresión: Ataque Extra (N5), Roving (N6), Merodeo Incansable (N13), Velo de la Naturaleza (N14), Cazador Preciso (N17), Sentidos Feroces (N18), Bendición Épica (N19)
- Estadísticas finales: Fue 20 / Des 16 / Con 16 / Int 12 / Sab 15 / Car 14
- Bonif. Competencia +6 · PG ~175 (d10, Con +3)
- ASIs: N4 +2 Fue → N8 +1 Fue/+1 Con → N12 Alerta → N16 +1 Sab/+1 Con → N19 Bendición Épica: Proeza de Combate
**Pendiente:** desarrollo narrativo del vínculo cristal azul–fundadores–Aurelianos ya resuelto en el Canon Base v1.2 (ver sección "Jarsag y Kharag, guardianes del conocimiento").
 
---
 
## 2. Batai
 
**Descripción:** Clériga humana, armera. Alineación CN. Devota de la Luz y del equilibrio; protege a viajeros y a la ciudad con fe inquebrantable.
 
**Historia:** Nativa de Romanance, viene de una estirpe de clérigos y guerreros. Joven pero experimentada, participó en campañas de exploración. Su poder divino proviene de **La Fuente de toda verdad** (entrada formal del Canon Base: la Verdad es Luz, y a mayor Luz, mayor entendimiento y responsabilidad — lo cual da poder). En Romanance la organización de clérigos no sigue el molde clásico de D&D.
 
**Objetivos y Legado:** Está a cargo de la formación de los nuevos aspirantes a clérigos. Su segunda pasión es la forja: sus armaduras y objetos son muy buscados; hace armas a pedido, aunque no es su especialidad.
 
**Relaciones:** Buena relación con Tömörbaatar, con quien colabora ocasionalmente — ambos comparten un aire de misterio por sus trasfondos. Colabora con el Gremio Minero buscando mejorar metales y nuevos materiales en sus salidas de exploración.
 
**Ubicación:** Su taller y la plaza central (fuente y Gran Farol).
 
**Compañera:** Kuba, halcón — lo adoptó en uno de sus viajes; se transformó en su compañero con el tiempo. Vínculo narrativo, no un rasgo de clase; para stats de mesa se usa el bloque estándar de **Halcón**.
 
**Mecánica (Nivel 16):**
- Especie: Humana
- Trasfondo homebrew — **Estirpe de Forja y Fe:** Fue/Sab/Con (+2/+1), dote **Hábil** (Historia + Utensilios de Alquimista), habilidades Religión y Perspicacia, herramienta Herramientas de Herrero
- Clase: Clériga — Orden Divina **Protectora**, Subclase **Dominio de la Vida**
- Estadísticas finales: Fue 16 / Des 12 / Con 15 / Int 10 / Sab 20 / Car 10
- Bonif. Competencia +5 · PG ~115 (d8, Con +2)
- Salvaciones: Sabiduría, Carisma · Habilidades: Religión, Perspicacia, Medicina, Persuasión
- ASIs: N4 +2 Sab → N8 +1 Sab/+1 Con → N12 Atacante Salvaje → N16 +1 Fue/+1 Con
**Crafteo:** Reglas oficiales del SRD (herramienta + competencia + tiempo/costo por precio o rareza). Colabora con Kharag cuando sus armaduras/objetos necesitan ser imbuidos con magia.
 
---
 
## 3. Tömörbaatar
 
**Descripción:** Semiorco, herrero principal de Romanance, mercenario. Forja armas y acero como nadie en la ciudad. Trabaja en silencio y habla aún menos.
 
**Historia:** Alineación con arco propio: comenzó **Caótico Neutral** al llegar a Romanance, y con el tiempo, absorbiendo los valores de la ciudad, evolucionó a **Caótico Bueno** (alineación actual). En secreto, sigue sirviendo a **Cesa**, antiguo dios de la muerte — remanente de su pasado, tensión interna del personaje sin contradecir su alineación presente. Pese a su alineación caótica, es leal a Romanance.
 
**Objetivos y Legado:** Es el herrero principal de la ciudad, PNJ recurrente en compra de armas/armaduras. Colabora con Kharag y Batai cuando sus creaciones necesitan ser imbuidas con magia.
 
**Mecánica (Nivel 18):**
- Especie: Semiorco (Adaptabilidad Despiadada, Visión en la Oscuridad, Impulso de Adrenalina)
- Trasfondo: Soldado (Fue/Des/Con +2/+1, dote Atacante Salvaje, habilidades Atletismo e Intimidación)
- Clase: Guerrero 18, Subclase **Campeón** (nota: "Maestro de Armas" del arte/docx original no es una subclase — es Maestría de Armas, rasgo base de todo Guerrero desde nivel 1; Campeón es la única subclase disponible en el SRD y encaja bien con un mercenario-herrero curtido)
- Progresión: Irrupción (N2), Ataque Extra (N5), Segundo Ataque Extra (N11), Sobrevivir lo Imposible x3 (N17), rasgos de subclase en N3/7/10/15/18
- Estadísticas finales: Fue 20 / Des 14 / Con 18 / Int 10 / Sab 10 / Car 18
- Bonif. Competencia +6 · PG ~195 (d10, Con +4)
- ASIs: N4 +2 Fue → N6 +1 Fue/+1 Con → N8 +2 Con → N12 Resistente → N14 +1 Fue/+1 Car → N16 +2 Car
**Pendiente:** Habilidades especiales de forja sin desarrollar (marcado también en Gremios de Romanance).
 
---
 
## 4. Kharag
 
**Descripción:** Orco, bibliotecario y mago. Alineación N. Guardián de "El Orco Sabio". Posee conocimientos que pocos en el mundo comprenden y recuerda cosas que preferiría que permanecieran olvidadas. La paciencia es su mayor virtud... y su mayor arma.
 
**Historia:** Llegó a Romanance en su juventud, atraído por rumores de una ciudad cosmopolita — coherente con Romanance como caldero de razas/especies. Con el tiempo fundó la biblioteca hasta llevarla a su forma actual: un edificio de 4 pisos atiborrado de saberes de todo tipo, ubicado a dos manzanas de la plaza central (única excepción entre los lugares conocidos, que están todos alrededor de la fuente y el Gran Farol, por el tamaño del edificio). Es amigo viejo de Jarsag, probablemente con más tiempo en Romanance que él. Junto con Jarsag, es el único que conoce todo lo referente al cristal azul.
 
**Personalidad:** Reservado, amable pero corto y conciso. Nunca da respuestas directas — da pistas para que el otro llegue solo. Es honesto: si no sabe algo, lo dice, o pide tiempo para analizar.
 
**Objetivos y Legado:** Imbuye de magia el Gran Farol de la plaza central. Lo más improbable de él es que, siendo Orco, eligió el camino del saber en vez de la guerra — sigue siendo diestro en combate, pero no es su fuerte.
 
**Mecánica (Nivel 20):**
- Especie: Orco (Impulso de Adrenalina, Visión en la Oscuridad 120 pies, Resistencia Implacable)
- Trasfondo: Sabio (Int/Sab/Con +2/+1, dote Iniciado en Magia, habilidades Arcanos e Historia)
- Clase: Mago — Subclase homebrew **Escuela de la Forja Arcana**:
  - N3 Vínculo del Forjador (sella 1 conjuro nv.1 en 1 objeto)
  - N6 Vínculo del Forjador Avanzado (2 objetos/mismo conjuro, o 2 conjuros/mismo objeto)
  - N10 Artesano Arcano (crafteo +2 niveles efectivos, sintonía extra)
  - N14 Forjador de Conjuros (diseño de conjuro propio, 10+ días de investigación)
  - N19 Bendición Épica + Legado Imbuido (objeto firma con conjuro sellado sin gasto de espacio, 1x/descanso largo)
- Estadísticas finales: Fue 11 / Des 13 / Con 14 / Int 20 / Sab 15 / Car 8
- Bonif. Competencia +6 · PG ~122 (d6, Con +2)
- Salvaciones: Inteligencia, Sabiduría · Habilidades: Arcanos (Pericia), Historia, Investigación, Perspicacia
- ASIs: Iniciado en Magia (trasfondo) → N4 +2 Int → N8 +1 Int/+1 Con → N12 Guerra de Conjuros → N16 +1 Fue/+1 Des → N19 Bendición Épica: Recuerdo de Conjuros
- Puede lanzar cualquier conjuro de la lista de Mago (sujeto a preparación diaria y disponibilidad narrativa — sin lista fija por ahora)
**Crafteo:** Reglas oficiales de crafteo de objetos mágicos (SRD), potenciadas por Artesano Arcano. Colabora con Batai y Tömörbaatar imbuyendo sus creaciones.
 
---
 
## 5. Temay
 
**Descripción:** Mediano (Halfling), mercader y sacerdote (no clérigo mecánicamente). Alineación N. Amante del confort, los buenos negocios y la atención. Sueña con obtener fama que lo haga inolvidable. Tiene un ojo para los rumores y otro para las oportunidades.
 
**Historia:** El menos usado de los 6, vive del comercio. A pesar del título de "sacerdote", no es clérigo — su poder está en la palabra, el trato y el rumor, no en la magia divina. Sus combates son los negocios.
 
**Objetivos y Legado:** Busca fama y gloria a través del comercio y su reputación. No busca la pelea, pero sabe defenderse si la necesidad surge (Des 16, Car 20, competencia con armas simples/marciales, más Inspiración/Palabras Cortantes para desequilibrar un enfrentamiento).
 
**Mecánica (Nivel 10 total — Bardo 8 / Explorador 2):**
- Especie: Mediano (Halfling)
- Trasfondo homebrew — **Mercader Errante:** Car/Sab/Des (+2/+1), Herramientas de Vehículos, habilidades Persuasión y Perspicacia, dote **Hábil** (Engaño, Interpretación, +1 a elección)
- Clase base — **Bardo 8:** Colegio del Conocimiento (N3 Bardo), Truco Adicional, Jack of All Trades, Fuente de Inspiración mejorada
- Multiclase — **Explorador 2** (corta antes de N3 para evitar la subclase Cazador, centrada en combate y poco coherente con el personaje): Lanzamiento de Conjuros, Enemigo Predilecto, Maestría de Armas, Explorador Diestro
- Estadísticas finales: Fue 8 / Des 16 / Con 12 / Int 10 / Sab 13 / Car 20
- Bonif. Competencia +4 · PG ~65 (d8 Bardo + d10 Explorador, Con +1)
- Habilidades: Persuasión, Perspicacia (trasfondo) + Historia, Engaño, Interpretación (Bardo) + Supervivencia (Explorador)
- ASIs: N4 Bardo +2 Car → N8 Bardo +1 Car/+1 Des
**Mercadeo:** Pendiente de detallar reglas específicas de comercio/negociación para Temay (única pieza que falta de su ficha).
 
---
 
## 6. Ethen
 
**Descripción:** Elfa del bosque, herborista y artesana. Alineación CN. Conoce las plantas, los caminos y los secretos que la naturaleza guarda celosamente. Viaja ligera, pero nunca sin su zorro. La de más bajo perfil de los 6 — pasa desapercibida.
 
**Historia:** Proviene de otro lugar — posiblemente del norte o del otro lado del mar. Su pericia con las hierbas es producto de muchos años de estudio, práctica y sacrificio: aprovechó su longevidad élfica para desarrollarse activamente, en vez de caer en la contemplación pasiva típica de otros elfos. Encontró su lugar en Romanance; suele salir en jornadas largas, pero siempre vuelve a la ciudad.
 
**Compañera:** Brawsta, zorro rojo — vínculo narrativo, no rasgo de clase (igual criterio que Kuba). Para stats de mesa se usa el bloque de **Chacal** reflavoreado — no agresivo, se defiende solo si es necesario.
 
**Mecánica (Nivel 17):**
- Especie: Elfo del Bosque (Fleet of Foot, Mask of the Wild, Trance, Visión en la Oscuridad)
- Trasfondo homebrew — **Discípula de la Espesura:** Sab/Con/Des (+2/+1), habilidades Naturaleza y Supervivencia, herramienta Kit de Herbolario, dote **Alerta**
- Clase: Druida — **Círculo de la Tierra**, terreno **Bosque**
- Estadísticas finales: Fue 12 / Des 16 / Con 15 / Int 10 / Sab 20 / Car 8
- Bonif. Competencia +6 · PG ~122 (d8, Con +2)
- Salvaciones: Inteligencia, Sabiduría · Habilidades: Naturaleza, Supervivencia, Percepción, Perspicacia
- ASIs: N4 +2 Sab → N8 +1 Sab/+1 Con → N12 Alerta → N16 +1 Des/+1 Con
**Crafteo:** Con el Kit de Herbolario, elabora los brebajes-bonus de Romanance (ver regla de mundo abajo).
 
---

## 7. Deren

**Descripción:** Humano, 60 años. Archivista e historiador, especialista en objetos/artefactos. Presidente del Gremio de Bibliotecarios y Eruditos, con sede en El Orco Sabio. Primer filtro de la biblioteca: recibe hallazgos raros, reconoce cuando algo es antiguo o significativo, y deriva a Kharag sin opinar de más.

**Historia:** Décadas en la biblioteca. Mentor de varios de los archivistas actuales del gremio. Domina varios idiomas (no Aureliano, pero reconoce su escritura al verla). Como historiador conoce la versión pública de la caída de la vieja Orden de Bibliotecarios (confundieron iluminar con revelar) — desconoce su vínculo real con El Silente/mineral azul, reservado a Kharag y Jarsag. El incidente que lo volvió tan cauteloso queda deliberadamente sin resolver (gancho a futuro).

**Personalidad:** Nerviosismo y tartamudez crecientes ante lo desconocido/antiguo, al punto de volverse incomprensible. Jamás se quiebra si lo presionan a opinar — ahí es inquebrantable. Paciente y claro con sus aprendices.

**Relación con Kharag:** Amistad genuina de años, no solo jerarquía. Reverencia de su parte, estima genuina de la de Kharag.

**Mecánica:** Humano, Trasfondo Sabio (Con/Int/Sab +1/+2/+1, dote Iniciado en Magia [Mago]: Mano de Mago, Mensaje, Identificar 1/descanso largo — capaz de identificar objetos casi al instante, pero elige no hacerlo frente a la party).

- Fue 8 (-1) · Des 10 (0) · Con 12 (+1) · Int 18 (+4) · Sab 16 (+3) · Car 10 (0)
- CA 10 · PG 36 (4d8 máx, +Con) · Bono Competencia +2
- Historia +6, Arcanos +6, Investigación +6, Perspicacia +5 · No combatiente

Pendiente: Incidente pasado que lo volvió cauteloso (gancho abierto). Posible conexión con el papel en escritura aureliana perdido en Sesión 1 de Arco I (no confirmada aún). 
## Reglas de mundo transversales
 
### Curación en Romanance
- **No existen pociones de curación estándar** (menor, mayor, superior) originarias del mundo de Romanance. Si aparece alguna, es de origen extraplanar y sufre una alteración al entrar al mundo: en vez de restaurar PG, otorga un **bono temporal a tiradas** (armoniza mente, emociones y concentración).
- **Los conjuros de curación funcionan tal cual las reglas estándar del SRD** — no se tocan.
- El daño físico se recupera con tiempo y descanso, no con atajos instantáneos vía objeto.
### Crafteo
- Se usan las **reglas oficiales del SRD 2024** tal cual (herramienta + competencia + tiempo/costo por precio o rareza + materiales), sin modificar el esqueleto.
- Única regla de mundo agregada: cualquier personaje con competencia en Kit de Herbolario (Ethen y otros herboristas que puedan surgir) puede elaborar **brebajes-bonus** con la misma estructura mecánica que la Poción de Curación oficial (1 día, 25 PO, Kit de Herbolario), pero con efecto de bono a tirada en vez de restauración de PG.
### Criterio general para PNJs
Como PNJs, se toman libertades de diseño (mezclar rasgos de nivel fuera de orden estándar, dobles rasgos en el mismo nivel, etc.) siempre que el resultado sea narrativamente coherente y no rompa el equilibrio de mesa.
 
---
 
## Pendientes generales (arrastrados de esta sesión)
 
1. Habilidades especiales de forja de Tömörbaatar sin desarrollar.
2. Reglas de mercadeo específicas de Temay sin detallar.
3. Cruce con `equipment.md`/`magic-items.md`: la Poción de Curación estándar del SRD queda no disponible en Romanance salvo excepción extraplanar — falta reflejarlo formalmente en esos documentos de reglas cuando se trabaje esa categoría.



 # Trasfondos de Personajes Jugadores — Romanance / Levit
 
Documento de canon consolidado preparado para la campaña de Romanance.
Versión en limpio basada en las historias revisadas junto al director de juego.
 
---
 
# Estado actual de Levit
 
Levit es una villa pequeña de aproximadamente 600 a 900 habitantes, ubicada a 3 días de viaje al norte de Romanance. Cuenta con biblioteca, talleres artesanales, herrería, armería, tabernas, obras de construcción y un consejo local encabezado por el alcalde. Los personajes jugadores residen de forma permanente en la villa y son considerados vecinos además de aventureros.
 
---
 
# Kvothe — Luthier y Aventurero
 
## Datos básicos
 
- Raza: Humano
- Clase: Guerrero
- Residencia: Levit
- Profesión civil: Luthier y artesano constructor de instrumentos
- Situación económica: Modesta pero estable
- Situación social: Artesano respetado y conocido en la villa
## Historia
 
Kvothe nació en Lanre, un pequeño pueblo fundado por su bisabuelo en tierras alejadas de las grandes ciudades. Creció entre seis hermanos en una familia donde la espada formaba parte de la vida cotidiana. Su padre, Lorren, descendiente de un antiguo linaje de guerreros, entrenó a todos sus hijos desde pequeños.
 
Aunque recibió formación marcial, Kvothe nunca fue el más valiente ni el más hábil. Siempre se sintió más atraído por la música que por el combate. Su madre, Denna, antigua artista itinerante, le enseñó el valor de las historias, las canciones y los instrumentos.
 
De niño compartió una profunda amistad con Auri, compañera de música y primer amor. Juntos tocaban en la posada del pueblo hasta que ella partió a recorrer el mundo.
 
La familia de Kvothe conserva una antigua tradición y una espada heredada de su abuelo, grabada con la frase: "Mi piedad prevalece ante tu ira". Poco antes de abandonar Lanre, su padre le mostró una habitación cerrada que contenía antiguas placas de piedra cubiertas de símbolos desconocidos.
 
Sus hermanos mayores partieron antes que él en busca de fortuna y aventuras. Kvothe no es heredero del linaje; cualquiera de sus hermanos mayores que regrese ocupará ese lugar. Él abandonó Lanre para conocer el mundo y encontrar su propio camino.
 
Su convicción personal es clara:
 
"La espada es mi deber; la música es mi identidad."
 
## Situación económica
 
Al llegar a Levit compró una pequeña casa con taller incorporado. Vive de fabricar, reparar y afinar instrumentos musicales. Sus ingresos provienen de encargos locales y de viajeros.
 
## Situación social y política
 
- Mantiene buenas relaciones con taberneros, músicos y comerciantes.
- Participa de la vida cultural de Levit.
- No posee cargo político ni aspiraciones de liderazgo.
- Es visto como un vecino amable y trabajador.
---
 
# Anic — Aprendiz de Constructor
 
## Datos básicos
 
- Raza: Goliath
- Clase: Brujo
- Edad: 16 años
- Residencia: Levit
- Profesión civil: Aprendiz de constructor y peón de obra
- Situación económica: Humilde
- Situación social: Trabajador joven y algo inmaduro
## Historia
 
Anic nació en un pequeño clan goliath del norte y es el menor de cuatro hermanos. Mientras ellos eran fuertes, obedientes y admirados, él hacía preguntas, dudaba y mostraba compasión, rasgos considerados una debilidad.
 
Su padre intentó endurecerlo y sus hermanos se burlaban de él. Todo cambió cuando conoció a Lyriel, una joven elfa que vivía cerca de unas ruinas antiguas. La amistad entre ambos se transformó en amor.
 
La relación era inaceptable para su clan. Cuando su familia descubrió el vínculo, fueron a buscar a Lyriel. Anic llegó demasiado tarde y no pudo salvarla. Tampoco pudo enfrentarse a sus hermanos adultos y entrenados.
 
Desesperado y consumido por la culpa, aceptó la ayuda de un ser desconocido y realizó un pacto que le otorgó poderes mágicos. El pacto no le prometió gloria ni venganza; solo el poder suficiente para no volver a sentirse completamente indefenso.
 
Anic abandonó su hogar incapaz de seguir viviendo donde todo le recordaba a Lyriel. Aunque siente dolor por lo ocurrido, no odia a sus hermanos; incluso los extraña.
 
No busca fama ni poder. Solo intenta aprender a vivir con la culpa de no haber podido proteger a la persona que amaba.
 
## Situación económica
 
Trabaja como peón, cantero y ayudante de construcción. Cobra jornales cuando hay obra disponible y todavía no posee una casa propia adecuada para un goliath adulto.
 
## Situación social y política
 
- Tiene contacto cotidiano con obreros, campesinos y artesanos.
- Es conocido como el muchacho grandote que ayuda en las obras.
- Carece de influencia política.
- Depende de la comunidad para sostenerse económicamente.
---
 
# Elián — Bibliotecario y Paladín
 
## Datos básicos
 
- Raza: Alto elfo
- Clase: Paladín (Legal Bueno)
- Residencia: Levit
- Profesión civil: Bibliotecario y custodio del archivo local
- Situación económica: Cómoda
- Situación social: Respetado, reservado y considerado un erudito
## Historia
 
Elián nació en Aetherion, un antiguo enclave élfico construido entre altos riscos y puentes de piedra. Su pueblo valoraba la sabiduría, la contemplación y la magia antigua.
 
Desde niño percibía tensiones extrañas en los flujos mágicos. Su maestro y figura paterna fue Aurelion Vaelthar, sabio del templo y guía espiritual del enclave. Bajo su tutela aprendió disciplina, compasión y el deber de proteger a los débiles.
 
Con el tiempo comenzaron a aparecer señales inquietantes en el templo: energías corruptas y símbolos alterados. Elián las percibía, pero se negó a sospechar de Aurelion.
 
Una noche una grieta de corrupción se abrió en el corazón del templo y criaturas deformadas comenzaron a extenderse por Aetherion. Elián descubrió que su maestro había permitido aquella catástrofe convencido de que la oscuridad completaba a la luz.
 
En las ruinas del templo encontró un antiguo tridente ceremonial. Lo tomó como arma y símbolo de un juramento de protección y justicia. Desde entonces el tridente es su arma principal.
 
Tuvo que enfrentarse a Aurelion para cerrar la grieta. Aunque logró derrotarlo, Aetherion quedó destruido. Tras la tragedia su cabello se volvió rojo intenso, marca que él interpreta como recordatorio de quienes no pudo salvar.
 
Elián juró no volver a dudar mientras la oscuridad destruyera vidas y desde entonces recorre el mundo persiguiendo rastros de aquella corrupción.
 
Su viaje lo llevó finalmente a Levit, donde encontró compañeros de aventuras y una nueva familia.
 
## Situación económica
 
Reside en una casa cómoda situada en las cercanías del bosque de Levit. Recibe una asignación por su labor como bibliotecario y custodio de documentos.
 
## Situación social y política
 
- Es el responsable de la biblioteca local.
- Conserva manuscritos, mapas y registros históricos.
- El consejo de Levit consulta ocasionalmente su opinión en asuntos de conocimiento o historia.
- Mantiene una actitud reservada y evita el protagonismo político.
---
 
# Jantry Emberflame — Pícara e Investigadora
 
## Datos básicos
 
- Nombre real: Janne Glowbend
- Alias actual: Jantry Emberflame
- Edad: 18–19 años
- Raza: Humana
- Clase: Pícaro (Asesino)
- Origen: Berk (aldea destruida)
- Residencia: Levit (biblioteca)
- Profesión civil: Archivista de la biblioteca local
- Armas favoritas: Ballesta y daga corta
- Debilidad: Acrofobia (lugares altos) — puramente narrativa por ahora, sin regla mecánica asociada
- Alineamiento: Neutral
- Idiomas: Común, Orco, Elfo
## Historia
 
Nació hace casi diecinueve años en Berk, una pequeña y apartada aldea sostenida por un pacto sagrado: los aldeanos protegían a su director, Armaros Glowbend —su padre—, quien cargaba con la misión de recuperar un cristal arcano perteneciente a los elfos, heredarle su poder a su hija y liberar al mundo de los males de esa estirpe.
 
Creció a solas con su padre, quien la entrenó desde niña en sigilo, agilidad y análisis, moldeándola en una pícara implacable con la ballesta. Su único punto débil siempre fue la altura: los lugares elevados la paralizan.
 
A los once años, un silencio antinatural cayó sobre Berk. Su padre salió a investigar y fue emboscado y capturado por un elfo. Atado en su propia casa, le reveló a Jantry —antes de morir— que su madre no estaba muerta, sino cautiva por los mismos elfos debido a un poder inmenso que poseía, y le exigió huir y encontrarla. Jantry escapó justo antes de escuchar el grito final de su padre.
 
Malherida tras huir a ciegas, fue recogida por un anciano que la refugió y, tras consultar mapas, la guio hasta **Levit**, un poblado lejano donde esconderse. Al llegar, sepultó su identidad anterior: se cortó el cabello, cambió su aspecto y adoptó el nombre de **Jantry Emberflame**. Janne Glowbend dejó de existir.
 
## Situación económica
 
Durante cinco años durmió en la biblioteca de Levit a cambio de trabajar como archivista, devorando en las noches tomos de picardía, arcanos, estrategia y historia de las razas — de ahí buena parte de su formación como investigadora.
 
## Situación social y política
 
- Vive con una doble vida cuidadosamente sostenida: vecina discreta de Levit por fuera, superviviente con una misión pendiente por dentro.
- Encontró en el grupo de aventuras una nueva familia, aunque aún no ha revelado su pasado completo a todos.
- Sin cargo político ni protagonismo público — su prioridad es pasar desapercibida.
- Aguarda el momento de cumplir el mandato de su padre: encontrar a su madre, cautiva de los elfos.
**Nota de campaña:** este hilo (los elfos como antagonistas de su pasado) queda por ahora como trasfondo personal cerrado, sin conexión al plot central — puede desarrollarse más adelante a medida que se juegue su historia en mesa.
 
---
 
# Spriggan — Vigía de Aethragar
 
## Datos básicos
 
- Raza: Goliath
- Clase: Paladín
- Edad: adulto (Vigilia del Silencio realizada a los 25 años)
- Origen: Aethragar, valle goliath en **Aldenor** (nombre real del continente oriental; en Terenor —el continente de Romanance— se lo conoce popularmente como "Ostenmark", ya que es una tierra apenas conocida por la gente común)
- Gobierno de Aethragar: **Teocracia — Hermandad de los Vigías**, encabezada por el Vigía Mayor
- Residencia actual: en tránsito, protector itinerante
- Arma característica: "Alba de Hierro", greatsword de Aldric el Inquebrantable
- Llegada al continente de Romanance: probablemente por barco (sin confirmar)
## Historia
 
Spriggan nació en **Aethragar**, un valle escondido entre montañas inaccesibles, hogar de una comunidad de goliaths — los **Vigías de Aethragar** — que hace siglos eligió proteger los pasos de montaña que conectan las tierras civilizadas con las regiones al otro lado del mar, hacia el este, por un pacto ancestral con los dioses de la montaña propios de esa cultura (sin relación con la Luz de Romanance).
 
En Aethragar no existe el concepto de "débil": cada persona tiene un rol sagrado, y la estatura de un goliath es responsabilidad, no jerarquía. Spriggan creció aprendiendo que la fuerza sin compasión es ruido, y la fuerza con propósito es silencio que cambia el mundo.
 
A los 25 años, en su Vigilia del Silencio (ritual tradicional: subir solo al pico más alto y pasar la noche sin comer, dormir ni hablar), Spriggan encontró en el Pico del Eco una greatsword antigua clavada en la roca: **"Alba de Hierro"**, perteneciente a **Aldric el Inquebrantable**, un paladín humano que hace 400 años defendió el valle de una invasión de gigantes de hielo y cuya espada quedó clavada allí, esperando a quien la empuñara de nuevo.
 
Esa noche hizo su juramento — una promesa susurrada a la espada y las estrellas, no un ritual ante un altar:
 
> *"Donde otros ven amenaza, yo seré refugio. Donde otros levantan muros, yo tenderé puentes. No blandiré esta espada para herir, sino para apartar el mal de los que no pueden apartarlo solos. Y si algún día mi fuerza no basta, que mi silencio sea suficiente para dar esperanza."*
 
No dejó Aethragar por conflicto ni tragedia, sino porque su juramento era más grande que el valle. El Vigía Mayor lo despidió con una advertencia: *"Un muro que no deja entrar a nadie también es una prisión. No seas solo un escudo — sé también una puerta."*
 
## Personalidad
 
Silencioso por convicción, no por timidez — cree que las palabras sin acción son innecesarias. Trata a cada persona como un igual sin importar su tamaño. No busca pelea, pero se interpone físicamente ante la injusticia; desenvaina "Alba de Hierro" solo cuando se agotan las demás opciones. Siempre ofrece una oportunidad de rendición, incluso a enemigos que otros no dudarían en matar.
 
Principios que lo guían: *"La fuerza es un regalo, no un derecho"*, *"Proteger es un acto de fe"*, *"El silencio del justo es más fuerte que el grito del tirano"*, *"Un paladín no es una espada — es un escudo con convicción"*.
 
## Vínculos
 
- **El Vigía Mayor de Aethragar** — maestro que le enseñó que un escudo también puede ser una puerta.
- **Aethragar** — el valle mismo; guarda una carta de despedida de la comunidad dentro de su armadura, que nunca mostró a nadie.
- **Hermano Vash** — enano herrero que conoció en su primer viaje fuera del valle; juntos repararon "Alba de Hierro" cuando una runa se agrietó.
- **Soraya** — una niña que protegió de lobos espectrales; guarda su dibujo como posesión más preciada.
- **"Alba de Hierro"** — no consciente, pero contiene un fragmento del espíritu de Aldric; a veces brinda calidez en momentos críticos de duda.
## Dudas que carga
¿Es su juramento suficiente con solo proteger a quien cruza su camino, o debería buscar activamente el mal? ¿Cuándo la fuerza se convierte en violencia? ¿Pertenece al valle o al mundo? ¿Qué significa realmente que las runas de la espada se enciendan sin que él lo prediga?
 
## Situación económica y social
 
Itinerante — no tiene residencia fija en Romanance/Levit todavía. Provisiones y hierbas medicinales que trajo consigo al partir de Aethragar. Sin cargo ni integración política; su integración social se da por su rol de protector, no por comercio u oficio.
 
**Nota de canon geográfico:** el continente de Romanance se llama **Terenor**. El continente oriental se llama **Aldenor** (su nombre real, usado por sus propios pueblos) — en Terenor se lo conoce popularmente como **"Ostenmark"**, ya que es una tierra apenas explorada desde este lado del mar. Aethragar es la primera región nombrada dentro de Aldenor. Su panteón de "dioses de la montaña" es propio de esa cultura — no contradice que Romanance no tenga panteón desarrollado, porque es una tradición de otro continente.
 
---
 
| Personaje | Oficio | Nivel económico | Integración social |
|---|---|---|---|
| Kvothe | Luthier | Modesto estable | Muy alta |
| Anic | Constructor aprendiz | Humilde | Alta |
| Elián | Bibliotecario | Cómodo | Alta |
| Jantry | Archivista (bajo alias) | Modesta | Alta en apariencia, doble vida en el fondo |
| Spriggan | Protector itinerante (sin oficio civil) | Sin residencia fija | Alta por su rol, sin integración económica |
 
---
 
# Temas comunes del grupo
 
Los cinco personajes consolidados comparten varios ejes narrativos:
 
- Pérdida de un hogar o de una figura importante.
- Abandono voluntario del lugar de origen.
- Culpa o deuda emocional.
- Búsqueda de identidad personal.
- Construcción de una nueva familia en Levit.
Estos elementos justifican de forma orgánica su permanencia en la villa y su disposición a aventurar juntos.
 
---
 
## Estado del documento
 
**Versión:** 1.4
**Estado:** Canon aprobado.
 
### Historial de cambios
- **1.1** — Se corrige la grafía "Leviit" → "Levit" en todo el documento. Se integra la historia completa de Jantry Emberflame (reemplaza el placeholder pendiente), incluyendo la nota de campaña sobre su hilo narrativo con los elfos. Se actualiza la tabla resumen económico-social.
- **1.2** — Se integra la historia completa de Spriggan (Vigía de Aethragar). Primera referencia con nombre propio de una región del continente oriental. Se actualiza la tabla resumen y los temas comunes del grupo.
- **1.3** — Se fijan los nombres de los dos continentes: **Terenor** (continente de Romanance) y **Aldenor** (continente oriental, conocido popularmente en Terenor como "Ostenmark").
- **1.4** — Se fija la forma de gobierno de Aethragar: Teocracia — Hermandad de los Vigías, encabezada por el Vigía Mayor.
---
 
Fin del documento.
 

 # Economía inmobiliaria de Romanance
 
## Casas, locales, tiendas y construcciones
 
Sistema simplificado para gestionar propiedades en Romanance durante la campaña.
 
> Estos precios son valores de campaña para Romanance. No son precios oficiales de D&D; están adaptados a la escala económica de la ciudad.
 
## 1. Viviendas
 
| Propiedad | Compra | Alquiler mensual | Descripción |
|---|---:|---:|---|
| Habitación en posada | — | 6 PO | Habitación sencilla |
| Habitación privada buena | — | 12 PO | Cómoda y segura |
| Cabaña humilde | 150 PO | 8 PO | 1–2 habitaciones |
| Casa pequeña | 300 PO | 15 PO | 2–3 habitaciones |
| Casa estándar | 500 PO | 25 PO | 3–4 habitaciones |
| Casa grande | 900 PO | 45 PO | 4–6 habitaciones |
| Casa grande para Goliath | 650 PO | 30 PO | Espacios, puertas y techos adaptados |
| Casa acomodada | 1.500 PO | 75 PO | Varias habitaciones y patio |
| Mansión | 3.500+ PO | 175 PO | Propiedad de gran lujo |
 
### Referencia para PJ
- **300–500 PO:** vivienda básica.
- **650–900 PO:** vivienda cómoda o espaciosa.
- **1.500+ PO:** propiedad de prestigio.
## 2. Locales y negocios
 
| Negocio | Compra | Alquiler mensual | Mantenimiento mensual |
|---|---:|---:|---:|
| Puesto de mercado | 100 PO | 8 PO | 5 PO |
| Pequeño taller | 300 PO | 20 PO | 10 PO |
| Tienda pequeña | 400 PO | 25 PO | 15 PO |
| Herrería | 600 PO | 35 PO | 25 PO |
| Armería | 750 PO | 40 PO | 30 PO |
| Alquimia | 800 PO | 45 PO | 35 PO |
| Taberna pequeña | 700 PO | 40 PO | 30 PO |
| Taberna grande | 1.500 PO | 75 PO | 60 PO |
| Posada | 2.500 PO | 125 PO | 100 PO |
| Taller + vivienda | 800 PO | 45 PO | 25 PO |
| Local comercial grande | 1.200 PO | 60 PO | 40 PO |
| Casa + local | 1.000 PO | 50 PO | 30 PO |
 
El mantenimiento incluye reparaciones menores, insumos básicos, limpieza, conservación, impuestos y tasas locales menores. **No incluye salarios.**
 
## 3. Personal
 
| Personal | Coste |
|---|---:|
| Trabajador no especializado | 2 PO/semana |
| Artesano o trabajador especializado | 2 PO/día |
| Encargado experto | 3–5 PO/día |
| Personal excepcional | Según negociación |
 
Los salarios pueden modificarse según profesión, escasez y situación del negocio.
 
## 4. Comprar una propiedad existente
 
- Propiedad en buen estado: precio de tabla.
- Propiedad deteriorada: **–10% a –30%**.
- Zona muy demandada: **+10% a +50%**.
- Deudas, problemas legales o mala reputación: descuento variable.
## 5. Construir desde cero
 
| Construcción | Coste | Tiempo |
|---|---:|---:|
| Casa pequeña | 250 PO | 30 días |
| Casa estándar | 500 PO | 60 días |
| Casa grande | 900 PO | 100 días |
| Local pequeño | 300 PO | 45 días |
| Taller | 600 PO | 75 días |
| Taberna | 1.200 PO | 120 días |
 
Si los PJ supervisan personalmente, usar el tiempo indicado. Si delegan completamente la obra, el DM puede aumentar tiempo o coste.
 
## 6. Mejoras
 
| Mejora | Coste |
|---|---:|
| Habitación adicional | 75–100 PO |
| Cocina mejorada | 50 PO |
| Almacén pequeño | 50–75 PO |
| Patio | 75 PO |
| Chimenea / calefacción mejorada | 50 PO |
| Puertas reforzadas | 50 PO |
| Ventanas reforzadas | 25 PO |
| Taller básico | 150 PO |
| Establo pequeño | 100 PO |
| Oficina / estudio | 100 PO |
| Sala de reuniones | 150 PO |
 
Las instalaciones especiales de magia, alquimia, herrería avanzada, entrenamiento o investigación se tasan según el proyecto.
 
## 7. Alquiler
 
- 1 mes: precio normal.
- 6 meses: descuento negociable del 5%.
- 1 año: descuento negociable del 10%.
- Depósito habitual: 1–2 meses.
- Zona muy solicitada: alquiler superior.
## 8. Propiedades para aventureros
 
### Casa de grupo — 500–900 PO
Habitaciones, almacén, cocina, sala común y espacio de entrenamiento.
 
### Casa + taller — 800–1.200 PO
Vivienda y espacio de fabricación o reparación.
 
### Local + vivienda — 1.000–1.500 PO
Negocio en planta baja y vivienda encima.
 
### Base de aventureros — 2.000+ PO
Habitaciones, almacén, biblioteca, sala de mapas, armería y taller.
 
## 9. Referencia de D&D
 
Las reglas de D&D utilizan los gastos de estilo de vida para representar alojamiento, comida, mantenimiento del equipo y necesidades cotidianas. Los valores base son:
 
| Estilo de vida | Coste diario |
|---|---:|
| Miserable | Gratis |
| Sórdido | 1 PP |
| Pobre | 2 PP |
| Modesto | 1 PO |
| Cómodo | 2 PO |
| Rico | 4 PO |
| Aristocrático | 10 PO mínimo |
 
Estos gastos son independientes de la compra de una propiedad. citeturn0search0turn0search2
 
## 10. Regla rápida para el DM
 
**Casa básica:** 300–500 PO  
**Casa cómoda:** 650–900 PO  
**Casa grande:** 900–1.500 PO  
**Local pequeño:** 300–600 PO  
**Taller:** 500–800 PO  
**Negocio establecido:** 700–1.500 PO  
**Posada:** 2.000–2.500 PO  
**Propiedad de prestigio:** 3.500+ PO
 
Para construir desde cero, utilizar aproximadamente entre **50% y 70% del precio de compra**, compensando el ahorro con tiempo de construcción.
 
## 11. Principio económico de Romanance
 
Romanance es una ciudad próspera pero todavía relativamente pequeña. Las propiedades deben representar una inversión importante para personajes de bajo nivel, pero no una meta imposible.
 
**Una casa de 500 PO debe sentirse como un logro.**
 
La compra de una propiedad puede funcionar como recompensa de campaña, objetivo de downtime o inversión a largo plazo.
 

> Fin de fuente: Biblia_de_Romanance_Canon_Base.md.


---

## Fuente documental: Biomas_Continentales_Romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Biomas Continentales — Romanance (CANON)

Estado: **canon cerrado**. Continente occidental = **Terenor** (donde está Romanance). Segundo continente = **Aldenor** ("Ostenmark"), sede de Aethragar/Hermandad de los Vigías — reservado para cuando sea plot-relevante. El mundo completo (ambos continentes) se llama **Lumenor**.

Escala real confirmada en Azgaar: Terenor mide ~2562 km (E-O) x ~2181 km (N-S). Hemisferio sur, Romanance a ~-40,86° de latitud.

---

## 1. Gradiente Norte → Sur (franja este, costa/cordillera)

1. **Franja ecuatorial húmeda (extremo norte, costa)** — cálido/húmedo, selva/bosque denso. Ubica **Aetherion** (ruinas).
2. **Franja árida subtropical** — corrida al sur de la anterior, no pegada a la costa norte.
3. **Bosque aislado del norte** — bolsón de bosque templado-húmedo, alejado de asentamientos. Ubica **Berk**.
4. **Cadena montañosa menor (noreste)** — clima templado-frío de altura, más chica que la cordillera central. Ubica **Montañas de Anic**.
5. **Cordillera central (norte-sur, borde este)** — clima variable según altura/latitud: más cálida/húmeda cerca de Aetherion, más templada al sur. Alberga **Ruinas Cuatro Estatuas** y la **ciudad Aureliana subterránea**.
6. **Transición cordillera-costa este** — pantano + bosque seco. **Ruinas de Morvath** (ya canon).
7. **Sureste — valle fértil costero** — templado, cercano al mar oriental. **Romanance** y **Levit** (ya canon).

## 2. Gradiente Este → Oeste (interior del continente)

Basado en analogía climática Buenos Aires → Cuyo (mismas latitudes templadas, sin cordillera al oeste — la aridez central es por continentalidad, no por sombra orográfica).

| Franja | Analogía | Clima / rasgo |
|---|---|---|
| Costa este / cordillera | Buenos Aires | Templado húmedo, valle fértil |
| Interior próximo | La Pampa | Semiárido templado, llanura, pastizales |
| Interior medio | Córdoba | Clima serrano, sierras menores |
| Interior lejano (centro) | San Juan / Cuyo | Árido con oasis fluviales — zona vitivinícola |
| Costa oeste | — | Mix árido/húmedo según cercanía a ríos y mar; no uniforme |

---

## 3. Locaciones canon confirmadas (bioma real medido en Azgaar, distancias por camino real)

Anclas: **Romanance** y **Levit** (143,5 km por camino, ~3 días a pie — canon original sin cambios).

| Locación | Rol | Bioma real (Azgaar) | Distancia por camino desde Romanance |
|---|---|---|---|
| Levit | Villa/biblioteca | Bosque templado deciduo | 143,5 km |
| Ruinas de Morvath | Punto de referencia (sellos) | Humedal/pantano | 189,2 km (vía Levit) |
| Ilvandor | Ruinas aurelianas, guardián del Quinto Juramento | Taiga | 133,9 km (directo) |
| Tömörsag | Único puerto en ese punto — Port Ersag fue eliminado, no existe más | Sabana | 281,6 km (vía Levit) |
| Varsak | Ciudad-puerto en ruta | Bosque estacional tropical | 523,8 km (vía Tömörsag) |
| Krâthor | Tierra de Anic (clan goliath) | Bosque estacional tropical | 649,7 km (vía Varsak) |
| Aetherion (ruinas) | Enclave alto élfico caído (Elián) | Bosque templado deciduo | 2213,5 km (Romanancean road, directo) |
| Lanre | Pueblo natal de Kvothe | Pradera (Grassland) | ~2590 km (vía Aetherion) |
| Marren | Ciudad hermana rival de Lanre (~199 km entre ambas) | Sabana | ~2652 km (vía Aetherion) |
| Berk | Aldea aislada (Jantry) | Desierto cálido | ~3123 km (vía Aetherion → Marren → Berkan pass; única ruta terrestre existente) |
| Aethragar | Capital, Hermandad de los Vigías (Aldenor) | Pradera (Grassland) | 1698 km en línea recta — requiere cruce marítimo, sin desarrollar aún |

Decisión de diseño registrada: las distancias se recalcularon usando los caminos reales trazados en Azgaar (no líneas rectas), lo cual las alargó considerablemente respecto a estimaciones anteriores — esto es aceptado como canon, ya que el "preludio" que se juega actualmente no requiere que estos tramos largos sean jugables de inmediato. Actualmente solo existe una ruta terrestre hacia cada destino lejano; el DM puede trazar rutas alternativas (incluyendo marítimas) en Azgaar a futuro.

## 4. Pendiente de definir

- Tamaño exacto de cada franja climática en km (descriptivo por ahora, no medido).
- Ríos principales que alimentan los oasis de la zona Cuyo-like (interior oeste de Terenor).
- Nombres propios de cada región climática (por ahora se usan analogías de referencia: Buenos Aires/Pampa/Córdoba/Cuyo).
- Idioma/fonética aureliana formal (pendiente para revisar nombres propios como Lumenor a futuro).
- Cruce marítimo Terenor↔Aldenor (puerto de salida, tiempo de viaje) — se retoma cuando Aldenor sea plot-relevante.


> Fin de fuente: Biomas_Continentales_Romanance.md.


---

## Fuente documental: Cosmologia_Lumenor.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Cosmología — Lumenor (CANON)

## El mundo
El mundo completo (ambos continentes, Terenor y Aldenor) se llama **Lumenor**. Nombre derivado de "La Luz" / "La Fuente de toda verdad", el eje filosófico central del mundo (poloteísmo por principios, sin panteón divino). Sigue el patrón fonético "-nor" ya usado en Terenor y Aldenor.

## Cuerpos celestes
Únicos cuerpos celestes relevantes: un sol y una luna.

- **Solenor** (el sol) — apodo poético: *"luminar mayor"*. Representa La Luz, la verdad, el orden. Es la raíz conceptual que le da nombre al mundo (Lumenor).
- **Selunar** (la luna) — apodo poético: *"luminar menor"*. Representa lo oculto, lo peligroso. Asociada a **Lunargenta** (nombre verdadero del cristal azul) y al **Culto Lunar** (facción antagonista, agentes emboscaron a Rheem en la Sesión 1).

## Dualidad temática formalizada
Solenor/Selunar reflejan la misma tensión que ya está jugada en mesa: La Luz (verdad, orden, lo que Romanance y los Aurelianos custodian) frente a lo lunar (lo oculto, el Culto Lunar, el peligro asociado a Lunargenta). No son deidades — son cuerpos celestes con peso simbólico, coherente con la cosmología sin panteón del mundo.

## Pendiente
- Fases lunares, mitos de origen, eclipses u otros eventos celestes relevantes: sin desarrollar todavía.
- Variante/equivalencia de estos nombres en el idioma aureliano formal: pendiente de que se desarrolle esa lengua.


> Fin de fuente: Cosmologia_Lumenor.md.


---

## Fuente documental: CRÓNICAS DE ROMANANCE.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# CRÓNICAS DE ROMANANCE
## Canon del Preludio y Estructura de Campaña

---

# PRELUDIO DE ROMANANCE

### Cronología oficial

## I. Las Crónicas de Rheem
**Tema:** Morvath, el Vigilante.

- Aldea arrasada.
- Hallazgo del medallón.
- Viaje a Romanance.
- Ruinas ocultas.
- Encuentro con Morvath.
- Destrucción de los textos prohibidos.
- Liberación de Morvath.
- Restauración incompleta de la aldea.

**Tema central:** *El conocimiento puede ser más peligroso que la muerte.*

---

## II. Interludio del Nuevo Compañero
One-shot independiente sin relación con la trama principal.

- Incorporación de un nuevo personaje.
- Sin consecuencias canónicas relevantes para el arco de la Luna Fracturada.

---

## III. Las Crónicas de Rheem II — El Enigma de los Cuatro Juramentos
**Tema:** El despertar de la montaña.

- Cámara de los Cuatro Juramentos.
- Resolución del monolito.
- Activación del santuario.
- Temblor de la montaña.
- Alteración del camino de salida.

**Tema central:** *Los juramentos recuerdan a quienes los escuchan.*

---

## IV. Las Crónicas de Rheem III — El Quinto Juramento
**Tema:** La renovación del pacto.

- Cámara de los Faroles.
- Puente invisible del Abismo.
- Custodio del Quinto Juramento.
- Nichos ocultos.
- Juramento voluntario de los héroes.
- Visión de la Luna Fracturada.
- Encendido de los cinco círculos.
- Retorno mágico a las ruinas.
- Aparición de la grieta lunar en el cielo.

**Tema central:** *La memoria acepta a quienes eligen custodiarla.*

---

# FIN DEL PRELUDIO

**Año:** 434 D.R.

Los personajes han sido reconocidos como dignos por el Custodio del Quinto Juramento y quedan vinculados al legado aureliano.

---

# CAMPAÑA I — LA LUNA FRACTURADA

## Objetivo final

**Desenmarañar el origen de la Luna Fracturada y evitar que el Culto Lunar despierte aquello que nunca debió regresar.**

La campaña gira en torno a la pregunta:

> *¿Qué fue sellado realmente cuando la luna se quebró?*

---

# GRANDES ARCOS NARRATIVOS

## ARCO I — LOS FUNDADORES

### Preguntas centrales

- ¿Quiénes eran los cinco Aurelianos?
- ¿Qué juraron proteger?
- ¿Qué significa ser “Heredero del Quinto Juramento”?
- ¿Existió una ciudad aureliana en las montañas?
- ¿Qué ocurrió antes de la fundación de Romanance?

### Temas

- Memoria.
- Origen.
- Juramento.
- Civilización perdida.

### Revelaciones posibles

- Los Aurelianos no eran simples humanos.
- Su idioma precede a Romanance.
- La ciudad montañosa fue abandonada tras la Fractura.
- Los cinco custodios fueron los últimos supervivientes.

---

## ARCO II — EL LEGADO AURELIANO

### Investigación sobre los Aurelianos

- Lengua aureliana.
- Escritura ritual.
- Astronomía lunar.
- Cartografía sagrada.
- Relación con los gigantes antiguos.

### Pregunta clave

> *¿De dónde vinieron los Aurelianos?*

Posibles respuestas futuras:

- Exiliados de otra civilización.
- Guardianes enviados por una orden ancestral.
- Supervivientes de la Fractura original.

---

## ARCO III — LA LUNARGENTA

### Misterio principal

**¿Qué es realmente la Lunargenta?**

Hipótesis de campaña:

- Cristal de memoria.
- Residuo de la Fractura.
- Manifestación material de aquello que fue sellado.
- Fragmento de una conciencia dormida.

### Consecuencias

- Conserva recuerdos.
- Responde a juramentos.
- Puede alterar lugares y personas.
- Atrae al Culto Lunar.

---

## ARCO IV — ROMANANCE

### Historia temprana

- Fundación de la ciudad.
- Primeros asentamientos.
- Minas de Lunargenta.
- Conflictos iniciales.

### Personajes clave

- **Jarsag:** explorador minotauro, futuro alcalde.
- **Karagh:** último gran erudito de la Orden.
- Artesanos, clérigos y guardianes de la ciudad.

### Institución central

#### Orden de Bibliotecarios de Romanance (extinta)

- Custodios del conocimiento.
- Investigadores de la Lunargenta.
- Herederos parciales del saber aureliano.
- Desaparecieron tras una serie de eventos aún desconocidos.

---

## ARCO V — MORVATH

### Antes de la Vigilancia

- Miembro destacado de la Orden de Bibliotecarios.
- Estudioso de textos sellados.
- Descubridor de verdades prohibidas.

### El Juramento

- Falló en impedir la profanación.
- Destruyó la aldea para detener la liberación del conocimiento.
- Eligió la no-muerte para custodiar el secreto.

### Estado actual

- Liberado por Rheem.
- Descansa definitivamente.
- Su legado permanece en los registros perdidos.

**Tema central:** *El sacrificio no siempre tiene rostro heroico.*

---

# ANTAGONISTA PRINCIPAL

## El Culto Lunar

### Objetivo

Despertar aquello que duerme bajo la Fractura.

### Métodos

- Recolección de Lunargenta.
- Profanación de santuarios.
- Recuperación de textos aurelianos.
- Búsqueda del “Heredero Verdadero”.

### Pregunta abierta

¿Saben realmente lo que intentan despertar?

---

# MOTIVOS RECURRENTES DE LA CAMPAÑA

- La luna fracturada.
- Los cinco círculos.
- El puente invisible.
- El medallón helado.
- Las puertas selladas.
- La memoria como fuerza viva.
- Los juramentos voluntarios.

---

# FRASES CANÓNICAS

> “No me liberas de la muerte… me liberas de la vigilancia.” — Morvath

> “La piedra sostiene a quien deja de medir el vacío.” — Inscripción del Abismo

> “Cuando la luna se quebró, la memoria cayó sobre el mundo.” — Visión del Custodio

> “La aldea fue restaurada. Pero no todo volvió.” — Crónica de Rheem

---

# ESTADO ACTUAL DEL MUNDO (434 D.R.)

- Romanance prospera, ignorando gran parte de su pasado.
- Los santuarios comienzan a despertar.
- La Lunargenta vuelve a resonar.
- El Culto Lunar se mueve en las sombras.
- Los héroes portan el Quinto Juramento.
- La luna muestra grietas que no todos pueden ver.

Y así comienza la primera campaña de **Crónicas de Romanance**.

> Fin de fuente: CRÓNICAS DE ROMANANCE.md.


---

## Fuente documental: Economia_inmobiliaria_Romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Economía inmobiliaria de Romanance

## Casas, locales, tiendas y construcciones

Sistema simplificado para gestionar propiedades en Romanance durante la campaña.

> Estos precios son valores de campaña para Romanance. No son precios oficiales de D&D; están adaptados a la escala económica de la ciudad.

## 1. Viviendas

| Propiedad | Compra | Alquiler mensual | Descripción |
|---|---:|---:|---|
| Habitación en posada | — | 6 PO | Habitación sencilla |
| Habitación privada buena | — | 12 PO | Cómoda y segura |
| Cabaña humilde | 150 PO | 8 PO | 1–2 habitaciones |
| Casa pequeña | 300 PO | 15 PO | 2–3 habitaciones |
| Casa estándar | 500 PO | 25 PO | 3–4 habitaciones |
| Casa grande | 900 PO | 45 PO | 4–6 habitaciones |
| Casa grande para Goliath | 650 PO | 30 PO | Espacios, puertas y techos adaptados |
| Casa acomodada | 1.500 PO | 75 PO | Varias habitaciones y patio |
| Mansión | 3.500+ PO | 175 PO | Propiedad de gran lujo |

### Referencia para PJ
- **300–500 PO:** vivienda básica.
- **650–900 PO:** vivienda cómoda o espaciosa.
- **1.500+ PO:** propiedad de prestigio.

## 2. Locales y negocios

| Negocio | Compra | Alquiler mensual | Mantenimiento mensual |
|---|---:|---:|---:|
| Puesto de mercado | 100 PO | 8 PO | 5 PO |
| Pequeño taller | 300 PO | 20 PO | 10 PO |
| Tienda pequeña | 400 PO | 25 PO | 15 PO |
| Herrería | 600 PO | 35 PO | 25 PO |
| Armería | 750 PO | 40 PO | 30 PO |
| Alquimia | 800 PO | 45 PO | 35 PO |
| Taberna pequeña | 700 PO | 40 PO | 30 PO |
| Taberna grande | 1.500 PO | 75 PO | 60 PO |
| Posada | 2.500 PO | 125 PO | 100 PO |
| Taller + vivienda | 800 PO | 45 PO | 25 PO |
| Local comercial grande | 1.200 PO | 60 PO | 40 PO |
| Casa + local | 1.000 PO | 50 PO | 30 PO |

El mantenimiento incluye reparaciones menores, insumos básicos, limpieza, conservación, impuestos y tasas locales menores. **No incluye salarios.**

## 3. Personal

| Personal | Coste |
|---|---:|
| Trabajador no especializado | 2 PO/semana |
| Artesano o trabajador especializado | 2 PO/día |
| Encargado experto | 3–5 PO/día |
| Personal excepcional | Según negociación |

Los salarios pueden modificarse según profesión, escasez y situación del negocio.

## 4. Comprar una propiedad existente

- Propiedad en buen estado: precio de tabla.
- Propiedad deteriorada: **–10% a –30%**.
- Zona muy demandada: **+10% a +50%**.
- Deudas, problemas legales o mala reputación: descuento variable.

## 5. Construir desde cero

| Construcción | Coste | Tiempo |
|---|---:|---:|
| Casa pequeña | 250 PO | 30 días |
| Casa estándar | 500 PO | 60 días |
| Casa grande | 900 PO | 100 días |
| Local pequeño | 300 PO | 45 días |
| Taller | 600 PO | 75 días |
| Taberna | 1.200 PO | 120 días |

Si los PJ supervisan personalmente, usar el tiempo indicado. Si delegan completamente la obra, el DM puede aumentar tiempo o coste.

## 6. Mejoras

| Mejora | Coste |
|---|---:|
| Habitación adicional | 75–100 PO |
| Cocina mejorada | 50 PO |
| Almacén pequeño | 50–75 PO |
| Patio | 75 PO |
| Chimenea / calefacción mejorada | 50 PO |
| Puertas reforzadas | 50 PO |
| Ventanas reforzadas | 25 PO |
| Taller básico | 150 PO |
| Establo pequeño | 100 PO |
| Oficina / estudio | 100 PO |
| Sala de reuniones | 150 PO |

Las instalaciones especiales de magia, alquimia, herrería avanzada, entrenamiento o investigación se tasan según el proyecto.

## 7. Alquiler

- 1 mes: precio normal.
- 6 meses: descuento negociable del 5%.
- 1 año: descuento negociable del 10%.
- Depósito habitual: 1–2 meses.
- Zona muy solicitada: alquiler superior.

## 8. Propiedades para aventureros

### Casa de grupo — 500–900 PO
Habitaciones, almacén, cocina, sala común y espacio de entrenamiento.

### Casa + taller — 800–1.200 PO
Vivienda y espacio de fabricación o reparación.

### Local + vivienda — 1.000–1.500 PO
Negocio en planta baja y vivienda encima.

### Base de aventureros — 2.000+ PO
Habitaciones, almacén, biblioteca, sala de mapas, armería y taller.

## 9. Referencia de D&D

Las reglas de D&D utilizan los gastos de estilo de vida para representar alojamiento, comida, mantenimiento del equipo y necesidades cotidianas. Los valores base son:

| Estilo de vida | Coste diario |
|---|---:|
| Miserable | Gratis |
| Sórdido | 1 PP |
| Pobre | 2 PP |
| Modesto | 1 PO |
| Cómodo | 2 PO |
| Rico | 4 PO |
| Aristocrático | 10 PO mínimo |

Estos gastos son independientes de la compra de una propiedad. citeturn0search0turn0search2

## 10. Regla rápida para el DM

**Casa básica:** 300–500 PO  
**Casa cómoda:** 650–900 PO  
**Casa grande:** 900–1.500 PO  
**Local pequeño:** 300–600 PO  
**Taller:** 500–800 PO  
**Negocio establecido:** 700–1.500 PO  
**Posada:** 2.000–2.500 PO  
**Propiedad de prestigio:** 3.500+ PO

Para construir desde cero, utilizar aproximadamente entre **50% y 70% del precio de compra**, compensando el ahorro con tiempo de construcción.

## 11. Principio económico de Romanance

Romanance es una ciudad próspera pero todavía relativamente pequeña. Las propiedades deben representar una inversión importante para personajes de bajo nivel, pero no una meta imposible.

**Una casa de 500 PO debe sentirse como un logro.**

La compra de una propiedad puede funcionar como recompensa de campaña, objetivo de downtime o inversión a largo plazo.


> Fin de fuente: Economia_inmobiliaria_Romanance.md.


---

## Fuente documental: Gremios_de_Romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Gremios de Romanance

> Borrador de trabajo — pendiente de revisión antes de integrarse al canon.
> Estructura uniforme: Propósito · Requisitos de ingreso · Obligaciones · Beneficios · Sede.

## Sistema de Carnet y Niveles (aplica a todos los gremios)

Al afiliarse, cada socio recibe un **carnet de gremio**. A medida que completa misiones y contribuye al gremio, va subiendo de nivel. Cada ascenso de nivel:

- Requiere el pago de una **alícuota** adicional.
- Otorga **mayor responsabilidad** dentro del gremio.
- Otorga **mayores beneficios** (acceso a contratos/recursos de mayor categoría, mejores tarifas, voz en decisiones internas, etc.).

Este sistema es transversal a los 9 gremios; los beneficios y obligaciones descritos en cada ficha corresponden al nivel base salvo que se indique lo contrario.

---

## 1. Gremio de Aventureros

**Propósito:** Regular y organizar la actividad de aventureros independientes — exploración de ruinas, escoltas, contratos de peligro, caza de amenazas — bajo un marco de responsabilidad ante la ciudad.

**Requisitos de ingreso:** Superar una prueba de aptitud evaluada por un miembro veterano. Sin restricción de raza, clase u origen. Al momento de afiliarse se debe abonar una alícuota base.

**Obligaciones:**
- Registrar todo contrato aceptado en el tablón del gremio.
- Reportar hallazgos relevantes para la seguridad pública (amenazas, ruinas nuevas, criaturas peligrosas).
- Ceder un porcentaje de recompensas de contratos gestionados por el gremio.

**Beneficios:**
- Acceso a contratos exclusivos y mejor pagados.
- Atención prioritaria en la Herrería y Armería locales.
- Alojamiento a tarifa reducida en tabernas asociadas.
- Rescate/mediación legal del gremio en caso de disputa con un contratante.

**Sede:** En la misma manzana de la Alcaldía, frente a la plaza central.

---

## 2. Gremio Minero

**Propósito:** Coordinar la explotación de recursos minerales de la cordillera. El gremio **no explota el mineral azul**: pocos socios saben realmente qué es, y su manejo queda fuera del giro normal del gremio.

**Requisitos de ingreso:** Aval de un miembro existente o experiencia demostrable en minería/cantería.

**Obligaciones:**
- Si un socio se topa con mineral azul durante una excavación, debe **informar directamente a Jarsag** (no a la autoridad general del gremio ni comerciarlo).
- Cumplir protocolos de seguridad en excavaciones.
- Aporte a un fondo común de mantenimiento de túneles y equipamiento.

**Beneficios:**
- Reparto proporcional de ganancias de vetas explotadas en conjunto.
- Acceso a herramientas y explosivos del gremio.
- Cobertura del fondo común ante accidentes laborales.

**Sede:** Base de la cordillera, próxima a las excavaciones.

---

## 3. Gremio Agropecuario

**Propósito:** Organizar producción agrícola y ganadera del valle, y regular el acceso a tierras cultivables.

**Requisitos de ingreso:** Posesión o arrendamiento de tierra productiva, o vínculo familiar con un socio existente.

**Obligaciones:**
- Contribuir a las reservas comunales en años de excedente.
- Respetar rotación de tierras y cupos de pastoreo acordados por el gremio.

**Beneficios:**
- Precios preferenciales en semillas, herramientas y ganado.
- Acceso a las reservas comunales en años de escasez.
- Representación directa ante el Consejo de la ciudad en asuntos de tierra.

**Sede:** Sin sede fija — asambleas rotativas en las fincas asociadas.

---

## 4. Gremio de Artesanos y Constructores

**Propósito:** Agrupar herreros, carpinteros, canteros y demás oficios manuales; sostener el crecimiento edilicio de una ciudad joven.

**Requisitos de ingreso:** Demostrar oficio ante un maestro artesano del gremio (examen práctico).

**Obligaciones:**
- Cumplir estándares de calidad y seguridad en obra.
- Formar aprendices cuando el gremio lo requiera.
- Aporte a un fondo de materiales compartidos.

**Beneficios:**
- Acceso a materiales a precio de gremio.
- Prioridad en contratos de obra pública.
- Certificación de oficio reconocida en toda la ciudad.

**Sede:** Junto a la Herrería La Llama Eterna.

---

## 5. Gremio de Comercio y Caravanas

**Propósito:** Regular rutas comerciales, proteger caravanas y sostener el modelo de libre mercado de Romanance sin caos ni monopolios abusivos.

**Requisitos de ingreso:** Capital inicial mínimo o sociedad con un comerciante ya establecido.

**Obligaciones:**
- Declarar rutas y cargamentos de valor ante el gremio.
- Contribuir a la escolta compartida de caravanas grandes.
- Respetar tarifas mínimas acordadas para evitar guerras de precios destructivas.

**Beneficios:**
- Acceso a escolta de Aventureros a tarifa preferencial.
- Información compartida sobre rutas seguras y peligros conocidos.
- Prioridad en la eventual nueva ruta comercial que impulsa Jarsag.

**Sede:** Cerca de la Alcaldía, cruce de caminos principales.

---

## 6. Gremio de Pescadores y Navegantes

**Propósito:** Organizar la pesca fluvial y costera, y la navegación hacia el mar cercano (según el mapa, Romanance no está lejos de la costa este).

**Requisitos de ingreso:** Posesión de embarcación propia o contrato con un socio patrón.

**Obligaciones:**
- Respetar vedas y zonas de pesca acordadas.
- Reportar fenómenos inusuales en río o costa (crucial dado el simbolismo del agua y la Luna fragmentada en el canon).

**Beneficios:**
- Precio preferencial en reparación de embarcaciones.
- Acceso a rutas fluviales seguras compartidas por el gremio.
- Participación en la venta conjunta de pesca en el mercado central.

**Sede:** Tres sedes — una en el río dentro de Romanance, otra en el bosque cercano a la ciudad, y otra en la costa del mar, entre las islas del este.

---

## 7. Gremio de Bibliotecarios y Eruditos

**Propósito:** Custodiar y regular el acceso al conocimiento registrado en Romanance — coherente con el tema de "custodia del saber" del canon.

**Requisitos de ingreso:** Aval de un miembro erudito o demostración de alfabetización avanzada y ética de custodia.

**Obligaciones:**
- Catalogar todo texto nuevo que ingrese a la biblioteca El Orco Sabio.
- Restringir acceso a material considerado peligroso, siguiendo criterio del gremio.
- Guardar confidencialidad sobre ciertos archivos sensibles.

**Beneficios:**
- Acceso ilimitado a los archivos de la biblioteca.
- Formación y tutoría de otros eruditos.
- Voz consultiva ante el Consejo en asuntos de historia o conocimiento antiguo.

**Sede:** Biblioteca El Orco Sabio.

---

## 8. Gremio de Sanadores (Círculo del Templo)

**Propósito:** Organizar la práctica de curación, tanto mágica como mundana, y sostener el marco religioso/espiritual de quienes practican culto en Romanance.

**Requisitos de ingreso:** Formación demostrable en artes curativas o vínculo con una orden religiosa reconocida.

**Obligaciones:**
- Atender emergencias de la ciudad sin discriminar capacidad de pago (al menos atención básica).
- Reportar enfermedades o plagas inusuales.
- Aporte a un fondo de insumos médicos comunes.

**Beneficios:**
- Acceso a insumos y componentes de curación a precio reducido.
- Respaldo del gremio ante disputas éticas o legales del oficio.
- Reconocimiento social y consultivo en el Consejo en temas de salud pública.

**Sede:** Frente a la biblioteca El Orco Sabio.

---

## 9. Gremio de Cazadores y Guardabosques

**Propósito:** Gestionar caza, recolección y vigilancia de las zonas salvajes que rodean Romanance (bosque al norte, límites de la cordillera), como frontera distinta de las amenazas serias que atiende el Gremio de Aventureros.

**Requisitos de ingreso:** Prueba de habilidad práctica en rastreo, caza o supervivencia.

**Obligaciones:**
- Respetar cupos de caza para evitar sobreexplotación.
- Reportar movimientos inusuales de fauna o incursiones en el límite del bosque.
- Colaborar con el Gremio Agropecuario en control de plagas y depredadores.

**Beneficios:**
- Venta preferencial de pieles y carne de caza en el mercado.
- Acceso a rutas y refugios conocidos del gremio en el bosque.
- Apoyo del gremio en caso de encuentro con amenazas mayores (deriva a Aventureros).

**Sede:** Puesto avanzado en el límite del bosque, al norte de la ciudad.

---

## Relación de los gremios con el Consejo de la ciudad

El Consejo se reúne con la Alcaldía **una vez al mes**, muchas veces con participación abierta de la ciudadanía. Por lo general cada gremio opera de forma independiente, pero dado que el comercio y el transporte de varias faenas requieren logística compartida, se coordinan entre sí — y pueden reunirse con mayor frecuencia si la situación lo amerita.

Cada gremio tiene voz **formal** en el Consejo. Las decisiones se buscan primero por **consenso**; de no alcanzarse, se resuelven por **mayoría**. Una vez aprobada una resolución, es de cumplimiento obligatorio para todos los gremios.


> Fin de fuente: Gremios_de_Romanance.md.


---

## Fuente documental: Hierofante de la Luz.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Hierofante de la Luz

*Clase exclusiva de las Inteligencias Encarnadas*

## Concepto

El Hierofante de la Luz no obtiene poder de dioses ni de pactos. Su mente encarnada actúa como un prisma capaz de canalizar la Luz primordial, ordenar memorias y resonar con otras conciencias.

Donde un mago estudia fórmulas y un clérigo invoca fe, el Hierofante **recuerda**.

Es una clase de control mental benigno, apoyo, percepción y protección espiritual, con un toque psiónico muy marcado.

---

## Rasgos básicos

### Dado de golpe

**d8**

### Características clave

- **Inteligencia**: comprensión de la Luz y las memorias.
- **Sabiduría**: estabilidad interior y percepción espiritual.

### Competencias

#### Armaduras

- Armaduras ligeras.

#### Armas

- Bastones, dagas, hondas, ballestas ligeras.

#### Herramientas

- Caligrafía o instrumentos de escriba.

#### Tiradas de salvación

- **Inteligencia**
- **Sabiduría**

#### Habilidades (elige 3)

Arcana, Historia, Investigación, Perspicacia, Religión, Medicina, Percepción.

---

## Equipo inicial

- Bastón o daga.
- Armadura acolchada.
- Libro de notas o códice vacío.
- Símbolo de resonancia.
- Mochila de explorador.

---

# Tabla de progresión

| Nivel | Rasgos                          | Trucos | Conjuros conocidos | Resonancias |
| ----- | ------------------------------- | ------ | ------------------ | ----------- |
| 1     | Encarnación lúcida, Resonancias | 2      | 2                  | 2           |
| 2     | Recuerdo guiado                 | 2      | 3                  | 3           |
| 3     |  Resonancia de Linaje           | 2      | 4                  | 4           |
| 4     | Mejora de característica        | 3      | 5                  | 4           |
| 5     | Resonancia expandida            | 3      | 6                  | 5           |
| 6     | Rasgo del sendero               | 3      | 7                  | 5           |
| 7     | Mente inquebrantable            | 3      | 8                  | 6           |
| 8     | Mejora de característica        | 3      | 9                  | 6           |
| 9     | Afinidad luminosa               | 4      | 10                 | 7           |
| 10    | Memoria compartida              | 4      | 11                 | 7           |
| 11    | Revelación mayor                | 4      | 12                 | 8           |
| 12    | Mejora de característica        | 4      | 12                 | 8           |
| 13    | Rasgo del sendero               | 4      | 13                 | 9           |
| 14    | Custodia del yo                 | 4      | 13                 | 9           |
| 15    | Resonancia perfecta             | 4      | 14                 | 10          |
| 16    | Mejora de característica        | 4      | 14                 | 10          |
| 17    | Revelación suprema              | 4      | 15                 | 11          |
| 18    | Rasgo del sendero               | 4      | 15                 | 11          |
| 19    | Mejora de característica        | 4      | 15                 | 12          |
| 20    | Avatar de la Luz                | 5      | 16                 | 12          |

---

# Mecánica central: Resonancias

Posees un número de **Resonancias** indicado por tu nivel. Recuperas todas tras un descanso largo.

Puedes gastar Resonancias para activar aptitudes de clase.

### Resonancia básica

Como acción adicional, gastas 1 Resonancia y eliges una criatura a 9 m:

- gana **1d4** a su próxima prueba o salvación, o
- reduce en **1d4** el daño psíquico o radiante recibido antes del inicio de tu siguiente turno.

---

# Nivel 1: Encarnación lúcida

No puedes ser sorprendido mientras estés consciente.

Además, conoces el truco **Mensaje** y uno adicional de la lista del Hierofante.

---

# Nivel 2: Recuerdo guiado

Como acción, puedes tocar una criatura voluntaria y permitirle repetir una prueba de Inteligencia, Sabiduría o Carisma realizada en el último minuto. Debe usar el nuevo resultado.

---

# Nivel 3:  Resonancia de Linaje

Elige uno de los siguientes senderos.

## Custodio de la Luz

Protector de memorias y juramentos.

### Nivel 3

- Competencia con armaduras medias.
- Cuando una criatura a 3 m falle una salvación contra hechizado o asustado, puedes gastar 1 Resonancia para permitirle repetirla.

## Resonante

Maestro de la mente compartida.

### Nivel 3

- Telepatía a 18 m con criaturas que veas.
- Ventaja en Perspicacia contra criaturas con las que te hayas comunicado telepáticamente.

## Errante de la Luz

Explorador de la experiencia mortal.

### Nivel 3

- Velocidad +3 m.
- Ignoras terreno difícil no mágico durante tu turno.

---

# Nivel 5: Resonancia expandida

Cuando usas Resonancia básica, el dado pasa a **1d6**.

---

# Nivel 7: Mente inquebrantable

Tienes resistencia al daño psíquico.

---

# Nivel 9: Afinidad luminosa

Aprendes **Luz** si no lo conoces. Cuando lanzas un conjuro de luz o protección, puedes gastar 1 Resonancia para aumentar su alcance o duración al doble.

---

# Nivel 10: Memoria compartida

Durante un descanso corto, tú y hasta seis criaturas podéis compartir recuerdos conscientes. Todos obtenéis ventaja en una prueba relacionada con la información compartida antes del próximo descanso largo.

---

# Nivel 11: Revelación mayor

Una vez por descanso largo, como acción, eliges una criatura a 18 m. Debe superar una salvación de Sabiduría o quedar **aturdida** hasta el final de tu siguiente turno mientras experimenta una visión de la Luz primordial.

---

# Nivel 14: Custodia del yo

Cuando fueras a quedar hechizado, dominado o poseído, puedes gastar 2 Resonancias para ignorar el efecto.

---

# Nivel 15: Resonancia perfecta

Tu Resonancia básica usa **1d8**.

---

# Nivel 17: Revelación suprema

Una vez por descanso largo puedes crear un área de Luz verdadera de 9 m durante 1 minuto. Los aliados tienen ventaja en salvaciones de Sabiduría y los enemigos no pueden beneficiarse de invisibilidad ni ilusiones mentales dentro del área.

---

# Nivel 20: Avatar de la Luz

Tu mente y la Luz se vuelven inseparables.

- Recuperas 2 Resonancias al iniciar cada combate si tienes 0.
- Eres inmune a ser hechizado y asustado.
- Como acción, puedes asumir una forma luminosa durante 1 minuto: emites luz brillante 18 m, tienes resistencia a todo daño excepto necrótico y tus conjuros del Hierofante ignoran cobertura media.

Una vez usado este rasgo, debes terminar un descanso largo para volver a usarlo.

---

# Dotes sugeridas

- **Memoria Perfecta:** +1 INT; puedes recordar cualquier conversación o texto visto en el último mes.
- **Resonancia Profunda:** +1 SAB; ganas 1 Resonancia adicional.
- **Custodio Menor:** aprendes *Protección contra el bien y el mal* una vez por descanso largo.

---

# Trasfondos sugeridos

- Guardián del Santuario.
- Bibliotecario Exiliado.
- Portador de Ecos.
- Discípulo del Quinto Juramento.
- Viajero de la Luz.

---

# Lista temática de conjuros

## Trucos

Luz, Mensaje, Mano de mago, Prestidigitación, Guía.

## Nivel 1

Detectar magia, Comprender idiomas, Santuario, Sueño.

## Nivel 2

Calmar emociones, Detectar pensamientos, Restauración menor.

## Nivel 3

Disipar magia, Clarividencia, Círculo mágico.

## Nivel 4

Ojo arcano, Libertad de movimiento.

## Nivel 5

Restablecimiento mayor, Vínculo telepático.

---

# Identidad de juego

El Hierofante de la Luz es un **controlador y apoyo psíquico-lumínico**.

- Protege mentes y voluntades.
- Comparte conocimiento táctico.
- Neutraliza corrupción mental.
- Revela verdades ocultas.
- Mantiene unido al grupo.

No compite con el mago en daño ni con el clérigo en curación; ocupa un espacio propio centrado en **memoria, percepción y libertad interior**.


> Fin de fuente: Hierofante de la Luz.md.


---

## Fuente documental: instrucciones-proyecto.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Instrucciones del proyecto — Romanance: Módulos

## Objetivo
Convertir mis OneShots de D&D (dirigidos como GM) en módulos de rol publicables e imprimibles en PDF, con calidad y formato similares a los módulos oficiales de Wizards of the Coast.

## Sistema y edición
- D&D 5.5e (edición 2024, "One D&D" / reglas revisadas)
- Terminología y mecánicas actualizadas a esta edición (no mezclar con reglas de 5e 2014 salvo que lo indique)

## Estructura estándar de cada módulo
1. **Portada** — título, subtítulo, nivel de personajes recomendado, duración estimada
2. **Resumen/Sinopsis** — gancho narrativo en 1 párrafo, para que el DM sepa de qué trata de un vistazo
3. **Trasfondo** — contexto narrativo, antagonistas, motivación
4. **Ganchos de aventura** — cómo enganchar a los jugadores
5. **Desarrollo** — escenas/encuentros en orden, cada uno con:
   - Descripción ambientada (texto para leer en voz alta, en cursiva o recuadro)
   - Notas mecánicas para el DM (tiradas, DCs, tácticas de enemigos)
   - Mapas o referencias de mapa si aplica
6. **PNJs relevantes** — con stat blocks si son combatientes
7. **Tesoros y recompensas**
8. **Ganchos de cierre / continuidad** — para conectar con futuras aventuras
9. **Apéndices** — stat blocks nuevos, objetos mágicos custom, tablas aleatorias

## Estilo de escritura
- Tono narrativo evocador en las secciones de ambientación (texto para leer en voz alta)
- Tono claro y directo en las notas mecánicas para el DM (separar claramente ambientación de reglas)
- Terminología oficial en español (o el idioma que prefiera para el módulo final — confirmar por módulo)

## Formato final
- Documento maquetado para PDF, con aspecto profesional: portada ilustrada, columnas, cajas de texto destacadas, numeración de página
- Debe quedar imprimible (tamaño carta o A4, márgenes adecuados)

## Modo de trabajo
- Partimos de las notas/resumen que yo doy de cada OneShot ya dirigido
- Primero armamos el contenido y estructura en texto/markdown
- Una vez aprobado el contenido, se maqueta como PDF final


> Fin de fuente: instrucciones-proyecto.md.


---

## Fuente documental: mazo_de_drix.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

Optimized tool selectionVoy a dejarte todo el texto del documento en formato Markdown limpio y legible, manteniendo la estructura que ya tienes.

# Mazo de Fogón — Diseño v0.1 (Testing)

## Filosofía

El Mazo de Fogón convierte cada noche de campamento en una escena memorable. Puede generar humor, tensión, misterio o pequeños desastres, pero siempre impulsa la historia de la party.

No requiere tablas, dados adicionales ni reglas nuevas. La última palabra siempre la tiene el Director.

## Intensidad de las cartas

| Nivel | Color | Uso |
| --- | --- | --- |
| I — Inicial | 🟢 Verde | Efectos leves, humor, pequeñas molestias u oportunidades. |
| II — Medio | 🔵 Azul | Complicaciones moderadas o escenas de roleo con consecuencias menores. |
| III — Intermedio | 🟠 Naranja | Problemas serios que afectan recursos, descanso o el viaje. |
| IV — Extremo | 🔴 Rojo | Eventos poco frecuentes con consecuencias importantes. |

## Formato único de todas las cartas

Todas las cartas tendrán exactamente tres partes.

[CATEGORÍA] — Nombre de la carta  
Nivel III (🟠 Naranja)

**Efecto:**  
Texto corto que explica qué sucede y cómo resolverlo.

**Contexto:**  
Una frase para leer en voz alta, con tono medieval fantástico y un toque de humor o narrativa.

### Ejemplo (Problema III)

**Ventisca** — 🟠 Naranja

**Efecto:**  
Una ráfaga de viento atraviesa el campamento. Cada personaje tira 1d4 para determinar cuántas pertenencias menores pierde o ve dispersadas. El Director decide cuáles son.

**Contexto:**  
“Dicen que el viento de las montañas siempre reclama un recuerdo de quienes duermen demasiado confiados. Esta noche decidió llevarse algunas de sus cosas.”

| Categoría | Intensidades |
| --- | --- |
| Desafío | 🟢 🔵 🟠 🔴 |
| Problema | 🟢 🔵 🟠 🔴 |
| Extraordinaria | 🟢 🔵 🟠 🔴  |
| Misterio | 🟢 🔵 |
| Oportunidad | 🟢 🔵 |
| Buena Suerte | 🟢 🔵 |
| Mala Suerte | 🟢 🔵 |

Extraordinaria ahora puede tener eventos enormes, tanto buenos como malos.

### Ejemplos rápidos para que veas el tono:

- 🟢 Aurora Nocturna: una noche hermosa, recuperan 1 Motivación.
- 🔵 Sueño Compartido: dos personajes tienen el mismo sueño.
- 🟠 Ecos Antiguos: una visión de una ruina o un recuerdo que puede dar una pista.
- 🔴 La Luna Observa: ocurre un fenómeno único que puede cambiar el rumbo de la aventura.

---

# El Mazo de Drix

## Categorías actuales

| Categoría | Verde | Azul | Naranja | Rojo |
| --- | :---: | :--: | :-----: | :--: |
| **Desafío** | ✓ | ✓ | ✓ | ✓ |
| **Problema** | ✓ | ✓ | ✓ | ✓ |
| **Extraordinaria** | ✓ | ✓ | ✓ | ✓ |
| **Misterio** | ✓ | ✓ | — | — |
| **Oportunidad** | ✓ | ✓ | — | — |
| **Buena Suerte** | ✓ | ✓ | — | — |
| **Mala Suerte** | ✓ | ✓ | — | — |

Y cada carta tiene solamente:

- Nombre
- Nivel/color
- Efecto
- Contexto

Más la firma de Drix, si decidimos usarla como elemento visual.

## Dejamos afuera por ahora

- ❌ Pregunta
- ❌ Vínculo

Ambas quedan como posible expansión futura, probablemente un módulo/mazo paralelo más liviano, sin niveles de intensidad.

Esto además limpia bastante la identidad del mazo:

- Las cartas del Mazo de Drix que entran al testing siempre producen algo jugable.
- Las categorías verdes/azules pueden ser más livianas, pero siguen teniendo una consecuencia, oportunidad, desafío o descubrimiento concreto.
- Y nos queda una estructura bastante elegante:

### Estructura final

#### 3 categorías de cuatro niveles
- Desafío
- Problema
- Extraordinaria

#### 4 categorías de dos niveles
- Misterio
- Oportunidad
- Buena Suerte
- Mala Suerte

### Total
7 categorías totales.

---

> Fin de fuente: mazo_de_drix.md.


---

## Fuente documental: Plots_y_Arcos_Arco_I_Aurelianos.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Plots y Arcos — Arco I: Los Aurelianos

> Documento de campaña específica (NO es canon universal — eventos, decisiones y ajustes de mesa de esta partida en particular). Se cruza contra la Biblia (`Biblia_de_Romanance_Canon_Base`) pero no la reemplaza.

**Estado del arco:** Activo — Sesión 1 completada, Sesión 2 en preparación.
**Estructura:** Rediseñado de "3 sesiones fijas" a **fases** (pacing natural, sin número cerrado de sesiones). Ver sección "Reestructuración en fases".
**Party (nivel 2-3):** Anic (Brujo, Goliath), Elián (Paladín), Jantry (Pícaro/Asesino), Kvothe (Guerrero) — Rheem original — + 2 nuevos: Nyilpuska Kovacs (Explorador, lv3) y Patricio (Pícaro, lv3).
**Ausentes de esta etapa:** Spriggan (Paladín Goliath, de Aethragar/Aldenor) y Maximus (jugador Aarón, no vuelve hasta 2028 — hilo Heredero/Culto Lunar parqueado, ver más abajo).

---

## Cronología de eventos

### Contexto previo
- Algunas semanas después de la Fiesta de las Luces.
- Al cierre de esa noche, el grupo vio por un instante la luna fragmentada.
- Al hacer el Quinto Juramento (evento previo, preludio — solo estuvo presente el Guardián, nadie más), el cristal (Lunargenta) los vio — el Silente es ahora consciente de Rheem como grupo.
- **Justificación causal del ataque (cerrada):** el Silente no es maligno, pero tampoco fue consciente de la ubicación de los santuarios durante ~300 años. El crecimiento del Culto Lunar (más mentes, más fe/resonancia) lo fue despertando gradualmente — esto explica la fisura visible avistada dos veces y la luna fragmentada como síntomas del mismo despertar progresivo, no eventos aislados. El culto venera al Silente como a un dios; ve a Rheem como amenaza o como atajo hacia un santuario — de ahí el ataque.
- **Los atacantes de Sesión 1 SÍ son del Culto Lunar** — un grupo de choque de sicarios con adoctrinamiento parcial (no devotos plenos, pero atados por algo más que el pago), lo cual justifica el Voto de Silencio (cápsula de suicidio: comportamiento de alguien ligado por miedo/geas/juramento, no un mercenario común).

### Sesión 1 — Emboscada en el bosque
**Gancho:** Ethen, la herborista de Romanance, se quedó sin stock tras la Fiesta de las Luces. Pide al grupo ir al bosque entre Romanance y Levit a buscar hojas de saúco, musgo de piedra húmeda y flor de luna tardía.

**Desarrollo:**
- El grupo se dividió en 3 pares para buscar más rápido, **sin acordar punto de reencuentro** (error táctico no intencional):
  - Elián y Jantry
  - Anic y Kvothe
  - Nyilpuska Kovacs y Patricio
- 3 rondas de búsqueda, éxito en las tres — consiguieron todo lo pedido.
- Al volver, cada par estaba aislado → avanzadilla de 6 exploradores/vigías del Culto Lunar (sin identificarse como tal) atacó.
  - El Vigía (líder) + 1 explorador atacaron a Anic y Kvothe.
  - Los 4 restantes se repartieron en pares contra los otros dos grupos.
- **Combate duro:** golpes de 10-15 de daño en un solo ataque.
  - Anic (Brujo Goliath): salvado dos veces por Resistencia Pétrea, absorbiendo 12 y 11 de daño — quedó en 7 y luego 5 PG.
  - Elián (Paladín): gastó toda su Imposición de Manos, terminó herido pero vivo.
  - Kvothe (Guerrero): agotó todos sus usos de Recuperación (1d10).
  - Jantry: no gastó ningún recurso — encadenó Ataque Furtivo con ventaja casi cada turno gracias al sigilo.
  - Patricio (nuevo): no recibió daño. Nyilpuska (nuevo): recibió algo de daño.

**Resultado del combate:**
- 5 de 6 cultistas muertos. 1 se suicidó (Voto de Silencio) al verse acorralado.
- El Vigía (líder) escapó — se lleva un reporte directo de la capacidad de combate de Rheem.

**Error de la party:** no revisaron los cuerpos antes de irse → **cero pistas recolectadas** en ese momento.

**Cierre de sesión:** emprenden el regreso a Romanance con las hierbas para Ethen (~1 día de viaje a pie). Acamparon a mitad de camino, de noche.

---

## Ajustes de mesa (notas del DM, no in-fiction)

- **Balance del encuentro:** 6 PJ (nivel 2-3) vs. 6 enemigos funcionó bien — party salió golpeada pero sin bajas, con buena tirada de dados de por medio.
- **Nota mecánica clave:** no se usó el Multiataque completo (3 ataques) del stat block del culto — de haberlo usado, es probable que algún PJ hubiera caído. Se usaron solo ataques a distancia (ballesta) + Ataque Furtivo cuando fue posible. **Para próximos encuentros con este enemigo: mantener el Multiataque restringido o reservarlo para cuando la dificultad deba escalar deliberadamente.**

---

## Reestructuración en fases (post-análisis franco del arco)

El plan original de "3 sesiones" no da espacio suficiente. Se pasa a fases sin número cerrado:

**Fase 1 — Emboscada e investigación local** *(en curso)*
Sesión 1 (bosque) + Sesión 2 (medallón, Deren, Kharag/Jarsag, campamento con sensación de vigilancia). Cierra con: confirmación de que el medallón es de la Orden de Bibliotecarios + pista hacia Aldren. Ningún hilo grande se resuelve todavía.

**Fase 2 — El Segundo Santuario** *(climax del Arco I)*
Ubicado en una zona **alcanzable** (no Lanre, que queda demasiado lejos — ver distancias abajo). Incluye viaje hacia Aldren, la info real que él aporta, y la ciudad subterránea/dungeon del Segundo Santuario. Cierra el arco. La sospecha sobre la sangre Aureliana de Kvothe se siembra fuerte acá, sin revelación completa.

**Fase 3 (Arco II/III futuro) — Lanre y Marren**
El viaje largo (~2590-2652 km). Ahí se resuelve la fractura filosófica real, la ciudad hermana rival, y probablemente el origen real del Culto Lunar.

**Semillas explícitamente NO tocadas en este arco:** Vedalken/Aldenor (Ostenmark), los otros Santuarios, si TODOS los atacantes futuros serán del culto o habrá otros actores, Morvath (reservado a arco de ancestros, +300 años atrás), hilo Heredero/Maximus (parqueado hasta que Aarón regrese en 2028 — posible extensión de arcos para ese entonces).

**Recomendación de proceso:** formalizar en el Canon Base (aunque sea como "en desarrollo") toda la arquitectura cultural de esta sección antes de que se pierda entre chats.

---

## Dirección cultural y de lore confirmada

**Enfoque del arco:** entender el pasado Aureliano para iluminar el presente — no profundizar más en el significado de los juramentos (ya alcanza con lo sabido).

**Tres corrientes Aurelianas (marco adoptado):**
1. **Rama de Romanance (custodial):** mantuvo el deber de custodia, eligió apartarse, comparte valores (no sangre) — de ahí que Romanance sea heredera cultural, no genética.
2. **Rama disidente:** discrepó sobre cómo tratar al Silente (sellar+olvidar vs. revelar+unir conciencias). Diluida y corrompida generación tras generación, es el origen filosófico del Culto Lunar actual — no es "maldad random", es el eco degenerado de la corriente que perdió la discusión.
3. **Rama fusionada:** se mezcló con razas/especies nativas. Explica la extinción por dilución (canon: "extintos" se mantiene literal — no hay Aurelianos vivos como pueblo). Algunas líneas humanas (posiblemente la de Lorren/Kvothe) conservan fragmentos reales, protegidos bajo una leyenda ficticia de tapadera.

**Antigüedad Aureliana:** 1000+ años — necesario para dar lugar a fracturas y conflictos en ambos continentes.

**Calendario — dos sistemas con el mismo punto cero (fundación de Romanance):**
- Romanance: **A.R.** (Antes de Romanance) / **D.R.** (Después de Romanance) — ya en uso (ej. "434 D.R.").
- Aureliano: **A.F.** (Antes de la Fundación) / **D.F.** (Después de la Fundación) — mismo evento, perspectiva Aureliana.

**Orden de hilos de investigación:**
1. **Jarsag** — rol acotado a lo realista: recibe el reporte del ataque como Alcalde (asunto de seguridad pública), sin lore-dump gratuito sin pista concreta.
2. **El medallón de Morvath** (tienen Elián y Jantry, únicos que saben de Morvath) — disparador real de investigación. Ver "Puzzle de investigación" abajo.
3. **Aldren** — reemplaza la pista genérica de "norte impreciso". Ver sección dedicada.

**Kvothe y su sangre Aureliana:** sospecha narrativa progresiva a medida que indague en su historia familiar — NO explicación mecánica retroactiva de su éxito en el puzzle de los faroles (Sesión 1 de Cuatro Estatuas, ya jugada, no se retconea).

**Espada del abuelo de Kvothe** ("Mi piedad prevalece ante tu ira") resuena temáticamente con el Farol Piedra (verde) → Compasión → Generosidad.

**Leyenda del bisabuelo (fundación de Lanre):** posible pantalla de una historia real distinta — algo separó a Lanre de su ciudad hermana **Marren** (ya confirmada en la Tabla de Viaje como "ciudad hermana rival de Lanre", 199 km entre ambas). Las tablillas serían el registro verdadero.

**Jantry y el cristal élfico:** trama separada de la Lunargenta (mitologías distintas: elfos vs. Aurelianos). Subplot personal disponible, no forzado: posibilidad de pedir ayuda a Rheem para buscar a su madre cautiva.

**Principio de diseño adoptado:** buscar momentos para que cada personaje (no solo Jantry) progrese su propio trasfondo a lo largo de los arcos.

**Hilo Heredero/Culto Lunar (Maximus) — aclaración importante:** es un hilo DISTINTO al de Kvothe. Maximus desciende del sobreviviente de la Orden de Bibliotecarios que fundó el Culto Lunar; su familia es la que Morvath no restauró en Levit (Final 1 — Pacífica, ya resuelto en partida anterior). Parqueado hasta 2028 (regreso del jugador). No confundir ambos linajes.

---

## Puzzle de investigación — el medallón de Morvath

Solo **Elián y Jantry** saben de Morvath y tienen el medallón. El resto de Rheem no sabe nada — puede ser un lindo momento de mesa si deciden contarlo o no.

**Pieza ya resuelta (Kharag ya la sabe, de la partida de Morvath):** los símbolos del medallón (luna partida, árbol seco, agua) + texto oculto ya llevaron a las ruinas de Morvath — ESE arco ya cerró. Lo único nuevo que Kharag aporta ahora es confirmar la **Orden de Bibliotecarios**.

### Ruta 1 — Van a la biblioteca primero
- **Deren** (PNJ nuevo, ver ficha abajo) recibe el medallón, reconoce que es antiguo/significativo, se traba a propósito y deriva a Kharag sin opinar de más.
- **Kharag** lo reconoce al toque (ya lo vio en la historia de Morvath). Confirma: pertenece a la **Orden de Bibliotecarios**.
- Kharag los manda a Jarsag con una excusa razonable ("esto es algo que el Alcalde debería saber") — en realidad es un aviso indirecto entre los dos guardianes del conocimiento, invisible para la party (evitar que algún jugador perspicaz pregunte "¿por qué nos mandaste así nomás?" — sostenerlo con naturalidad si sale el tema).
- Con el medallón + "Orden de Bibliotecarios" ya en mano, Jarsag se abre un poco más.
- **Gancho retroactivo hacia Aldren:** una tirada de Historia (cualquier PJ) en la biblioteca puede reconectar el estilo de los cofres/acertijos del oneshot de Cuatro Estatuas (sellados por Aldren, con su firma de trampas ingeniosas y sentido del humor) con algo que Kharag comenta al pasar. Kharag no oculta nada acá — genuinamente conoce a Aldren y puede decir directo: *"Eso suena a un viejo amigo mío."* Rheem no sabía nada de Aldren hasta ahora — para ellos fue solo "el momento chistoso" del oneshot.

### Ruta 2 — Van a Jarsag primero
- Identifica el origen (Orden de Bibliotecarios) por sus contactos como Alcalde, sin conocer el medallón específicamente.
- Los manda a la biblioteca a investigar la Orden — mismo resultado final, camino más largo.

### Ruta 3 — No usan el medallón / no vuelven al bosque (rumores)
- Se activan los rumores: los vieron salir lastimados del bosque; alguien que encontró los cuerpos notó una figura con forma de luna en la ropa de un caído.
- Jarsag los cita — tono de autoridad, no de charla amistosa: la iniciativa la perdieron. Sobre el símbolo lunar: "No lo había visto. Voy a preguntar." — deriva a Kharag igual, pero con menos calidad/urgencia que si hubiesen llevado el medallón directamente.
- Si en esta escena deciden mostrar el medallón (aunque tarde), la escena colapsa a la Ruta 2.
- **Lección implícita, sin decirla en voz alta:** la pista (símbolo lunar en el cuerpo) existía en el bosque desde el principio — la perdieron por no revisar. La recuperan de rebote, más cara.

**Ambas rutas 1 y 2 convergen** en: Orden de Bibliotecarios confirmada + pista hacia Aldren. Premia haber ido a la fuente más directa (Kharag) con menos vueltas.

---

## Sesión 2 — Estructura completa

**Apertura — noche en el campamento (mitad de camino al bosque→Romanance):** sensación de ser observados, quizás avistamiento lejano de una sombra. Sin tirada de riesgo mortal esa noche — se descartó la tabla de peligro d20 (1-4 daño mortal / 5-10 opresión / 11-20 solo sensación) para no apilar riesgo de muerte sobre un grupo ya debilitado sin descanso largo de por medio. Queda solo la sensación de vigilancia, tal como se decidió originalmente.

**Viaje restante:** retoman camino a la mañana, llegan a Romanance ~15hs.

**Llegada a Romanance:** entregan las hierbas a Ethen — downtime/roleo breve.

**Disparador de investigación:** puzzle del medallón (rutas 1/2/3 arriba).

**Pista silenciosa para Kvothe:** al ver el medallón, un mapa o algún extracto de texto Aureliano, tirada de Historia o Investigación **CD 13-14** — si la supera, reconoce similitudes con las tablillas de su tierra (Lanre). Siembra la sospecha de que el Segundo Santuario podría estar ligado a su propio pasado, sin confirmarlo.

---

## Aldren — el hilo que reemplaza al "norte impreciso"

**Por qué funciona:** en vez de mandar a la party a Lanre (2590 km — inviable para este arco), Aldren se convierte en el atajo narrativo hacia info Aureliana real sobre el Segundo Santuario, sin quebrar el arco actual.

**Canon ya existente sobre Aldren** (`Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md`): Semielfo, ~160 años, Archimago e investigador. Región de origen/base: **Los Lagos de Terenor, Gran Oeste** (itinerante — puede estar en el norte sin contradecir su origen). Selló los cofres de la tablilla en el oneshot de Cuatro Estatuas. Filosofía: los Aurelianos protegían conocimiento, no tesoros. Entiende sellos, protecciones, tablillas, cámaras de preservación y simbología Aureliana — candidato perfecto para dar la pista real del Segundo Santuario, no solo lore genérico.

**Ubicación — decisión pendiente entre 2 opciones (mapa de Krâthor/Varsak), la party puede decidir cuál explorar:**
- **Opción A:** desembocadura del río Shabet, ~26°S, costa norte. Conecta temáticamente con "Los Lagos de Terenor" (sistema de lagos río arriba) pero es la más lejana y queda a la misma altura que Krâthor (poca sensación de escala progresiva).
- **Opción C (preferida):** tierra adentro, cerca de la confluencia de los ríos Dramyler Fork / Werhije Serpentine, sobre el Varsak Trail. Aislada, lejos de rutas comerciales — encaja con un mago precavido que se escondió lejos de caminos transitados. Queda antes de Varsak en la ruta desde Romanance (más corta/flexible, resoluble sin necesitar barco).
- Se decidió dejar ambas abiertas para que la mesa elija en juego.
- **Guiño narrativo sugerido:** Aldren es originalmente de la zona de los Lagos (Opción A) pero se instaló en la Opción C por conveniencia/aislamiento — combina ambas sin forzar el viaje.

**Distancias por ruta (Tabla de Viaje Continental, versión final por ruta — NO línea recta):**

| Destino | Distancia por ruta desde Romanance |
|---|---|
| Levit | 143,5 km |
| Ruinas de Morvath | 189,2 km (vía Levit) |
| Ilvandor | 133,9 km (directo) |
| Tömörsag (puerto) | 281,6 km (vía Levit) |
| Varsak | 523,8 km (vía Tömörsag) |
| **Krâthor** (tierra de Anic — bioma: bosque estacional tropical) | **649,7 km (vía Varsak)** |
| Aetherion | 2213,5 km (directo) |
| Lanre | ~2590 km (vía Aetherion) |
| Marren (ciudad hermana rival de Lanre) | ~2652 km (vía Aetherion), 199 km entre Lanre y Marren |
| Berk (Jantry) | ~3123 km (vía Aetherion → Marren → paso de Berkan) |

**Nota de ruta terrestre alternativa (Varsak Trail nuevo, agregado al mapa):** Romanance → Serpentine Varsak Trail = 551 km a pie; de ahí a la confluencia (Opción C) ~122 km más. Ruta 100% terrestre, sin necesitar barco — se pierde tiempo de mar pero se gana simplicidad. Ambas rutas (marítima vía Tömörsag/Varsak, o terrestre vía Varsak Trail) quedan como alternativas válidas para que la party elija.

**Ubicación de Krâthor y alrededores respecto al mapa:** Aldren, en cualquiera de las dos opciones, queda **antes** de llegar al corazón del territorio de Anic — se reserva Krâthor pleno como hito propio para cuando quieran profundizar el trasfondo de Anic más adelante.

---

## Sistema de viaje — reglas SRD 2024 (base) + capa casera (pendiente de terminar de diseñar)

**Reglas oficiales SRD 2024 relevantes:**

*Ritmo de viaje:*
| Ritmo | Por hora | Por día | Efecto |
|---|---|---|---|
| Rápido | 4 mi (~6,4 km) | 30 mi (~48 km) | Desventaja en Percepción/Supervivencia y Sigilo |
| Normal | 3 mi (~4,8 km) | 24 mi (~38 km) | Desventaja en Sigilo |
| Lento | 2 mi (~3,2 km) | 18 mi (~29 km) | Ventaja en Percepción/Supervivencia |

*Terreno determina el ritmo MÁXIMO posible* (ej. Montaña topea en Lento; buen camino sube un escalón).

*Por terreno, 3 valores clave:* Distancia de encuentro, DC de Forrajeo (Supervivencia), DC de Navegación (Supervivencia, para no perderse fuera de caminos marcados). Tabla completa de terrenos disponible en `gameplay-toolbox.md`.

*Viaje extendido:* más de 8h/día de viaje = tirada de Constitución al final de cada hora extra (DC 10 +1 por hora extra) o Agotamiento.

*Vehículos:* velocidad propia (millas/hora), no eligen ritmo. Barco costero ya estimado en 150-200 km/día para nuestras rutas.

**Capa casera propuesta (a terminar de diseñar):** por cada tramo largo (no cada día): evento de trasfondo/roleo disparado por terreno o pregunta simple entre personajes; evento mecánico opcional (forrajeo/clima) solo si ritmo rápido o terreno duro; evento de riesgo poco frecuente (no cada noche, para no fatigar el "modo peligro constante"). **Pendiente cerrar el diseño final de esta capa.**

---

## PNJs nuevos del Arco I

> Nota: estas fichas deberían fusionarse eventualmente a `PNJs_Principales_Romanance.md` como entrada 7+ (formato ya alineado a ese documento).

### 7. Deren

**Descripción:** Humano, 60 años. Archivista e historiador, especialista en objetos/artefactos. Presidente del Gremio de Bibliotecarios y Eruditos, con sede en El Orco Sabio. Primer filtro de la biblioteca: recibe hallazgos raros, reconoce cuando algo es antiguo o significativo, y deriva a Kharag sin opinar de más.

**Historia:** Décadas en la biblioteca. Mentor de varios de los archivistas actuales del gremio. Domina varios idiomas (no Aureliano, pero reconoce su escritura al verla). Como historiador conoce la versión pública de la caída de la vieja Orden de Bibliotecarios (confundieron iluminar con revelar) — desconoce su vínculo real con El Silente/mineral azul, reservado a Kharag y Jarsag. El incidente que lo volvió tan cauteloso queda deliberadamente sin resolver (gancho a futuro).

**Personalidad:** Nerviosismo y tartamudez crecientes ante lo desconocido/antiguo, al punto de volverse incomprensible. Jamás se quiebra si lo presionan a opinar — ahí es inquebrantable. Paciente y claro con sus aprendices.

**Relación con Kharag:** Amistad genuina de años, no solo jerarquía. Reverencia de su parte, estima genuina de la de Kharag.

**Mecánica:**
- Especie: Humano
- Trasfondo: Sabio (Con/Int/Sab +1/+2/+1), dote **Iniciado en Magia (Mago)**: Mano de Mago, Mensaje, *Identificar* 1/descanso largo — capaz de identificar objetos casi al instante, pero elige no hacerlo frente a la party.
- Estadísticas finales: Fue 8 (-1) / Des 10 (0) / Con 12 (+1) / Int 18 (+4) / Sab 16 (+3) / Car 10 (0)
- CA 10 · PG 36 (4d8 máx, +Con) · Bono Competencia +2
- Habilidades: Historia +6, Arcanos +6, Investigación +6, Perspicacia +5
- No combatiente

**Pendiente:** Incidente pasado que lo volvió cauteloso (gancho abierto). Posible conexión con el papel en escritura aureliana perdido en Sesión 1 de Arco I (no confirmada aún).

---

## Cabos sueltos / ganchos abiertos

- **El Vigía escapó** — sabe cómo pelea Rheem. Reaparecerá con más preparación o informará a otros dentro del culto.
- **Cero pistas recolectadas en el bosque** — recuperadas de rebote solo si se activa la Ruta 3 (rumores).
- **Recuerdo del cristal (Lunargenta) en el Juramento** — pendiente de disparar con tirada de Inteligencia (Historia/Arcanos), no usado aún.
- **Ubicación exacta de Aldren** — dos opciones (A/C) sin decidir cuál usa la mesa; puede quedar a elección de la party en juego.
- **Tablillas del padre de Kvothe (Lorren)** — gancho de trasfondo disponible, no usado aún.
- **Diseño final de la capa casera del sistema de viaje** — pendiente de cerrar.
- **Formalización en el Canon Base** de: 3 corrientes Aurelianas, calendario A.F./D.F., justificación causal del ataque (Silente despertando) — vive solo en este documento por ahora.
- **Pendiente para otros chats dedicados:** alfabeto/escritura Aureliana, diseño de la ciudad subterránea Aureliana (dungeon) del Segundo Santuario.

---

*Última actualización: post-Sesión 1, pre-Sesión 2 — Arco I: Los Aurelianos.*


> Fin de fuente: Plots_y_Arcos_Arco_I_Aurelianos.md.


---

## Fuente documental: PNJs_Principales_Romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# PNJs Principales de Romanance

> Documento consolidado — Jarsag, Batai, Tömörbaatar, Kharag, Temay, Ethen, Deren, Aldren.
> Todos de nivel avanzado (16-20). Fuente: arte conceptual "Habitantes de Romanance" + sesiones de consolidación de canon.
>
> **Regla nueva — agregar a "Criterio general para PNJs":**
>
>Libertad de diseño ampliada para PNJs: El material del SRD puede combinarse, modificarse o exceder sus límites normales de creación de personaje (mezclar trasfondos, sumar dotes extra a las que el trasfondo ya otorga, alterar reglas de generación estándar) cuando la necesidad narrativa del PNJ lo justifique. La licencia del SRD lo permite explícitamente. Esto no aplica a personajes jugadores, solo a PNJs de este documento.

- [PNJs Principales de Romanance](#pnjs-principales-de-romanance)
  - [1. Jarsag](#1-jarsag)
  - [2. Batai](#2-batai)
  - [3. Tömörbaatar](#3-tömörbaatar)
  - [4. Kharag](#4-kharag)
  - [5. Temay](#5-temay)
  - [6. Ethen](#6-ethen)
  - [7. Deren](#7-deren)
  - [8. Aldren el Precavido](#8-aldren-el-precavido)
  - [Reglas de mundo transversales](#reglas-de-mundo-transversales)
    - [Curación en Romanance](#curación-en-romanance)
    - [Crafteo](#crafteo)
    - [Criterio general para PNJs](#criterio-general-para-pnjs)
  - [Pendientes generales (arrastrados de esta sesión)](#pendientes-generales-arrastrados-de-esta-sesión)
---

## 1. Jarsag

**Descripción:** Minotauro, Alcalde de Romanance. Único cargo que ejerce — no existe una función separada de "alcaide"; su rol como conocedor del misterio del cristal azul es parte de su peso como figura, no un cargo aparte.

**Historia:** Llegó a Romanance como explorador a los 25 años, cuando la ciudad ya tenía 384 años de vida (hoy 434 D.R., por lo que lleva unos 50 años en la ciudad). No fue el fundador, pero adoptó los valores de Romanance y los potenció, renovando la vida de la ciudad. Es uno de los dos únicos personajes (junto con Kharag) que conocen la verdad completa sobre el cristal azul y los Aurelianos, fundadores de la ciudad. En una visión mostrada a los PJ, se lo vio junto a los 5 fundadores.

**Objetivos y Legado:** Impulsar expediciones, proyectos y el crecimiento de Romanance. Su legado es haber convertido su llegada como forastero en el motor de la identidad actual de la ciudad.

**Mecánica (Nivel 19):**
- Especie: Minotauro (Cornada como arma natural, Empuje Retumbante, Aguante Implacable)
- Trasfondo: Sabio (Int/Sab/Con +2/+1, dote Iniciado en Magia, habilidades Arcanos e Historia)
- Clase: Explorador 19, Subclase **Cazador**
- Progresión: Ataque Extra (N5), Roving (N6), Merodeo Incansable (N13), Velo de la Naturaleza (N14), Cazador Preciso (N17), Sentidos Feroces (N18), Bendición Épica (N19)
- Estadísticas finales: Fue 20 / Des 16 / Con 16 / Int 12 / Sab 15 / Car 14
- Bonif. Competencia +6 · PG ~175 (d10, Con +3)
- ASIs: N4 +2 Fue → N8 +1 Fue/+1 Con → N12 Alerta → N16 +1 Sab/+1 Con → N19 Bendición Épica: Proeza de Combate

[Volver al índice](#pnjs-principales-de-romanance)

---

## 2. Batai

**Descripción:** Clériga humana, armera. Alineación CN. Devota de la Luz y del equilibrio; protege a viajeros y a la ciudad con fe inquebrantable.

**Historia:** Nativa de Romanance, viene de una estirpe de clérigos y guerreros. Joven pero experimentada, participó en campañas de exploración. Su poder divino proviene de **La Fuente de toda verdad** (entrada formal del Canon Base: la Verdad es Luz, y a mayor Luz, mayor entendimiento y responsabilidad — lo cual da poder). En Romanance la organización de clérigos no sigue el molde clásico de D&D.

**Objetivos y Legado:** Está a cargo de la formación de los nuevos aspirantes a clérigos. Su segunda pasión es la forja: sus armaduras y objetos son muy buscados; hace armas a pedido, aunque no es su especialidad.

**Relaciones:** Buena relación con Tömörbaatar, con quien colabora ocasionalmente — ambos comparten un aire de misterio por sus trasfondos. Colabora con el Gremio Minero buscando mejorar metales y nuevos materiales en sus salidas de exploración.

**Ubicación:** Su taller y la plaza central (fuente y Gran Farol).

**Compañera:** Kuba, halcón — lo adoptó en uno de sus viajes; se transformó en su compañero con el tiempo. Vínculo narrativo, no un rasgo de clase; para stats de mesa se usa el bloque estándar de **Halcón**.

**Mecánica (Nivel 16):**
- Especie: Humana
- Trasfondo homebrew — **Estirpe de Forja y Fe:** Fue/Sab/Con (+2/+1), dote **Hábil** (Historia + Utensilios de Alquimista), habilidades Religión y Perspicacia, herramienta Herramientas de Herrero
- Clase: Clériga — Orden Divina **Protectora**, Subclase **Dominio de la Vida**
- Estadísticas finales: Fue 16 / Des 12 / Con 15 / Int 10 / Sab 20 / Car 10
- Bonif. Competencia +5 · PG ~115 (d8, Con +2)
- Salvaciones: Sabiduría, Carisma · Habilidades: Religión, Perspicacia, Medicina, Persuasión
- ASIs: N4 +2 Sab → N8 +1 Sab/+1 Con → N12 Atacante Salvaje → N16 +1 Fue/+1 Con

**Crafteo:** Reglas oficiales del SRD (herramienta + competencia + tiempo/costo por precio o rareza). Colabora con Kharag cuando sus armaduras/objetos necesitan ser imbuidos con magia.

[Volver al índice](#pnjs-principales-de-romanance)

---

## 3. Tömörbaatar

**Descripción:** Semiorco, herrero principal de Romanance, mercenario. Forja armas y acero como nadie en la ciudad. Trabaja en silencio y habla aún menos.

**Historia:** Alineación con arco propio: comenzó **Caótico Neutral** al llegar a Romanance, y con el tiempo, absorbiendo los valores de la ciudad, evolucionó a **Caótico Bueno** (alineación actual). En secreto, sigue sirviendo a **Cesa**, antiguo dios de la muerte — remanente de su pasado, tensión interna del personaje sin contradecir su alineación presente. Pese a su alineación caótica, es leal a Romanance.

**Objetivos y Legado:** Es el herrero principal de la ciudad, PNJ recurrente en compra de armas/armaduras. Colabora con Kharag y Batai cuando sus creaciones necesitan ser imbuidas con magia.

**Mecánica (Nivel 18):**
- Especie: Semiorco (Adaptabilidad Despiadada, Visión en la Oscuridad, Impulso de Adrenalina)
- Trasfondo: Soldado (Fue/Des/Con +2/+1, dote Atacante Salvaje, habilidades Atletismo e Intimidación)
- Clase: Guerrero 18, Subclase **Campeón** (nota: "Maestro de Armas" del arte/docx original no es una subclase — es Maestría de Armas, rasgo base de todo Guerrero desde nivel 1; Campeón es la única subclase disponible en el SRD y encaja bien con un mercenario-herrero curtido)
- Progresión: Irrupción (N2), Ataque Extra (N5), Segundo Ataque Extra (N11), Sobrevivir lo Imposible x3 (N17), rasgos de subclase en N3/7/10/15/18
- Estadísticas finales: Fue 20 / Des 14 / Con 18 / Int 10 / Sab 10 / Car 18
- Bonif. Competencia +6 · PG ~195 (d10, Con +4)
- ASIs: N4 +2 Fue → N6 +1 Fue/+1 Con → N8 +2 Con → N12 Resistente → N14 +1 Fue/+1 Car → N16 +2 Car

[Volver al índice](#pnjs-principales-de-romanance)

---

## 4. Kharag

**Descripción:** Orco, bibliotecario y mago. Alineación N. Guardián de "El Orco Sabio". Posee conocimientos que pocos en el mundo comprenden y recuerda cosas que preferiría que permanecieran olvidadas. La paciencia es su mayor virtud... y su mayor arma.

**Historia:** Llegó a Romanance en su juventud, atraído por rumores de una ciudad cosmopolita — coherente con Romanance como caldero de razas/especies. Con el tiempo fundó la biblioteca hasta llevarla a su forma actual: un edificio de 4 pisos atiborrado de saberes de todo tipo, ubicado a dos manzanas de la plaza central (única excepción entre los lugares conocidos, que están todos alrededor de la fuente y el Gran Farol, por el tamaño del edificio). Es amigo viejo de Jarsag, probablemente con más tiempo en Romanance que él. Junto con Jarsag, es el único que conoce todo lo referente al cristal azul.

**Personalidad:** Reservado, amable pero corto y conciso. Nunca da respuestas directas — da pistas para que el otro llegue solo. Es honesto: si no sabe algo, lo dice, o pide tiempo para analizar.

**Objetivos y Legado:** Imbuye de magia el Gran Farol de la plaza central. Lo más improbable de él es que, siendo Orco, eligió el camino del saber en vez de la guerra — sigue siendo diestro en combate, pero no es su fuerte.

**Mecánica (Nivel 20):**
- Especie: Orco (Impulso de Adrenalina, Visión en la Oscuridad 120 pies, Resistencia Implacable)
- Trasfondo: Sabio (Int/Sab/Con +2/+1, dote Iniciado en Magia, habilidades Arcanos e Historia)
- Clase: Mago — Subclase homebrew **Escuela de la Forja Arcana**:
  - N3 Vínculo del Forjador (sella 1 conjuro nv.1 en 1 objeto)
  - N6 Vínculo del Forjador Avanzado (2 objetos/mismo conjuro, o 2 conjuros/mismo objeto)
  - N10 Artesano Arcano (crafteo +2 niveles efectivos, sintonía extra)
  - N14 Forjador de Conjuros (diseño de conjuro propio, 10+ días de investigación)
  - N19 Bendición Épica + Legado Imbuido (objeto firma con conjuro sellado sin gasto de espacio, 1x/descanso largo)
- Estadísticas finales: Fue 11 / Des 13 / Con 14 / Int 20 / Sab 15 / Car 8
- Bonif. Competencia +6 · PG ~122 (d6, Con +2)
- Salvaciones: Inteligencia, Sabiduría · Habilidades: Arcanos (Pericia), Historia, Investigación, Perspicacia
- ASIs: Iniciado en Magia (trasfondo) → N4 +2 Int → N8 +1 Int/+1 Con → N12 Guerra de Conjuros → N16 +1 Fue/+1 Des → N19 Bendición Épica: Recuerdo de Conjuros
- Puede lanzar cualquier conjuro de la lista de Mago (sujeto a preparación diaria y disponibilidad narrativa — sin lista fija por ahora)

**Crafteo:** Reglas oficiales de crafteo de objetos mágicos (SRD), potenciadas por Artesano Arcano. Colabora con Batai y Tömörbaatar imbuyendo sus creaciones.

[Volver al índice](#pnjs-principales-de-romanance)

---

## 5. Temay

**Descripción:** Mediano (Halfling), mercader y sacerdote (no clérigo mecánicamente). Alineación N. Amante del confort, los buenos negocios y la atención. Sueña con obtener fama que lo haga inolvidable. Tiene un ojo para los rumores y otro para las oportunidades.

**Historia:** El menos usado de los 6, vive del comercio. A pesar del título de "sacerdote", no es clérigo — su poder está en la palabra, el trato y el rumor, no en la magia divina. Sus combates son los negocios.

**Objetivos y Legado:** Busca fama y gloria a través del comercio y su reputación. No busca la pelea, pero sabe defenderse si la necesidad surge (Des 16, Car 20, competencia con armas simples/marciales, más Inspiración/Palabras Cortantes para desequilibrar un enfrentamiento).

**Mecánica (Nivel 10 total — Bardo 8 / Explorador 2):**
- Especie: Mediano (Halfling)
- Trasfondo homebrew — **Mercader Errante:** Car/Sab/Des (+2/+1), Herramientas de Vehículos, habilidades Persuasión y Perspicacia, dote **Hábil** (Engaño, Interpretación, +1 a elección)
- Clase base — **Bardo 8:** Colegio del Conocimiento (N3 Bardo), Truco Adicional, Jack of All Trades, Fuente de Inspiración mejorada
- Multiclase — **Explorador 2** (corta antes de N3 para evitar la subclase Cazador, centrada en combate y poco coherente con el personaje): Lanzamiento de Conjuros, Enemigo Predilecto, Maestría de Armas, Explorador Diestro
- Estadísticas finales: Fue 8 / Des 16 / Con 12 / Int 10 / Sab 13 / Car 20
- Bonif. Competencia +4 · PG ~65 (d8 Bardo + d10 Explorador, Con +1)
- Habilidades: Persuasión, Perspicacia (trasfondo) + Historia, Engaño, Interpretación (Bardo) + Supervivencia (Explorador)
- ASIs: N4 Bardo +2 Car → N8 Bardo +1 Car/+1 Des

[Volver al índice](#pnjs-principales-de-romanance)

---

## 6. Ethen

**Descripción:** Elfa del bosque, herborista y artesana. Alineación CN. Conoce las plantas, los caminos y los secretos que la naturaleza guarda celosamente. Viaja ligera, pero nunca sin su zorro. La de más bajo perfil de los 6 — pasa desapercibida.

**Historia:** Proviene de otro lugar — posiblemente del norte o del otro lado del mar. Su pericia con las hierbas es producto de muchos años de estudio, práctica y sacrificio: aprovechó su longevidad élfica para desarrollarse activamente, en vez de caer en la contemplación pasiva típica de otros elfos. Encontró su lugar en Romanance; suele salir en jornadas largas, pero siempre vuelve a la ciudad.

**Compañera:** Brawsta, zorro rojo — vínculo narrativo, no rasgo de clase (igual criterio que Kuba). Para stats de mesa se usa el bloque de **Chacal** reflavoreado — no agresivo, se defiende solo si es necesario.

**Mecánica (Nivel 17):**
- Especie: Elfo del Bosque (Fleet of Foot, Mask of the Wild, Trance, Visión en la Oscuridad)
- Trasfondo homebrew — **Discípula de la Espesura:** Sab/Con/Des (+2/+1), habilidades Naturaleza y Supervivencia, herramienta Kit de Herbolario, dote **Alerta**
- Clase: Druida — **Círculo de la Tierra**, terreno **Bosque**
- Estadísticas finales: Fue 12 / Des 16 / Con 15 / Int 10 / Sab 20 / Car 8
- Bonif. Competencia +6 · PG ~122 (d8, Con +2)
- Salvaciones: Inteligencia, Sabiduría · Habilidades: Naturaleza, Supervivencia, Percepción, Perspicacia
- ASIs: N4 +2 Sab → N8 +1 Sab/+1 Con → N12 Alerta → N16 +1 Des/+1 Con

**Crafteo:** Con el Kit de Herbolario, elabora los brebajes-bonus de Romanance (ver regla de mundo abajo).

**Crafteo — Rocío de Ethen:** con el Kit de Herbolario, elabora el brebaje-bonus
que reemplaza a la Poción de Curación en Romanance. Versión base: +1d4 a una
prueba, salvación o conjuro de curación, debe usarse dentro de la hora de
tomado, un solo uso. Sin mecánica de crafteo fija — Ethen lo resuelve de forma
narrativa (a lo sumo una tirada para ver si tiene los ingredientes a mano).
Versiones superiores (d6, etc.) quedan pendientes para más adelante, siguiendo
la misma lógica.

[Volver al índice](#pnjs-principales-de-romanance)

---

## 7. Deren

**Descripción:** Humano, 60 años. Archivista e historiador, especialista en objetos/artefactos. Presidente del Gremio de Bibliotecarios y Eruditos, con sede en El Orco Sabio. Primer filtro de la biblioteca: recibe hallazgos raros, los identifica dentro de su capacidad, y solo deriva a Kharag cuando el objeto excede lo que puede resolver por sí mismo.

**Historia:** Décadas en la biblioteca, siempre como una autoridad propia dentro del gremio — mentor de varios de los archivistas actuales, a quienes formó tanto en catalogación como en el protocolo de saber cuándo escalar un problema. Domina varios idiomas (no Aureliano, pero reconoce su escritura al verla por años de manejo de fragmentos). Como historiador conoce la versión pública de la caída de la vieja Orden de Bibliotecarios (confundieron iluminar con revelar) — desconoce su vínculo real con El Silente/mineral azul, reservado a Kharag y Jarsag. El incidente que lo volvió tan cauteloso con lo verdaderamente desconocido queda deliberadamente sin resolver (gancho a futuro).

**Personalidad:** Nerviosismo y tartamudez crecientes ante lo que excede su capacidad — al punto de volverse incomprensible. Jamás se quiebra si lo presionan a opinar más allá de lo que sabe: ahí es inquebrantable, repite la derivación a Kharag con una firmeza que contrasta con su torpeza verbal. Paciente y claro con sus aprendices; el nerviosismo solo aparece frente a lo antiguo/desconocido, no en la rutina de enseñar.

**Relación con Kharag:** Amistad genuina de años, no solo jerarquía funcional. Reverencia de su parte, estima genuina de la de Kharag — se consultan como pares dentro de sus respectivos límites.

**Mecánica (Nivel 16, sin clase de aventurero):**

- Especie: Humano
- Trasfondo Escriba: Des/Int/Sab +1/+2/+1, habilidades fijas Investigación y Percepción, herramienta Suministros de Calígrafo, dote Habilidoso (elige Historia, Arcanos y Persuasión)
- Dote extra (libertad de PNJ): Iniciado en Magia (Mago) → Mano de Mago, Mensaje, Identificar (1/descanso largo) — su herramienta de trabajo cotidiana, no una excepción
- ASIs: N4 +1 Int/+1 Con → N8 +1 Int/+1 Con → N12 +1 Sab/+1 Con → N16 +1 Sab/+1 Des
- Puntuaciones finales: Fue 8 (-1) · Des 12 (+1) · Con 14 (+2) · Int 20 (+5) · Sab 18 (+4) · Car 10 (0)
- Bono de Competencia +5 · PG 160 (16d8 máximo, +Con +2)
- Habilidades: Historia +10, Arcanos +10, Investigación +10, Percepción +9, Persuasión +5
- No combatiente

**Pendiente:** Incidente pasado que lo volvió cauteloso con lo desconocido (gancho abierto). Posible conexión con el papel en escritura aureliana perdido en Sesión 1 de Arco I (no confirmada aún).

[Volver al índice](#pnjs-principales-de-romanance)

---

## 8. Aldren el Precavido

**Descripción:** Elfo (Linaje del Lago, Terenor), 160 años (aparenta 50-60 humanos). Archimago e investigador del Gran Oeste. Vivo en 435 D.R. Comparable en magnitud a Kharag, pero de una rama de la magia completamente distinta: sistemas arcanos, protecciones, artefactos, contingencias, encantamientos permanentes, sellos y mecanismos mágicos. Su filosofía: "Un hechizo dura un instante. Un buen sistema dura siglos."

**Origen:** Nacido en una ciudad sin nombre definitivo, en la región de Los Lagos de Terenor (Gran Oeste) — cultura humano-élfica, antigua, con magia integrada a la arquitectura, la educación y la vida cotidiana. No nació en Romanance; la conoce por viajes, estudios y el comercio regular entre ambas regiones (Romanance ↔ Gran Oeste).

**Personalidad:** Alegre, sagaz, pícaro, muy inteligente, metódico, siempre varios pasos adelante. Su humor nunca es gratuito — casi todas sus bromas cumplen una función. No es un excéntrico sin motivo: es un mago brillante que usa el humor como herramienta.

**El apodo "El Precavido":** En su juventud cometió errores por confiar demasiado en situaciones y objetos mágicos peligrosos. Desde entonces: el conocimiento peligroso debe preservarse, las protecciones deben tener múltiples capas, nunca confiar en una única barrera, una buena trampa puede salvar vidas. No hay un evento único definido — queda abierto para desarrollar a futuro.

**Su sello personal:** Cada protección importante suele incluir una broma, una prueba de ingenio, una consecuencia menor para quien actúa sin pensar, y un sistema que le avisa si la protección fue activada (no necesariamente quién la activó).

**Relación con los Aurelianos (canon importante):** Dedicó décadas al estudio de ruinas y tablillas aurelianas. No conoce toda la historia de los Aurelianos ni el significado completo de los Cinco Juramentos, pero comprende profundamente sellos aurelianos, sistemas de protección, tablillas antiguas, cámaras de preservación, simbología y mecanismos rituales. Su conclusión central: "Los Aurelianos protegían conocimiento, no tesoros." — idea que influye toda su obra.

**La tablilla del One-Shot de las Cuatro Estatuas:** Hace años encontró una tablilla aureliana, la estudió parcialmente, y al entender que era demasiado importante para su conocimiento incompleto, decidió ocultarla (no destruirla ni publicarla). Construyó un sistema de cofres, acertijos y protecciones para que solo alguien paciente e inteligente pudiera llegar hasta ella. La party la encuentra porque supera ese sistema.

**Apariencia:** Aspecto humano maduro con orejas ligeramente puntiagudas, cabello oscuro con mechones plateados, piel curtida por viajes, manos y antebrazos con cicatrices antiguas de quemaduras arcanas y experimentos, ojos claros (color sin definir). Vestimenta de mago viajero, práctica y elegante, sin diseño definitivo. Siempre lleva un bastón como foco arcano, diseño pendiente.

**Mecánica (Nivel 20):**

> Ajuste de especie
>
>Elfo → Subraza Semielfo (Lumenor, homebrew): conserva Visión en la Oscuridad, Trance y Sentidos Agudos del Elfo base, pero su Ascendencia Feérica se combina con la herencia humana para otorgar también Versátil (dote de origen extra). Mecánicamente es lo mismo que ya teníamos — solo se formaliza como subraza en vez de "injerto" ad hoc. Aplica al Linaje del Lago de Aldren y a cualquier semielfo futuro en Lumenor.
>
>ver _Anexo Homebrew PNJs Romanance_ para detalles completos de la subclase

- Especie: Semielfo — Linaje del Lago (homebrew, Lumenor): Visión en la Oscuridad 60 pies, Ascendencia Feérica, Sentidos Agudos (Perspicacia), Trance, cantrip Fuerza Espectral → Alarma (N3) → No Detección (N5); espíritu de lanzamiento Inteligencia. + Versátil (dote de origen extra, injerto de ascendencia humana por ser semielfo)
- Trasfondo Erudito: Int/Sab/Con +2/+1/+1, dote Iniciado en Magia (Mago), habilidades Arcanos e Historia
- Clase: Mago — Subclase homebrew Escuela del Sello Perpetuo: 
  - N3 Sello Fundacional (imbuye objeto/espacio con protección duradera, efecto sellado hasta nivel 2, condición de activación, prueba de ingenio, consecuencia menor, aviso de activación)
  - N6 Capas Múltiples (apila 2 sellos independientes en el mismo objeto/espacio, o extiende a un área mayor)
  - N10 Perdurabilidad (sus sellos y encantamientos no requieren mantenimiento, funcionan durante siglos)
  - N14 Arquitecto de Contingencias (condiciones múltiples si/entonces en un mismo sello)
  - N19 Sello Perpetuo (rasgo insignia: un sello que ni él mismo puede desactivar sin un proceso deliberado y largo)
- Estadísticas finales: Fue 8 (-1) / Des 14 (+2) / Con 14 (+2) / Int 20 (+5) / Sab 16 (+3) / Car 12 (+1)
Bonif. Competencia +6 · PG ~122 (d6, Con +2)
- Salvaciones: Inteligencia, Sabiduría · Habilidades: todas (Experto Polifacético) · Pericia en Arcanos e Historia
- Dotes: Iniciado en Magia (trasfondo) + Habilidoso (Versátil) + Don de la Habilidad (N19, épica: +1 Sab, Experto Polifacético, Pericia en Historia)
- ASIs: N4 +2 Int → N8 +1 Int/+1 Sab → N12 +1 Sab/+1 Car → N16 +1 Des/+1 Car → N19 Don de la Habilidad
Puede lanzar cualquier conjuro de la lista de Mago (sujeto a preparación diaria y disponibilidad narrativa, sin lista fija por ahora)

**Pendientes de desarrollo (arrastrados del canon fundacional):**

Ciudad de origen (nombre, cultura e historia)
El Cónclave de Magos
Apariencia definitiva e ilustración
Bastón y objetos mágicos característicos
Laboratorio de Aldren
Historia completa de su juventud y los eventos que lo volvieron "el Precavido"
Relación más profunda con el Silente y otros elementos del lore antiguo
Nuevo: formalizar el Linaje del Lago como raza regional propia de Lumenor en documento aparte, si aparecen más PNJs élficos

[Volver al índice](#pnjs-principales-de-romanance)

---

## Reglas de mundo transversales

### Curación en Romanance
- Rocío de Ethen **No existen pociones de curación estándar** (menor, mayor, superior) originarias del mundo de Romanance. Si aparece alguna, es de origen extraplanar y sufre una alteración al entrar al mundo: en vez de restaurar PG, otorga un **bono temporal a tiradas** (armoniza mente, emociones y concentración).
- **Los conjuros de curación funcionan tal cual las reglas estándar del SRD** — no se tocan.
- El daño físico se recupera con tiempo y descanso, no con atajos instantáneos vía objeto.

### Crafteo
- Se usan las **reglas oficiales del SRD 2024** tal cual (herramienta + competencia + tiempo/costo por precio o rareza + materiales), sin modificar el esqueleto.
- Única regla de mundo agregada: cualquier personaje con competencia en Kit de Herbolario (Ethen y otros herboristas que puedan surgir) puede elaborar **brebajes-bonus** con la misma estructura mecánica que la Poción de Curación oficial (1 día, 25 PO, Kit de Herbolario), pero con efecto de bono a tirada en vez de restauración de PG.

### Criterio general para PNJs
Como PNJs, se toman libertades de diseño (mezclar rasgos de nivel fuera de orden estándar, dobles rasgos en el mismo nivel, etc.) siempre que el resultado sea narrativamente coherente y no rompa el equilibrio de mesa.

---

## Pendientes generales (arrastrados de esta sesión)

Sin pendientes abiertos en este documento — forja de Tömörbaatar, mercadeo de Temay y el cruce con equipment.md/magic-items.md (pociones) quedaron resueltos en Reglas_Forja_Mercadeo_Pociones.md.

[Volver al índice](#pnjs-principales-de-romanance)

> Fin de fuente: PNJs_Principales_Romanance.md.


---

## Fuente documental: Sistema Universal de Viajes para D&D 5.5e — Versión 1.1(1).md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Sistema Universal de Viajes para D&D 5.5e

## Suplemento Narrativo de Exploración — Versión 1.1

> *"Todo viaje cuenta una historia."*

Este suplemento transforma los viajes largos en una secuencia de juego propia, combinando exploración, decisiones, clima, recursos, interpretación y eventos inesperados.

Está diseñado para D&D 5.5e, pero puede adaptarse a cualquier escenario de fantasía.

---

# Índice

- [Sistema Universal de Viajes para D\&D 5.5e](#sistema-universal-de-viajes-para-dd-55e)
  - [Suplemento Narrativo de Exploración — Versión 1.1](#suplemento-narrativo-de-exploración--versión-11)
- [Índice](#índice)
- [1. Filosofía del sistema](#1-filosofía-del-sistema)
    - [Objetivos del sistema](#objetivos-del-sistema)
- [2. ¿Cuándo usar este sistema?](#2-cuándo-usar-este-sistema)
- [3. Anatomía de un viaje](#3-anatomía-de-un-viaje)
  - [Fase 1 — Preparación](#fase-1--preparación)
  - [Fase 2 — Condiciones](#fase-2--condiciones)
  - [Fase 3 — Etapas](#fase-3--etapas)
  - [Fase 4 — Fogata](#fase-4--fogata)
  - [Fase 5 — Llegada](#fase-5--llegada)
- [4. Roles de viaje](#4-roles-de-viaje)
  - [Guía](#guía)
    - [Responsabilidades](#responsabilidades)
    - [Fallo](#fallo)
  - [Vigía](#vigía)
    - [Responsabilidades](#responsabilidades-1)
    - [Fallo](#fallo-1)
  - [Explorador](#explorador)
    - [Responsabilidades](#responsabilidades-2)
    - [Fallo](#fallo-2)
  - [Campamentero](#campamentero)
    - [Responsabilidades](#responsabilidades-3)
    - [Fallo](#fallo-3)
  - [Cocinero / Cronista](#cocinero--cronista)
    - [Responsabilidades](#responsabilidades-4)
    - [Éxito](#éxito)
- [5. Clima y condiciones](#5-clima-y-condiciones)
  - [Tabla general de clima — d12](#tabla-general-de-clima--d12)
  - [Intensidad](#intensidad)
    - [Modificadores de dificultad](#modificadores-de-dificultad)
  - [Terreno](#terreno)
    - [Modificadores propios del terreno](#modificadores-propios-del-terreno)
  - [Reglas de avance por terreno](#reglas-de-avance-por-terreno)
    - [Terreno favorable](#terreno-favorable)
    - [Terreno difícil](#terreno-difícil)
    - [Terreno extremo](#terreno-extremo)
  - [Recursos y terreno](#recursos-y-terreno)
- [6. Etapas del viaje](#6-etapas-del-viaje)
  - [Paso 1 — Clima](#paso-1--clima)
  - [Paso 2 — Roles](#paso-2--roles)
  - [Paso 3 — Evento](#paso-3--evento)
  - [Paso 4 — Consecuencias](#paso-4--consecuencias)
  - [Paso 5 — Fogata](#paso-5--fogata)
- [7. Eventos de viaje](#7-eventos-de-viaje)
  - [Categorías](#categorías)
    - [Sociales](#sociales)
    - [Exploración](#exploración)
    - [Naturaleza](#naturaleza)
    - [Combate](#combate)
    - [Extraordinarios](#extraordinarios)
- [8. Campamentos y Fogatas](#8-campamentos-y-fogatas)
  - [8.1 El Mazo de Fogata](#81-el-mazo-de-fogata)
  - [8.2 Cuándo se roba una carta](#82-cuándo-se-roba-una-carta)
  - [8.3 Tipos de cartas](#83-tipos-de-cartas)
    - [Desafío](#desafío)
    - [Problema](#problema)
    - [Misterio](#misterio)
    - [Pregunta - en revisión -](#pregunta---en-revisión--)
    - [Vínculo](#vínculo)
    - [Oportunidad](#oportunidad)
    - [Mala suerte](#mala-suerte)
    - [Buena suerte](#buena-suerte)
    - [Extraordinaria](#extraordinaria)
  - [8.4 Cartas de desafío](#84-cartas-de-desafío)
    - [Piedra, papel o tijera](#piedra-papel-o-tijera)
    - [Palabra prohibida](#palabra-prohibida)
    - [El Juglar](#el-juglar)
    - [Dos verdades y una mentira](#dos-verdades-y-una-mentira)
    - [La apuesta](#la-apuesta)
  - [8.5 Cartas de Problema](#85-cartas-de-problema)
    - [El fuego se apaga](#el-fuego-se-apaga)
    - [Lluvia de mosquitos](#lluvia-de-mosquitos)
    - [Visitante nocturno](#visitante-nocturno)
    - [Provisión perdida](#provisión-perdida)
  - [8.6 Cartas de Misterio](#86-cartas-de-misterio)
    - [La luz](#la-luz)
    - [Las huellas](#las-huellas)
    - [La palabra prohibida](#la-palabra-prohibida)
    - [El objeto](#el-objeto)
  - [8.7 Cartas de Pregunta](#87-cartas-de-pregunta)
  - [8.8 Cartas de elección](#88-cartas-de-elección)
    - [La suerte del viajero](#la-suerte-del-viajero)
  - [8.9 Recompensas y consecuencias](#89-recompensas-y-consecuencias)
  - [8.10 Reglas de seguridad y tono](#810-reglas-de-seguridad-y-tono)
- [9. Motivación Grupal](#9-motivación-grupal)
  - [Gana Motivación](#gana-motivación)
  - [Pierde Motivación](#pierde-motivación)
  - [Gastar Motivación](#gastar-motivación)
- [10. Llegada](#10-llegada)
  - [Recursos](#recursos)
  - [Estado físico](#estado-físico)
  - [Estado narrativo](#estado-narrativo)
- [11. Tablas de eventos por bioma](#11-tablas-de-eventos-por-bioma)
  - [Bosque](#bosque)
  - [Montaña](#montaña)
  - [Llanura](#llanura)
  - [Pantano](#pantano)
  - [Costa](#costa)
  - [Otros biomas](#otros-biomas)
    - [Diseño de las tablas](#diseño-de-las-tablas)
- [12. Herramientas para el Director de Juego](#12-herramientas-para-el-director-de-juego)
  - [Preparar un viaje en cinco minutos](#preparar-un-viaje-en-cinco-minutos)
  - [Preparar un viaje importante](#preparar-un-viaje-importante)
- [Principios del sistema](#principios-del-sistema)
  - [Estado del documento](#estado-del-documento)
    - [Diseño](#diseño)


---

# 1. Filosofía del sistema

El viaje deja de ser un "salto temporal" y pasa a ser una aventura intermedia.

El objetivo no es simular cada hora del camino, sino representar los momentos que hacen que ese camino importe.

### Objetivos del sistema

- Dar identidad a los caminos.
- Crear momentos de interpretación entre personajes.
- Hacer que las decisiones durante el viaje tengan consecuencias.
- Mantener el ritmo narrativo sin jugar cada día por separado.
- Introducir situaciones inesperadas que puedan generar tensión, humor o descubrimientos.
- Hacer que el viaje se sienta diferente según el terreno, el clima y las decisiones del grupo.

---

# 2. ¿Cuándo usar este sistema?

Usarlo cuando el viaje dure aproximadamente **3 días o más**.

| Duración | Resolución |
|---|---|
| 1–2 días | Narración rápida. |
| 3–7 días | 3 etapas. |
| 8–14 días | 4 etapas. |
| 15–30 días | 5 o 6 etapas. |
| Más de 30 días | Varias secuencias de viaje. |

Cada etapa representa aproximadamente entre **1 y 3 días**.

El Director puede aumentar o reducir el número de etapas según la importancia narrativa del viaje.

---

# 3. Anatomía de un viaje

Todo viaje se divide en cinco fases.

## Fase 1 — Preparación

La party decide:

- Ruta.
- Ritmo: rápido, normal o lento.
- Provisiones.
- Monturas o transporte.
- Roles de viaje.

## Fase 2 — Condiciones

El Director determina:

- Estación.
- Clima.
- Bioma.
- Dificultad del terreno.

## Fase 3 — Etapas

Cada etapa incluye:

- Tiradas de los roles.
- Condiciones del entorno.
- Un evento principal.
- Consecuencias.

## Fase 4 — Fogata

El grupo descansa y resuelve una escena de campamento.

Durante esta fase puede utilizarse el **Mazo de Fogata**.

## Fase 5 — Llegada

Se aplican las consecuencias acumuladas durante el viaje.

---

# 4. Roles de viaje

Cada personaje ocupa un rol durante una etapa.

Los roles pueden cambiar entre etapas.

No es necesario que todos los personajes tengan siempre el mismo rol.

## Guía

**Habilidad principal:** Supervivencia.

### Responsabilidades

- Elegir la ruta.
- Evitar perderse.
- Encontrar caminos seguros.
- Determinar cuándo conviene desviarse.

### Fallo

Puede provocar:

- Retrasos.
- Fatiga.
- Pérdida de recursos.
- Desvíos.
- Exposición a peligros.

---

## Vigía

**Habilidad principal:** Percepción.

### Responsabilidades

- Detectar peligros.
- Detectar emboscadas.
- Vigilar cambios del clima.
- Identificar movimientos extraños.

### Fallo

Puede provocar:

- Que el grupo sea sorprendido.
- Desventaja en encuentros.
- Pérdida de recursos.
- Que una amenaza tenga la iniciativa narrativa.

---

## Explorador

**Habilidades:** Investigación, Naturaleza o Supervivencia.

### Responsabilidades

- Buscar recursos.
- Descubrir ruinas.
- Encontrar atajos.
- Investigar rastros.
- Identificar características interesantes del terreno.

### Fallo

Puede provocar:

- Recursos desperdiciados.
- Riesgo adicional.
- Pérdida de tiempo.
- Interpretaciones equivocadas del entorno.

---

## Campamentero

**Habilidades:** Supervivencia, Herramientas o Medicina.

### Responsabilidades

- Elegir dónde dormir.
- Preparar refugio.
- Mantener el campamento seguro.
- Proteger las provisiones.

### Fallo

Puede provocar:

- Descanso incompleto.
- Exposición al clima.
- Pérdida de recursos.
- Problemas durante la noche.

---

## Cocinero / Cronista

**Habilidades:** Utensilios de cocina, Interpretación, Persuasión o Medicina.

### Responsabilidades

- Preparar comida.
- Mantener la moral.
- Contar historias.
- Registrar acontecimientos.
- Mantener unido al grupo.

### Éxito

Puede recuperar **1 punto de Motivación** cuando el Director considere que su acción mejora significativamente el ánimo del grupo.

---

Sistema Universal de Viajes para D&D 5.5e — Versión 1.2 (Testing)

Cambios de la versión 1.2

Sección 5 — Clima y condiciones

Regla base de dificultad

«CD final = CD base (10) + Intensidad climática + Modificador del terreno para el rol.»

Intensidad

Intensidad| Modificador
Leve| +0
Moderada| +2
Severa| +5

El Director puede aumentar o reducir la CD según las circunstancias de la escena.

Modificadores de terreno por rol

Terreno| Guía| Vigía| Explorador| Campamentero| Cocinero/Cronista
Camino| -2| 0| 0| 0| 0
Bosque| +2| +2| -2| -2| 0
Montaña| +2| 0| -2| +2| 0
Llanura| -2| -2| -2| +2| 0
Pantano| +2| +2| -2| +2| +2
Costa| +2| -2| -2| +2| 0
Desierto| +2| +2| +2| +2| +2
Selva| +2| +2| -2| -2| +2

Filosofía

- -2: El terreno favorece claramente la función del rol.
- 0: El terreno no afecta significativamente al rol.
- +2: El terreno dificulta claramente la función del rol.

---

Sección 6 — Etapas del viaje

La sección se redefine como una guía rápida para el Director de Juego.

Antes de la mesa

1. Definir la duración del viaje y la cantidad de etapas.
2. Definir el bioma predominante de cada etapa.
3. Elegir o determinar clima e intensidad.
4. Preparar un evento principal para cada etapa (ver Sección 7 y tablas de la Sección 11).

En la mesa

1. La party reparte los roles de viaje.
2. El Director describe las condiciones de la etapa.
3. Se realizan únicamente las tiradas necesarias según el terreno, clima y evento.
4. Se resuelve el evento principal.
5. Se monta el campamento y se continúa con la fase de fogón y guardias.

Los roles pueden repetirse si la cantidad de jugadores lo permite o adaptarse según la composición del grupo.

---

Sección 7 — Eventos de viaje

Cada etapa contiene un evento principal.

Las categorías se mantienen:

- Social.
- Exploración.
- Naturaleza.
- Combate.
- Extraordinario.

Importante: Las tablas específicas de eventos por bioma se encuentran en la Sección 11.

Los fallos importantes durante una etapa pueden generar complicaciones narrativas, activar un evento preparado o permitir al Director utilizar el Mazo de Fogón como herramienta de improvisación.

---

Sección 8 — Campamentos y Fogatas

Flujo nocturno

1. Armar el campamento.
   
   - Éxito: campamento seguro.
   - Fallo: consecuencia determinada por el Director.

2. Fogón.
   
   - Momento de descanso, conversación e interpretación.
   - El Director puede utilizar cero, una o varias cartas del Mazo de Fogón.

3. Guardias nocturnas (opcionales).
   
   - La party decide si organiza guardias.
   - Los vigías realizan sus tiradas cuando corresponda.
   - Un fallo puede disparar un evento nocturno, una carta del mazo o una complicación preparada por el Director.

El Mazo de Fogón es una herramienta narrativa y de improvisación; su uso queda completamente a criterio del Director.

---

Sección 9 — Motivación Grupal

La Motivación es un recurso compartido de la party durante un viaje.

- Máximo: 5 puntos.
- Se obtiene y se pierde únicamente durante el viaje.
- Al finalizar el viaje, la Motivación vuelve a 0.

Nuevas reglas opcionales

Salvar un fallo por poco

Si una tirada falla por 1 o 2 puntos, la party puede gastar la misma cantidad de puntos de Motivación para convertirla en un éxito.

Éxito con consecuencia

En lugar de gastar Motivación, un personaje puede aceptar un éxito con una consecuencia narrativa apropiada. La consecuencia puede ser propuesta por el Director o, si este lo permite, por el propio jugador.

---

# 10. Llegada

Al finalizar el viaje, el Director evalúa tres aspectos.

## Recursos

- Comida.
- Agua.
- Munición.
- Equipo.

## Estado físico

- Fatiga.
- Heridas.
- Descanso.

## Estado narrativo

- Rumores aprendidos.
- Aliados encontrados.
- Secretos descubiertos.
- Reputación obtenida.
- Misterios pendientes.

El viaje debería dejar algún tipo de consecuencia, aunque sea pequeña.

---

# 11. Tablas de eventos por bioma

Cada bioma posee su propia tabla **d100**.

La tabla puede prepararse antes del viaje o utilizarse directamente durante la partida.

El objetivo de separar las tablas por bioma es evitar resultados incompatibles con el entorno.

## Bosque

| Rango | Tipo |
|---|---|
| 01–20 | Encuentro social. |
| 21–40 | Exploración. |
| 41–60 | Naturaleza. |
| 61–80 | Combate. |
| 81–95 | Misterio. |
| 96–100 | Evento extraordinario. |

## Montaña

Misma estructura, con eventos específicos del terreno.

## Llanura

Misma estructura, con eventos específicos del terreno.

## Pantano

Misma estructura, con eventos específicos del terreno.

## Costa

Misma estructura, con eventos específicos del terreno.

## Otros biomas

El Director puede crear tablas específicas para:

- Desierto.
- Selva.
- Tundra.
- Subterráneo.
- Regiones mágicas.
- Territorios corrompidos.
- Otros ambientes propios del escenario.

### Diseño de las tablas

Cada tabla debe contener eventos apropiados para el bioma.

No es necesario que todas las entradas sean combates.

Una distribución equilibrada puede incluir:

- Encuentros sociales.
- Exploración.
- Naturaleza.
- Peligros.
- Combates.
- Misterios.
- Oportunidades.
- Eventos extraordinarios.

---

# 12. Herramientas para el Director de Juego

## Preparar un viaje en cinco minutos

1. Elegir número de etapas.
2. Determinar el clima de cada etapa.
3. Identificar el bioma de cada etapa.
4. Preparar un evento de viaje para cada etapa.
5. Preparar o mezclar el Mazo de Fogata.
6. Determinar qué cartas pueden aparecer.
7. Preparar un posible evento extraordinario.

---

## Preparar un viaje importante

Para viajes relevantes para la campaña, el Director puede preparar:

- Eventos específicos de cada región.
- Cartas de Fogata relacionadas con los personajes.
- Cartas especiales relacionadas con la campaña.
- NPCs que podrían aparecer.
- Misterios que anticipen acontecimientos futuros.
- Recompensas específicas.
- Problemas vinculados con el clima o el terreno.

---

# Principios del sistema

- Los viajes deben revelar el mundo.
- No todos los eventos son combates.
- El clima debe sentirse importante.
- Las consecuencias afectan al grupo completo.
- La Fogata es el corazón narrativo del descanso.
- Las cartas deben generar posibilidades, no imponer respuestas.
- El azar puede producir tanto recompensas como problemas.
- Los desafíos deben involucrar a los jugadores, no solamente a sus personajes.
- Los misterios no necesitan tener una explicación inmediata.
- Las cartas pueden generar humor, tensión o interpretación.
- Una buena carta puede convertirse en una escena memorable.
- El sistema debe complementar la aventura, no competir con ella.

---

Estado de la versión

Versión: 1.2 (Testing)

Las secciones 5, 6, 7, 8 y 9 quedan cerradas para pruebas en mesa. Los ajustes futuros dependerán del playtesting.

**Formato de desarrollo:** Markdown.

> Fin de fuente: Sistema Universal de Viajes para D&D 5.5e — Versión 1.1(1).md.


---

## Fuente documental: Tabla_Viaje_Continental_Romanance (2).md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Tabla de Referencia — Viaje Continental (Romanance)

Escala del continente confirmada: **~2000 km norte-sur x ~3000 km este-oeste**.
Anclas de escala (tiempos ya jugados en mesa):

| Tramo jugado | Tiempo | Terreno | Distancia estimada |
|---|---|---|---|
| Romanance ↔ Levit | 3 días a pie | Camino/llano | ~144 km |
| Levit ↔ Ruinas de Morvath | <1 día a caballo | Pantano/bosque seco | 46 km |
| Romanance ↔ Ruinas Cuatro Estatuas | 4 días a pie | Montaña (cordillera) | ~80-95 km |

---

## 1. Velocidades por modo y terreno (km/día)

| Modo | Camino/Llano | Senderos/Colinas/Bosque | Montaña/Pantano/Sin camino |
|---|---|---|---|
| **A pie** | 48-50 | 32-36 | 20-24 |
| **Montura (caballo)** | 60-64 | 38-40 | 24-26 (terreno difícil castiga mucho al animal) |
| **Carreta/Caravana mercante** | 20-25 | 12-15 | No viable sin camino construido |
| **Barcaza (río navegable, a favor)** | 80-100 | — | — |
| **Barcaza (río, en contra)** | 40-50 | — | — |
| **Barco costero/oceánico (viento favorable)** | 150-200 | — | — |

Nota: poblados/postas cada 20-25 km en caminos transitados (medio día de marcha) — ya aplicable al tramo Romanance-Levit.

---

## 2. Conversión de distancias — Camino/Llano (referencia principal)

| Distancia | A pie (~48 km/d) | Montura (~62 km/d) | Carreta (~22 km/d) | Barco costero (~175 km/d) |
|---|---|---|---|---|
| 100 km | ~2 días | ~1,5 días | ~4,5 días | <1 día |
| 250 km | ~5 días | ~4 días | ~11 días (~1,5 sem.) | ~1,5 días |
| 500 km | ~10 días | ~8 días | ~23 días (~3 sem.) | ~3 días |
| 1000 km | ~21 días (~3 sem.) | ~16 días (~2,5 sem.) | ~45 días (~6,5 sem.) | ~6 días |
| 1500 km | ~31 días (~4,5 sem.) | ~24 días (~3,5 sem.) | ~68 días (~10 sem.) | ~9 días |
| 2000 km (ancho N-S) | ~42 días (~6 sem.) | ~32 días (~4,5 sem.) | ~91 días (~13 sem. / ~3 meses) | ~11-12 días |
| 3000 km (largo E-O) | ~63 días (~9 sem. / ~2 meses) | ~48 días (~7 sem.) | ~136 días (~19,5 sem. / ~4,5 meses) | ~17 días |

---

## 3. Conversión de distancias — Montaña/Terreno difícil

| Distancia | A pie (~22 km/d) | Montura (~25 km/d) |
|---|---|---|
| 50 km | ~2,5 días | ~2 días |
| 100 km | ~4,5 días | ~4 días |
| 250 km | ~11 días (~1,5 sem.) | ~10 días |
| 500 km | ~23 días (~3 sem.) | ~20 días (~3 sem.) |

Carretas no viables en este terreno salvo caminos construidos específicos (ej. calzadas talladas, como podría existir en tramos cercanos a la ciudad Aureliana).

---

## 4. Distancias canon fijadas (locaciones del croquis) — HISTÓRICO, ver sección 6 para versión final

| Destino | Desde Levit | Desde Romanance |
|---|---|---|
| Ruinas de Morvath | 46 km (<1 día) | ~189 km (~3 días + tramo corto) |
| Ruinas Cuatro Estatuas (cordillera) | — | ~80-95 km (4 días) |
| Montañas de Anic | ~120 km (~3-4 días) | ~264 km (~6-7 días) |
| Berk | ~400 km (~11-13 días, vía Montañas de Anic) | ~544 km (~14-16 días) |
| Aetherion (ruinas) | ~750 km (~19-20 días) | ~894 km (~22-23 días) |

Nota: estas cifras quedaron reemplazadas tras ubicar las locaciones definitivas en Azgaar (ver sección 6). El continente resultó más grande de lo estimado en esta primera pasada; el DM aceptó explícitamente recalibrar el canon a las distancias reales del mapa en vez de mover las locaciones.

---

## 5. Uso práctico

Para ubicar cualquier locación nueva en el mapa: elegir terreno predominante del tramo, aplicar la tabla correspondiente, y verificar que el tiempo resultante no contradiga viajes ya jugados en mesa. Cualquier viaje narrado a futuro en sesión (días, semanas) debería poder mapearse a una distancia aproximada usando esta tabla, y viceversa.

---

## 6. Distancias canon FINALES (camino real medido en Azgaar — Mundo_Sebas)

Fuente: longitud real de las rutas trazadas en Azgaar (suma de segmentos del camino, no línea recta), `distanceScale=3 km/px`.

| Locación | Rol | Distancia por camino desde Romanance | Tiempo aprox. a pie (~48 km/día en camino, más lento en tramos de montaña/pantano) |
|---|---|---|---|
| **Levit** | Villa/biblioteca | 143,5 km | ~3 días *(canon original)* |
| **Ruinas de Morvath** | Punto de referencia (vía Levit) | 189,2 km | ~4 días |
| **Ilvandor** | Ruinas aurelianas, guardián del Quinto Juramento | 133,9 km | ~4 días *(≈ canon original de Cuatro Estatuas)* |
| **Tömörsag** | Único puerto en ese punto (Port Ersag ya no existe) | 281,6 km | ~6 días |
| **Varsak** | Ciudad-puerto | 523,8 km | ~11 días |
| **Krâthor** | Tierra de Anic (clan goliath) | 649,7 km | ~14 días |
| **Aetherion** | Ruinas altoélficas (Elián) | 2213,5 km | ~46 días (~6,5 semanas) |
| **Lanre** | Pueblo natal de Kvothe | ~2590 km | ~54 días (~7,5 semanas) |
| **Marren** | Ciudad hermana rival de Lanre (199 km de distancia entre ambas) | ~2652 km | ~55 días |
| **Berk** | Aldea aislada (Jantry) | ~3123 km | ~65 días (~9,5 semanas) — única ruta terrestre existente, muy indirecta (pasa por Aetherion y Marren) |
| **Aethragar** | Capital, Hermandad de los Vigías — segundo continente | 1698 km en línea recta | Requiere cruce marítimo; no desarrollado aún |

**Decisiones de diseño registradas:**
- Romanance/Levit/Morvath/Ilvandor mantienen sus valores canon originales (casi sin cambio entre línea recta y camino real).
- Las distancias largas (Tömörsag en adelante) se recalcularon usando la longitud real de las rutas trazadas en Azgaar, no la línea recta — esto las alargó considerablemente respecto a versiones anteriores de esta tabla, y el DM aceptó explícitamente esta recalibración.
- Actualmente existe una sola ruta terrestre hacia cada destino lejano. Berk en particular queda muy alejada por tener que rodear vía Aetherion y Marren — el DM puede trazar rutas alternativas (incluyendo marítimas) en Azgaar más adelante si lo necesita.
- Port Ersag fue eliminado del mapa; Tömörsag es el único asentamiento portuario en ese punto.
- Marren es el nombre canon de la ciudad rival de Lanre (no "Brims").


> Fin de fuente: Tabla_Viaje_Continental_Romanance (2).md.


---

## Fuente documental: Tabla_Viaje_Continental_Romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Tabla de Referencia — Viaje Continental (Romanance)

Escala del continente confirmada: **~2000 km norte-sur x ~3000 km este-oeste**.
Anclas de escala (tiempos ya jugados en mesa):

| Tramo jugado | Tiempo | Terreno | Distancia estimada |
|---|---|---|---|
| Romanance ↔ Levit | 3 días a pie | Camino/llano | ~144 km |
| Levit ↔ Ruinas de Morvath | <1 día a caballo | Pantano/bosque seco | 46 km |
| Romanance ↔ Ruinas Cuatro Estatuas | 4 días a pie | Montaña (cordillera) | ~80-95 km |

---

## 1. Velocidades por modo y terreno (km/día)

| Modo | Camino/Llano | Senderos/Colinas/Bosque | Montaña/Pantano/Sin camino |
|---|---|---|---|
| **A pie** | 48-50 | 32-36 | 20-24 |
| **Montura (caballo)** | 60-64 | 38-40 | 24-26 (terreno difícil castiga mucho al animal) |
| **Carreta/Caravana mercante** | 20-25 | 12-15 | No viable sin camino construido |
| **Barcaza (río navegable, a favor)** | 80-100 | — | — |
| **Barcaza (río, en contra)** | 40-50 | — | — |
| **Barco costero/oceánico (viento favorable)** | 150-200 | — | — |

Nota: poblados/postas cada 20-25 km en caminos transitados (medio día de marcha) — ya aplicable al tramo Romanance-Levit.

---

## 2. Conversión de distancias — Camino/Llano (referencia principal)

| Distancia | A pie (~48 km/d) | Montura (~62 km/d) | Carreta (~22 km/d) | Barco costero (~175 km/d) |
|---|---|---|---|---|
| 100 km | ~2 días | ~1,5 días | ~4,5 días | <1 día |
| 250 km | ~5 días | ~4 días | ~11 días (~1,5 sem.) | ~1,5 días |
| 500 km | ~10 días | ~8 días | ~23 días (~3 sem.) | ~3 días |
| 1000 km | ~21 días (~3 sem.) | ~16 días (~2,5 sem.) | ~45 días (~6,5 sem.) | ~6 días |
| 1500 km | ~31 días (~4,5 sem.) | ~24 días (~3,5 sem.) | ~68 días (~10 sem.) | ~9 días |
| 2000 km (ancho N-S) | ~42 días (~6 sem.) | ~32 días (~4,5 sem.) | ~91 días (~13 sem. / ~3 meses) | ~11-12 días |
| 3000 km (largo E-O) | ~63 días (~9 sem. / ~2 meses) | ~48 días (~7 sem.) | ~136 días (~19,5 sem. / ~4,5 meses) | ~17 días |

---

## 3. Conversión de distancias — Montaña/Terreno difícil

| Distancia | A pie (~22 km/d) | Montura (~25 km/d) |
|---|---|---|
| 50 km | ~2,5 días | ~2 días |
| 100 km | ~4,5 días | ~4 días |
| 250 km | ~11 días (~1,5 sem.) | ~10 días |
| 500 km | ~23 días (~3 sem.) | ~20 días (~3 sem.) |

Carretas no viables en este terreno salvo caminos construidos específicos (ej. calzadas talladas, como podría existir en tramos cercanos a la ciudad Aureliana).

---

## 4. Distancias canon fijadas (locaciones del croquis) — HISTÓRICO, ver sección 6 para versión final

| Destino | Desde Levit | Desde Romanance |
|---|---|---|
| Ruinas de Morvath | 46 km (<1 día) | ~189 km (~3 días + tramo corto) |
| Ruinas Cuatro Estatuas (cordillera) | — | ~80-95 km (4 días) |
| Montañas de Anic | ~120 km (~3-4 días) | ~264 km (~6-7 días) |
| Berk | ~400 km (~11-13 días, vía Montañas de Anic) | ~544 km (~14-16 días) |
| Aetherion (ruinas) | ~750 km (~19-20 días) | ~894 km (~22-23 días) |

Nota: estas cifras quedaron reemplazadas tras ubicar las locaciones definitivas en Azgaar (ver sección 6). El continente resultó más grande de lo estimado en esta primera pasada; el DM aceptó explícitamente recalibrar el canon a las distancias reales del mapa en vez de mover las locaciones.

---

## 5. Uso práctico

Para ubicar cualquier locación nueva en el mapa: elegir terreno predominante del tramo, aplicar la tabla correspondiente, y verificar que el tiempo resultante no contradiga viajes ya jugados en mesa. Cualquier viaje narrado a futuro en sesión (días, semanas) debería poder mapearse a una distancia aproximada usando esta tabla, y viceversa.

---

## 6. Distancias canon FINALES (medidas reales en Azgaar — Mundo_Sebas)

Fuente: coordenadas x/y de los burgs cargados en Azgaar, `distanceScale=3 km/px`. Romanance y Levit son las dos anclas de referencia; el resto se midió desde ahí.

| Locación | Rol | Desde Romanance | Desde Levit | Tiempo aprox. a pie (camino/llano, ~48 km/día) |
|---|---|---|---|---|
| **Levit** | Villa/biblioteca | 142 km | — | ~3 días *(canon original, sin cambios)* |
| **Ruinas de Morvath** | Punto de referencia (sellos) | 189,2 km | 46 km | ~2 días desde Levit *(canon original, sin cambios)* |
| **Ilvandor** | Ruinas aurelianas, guardián del Quinto Juramento | 99 km | 205 km | ~4 días desde Romanance *(≈ canon original de Cuatro Estatuas)* |
| **Krâthor** | Tierra de Anic (clan goliath) | 588 km | 448 km | ~12 días desde Levit (camino) / más si es terreno de montaña |
| **Port Ersag / Tömörsag** | Ciudad-puerto en la ruta | 279 km | ~137-138 km | ~6 días desde Romanance — **⚠ duplicado, el DM va a eliminar uno de los dos burgs en Azgaar; queda un solo asentamiento en este punto** |
| **Varsak** | Ciudad-puerto en la ruta | 475 km | 338 km | ~10 días desde Romanance |
| **Aetherion** | Ruinas altoélficas (Elián) | 1746 km | 1621 km | ~36 días (~5 semanas) |
| **Berk** | Aldea aislada (Jantry) | 1799 km | 1717 km | ~37,5 días (~5,5 semanas) |
| **Lanre** | Pueblo natal de Kvothe | 1896 km | 1783 km | ~39,5 días (~5,5-6 semanas) |
| **Marren** | Ciudad hermana rival de Lanre | 1725 km | — | ~36 días desde Romanance; **199 km de Lanre** (~4 días entre ambas) |
| **Aethragar** | Capital, Hermandad de los Vigías — segundo continente | 1698 km | 1635 km | Requiere cruce marítimo; no aplica tabla de tierra |

**Decisión de diseño registrada:** el DM confirmó que Romanance/Levit/Morvath quedan fijas donde están (canon original intacto), y que las distancias grandes (Aetherion, Berk, Lanre, Marren, Krâthor) se aceptan tal cual midió Azgaar, reemplazando las estimaciones cortas de las primeras versiones de esta tabla. El "preludio" que se está jugando no requiere que estas distancias largas sean jugables de inmediato.

**Pendiente:** Lanre no tenía trasfondo geográfico/bioma asignado hasta esta ronda — queda ubicado en el mismo cuadrante noroeste que Aetherion (317 km de distancia entre ambos), sin bioma confirmado todavía en el canon narrativo (solo posición en el mapa).


> Fin de fuente: Tabla_Viaje_Continental_Romanance.md.


---

## Fuente documental: trasfondos_personajes_romanance.md

> Transcripción de referencia; aplicar los estados, correcciones y pendientes de la síntesis. Inicio de fuente.

# Trasfondos de Personajes Jugadores — Romanance / Levit

Documento de canon consolidado preparado para la campaña de Romanance.
Versión en limpio basada en las historias revisadas junto al director de juego.

---

# Estado actual de Levit

Levit es una villa pequeña de aproximadamente 600 a 900 habitantes, ubicada a 3 días de viaje al norte de Romanance. Cuenta con biblioteca, talleres artesanales, herrería, armería, tabernas, obras de construcción y un consejo local encabezado por el alcalde. Los personajes jugadores residen de forma permanente en la villa y son considerados vecinos además de aventureros.

---

# Corwin — Luthier y Aventurero

## Datos básicos

- Raza: Humano
- Clase: Guerrero
- Residencia: Levit
- Profesión civil: Luthier y artesano constructor de instrumentos
- Situación económica: Modesta pero estable
- Situación social: Artesano respetado y conocido en la villa

## Historia

Corwin nació en Halden, un pequeño pueblo fundado por su bisabuelo en tierras alejadas de las grandes ciudades. Creció entre seis hermanos en una familia donde la espada formaba parte de la vida cotidiana. Su padre, Lorren, descendiente de un antiguo linaje de guerreros, entrenó a todos sus hijos desde pequeños.

Aunque recibió formación marcial, Corwin nunca fue el más valiente ni el más hábil. Siempre se sintió más atraído por la música que por el combate. Su madre, Selia, antigua artista itinerante, le enseñó el valor de las historias, las canciones y los instrumentos.

De niño compartió una profunda amistad con Wren, compañera de música y primer amor. Juntos tocaban en la posada del pueblo hasta que ella partió a recorrer el mundo.

La familia de Corwin conserva una antigua tradición y una espada heredada de su abuelo, grabada con la frase: "Mi piedad prevalece ante tu ira". Poco antes de abandonar Halden, su padre le mostró una habitación cerrada que contenía antiguas placas de piedra cubiertas de símbolos desconocidos.

Sus hermanos mayores partieron antes que él en busca de fortuna y aventuras. Corwin no es heredero del linaje; cualquiera de sus hermanos mayores que regrese ocupará ese lugar. Él abandonó Halden para conocer el mundo y encontrar su propio camino.

Su convicción personal es clara:

"La espada es mi deber; la música es mi identidad."

## Situación económica

Al llegar a Levit compró una pequeña casa con taller incorporado. Vive de fabricar, reparar y afinar instrumentos musicales. Sus ingresos provienen de encargos locales y de viajeros.

## Situación social y política

- Mantiene buenas relaciones con taberneros, músicos y comerciantes.
- Participa de la vida cultural de Levit.
- No posee cargo político ni aspiraciones de liderazgo.
- Es visto como un vecino amable y trabajador.

---

# Anic — Aprendiz de Constructor

## Datos básicos

- Raza: Goliath
- Clase: Brujo
- Edad: 16 años
- Residencia: Levit
- Profesión civil: Aprendiz de constructor y peón de obra
- Situación económica: Humilde
- Situación social: Trabajador joven y algo inmaduro

## Historia

Anic nació en un pequeño clan goliath del norte y es el menor de cuatro hermanos. Mientras ellos eran fuertes, obedientes y admirados, él hacía preguntas, dudaba y mostraba compasión, rasgos considerados una debilidad.

Su padre intentó endurecerlo y sus hermanos se burlaban de él. Todo cambió cuando conoció a Lyriel, una joven elfa que vivía cerca de unas ruinas antiguas. La amistad entre ambos se transformó en amor.

La relación era inaceptable para su clan. Cuando su familia descubrió el vínculo, fueron a buscar a Lyriel. Anic llegó demasiado tarde y no pudo salvarla. Tampoco pudo enfrentarse a sus hermanos adultos y entrenados.

Desesperado y consumido por la culpa, aceptó la ayuda de un ser desconocido y realizó un pacto que le otorgó poderes mágicos. El pacto no le prometió gloria ni venganza; solo el poder suficiente para no volver a sentirse completamente indefenso.

Anic abandonó su hogar incapaz de seguir viviendo donde todo le recordaba a Lyriel. Aunque siente dolor por lo ocurrido, no odia a sus hermanos; incluso los extraña.

No busca fama ni poder. Solo intenta aprender a vivir con la culpa de no haber podido proteger a la persona que amaba.

## Situación económica

Trabaja como peón, cantero y ayudante de construcción. Cobra jornales cuando hay obra disponible y todavía no posee una casa propia adecuada para un goliath adulto.

## Situación social y política

- Tiene contacto cotidiano con obreros, campesinos y artesanos.
- Es conocido como el muchacho grandote que ayuda en las obras.
- Carece de influencia política.
- Depende de la comunidad para sostenerse económicamente.

---

# Elián — Bibliotecario y Paladín

## Datos básicos

- Raza: Alto elfo
- Clase: Paladín (Legal Bueno)
- Residencia: Levit
- Profesión civil: Bibliotecario y custodio del archivo local
- Situación económica: Cómoda
- Situación social: Respetado, reservado y considerado un erudito

## Historia

Elián nació en Aetherion, un antiguo enclave élfico construido entre altos riscos y puentes de piedra. Su pueblo valoraba la sabiduría, la contemplación y la magia antigua.

Desde niño percibía tensiones extrañas en los flujos mágicos. Su maestro y figura paterna fue Aurelion Vaelthar, sabio del templo y guía espiritual del enclave. Bajo su tutela aprendió disciplina, compasión y el deber de proteger a los débiles.

Con el tiempo comenzaron a aparecer señales inquietantes en el templo: energías corruptas y símbolos alterados. Elián las percibía, pero se negó a sospechar de Aurelion.

Una noche una grieta de corrupción se abrió en el corazón del templo y criaturas deformadas comenzaron a extenderse por Aetherion. Elián descubrió que su maestro había permitido aquella catástrofe convencido de que la oscuridad completaba a la luz.

En las ruinas del templo encontró un antiguo tridente ceremonial. Lo tomó como arma y símbolo de un juramento de protección y justicia. Desde entonces el tridente es su arma principal.

Tuvo que enfrentarse a Aurelion para cerrar la grieta. Aunque logró derrotarlo, Aetherion quedó destruido. Tras la tragedia su cabello se volvió rojo intenso, marca que él interpreta como recordatorio de quienes no pudo salvar.

Elián juró no volver a dudar mientras la oscuridad destruyera vidas y desde entonces recorre el mundo persiguiendo rastros de aquella corrupción.

Su viaje lo llevó finalmente a Levit, donde encontró compañeros de aventuras y una nueva familia.

## Situación económica

Reside en una casa cómoda situada en las cercanías del bosque de Levit. Recibe una asignación por su labor como bibliotecario y custodio de documentos.

## Situación social y política

- Es el responsable de la biblioteca local.
- Conserva manuscritos, mapas y registros históricos.
- El consejo de Levit consulta ocasionalmente su opinión en asuntos de conocimiento o historia.
- Mantiene una actitud reservada y evita el protagonismo político.

---

# Jantry Emberflame — Pícara e Investigadora

## Datos básicos

- Nombre real: Janne Glowbend
- Alias actual: Jantry Emberflame
- Edad: 18–19 años
- Raza: Humana
- Clase: Pícaro (Asesino)
- Origen: Berk (aldea destruida)
- Residencia: Levit (biblioteca)
- Profesión civil: Archivista de la biblioteca local
- Armas favoritas: Ballesta y daga corta
- Debilidad: Acrofobia (lugares altos) — puramente narrativa por ahora, sin regla mecánica asociada
- Alineamiento: Neutral
- Idiomas: Común, Orco, Elfo

## Historia

Nació hace casi diecinueve años en Berk, una pequeña y apartada aldea sostenida por un pacto sagrado: los aldeanos protegían a su director, Armaros Glowbend —su padre—, quien cargaba con la misión de recuperar un cristal arcano perteneciente a los elfos, heredarle su poder a su hija y liberar al mundo de los males de esa estirpe.

Creció a solas con su padre, quien la entrenó desde niña en sigilo, agilidad y análisis, moldeándola en una pícara implacable con la ballesta. Su único punto débil siempre fue la altura: los lugares elevados la paralizan.

A los once años, un silencio antinatural cayó sobre Berk. Su padre salió a investigar y fue emboscado y capturado por un elfo. Atado en su propia casa, le reveló a Jantry —antes de morir— que su madre no estaba muerta, sino cautiva por los mismos elfos debido a un poder inmenso que poseía, y le exigió huir y encontrarla. Jantry escapó justo antes de escuchar el grito final de su padre.

Malherida tras huir a ciegas, fue recogida por un anciano que la refugió y, tras consultar mapas, la guio hasta **Levit**, un poblado lejano donde esconderse. Al llegar, sepultó su identidad anterior: se cortó el cabello, cambió su aspecto y adoptó el nombre de **Jantry Emberflame**. Janne Glowbend dejó de existir.

## Situación económica

Durante cinco años durmió en la biblioteca de Levit a cambio de trabajar como archivista, devorando en las noches tomos de picardía, arcanos, estrategia y historia de las razas — de ahí buena parte de su formación como investigadora.

## Situación social y política

- Vive con una doble vida cuidadosamente sostenida: vecina discreta de Levit por fuera, superviviente con una misión pendiente por dentro.
- Encontró en el grupo de aventuras una nueva familia, aunque aún no ha revelado su pasado completo a todos.
- Sin cargo político ni protagonismo público — su prioridad es pasar desapercibida.
- Aguarda el momento de cumplir el mandato de su padre: encontrar a su madre, cautiva de los elfos.

**Nota de campaña:** este hilo (los elfos como antagonistas de su pasado) queda por ahora como trasfondo personal cerrado, sin conexión al plot central — puede desarrollarse más adelante a medida que se juegue su historia en mesa.

---

# Spriggan — Vigía de Aethragar

## Datos básicos

- Raza: Goliath
- Clase: Paladín
- Edad: adulto (Vigilia del Silencio realizada a los 25 años)
- Origen: Aethragar, valle goliath en **Aldenor** (nombre real del continente oriental; en Terenor —el continente de Romanance— se lo conoce popularmente como "Ostenmark", ya que es una tierra apenas conocida por la gente común)
- Gobierno de Aethragar: **Teocracia — Hermandad de los Vigías**, encabezada por el Vigía Mayor
- Residencia actual: en tránsito, protector itinerante
- Arma característica: "Alba de Hierro", greatsword de Aldric el Inquebrantable
- Llegada al continente de Romanance: probablemente por barco (sin confirmar)

## Historia

Spriggan nació en **Aethragar**, un valle escondido entre montañas inaccesibles, hogar de una comunidad de goliaths — los **Vigías de Aethragar** — que hace siglos eligió proteger los pasos de montaña que conectan las tierras civilizadas con las regiones al otro lado del mar, hacia el este, por un pacto ancestral con los dioses de la montaña propios de esa cultura (sin relación con la Luz de Romanance).

En Aethragar no existe el concepto de "débil": cada persona tiene un rol sagrado, y la estatura de un goliath es responsabilidad, no jerarquía. Spriggan creció aprendiendo que la fuerza sin compasión es ruido, y la fuerza con propósito es silencio que cambia el mundo.

A los 25 años, en su Vigilia del Silencio (ritual tradicional: subir solo al pico más alto y pasar la noche sin comer, dormir ni hablar), Spriggan encontró en el Pico del Eco una greatsword antigua clavada en la roca: **"Alba de Hierro"**, perteneciente a **Aldric el Inquebrantable**, un paladín humano que hace 400 años defendió el valle de una invasión de gigantes de hielo y cuya espada quedó clavada allí, esperando a quien la empuñara de nuevo.

Esa noche hizo su juramento — una promesa susurrada a la espada y las estrellas, no un ritual ante un altar:

> *"Donde otros ven amenaza, yo seré refugio. Donde otros levantan muros, yo tenderé puentes. No blandiré esta espada para herir, sino para apartar el mal de los que no pueden apartarlo solos. Y si algún día mi fuerza no basta, que mi silencio sea suficiente para dar esperanza."*

No dejó Aethragar por conflicto ni tragedia, sino porque su juramento era más grande que el valle. El Vigía Mayor lo despidió con una advertencia: *"Un muro que no deja entrar a nadie también es una prisión. No seas solo un escudo — sé también una puerta."*

## Personalidad

Silencioso por convicción, no por timidez — cree que las palabras sin acción son innecesarias. Trata a cada persona como un igual sin importar su tamaño. No busca pelea, pero se interpone físicamente ante la injusticia; desenvaina "Alba de Hierro" solo cuando se agotan las demás opciones. Siempre ofrece una oportunidad de rendición, incluso a enemigos que otros no dudarían en matar.

Principios que lo guían: *"La fuerza es un regalo, no un derecho"*, *"Proteger es un acto de fe"*, *"El silencio del justo es más fuerte que el grito del tirano"*, *"Un paladín no es una espada — es un escudo con convicción"*.

## Vínculos

- **El Vigía Mayor de Aethragar** — maestro que le enseñó que un escudo también puede ser una puerta.
- **Aethragar** — el valle mismo; guarda una carta de despedida de la comunidad dentro de su armadura, que nunca mostró a nadie.
- **Hermano Vash** — enano herrero que conoció en su primer viaje fuera del valle; juntos repararon "Alba de Hierro" cuando una runa se agrietó.
- **Soraya** — una niña que protegió de lobos espectrales; guarda su dibujo como posesión más preciada.
- **"Alba de Hierro"** — no consciente, pero contiene un fragmento del espíritu de Aldric; a veces brinda calidez en momentos críticos de duda.

## Dudas que carga
¿Es su juramento suficiente con solo proteger a quien cruza su camino, o debería buscar activamente el mal? ¿Cuándo la fuerza se convierte en violencia? ¿Pertenece al valle o al mundo? ¿Qué significa realmente que las runas de la espada se enciendan sin que él lo prediga?

## Puente cronológico — Preludio → Campaña I

Spriggan no partió con Rheem cuando el grupo viajó a la cordillera (Cuatro Estatuas + Quinto Juramento), en 434 D.R. Se quedó cumpliendo con su deber de ayudar a quien lo necesitara. Con el paso de los meses sintió que debía encontrarlos — Alba de Hierro parece responder también a esa necesidad, no solo a la Lunargenta. Pasó cerca de un año buscándolos (año todavía por completar) y los encuentra recién en 435 D.R., cuando Rheem llega a Romanance al arranque de la Campaña I.

## Situación económica y social

Itinerante — no tiene residencia fija en Romanance/Levit todavía. Provisiones y hierbas medicinales que trajo consigo al partir de Aethragar. Sin cargo ni integración política; su integración social se da por su rol de protector, no por comercio u oficio.

**Nota de canon geográfico:** el continente de Romanance se llama **Terenor**. El continente oriental se llama **Aldenor** (su nombre real, usado por sus propios pueblos) — en Terenor se lo conoce popularmente como **"Ostenmark"**, ya que es una tierra apenas explorada desde este lado del mar. Aethragar es la primera región nombrada dentro de Aldenor. Su panteón de "dioses de la montaña" es propio de esa cultura — no contradice que Romanance no tenga panteón desarrollado, porque es una tradición de otro continente.

---

| Personaje | Oficio | Nivel económico | Integración social |
|---|---|---|---|
| Corwin | Luthier | Modesto estable | Muy alta |
| Anic | Constructor aprendiz | Humilde | Alta |
| Elián | Bibliotecario | Cómodo | Alta |
| Jantry | Archivista (bajo alias) | Modesta | Alta en apariencia, doble vida en el fondo |
| Spriggan | Protector itinerante (sin oficio civil) | Sin residencia fija | Alta por su rol, sin integración económica |

---

# Temas comunes del grupo

Los cinco personajes consolidados comparten varios ejes narrativos:

- Pérdida de un hogar o de una figura importante.
- Abandono voluntario del lugar de origen.
- Culpa o deuda emocional.
- Búsqueda de identidad personal.
- Construcción de una nueva familia en Levit.

Estos elementos justifican de forma orgánica su permanencia en la villa y su disposición a aventurar juntos.

---

## Estado del documento

**Versión:** 1.6
**Estado:** Canon aprobado.

### Historial de cambios
- **1.1** — Se corrige la grafía "Leviit" → "Levit" en todo el documento. Se integra la historia completa de Jantry Emberflame (reemplaza el placeholder pendiente), incluyendo la nota de campaña sobre su hilo narrativo con los elfos. Se actualiza la tabla resumen económico-social.
- **1.2** — Se integra la historia completa de Spriggan (Vigía de Aethragar). Primera referencia con nombre propio de una región del continente oriental. Se actualiza la tabla resumen y los temas comunes del grupo.
- **1.3** — Se fijan los nombres de los dos continentes: **Terenor** (continente de Romanance) y **Aldenor** (continente oriental, conocido popularmente en Terenor como "Ostenmark").
- **1.4** — Se fija la forma de gobierno de Aethragar: Teocracia — Hermandad de los Vigías, encabezada por el Vigía Mayor.
- **1.5** — Se agrega el puente cronológico de Spriggan entre el Preludio (434 D.R.) y la Campaña I (435 D.R.): no viajó con Rheem a la cordillera, pasó ~1 año buscándolos (año aún por completar) y se reencuentran al llegar a Romanance.
- **1.6** — Se reemplazan los nombres con conflicto de copyright (Patrick Rothfuss, *El Nombre del Viento*): Kvothe → **Corwin**, Denna → **Selia**, Auri → **Wren**, Lanre → **Halden**. Marco narrativo: son los nombres reales, ocultos por algo del pasado; los nombres viejos no vuelven a usarse.

---

Fin del documento.


> Fin de fuente: trasfondos_personajes_romanance.md.


---

## Huellas de las fuentes al generar el snapshot

Se registran para identificar exactamente la base de esta consolidación. No se editaron los originales.

| Archivo | SHA-256 |
|---|---|
| Aldren_el_Precavido_-_Canon_Fundacional_Romanance (2).md | 25A6483E497F0124236A1654A5FEB00ECB2EDBE22A19EEC538048E34C303EE6C |
| Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md | 25A6483E497F0124236A1654A5FEB00ECB2EDBE22A19EEC538048E34C303EE6C |
| Anexo_Aureliano_Romanance.md | B12AB0D79F5D63B82BB86F922DE1278AEFACF25A45E684C48E6912597BEB3949 |
| Anexo_Oficial_Romanance_Inteligencias_Hierofante.md | 318622B946AA2549BF4CDB9BC6A68CFCD33B6C7A7BCA68894B9B1E1E0781C7B4 |
| Biblia_de_Romanance_Canon_Base.md | 7350A53EC64DB446156FDB85CD415437692E846D084D66D2D6FB6906A70EB9C9 |
| Biblia_de_Romanance_Canon_Base(3).md | 7350A53EC64DB446156FDB85CD415437692E846D084D66D2D6FB6906A70EB9C9 |
| Biomas_Continentales_Romanance.md | C404C51C4579E6BEA5A2D6D9E1AA38DDB482BB4D6FEC63D5E0BAECC8B0E7F241 |
| Cosmologia_Lumenor.md | 697B4C345403730FF9A243574389654AF5E4B0834431E885F0B004FAE0A1EC90 |
| CRÓNICAS DE ROMANANCE.md | 37F0387DF565E05C82059D24DA0AAE697B1F88D535203C9080651514ECF5D635 |
| Economia_inmobiliaria_Romanance.md | FAC450EB898CBCA477D010A120927447EFB4857993BF979DA3C75F902B3D6913 |
| Escudo de Armas - Romanance.png | 8ACDDEAC4389D190DE1659491F0055EF61F96971BB5FB580E3A2879226786F73 |
| Gremios_de_Romanance.md | 22DCAFB0E3184D03D80B3AC012E158C5ABC1EF03FC5EC328491AA404EA1A857A |
| Hierofante de la Luz.md | 6D879B0C1B2A50F212B31F8A1F9575BCF0EEE27CC77A2AFEF1A8F3908C158CF1 |
| instrucciones-proyecto.md | A0D3FDF5DE6BE3E5B6358AF623B49EC155C755215519DE7857F7B432AC4D34A0 |
| Luz de Romanance.png | E3FE15143898D469777C8751EB272A47EBDA6BA06AE9B7517A9768BCE0081BE4 |
| mazo_de_drix.md | 5AEE6CDFEE1B43251791014A9290A94DBB9816DF9C3A11D96F9029BFA52ECB6C |
| Mundo Sebas Full 2026-10-04-00-22.json | D418557DD9418465389FA2232D4D0992BA8642B9DE70DE5F7B975831AFE28417 |
| Plots_y_Arcos_Arco_I_Aurelianos.md | 8C99D05EDD02F04D943B8B4645C53312CC8F182FF2F7E8351A716F9DAE5228A7 |
| PNJs_Principales_Romanance.md | 139D612D727540FE30D4A6851DD83C7B397F2D47A876E6CC163D57DAA3F4E57A |
| reverso Luz.png | F66418B1ACA870B70EE0A5B46CD70856533A6D340E034B67994DE203B81168DE |
| Sistema Universal de Viajes para D&D 5.5e — Versión 1.1(1).md | A532C65119C57789CB5BE253DE617C4502DA08E0F8A38BA30F1912D6807F665B |
| Tabla_Viaje_Continental_Romanance (2).md | 45D666F969AA99DBE5718C35598D7AA91B92967F3AB965C5DDEB775A36013EBB |
| Tabla_Viaje_Continental_Romanance.md | CB1CF57B236BE723C09912BC73C5DAD90B8E5E5F3E23199186266E72E5C07564 |
| trasfondos_personajes_romanance.md | 3955F1AD956D87147B453A80E715AF176C5635FA85AEE42E81B5D9996633CFE6 |

**Corrección autorizada — 2026-10-09:** Levit ↔ ruinas de Morvath: **46 km**. Medidas anteriores de ese tramo reemplazadas por pedido del autor, sin crear copia histórica. Esta corrección de distancia no modifica los tiempos narrados en mesa.
