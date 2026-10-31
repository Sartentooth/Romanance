# Mapa de Lumenor — recepción y cotejo del 29/10/2026

**Versión documental:** 1.0 · **Fecha:** 2026-10-29 · **Estado:** REFERENCIA CARTOGRÁFICA VIGENTE.

El autor reemplazó el export anterior por [Mundo Sebas Full 2026-10-29-18-18.json](<../../../1 Canon oficial/mundo/azgaar/Mundo Sebas Full 2026-10-29-18-18.json>) y [su archivo .map](<../../../1 Canon oficial/mundo/azgaar/Mundo Sebas 2026-10-29-18-18.map>). Azgaar **1.156.0**, export **2026-10-29T21:18:57.286Z**; escala **3 km/unidad**, areaUnit=square.

Se leyó el export del 21/10 desde HEAD solo en memoria para comparar; no se restauró el archivo que retiró el autor. [Extracción y diferencias](<cotejo-mapa-2026-10-29.json>). No se modifica ninguno de los dos mapas recibidos.

## Trator: geometría

Áreas calculadas por fórmula de polígono sobre pack.features[*].vertices → pack.vertices[*].p, multiplicadas por escala². Distancias: mínimo geométrico entre segmentos de ambos contornos, multiplicado por escala. Son aproximaciones según la resolución exportada, no topografía de precisión.

| Isla | Feature | Área de contorno km² | area interno |
|---|---|---|---|
| Wykan | 12 | 2.513,8 | 279 |
| Agden | 14 | 7.553,2 | 839 |
| Tengen | 16 | 15.869,7 | 1.763 |
| Total | — | **25.936,7** | — |

| Par | Mínimo entre costas km |
|---|---|
| Wykan–Agden | 343,4 |
| Agden–Tengen | 138,0 |
| Wykan–Tengen | 656,2 |

Los tres contornos son polígonos simples válidos según comprobación de vértices, cruces de segmentos y área positiva. Su geometría coincide con el export anterior. Áreas y separaciones coinciden al redondeo con la entrega. area interno está redondeado y no equivale exactamente al área del contorno. Estas separaciones no son travesías portuarias ni tiempos de navegación.

## Diferencias revisadas respecto del 21/10

- Features 12/14/16 cambian Muichau/Toishingdak/Seiyuen por **Wykan/Agden/Tengen**; área interna y geometría revisada se conservan.
- Tres asentamientos nuevos: Tengen i19/celda5343, Agden i20/4589, Wykan i21/2980. population bruto: 1.354 / 3.631 / 0.834; **no se aprueban censos narrativos**.
- Los tres tienen port=0 en el dato técnico; no niega su cultura marítima aprobada ni crea puertos/obras concretas. Se registra sin editar.
- En los campos comparados de los asentamientos previos y estados no aparecen cambios; tampoco cambian nombres, longitudes y puntos de rutas. Esto no afirma igualdad de todos los campos del JSON.
- Se conservan el bosque de coníferas de Berk y los lagos Coënquelián / Hucatai con sus riberas. El desajuste técnico port=11 de Kelen frente al lago13 continúa pendiente; no modifica su lago narrativo.

Mar de los Minotauros es decisión nominal del autor; no se deduce de un campo técnico ni se declara localizada su etiqueta si el export no la contiene. No se fijan nuevos santuarios desde puntos del mapa ni se identifica uno con Trator. La discrepancia de ubicación del Quinto se trata en el [informe de 1 Canon oficial](<../fase-1/REVISION_AURELIA_TRATOR_2026-10-29.md>).
