# Azgaar — revisión de residuos y ajustes pendientes

**Versión documental:** 1.0 local · **Fecha:** 2026-10-09 · **Estado:** PENDIENTE de ajuste cartográfico donde se indica; decisiones de canon ya resueltas. No se ha editado el JSON.

Fuente: [JSON vigente](<../../data/Json del mapa de Azgaar/Mundo Sebas Full 2026-10-09-18-07.json>). Los identificadores siguientes son IDs de las entidades; no se propone borrar elementos de las listas ni renumerarlos.

| Entidad / campo | Valor actual | Criterio confirmado y acción propuesta |
|---|---|---|
| Asentamiento 9, `name` / `removed` | `Port Ersag` / `true` | Ya está retirado del mapa activo. No es canon. No requiere otra eliminación; no convertir la presencia del registro interno en un asentamiento existente. |
| Asentamiento 16, `name` / `removed` | `Licove` / `true` | Ya está retirado del mapa activo. No es canon. No requiere otra eliminación. |
| Asentamiento 1, `name` / `group` | `Aetherion` / `ruin` | Compatible con Aetherion como ruinas. Sin ajuste requerido por este punto. |
| Ruta 10, `name` | `Lanrean path` | Nombre obsoleto vinculado al antiguo Lanre. El tramo conecta el empalme con Halden. Actualizar su denominación en Azgaar cuando el autor elija el rótulo; no se inventa un nombre propio ni se altera el trazado. |
| Estado 7, `name` / `form` / `formName` | `Zephyr` / `Monarchy` / `Cónclave` | `Monarchy` es un residuo técnico, no canon político. Mantener la distinción Lyren ciudad / Zephyr Cónclave; revisar la clasificación mediante Azgaar sin asignar por iniciativa propia otro modelo de gobierno. El valor técnico de reemplazo queda pendiente. |

No se reabren decisiones sobre Jarsag, el alcance del Cónclave, Port Ersag, Licove o Aetherion. Tampoco se aceptan automáticamente las demás poblaciones, gobiernos o fronteras del generador. Esta revisión cubre los residuos concretos listados, no constituye una aprobación integral del mapa.

El autor reemplaza los archivos del mapa al exportar una actualización. Esta lista permite realizar los ajustes en Azgaar y cotejar después la exportación vigente; no se modifican aquí el JSON ni el archivo nativo.

[Revisión cartográfica](./revision-cartografica.md) · [Manifiesto](../../INDICE_CANON.md) · [Plan](../../PLAN_MIGRACION_FASE_1.md).
