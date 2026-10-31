# Revisión cartográfica — distancias y conexiones confirmadas

**Versión documental:** 1.6 local · **Fecha:** 2026-10-31 · **Estado:** CANON EN CONSOLIDACIÓN; distancia y conexiones siguientes confirmadas por el autor.

| Tramo | Distancia vigente | Referencia |
|---|---|---|
| Levit ↔ ruinas de Morvath | **46 km** | Redondeo de la ruta 12 del JSON de Azgaar local, aceptado expresamente por el autor. |

Por instrucción del autor, las medidas anteriores de este tramo se reemplazan en la documentación y no se conserva una copia histórica de ellas. Esta autorización puntual incluye las tablas y compilaciones donde estaban repetidas. No se modifica el JSON ni se recalculan tiempos de viajes ya jugados. El resto de la red sigue pendiente de cotejo.

## Red del Gran Oeste — conexión confirmada

El autor confirma, con captura del mapa del 2026-10-09, que **el camino de Kelen/Khalan pasa por Berk, empalma con Marren y conecta hacia Halden; el camino principal continúa hacia Aetherion**. El sendero existe aunque su trazo apenas se vea a esa escala. El autor precisa que es **una misma ruta con diferentes nombres a lo largo de su recorrido**. Los nombres de los tramos en Azgaar no indican por sí solos rutas alternativas.

El JSON vigente respalda los enlaces: `Berk road` une Kelen con Berk; `Berkan pass`, Berk con Marren; `Marrenean pass` conduce desde Marren al empalme de la celda 1281. Desde ese empalme hay conexión con Halden y con Aetherion. Se trata de una red con un empalme, sin imponer que todos los recorridos deban pasar por el centro de Halden para seguir a Aetherion. La asociación de Khalan a esta red está confirmada por el autor.

La denominación técnica `Lanrean path` persiste en el JSON para el enlace del empalme con Halden: es un identificador cartográfico antiguo, no la reintroducción de Lanre en el canon. No se cambia el JSON por esta revisión.

**Alcance de C15:** la conexión queda confirmada. La presencia de `Berk road` no demuestra por sí sola una segunda ruta completa desde Romanance ni un atajo: conecta tramos de la misma red. La duda sobre los distintos nombres de este recorrido queda resuelta: identifican tramos de una misma ruta. Esto no certifica la unicidad de todos los recorridos del mundo. No se recalculan aquí distancias totales o tiempos ni el viaje histórico de Jantry. La comparación de opciones hacia Aldren se precisa en el apartado siguiente; queda pendiente el cotejo completo de otros recorridos.

## Viaje a Aldren — opciones para la party

**Estado:** opciones documentadas; elección **PENDIENTE de los jugadores**. El autor ofrecerá ambas. La ubicación del encuentro sigue siendo la opción C ya aprobada; comparar rutas no elige una por la party.

| Opción / tramo | Distancia aproximada | Procedencia |
|---|---|---|
| Terrestre directa: Romanance → zona de la confluencia | **560 km a pie** | Estimación confirmada por el autor; opción más directa. |
| Romanance → Levit → Tömörsag | **282 km a pie** | Suma de las rutas 11 y 13 del JSON vigente. |
| Tömörsag → Varsak en barco | **263 km navegados** | Ruta marítima 9, Stardust. |
| Varsak → confluencia | **168 km a pie** | Medidor de recorrido de la captura aportada por el autor. |
| Opción combinada vía Tömörsag y Varsak | **713 km en total: 450 a pie + 263 en barco** | Suma aproximada de los tres tramos anteriores. No es una ruta elegida. |

Existe además un camino terrestre Tömörsag–Varsak, ruta 14, de unos **243 km**. Es distinto del trayecto marítimo: no se usa su longitud para medir el barco. La opción terrestre directa hacia Aldren no obliga a pasar por esos dos puertos.

El autor confirma que **el tramo en barco es más rápido** que el desplazamiento a pie. La elección del recorrido sigue a cargo de la party; no se deduce por ello un plazo exacto ni se afirma que el viaje combinado completo sea necesariamente el más rápido.

Son estimaciones para comparar opciones. La distancia total no determina por sí sola la duración: intervienen el medio de transporte, terreno y condiciones del sistema de viajes. No se recalculan ni rediseñan aquí sus reglas, ni se asignan etapas, encuentros o tiempos nuevos.

**Comprobación por celdas:** se calculó el camino geométrico mínimo entre centros de celdas terrestres hasta una celda de referencia de la confluencia. Da unos 504 km antes de considerar terreno, cruces, caminos y desvíos. Es una comprobación de orden de magnitud, **no una ruta transitable validada** ni una sustitución de los 560 km aproximados del autor. La celda de referencia no fija un punto exacto para Aldren. La captura es la referencia para los 168 km desde Varsak; el medidor no está guardado en el JSON recibido.

[Cálculo y límites](../../_archivo/fuentes-historicas/recepcion-2026-10-09/opciones-aldren.json) · [Script reproducible](../../_archivo/fuentes-historicas/recepcion-2026-10-09/calcular-opciones-aldren.py).

[Manifiesto](../../INDICE_CANON.md) · [Plan](../../PLAN_MIGRACION_FASE_1.md).


## Alcance geográfico de Fase 1 — decisión del autor, 2026-10-10

La geografía y el mapa existentes son suficientes para esta fase. No se amplían ahora ciudades, culturas, rutas ni variantes para completar el mundo por adelantado. Las ubicaciones y decisiones ya confirmadas se conservan; los detalles aún no desarrollados no bloquean la consolidación ni la limpieza documental.

El mapa ofrece la información mínima necesaria para elegir destinos y explorar. El desarrollo se realiza cuando resulte útil para la campaña, con coherencia histórica y narrativa. Pueden incorporarse pueblos, aldeas y otros elementos durante el recorrido; se reserva espacio para aportes de los jugadores. Esta apertura no convierte ideas futuras en hechos del canon ni autoriza al asistente a inventar contenido por su cuenta.

Los cotejos geográficos adicionales y la ampliación de culturas/asentamientos se difieren hasta que sean necesarios. Esto no valida automáticamente cifras o residuos de Azgaar, ni borra contradicciones conocidas: se mantienen señaladas sin exigir resolverlas para esta fase. El JSON y el archivo .map permanecen sin cambios.

## Alcance temporal y fuentes antiguas — 31/10/2026

Las opciones hacia Aldren describen lo ofrecido antes del viaje. El recorrido del23/10 ya se jugó; esta tabla no certifica cuál fue el itinerario completo ni cierra725/560km. Las tablas continentales y biomas antiguos quedan archivados con [cobertura propia](./antecedentes-continentales-y-viajes.md), sin recuperar cifras como definitivas. El mapa vigente sigue siendo el export29/10 y no se modifica aquí.
