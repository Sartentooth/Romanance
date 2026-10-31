# Las Crónicas de Rheem — El Ciclo de Romanance
## Traspaso a Codex: Archipiélago de Trator y nuevos asentamientos

**Fecha de corte:** 2026-10-29. **Estado:** decisiones directas del autor registradas para cotejo e integración local. **Versión:** entrega inicial, sin numeración canónica asignada.

> **Alcance:** SOLO decisiones posteriores a la consolidación de asentamientos del 26/10/2026 y el desarrollo del Archipiélago de Trator. **Excluir por completo Aurelianos y su historia** de esta tarea. No generar módulos ni inventar lore. No dar por aprobadas propuestas que no recibieron aprobación explícita.

## 0. Evitar duplicar el trabajo ya realizado

La incorporación de las ciudades desarrolladas anteriormente **SÍ está ejecutada**, según `REVISION_ASENTAMIENTOS_TERENOR_2026-10-26.md` y `canon/lore/asentamientos-de-terenor.md` del repo `Sartentooth/Romanance`.

- Itharia / Kelen y Khalan; Berk; Halden y Marren; Lyren y Cónclave Zephyr; Levit; Romanance; Tömörsag y Varsak; Krâthor.
- Cinco fuentes distribuidas y archivadas en `_archivo/fuentes-historicas/asentamientos-2026-10-26/` con matriz de cobertura. No reingresar ni reescribir esos contenidos desde este texto.
- Esta entrega registra decisiones más recientes sobre Trator y la **lista de futuros asentamientos**, cuyo nivel de desarrollo es diferente al de las ciudades ya integradas.

## 1. Archipiélago de Trator — CANON APROBADO

### 1.1 Nombres, origen y geografía

- **Mar de los Minotauros:** nombre oficial definitivo del mar situado entre Terenor y Aldenor. La alternativa `Mar de los Guardianes` fue reemplazada.
- **Archipiélago de Trator:** nombre derivado del antiguo marino minotauro **Trator**, navegante intrépido que llegó a las islas y posteriormente se asentó con su familia.
- Tres islas principales nombradas por descendientes de Trator: **Wykan** (norte), **Agden** (centro), **Tengen** (sur). No especificar parentescos generacionales que el autor no indicó.
- `Tractor` fue expresamente aclarado como **error de tipeo**; el nombre correcto es **Trator**.
- Cada isla tiene su asentamiento/comunidad y actividades propias: no hay una isla principal con dos dependencias. Comparten origen, identidad cultural y costumbres.

### 1.2 Superficies y distancias — verificadas contra JSON adjunto

**Fuente cartográfica nueva:** `Mundo Sebas Full 2026-10-29-18-18.json` (Azgaar 1.156.0; exportado 2026-10-29T21:18:57Z). La captura `image(9).png` muestra superficies redondeadas compatibles. **Esta exportación es posterior a la versión 21/10 utilizada en el repo**, y debe cotejarse sin reemplazar silenciosamente el mapa local.

Azgaar configura `distanceUnit=km`, `distanceScale=3` y `areaUnit=square`; se calcularon áreas de polígonos de `pack.features[*].vertices` mediante coordenadas `pack.vertices[*].p`; distancias mínimas entre contornos = distancia euclidiana geométrica en unidades de mapa × 3 km. Las áreas son aproximadas por el nivel de resolución del polígono exportado y no son mediciones topográficas de precisión.

| Isla | Feature ID | Superficie de contorno | Etiqueta redondeada en captura |
|---|---:|---:|---:|
| Wykan | 12 | **2.513,8 km²** | 2,5 K km² |
| Agden | 14 | **7.553,2 km²** | 7,6 K km² |
| Tengen | 16 | **15.869,7 km²** | 16 K km² |
| **Total** | | **25.936,7 km²** | |

| Par de islas | Distancia mínima entre costas |
|---|---:|
| Wykan–Agden | **343,4 km** |
| Agden–Tengen | **138,0 km** |
| Wykan–Tengen | **656,2 km** |

Estas distancias **NO** son trayectos de puerto a puerto, ni tiempos de viaje. Los tres polígonos fueron verificados como válidos. En el JSON `feature.area` usa área interna redondeada y no coincide exactamente con la calculada desde los vértices; no confundir las dos representaciones.

### 1.3 Sociedad y organización — APROBADO

- Las tres comunidades minotauro **son autónomas en sus asuntos internos**. Cada isla se organiza por separado, sin gobierno central del archipiélago.
- Si hay decisiones que conviene tomar conjuntamente, las acuerdan entre las islas; especialmente navegación, comercio y asuntos de vida marítima. No crear un consejo permanente sin permiso del autor.
- Comparten identidad marítima, memoria familiar y ancestros. No son tres culturas separadas.
- **Pueblo pacífico NO significa pueblo indefenso ni incapaz de luchar**: son intrépidos, temerarios y peligrosos en combate cuando las circunstancias lo exigen; no son una sociedad organizada fundamentalmente para la guerra.
- Participan del comercio marítimo con los distintos puertos de ambos continentes, incluida expresamente **la ciudad portuaria del norte de Terenor de donde procede Sennari** (nombre de ciudad pendiente). Vínculos con puertos mercantes Tömörsag/Varsak y con la futura Valdren pueden cotejarse con su estado de desarrollo; no asignar rutas o mercancías obligatorias ni relaciones personales específicas con Sennari.

