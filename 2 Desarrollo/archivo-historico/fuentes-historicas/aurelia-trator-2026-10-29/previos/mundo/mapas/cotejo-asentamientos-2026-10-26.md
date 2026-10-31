# Cotejo cartográfico de asentamientos — 2026-10-26

**Versión:** 1.0 · **Estado:** comprobación técnica; no censo ni aprobación del lore generado.

Fuente: [Mundo Sebas Full 2026-10-21-00-51.json](<../../data/Json del mapa de Azgaar/Mundo Sebas Full 2026-10-21-00-51.json>). Es el export vigente indicado por el autor; no se usa el del 9/10 desaparecido como fuente actual. [Extracción verificable](./cotejo-asentamientos-2026-10-26.json).

| Asentamiento | ID | Celda | population bruto |
|---|---|---|---|
| Berk | 2 | 2400 | 1.676 |
| Kelen | 14 | 3061 | 34.656 |
| Khalan | 15 | 3065 | 2.344 |
| Lyren | 17 | 2948 | 2.835 |
| Halden | 12 | 993 | 7.654 |
| Marren | 13 | 1658 | 6.457 |
| Levit | 4 | 5434 | 0.923 |
| Tömörsag | 10 | 5120 | 14.326 |
| Varsak | 11 | 4447 | 3.544 |
| Krâthor | 8 | 4043 | 0.124 |

populationRate=1000 y urbanization=1. Estos valores explican referencias cartográficas; no aprueban censos narrativos. Berk tiene 1.676 bruto, distinto del 1.678 citado por documentos antiguos: se conserva como dato técnico, sin alterar población narrativa. Los 14.326 y 3.544 brutos de Tömörsag y Varsak no establecen residentes estables.

## Biomas, lagos y relieve

- Berk: celda 2400, bioma 13, bosque de coníferas. Lyren: 2948, bioma 4, pradera.
- Lago 13: Coënquelián; shoreline contiene 3061 (Kelen). Lago 11: Hucatai; shoreline contiene 3065 (Khalan). Ambos nombres ratificados por el autor.
- El campo port de Kelen vale 11, aunque su celda pertenece a la ribera de Coënquelián (13). Es una inconsistencia cartográfica del puerto; no cambia la asociación narrativa confirmada y no se corrige el JSON sin propuesta previa.
- Celdas de los picos indicados: 2804 / p=[583.9,487.97] / h=74 y 3085 / p=[569.78,516.69] / h=74. Son centros de celda, no necesariamente el punto señalado en una captura; no se interpreta esa diferencia de coordenadas como traslado. No se convierte h directamente a metros. Se conserva la descripción del autor de dos picos de unos 3.000 m.
- La ruta 20 Marrenese trail registra 166.38272094726562 unidades; con distanceScale=3 equivale a unos 499,15 km técnicos. No se convierte en distancia narrativa cerrada. El valor anterior Kelen–Khalan de unos 185,4 km en línea recta es referencia del laboratorio, no recorrido de las fiestas ni logística fijada.

Se verificaron IDs, nombres y campos citados; no se auditó todo el mapa ni se modificaron JSON, .map o imágenes. La comparación 725/560 km del viaje sigue fuera de esta tanda. [Conexiones y distancias confirmadas](./revision-cartografica.md).
