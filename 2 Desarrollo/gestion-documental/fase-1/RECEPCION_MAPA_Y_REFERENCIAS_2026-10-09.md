# Recepción — mapa y referencias de reglas

**Fecha:** 2026-10-09 · **Versión:** 1.0 local · **Estado:** revisión inicial completada; lecturas específicas de reglas según necesidad.

Se identificaron diez archivos agregados respecto de los inventarios anteriores: JSON, `.map` y ocho PDF de referencia. No se encontraron nuevos Markdown de lore entre esos agregados. [Inventario de archivos y hashes](<../../archivo-historico/fuentes-historicas/recepcion-2026-10-09/inventario.json>).

## Mapa vigente

- JSON del 9 de octubre (`Mundo Sebas Full 2026-10-09-18-07.json`: export histórico reemplazado por el autor; no conservado): exportado a las 18:07 de Buenos Aires, versión Azgaar 1.154.0.
- Archivo nativo `.map` (`Mundo Sebas 2026-10-04-00-21.map`: export histórico reemplazado por el autor; no conservado): el nombre conserva una fecha anterior, pero la cabecera interna indica **2026-10-09**, versión 1.154.0, y coincide con la identidad del mapa del JSON.
- Se compararon exactamente las secciones de lagos/accidentes (`features`), asentamientos, estados, culturas, ríos y rutas: coinciden entre ambos archivos. No se certifican otras capas ni una apertura visual completa en Azgaar.
- Confirmados en el JSON: **Kelen — Coënquelián**, lago 13; **Khalan — Hucatai**, lago 11. La asociación observada en las capturas queda cotejada con la exportación.
- Berk conserva el bioma 13, **bosque de coníferas**. La escala sigue en 3 km por unidad y las diecinueve rutas conservan sus nombres y longitudes respecto de la auditoría disponible. Levit–Morvath mantiene la medición compatible con los **46 km** aprobados; no se reabre esa decisión.

El JSON anterior fue retirado por el autor y no estaba en Git. La comparación histórica se limita a los datos de la auditoría, no a un diff completo entre ambas exportaciones. [Resultados técnicos](<../../archivo-historico/fuentes-historicas/recepcion-2026-10-09/mapa.json>).

**Flujo confirmado por el autor:** al actualizar el mapa, elimina la versión anterior y agrega la nueva. Se trabaja con la última exportación disponible; no se restaura el mapa retirado ni se crea una copia histórica de él. Se actualizan referencias y fecha de revisión. El nombre del archivo nativo por sí solo no determina su antigüedad. Ninguno de los dos mapas recibidos fue editado ni renombrado.

## Referencias de reglas recibidas

| Archivo | Páginas PDF | Revisión realizada / uso |
|---|---|---|
| [SRD oficial en español 5.2.1](<../../referencias-reglamentarias/manuales-dnd-2024/SP_SRD_CC_v5.2.1.pdf>) | 398 | Identificación interna, información inicial e índice; extracción de primeras ocho páginas y visualización de la primera. Referencia oficial local para consultar reglas; no supone cotejo íntegro con la conversión Markdown. |
| [Manual del Jugador 2024](<../../referencias-reglamentarias/manuales-dnd-2024/Manual del Jugador 2024.pdf>) | 388 | Portada y páginas iniciales identificadas; extracción inicial. Consulta puntual según necesidad, no lectura integral declarada. |
| [Guía del Dungeon Master 2024](<../../referencias-reglamentarias/manuales-dnd-2024/Manual Dungeon Master 2024 - Español.pdf>) | 388 | Portada y páginas iniciales identificadas; extracción inicial. Consulta puntual según necesidad, no lectura integral declarada. |
| [Armaduras](<../../referencias-reglamentarias/manuales-dnd-2024/armaduras PHG.pdf>) | 1 | Extracto escaneado, página visualizada. |
| [Armas](<../../referencias-reglamentarias/manuales-dnd-2024/armas PHG.pdf>) | 1 | Extracto escaneado, página visualizada. |
| [Equipo aventurero](<../../referencias-reglamentarias/manuales-dnd-2024/equipo aventurero PHG.pdf>) | 1 | Extracto escaneado, página visualizada. |
| [Herramientas](<../../referencias-reglamentarias/manuales-dnd-2024/herramientas PHG.pdf>) | 2 | Extracto escaneado, ambas páginas visualizadas. |
| [Objetos mágicos aleatorios](<../../referencias-reglamentarias/manuales-dnd-2024/objetos magicos aleatorios DMG.pdf>) | 6 | Extracto escaneado, seis páginas visualizadas. |

Los cinco extractos no ofrecen texto recuperable mediante la extracción usada; se revisaron visualmente para identificar su contenido. Son referencias de reglas, fuera del lore activo. No se confunden los manuales con el SRD ni se modifican diseños caseros aprobados por incorporar estas referencias. No se copian sus tablas a documentos de 1 Canon oficial por iniciativa propia.

[Lectura inicial y metadatos](<../../archivo-historico/fuentes-historicas/recepcion-2026-10-09/pdfs-lectura-inicial.json>). Los originales permanecen en su lugar, sin modificaciones.

## Aplicación

Se actualizan las referencias al JSON vigente y se cierra el cotejo de los nombres de lagos en [geografía activa](<../../../1 Canon oficial/lore/geografia-berk-kelen-khalan.md>). La ciudad natal de Aldren, otras rutas y los residuos del generador siguen con su alcance previo: una exportación nueva no convierte automáticamente esos datos en canon.

[Manifiesto](<../../../1 Canon oficial/INDICE_CANON.md>) · [Plan](<PLAN_MIGRACION_FASE_1.md>).