### 1.4 Festividades — LAS TRES APROBADAS

**Día de Trator.** Celebración centrada en el gran navegante intrépido y fundador del asentamiento familiar. Música, juegos, cerveza, combates deportivos y torneos de pesca. Al concluir, se lee un breve relato sobre Trator y se realiza un brindis colectivo. No confundir combate deportivo con militarismo cultural.

**Fiesta de las Raíces.** Conmemoración de los lazos familiares de las tres islas y de sus antepasados; expresión de la identidad compartida pese a la distancia geográfica.

**Noche de los Navegantes.** Se celebra **en el mar, a bordo de las embarcaciones**; se comparten historias, relatos y experiencias marítimas. **Posibilidad todavía NO formalizada:** que funcione como rito de iniciación a la adultez para los jóvenes. No consignarla como obligación cultural aprobada.

No hay fecha del calendario aprobada para ninguna de las tres. Nombres de las tres celebraciones aprobados tal como aparecen, aun si más adelante se revisan sus denominaciones.

### 1.5 Límites y cautelas

- Oficios concretos (pesca, navegación, carpintería naval), arquitectura robusta de piedra y madera, formas de intercambio y costumbres adicionales fueron **propuestas de exploración**; no convertir todos esos detalles en canon cerrado sin cotejo con decisiones posteriores.
- No afirmar parentesco entre Jarsag (alcalde minotauro de Romanance) y los isleños.
- No inventar censos, gobiernos, rutas mercantes fijas, guerras, creencias ni jerarquías.
- El desarrollo cultural del archipiélago quedó **declarado cerrado por el autor**; los datos geométricos se aportaron después para resolver el pendiente cuantitativo.

## 2. Otras ciudades y poblados — acuerdos de dirección, no fichas completas

Este bloque recoge la **selección conceptual del autor** para futuros asentamientos; **NO** convertir propuestas argumentales/arquitectónicas anteriores en canon por mera presencia.

| Asentamiento | Dirección del autor | Estado del detalle |
|---|---|---|
| **Ciudad de los Siete Puentes** | Ciudad **íntegramente enana**. Sustituye concepto antiguo mixto humano-élfico. Siete puentes son rasgo identificador. | Ubicación exacta, entorno, nombre propio alternativo y vida urbana sin cerrar. |
| **Vardessa** | Ciudad de canales y oasis en interior árido de Terenor, principalmente humana, con otras especies; agua y agricultura son rasgos centrales. | No canonizar tramas sugeridas de control del agua. |
| **Valdren** | Ciudad portuaria mercante, llamada/descripta como **Puerto de las Mareas**, residentes permanentes y actividad naval; distinta funcionalmente de Tömörsag y Varsak. | No canonizar desapariciones de carga ni tramas sugeridas. |
| **Ciudad costera del norte de Terenor vinculada a Sennari** | Comunidad real, portuaria/pesquera, población diversa con humanos y algunos kalashtar; **no exclusivamente kalashtar**. Sennari procede de allí. La conexión comercial con Trator está aprobada. | **Sin nombre definido** ni sitio exacto. No inventar biografía ni relación personal de Sennari con los minotauros. |
| **Pueblo/al­de­a de gnomos** | Comunidad **íntegramente gnoma**, de menor escala; artesanías e ingenio como orientación cultural explorada. | Nombre, ubicación y especialización cerrada pendientes. |
| **Caserío de paso de montaña** | Pequeño asentamiento vinculado al tránsito y ayuda a viajeros. | Especie, nombre, ubicación y actividades específicas por definir. |

Otros pueblos menores podrían incorporarse para cubrir rutas y geografía cuando lo autorice el creador. No añadirlos ahora.

## 3. Instrucciones de cotejo para Codex

1. Verificar el estado local antes de editar: manifiesto `INDICE_CANON.md`, `canon/lore/asentamientos-de-terenor.md` y registro del 26/10.
2. Comparar estas decisiones con textos activos y propuestas, conservando precedencia de aprobaciones explícitas y cualquier contradicción para resolución por el autor.
3. Integrar únicamente lo aprobado; mantener pendientes, hipótesis y propuestas identificados. **No tocar contenidos aurelianos en esta entrega.**
4. Examinar si el JSON Azgaar del 29/10 está presente en el proyecto local. Si no, no declarar reemplazada su exportación actual: el usuario podrá entregar la nueva versión. No editar archivos cartográficos por inferencia.
5. Conservar fuentes, referencias y trazabilidad de cambios; no duplicar la tanda de asentamientos ya integrada el 26/10.

## 4. Exclusiones expresas

No contiene ni pretende consolidar: Aurelianos, Silente, Lunargenta, santuarios, Cinco Juramentos, historia de la rama custodial ni ninguna de las decisiones todavía abiertas sobre esa civilización. Todo eso continúa en una conversación de desarrollo separada.
