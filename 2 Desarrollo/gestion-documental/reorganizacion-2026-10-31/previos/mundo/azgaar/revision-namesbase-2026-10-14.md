# Bases de nombres de Azgaar — recepción y revisión

**Versión:** 1.0 · **Fecha:** 2026-10-14 · **Estado:** REVISADO / LIMPIEZA PENDIENTE DE DEPENDENCIAS.

El autor confirma que terminó los nombres previstos y entregó el export completo. Se registra la entrega; no se generan nombres nuevos ni se modifica el mapa.

## Fuente preservada

[Export completo](<../../data/archivos md/Mundo Sebas Namesbase 2026-10-14-17-45.txt>): 45 bases y 9.903 entradas, con seis campos por línea separados por `|`. El último contiene los nombres separados por comas. Todas las líneas tienen la estructura esperada.

**SHA-256:** `a47a5ab8c68d97bbd45cd2075e7f47eef0967e454eae4545d751ef18306d098a`.

## Selección propuesta

Conservar 12 bases de fantasía o propias. Las otras 33 corresponden a idiomas, regiones o culturas reales y son candidatas a retirarse de una futura selección. La clasificación se aplica a las bases completas: no implica que cada nombre contenido en Terenor o Aldenor sea exclusivamente inventado ni autoriza a expurgar sus nombres individuales.

| Posición actual (desde 0) | Base | Entradas | Tratamiento propuesto |
|---|---|---:|---|
| 0 | German | 265 | Candidata a retirar |
| 1 | English | 237 | Candidata a retirar |
| 2 | French | 276 | Candidata a retirar |
| 3 | Italian | 230 | Candidata a retirar |
| 4 | Castillian | 218 | Candidata a retirar |
| 5 | Ruthenian | 258 | Candidata a retirar |
| 6 | Nordic | 249 | Candidata a retirar |
| 7 | Greek | 229 | Candidata a retirar |
| 8 | Roman | 200 | Candidata a retirar |
| 9 | Finnic | 226 | Candidata a retirar |
| 10 | Korean | 202 | Candidata a retirar |
| 11 | Chinese | 220 | Candidata a retirar |
| 12 | Japanese | 222 | Candidata a retirar |
| 13 | Portuguese | 207 | Candidata a retirar |
| 14 | Nahuatl | 200 | Candidata a retirar |
| 15 | Hungarian | 221 | Candidata a retirar |
| 16 | Turkish | 261 | Candidata a retirar |
| 17 | Berber | 200 | Candidata a retirar |
| 18 | Arabic | 222 | Candidata a retirar |
| 19 | Inuit | 222 | Candidata a retirar |
| 20 | Basque | 200 | Candidata a retirar |
| 21 | Nigerian | 209 | Candidata a retirar |
| 22 | Celtic | 200 | Candidata a retirar |
| 23 | Mesopotamian | 190 | Candidata a retirar |
| 24 | Iranian | 222 | Candidata a retirar |
| 25 | Hawaiian | 207 | Candidata a retirar |
| 26 | Karnataka | 227 | Candidata a retirar |
| 27 | Quechua | 201 | Candidata a retirar |
| 28 | Swahili | 204 | Candidata a retirar |
| 29 | Vietnamese | 200 | Candidata a retirar |
| 30 | Cantonese | 216 | Revisar dependencia antes de retirar |
| 31 | Mongolian | 200 | Candidata a retirar |
| 32 | Human Generic | 214 | Conservar |
| 33 | Elven | 216 | Conservar |
| 34 | Dark Elven | 200 | Conservar |
| 35 | Dwarven | 184 | Conservar |
| 36 | Goblin | 109 | Conservar |
| 37 | Orc | 200 | Conservar |
| 38 | Giant | 200 | Conservar |
| 39 | Draconic | 212 | Conservar |
| 40 | Arachnid | 215 | Conservar |
| 41 | Serpents | 200 | Conservar |
| 42 | Levantine | 204 | Candidata a retirar |
| 43 | Terenor | 360 | Conservar |
| 44 | Aldenor | 348 | Conservar |

## Comparación con el JSON disponible del 9 de octubre

Las bases propias mantienen sus posiciones: Terenor 43 y Aldenor 44. Comparando nombres tras quitar espacios externos:

| Base | Entradas anteriores | Entradas nuevas | Nombres distintos añadidos | Nombres anteriores que ya no aparecen |
|---|---:|---:|---:|---|
| Terenor | 237 | 360 | 129 | Huascar, Cuitlahuac |
| Aldenor | 255 | 348 | 118 | Eric, Bjorn, Radgrid |

Las cifras de añadidos son nombres distintos, no una resta simple de entradas. El export es posterior al JSON; esas diferencias se registran como cambios del autor, no como pérdidas que deban restaurarse.

Las incorporaciones están mezcladas en las bases continentales, sin listas tituladas Kalashtar o Vedalken ni división por género. Se conserva la organización entregada; no se asigna especie o género por la apariencia de un nombre.

## Dependencias que impiden recortar e importar sin revisión

El [JSON disponible](<../../data/Json del mapa de Azgaar/Mundo Sebas Full 2026-10-09-18-07.json>) contiene estas referencias de culturas no marcadas como eliminadas:

| Cultura | Índice de base | Base |
|---|---:|---|
| Wildlands | 32 | Human Generic |
| Terenor | 43 | Terenor |
| Aldenor | 44 | Aldenor |
| Tierras Libres | 30 | Cantonese |

El JSON almacena las bases en `nameBases`, con identificadores `i`, y las culturas en `pack.cultures`, con referencias `base`. El TXT no lleva esos identificadores explícitos. Si se conserva solo una selección, sus posiciones cambian; no debe asumirse que una importación conserva automáticamente las asociaciones. Esta revisión no prueba el comportamiento del importador de Azgaar.

Además, Cantonese está en uso por Tierras Libres en ese JSON. Como el mapa disponible es anterior al TXT, no se afirma que esa asignación siga vigente en el mapa abierto por el autor. Antes de quitarla, verificar la asignación actual y decidir su sustitución si todavía se utiliza. No se elige una base nueva ni se modifica esa cultura por iniciativa del asistente.

## Repeticiones y detalles de formato

- Terenor contiene `Tojolabal` dos veces una vez normalizados los espacios. Se señala, sin eliminarlo: esta revisión no decide si la repetición fue intencional.
- Ruthenian contiene cuatro entradas repetidas y Serpents una. No se limpian silenciosamente los datos.
- La etiqueta `Terenor ` tiene un espacio final y las bases propias contienen espacios después de comas. Se usó normalización solo para comparar; el export permanece intacto.
- El campo de letras dobles de Terenor contiene `rr, ll, ss, th, ch, kh`. Se preserva como configuración del autor, sin convertirlo a otro formato sin verificar el importador.

## Siguiente operación segura

1. Mantener este export completo como respaldo.
2. Verificar las bases que usan las culturas en el mapa actual, en especial Tierras Libres.
3. Preparar una copia filtrada con tabla de equivalencias entre posiciones anteriores y nuevas, una vez resuelta la dependencia.
4. Cargarla en una copia del mapa o reasignar explícitamente las bases; comprobar las asociaciones antes de reemplazar el export de trabajo.

No se ha creado todavía una lista reducida para importar, ni se ha borrado, movido o cambiado el TXT, el JSON o el archivo .map. La entrega de nombres queda registrada como cumplida; la limpieza es una operación aparte.
