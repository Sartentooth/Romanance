# Migración de fuentes con cobertura verificada

**Versión:** 1.1 · **Fecha:** 2026-10-14 · **Estado:** COBERTURA VERIFICADA; 14 FUENTES ARCHIVADAS.

Este lote continúa la limpieza autorizada. Los destinos activos ya existen; no se generan reglas ni lore. La comprobación compara líneas y contenido normalizado y coteja las diferencias con decisiones documentadas del autor. La normalización se usa para verificar, no se aplica a los originales.

| Fuente | Destino activo | Tratamiento de diferencias |
|---|---|---|
| [Romanance_Historia_y_Descripcion.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Romanance_Historia_y_Descripcion.md>) | [canon/lore/romanance.md](canon/lore/romanance.md) | Gobierno por acuerdos, Jarsag ~50 años, fundadores, 434/435 y excepciones gremiales según autor. |
| [Reglas_Forja_Mercadeo_Pociones.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Reglas_Forja_Mercadeo_Pociones.md>) | [canon/pnjs/forja-mercadeo-y-pociones.md](canon/pnjs/forja-mercadeo-y-pociones.md) | Rocío: decisión del 2026-10-14, +1d4, usos definidos, una hora, 7 días/25 PO y receta; cruce SRD como recordatorio. |
| [Cosmologia_Lumenor.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Cosmologia_Lumenor.md>) | [canon/lore/cosmologia.md](canon/lore/cosmologia.md) | C05: sin panteón propio desarrollado; deidades D&D admitidas; Luz filosófica, no dios. |
| [El_Silente_Canon_Romanance-2.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/El_Silente_Canon_Romanance-2.md>) | [canon/lore/el-silente.md](canon/lore/el-silente.md) | Desarrollo temático conservado; cambia únicamente la declaración histórica de reemplazo y metadatos. |
| [Economia_inmobiliaria_Romanance.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Economia_inmobiliaria_Romanance.md>) | [herramientas-campana/economia-inmobiliaria.md](herramientas-campana/economia-inmobiliaria.md) | C21: conservar cifras y tiempos, sin descuento automático 50–70%; se retiran marcadores de cita de chat no resolubles. |
| [Moneda_de_romanance_la_luz.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Moneda_de_romanance_la_luz.md>) | [canon/lore/moneda-la-luz.md](canon/lore/moneda-la-luz.md) | Fuente íntegra incluida literalmente tras normalizar espacios; equivalencias y simbología sin cambios. |
| [Anexo_Oficial_Romanance_Inteligencias_Hierofante.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Anexo_Oficial_Romanance_Inteligencias_Hierofante.md>) | [canon/lore/inteligencias-encarnadas-y-hierofante.md](canon/lore/inteligencias-encarnadas-y-hierofante.md) | Anexo v1.2 íntegro incluido literalmente tras normalizar espacios; C18 diferido y base provisional ya aprobada. |
| [Hierofante de la Luz.md](<_archivo/canon-obsoleto/hierofante-2026-10-14/Hierofante de la Luz.md>) | [canon/lore/inteligencias-encarnadas-y-hierofante.md](canon/lore/inteligencias-encarnadas-y-hierofante.md) | Reemplazo explícito por Anexo Oficial v1.2 y cotejo completo en REVISION_INTELIGENCIAS_Y_HIEROFANTE.md; rasgos retirados solo históricos. |

## Evidencia y límites

[Evidencia por archivo](./_archivo/fuentes-historicas/migracion-2026-10-14/lote-fuentes-cubiertas.json): hash previo, rutas, destino activo y líneas que no coinciden literalmente. Las diferencias no se declaran válidas por una prueba automática: los tratamientos de la tabla explican su autoridad.

- Moneda y anexo oficial de Inteligencias/Hierofante están íntegros en sus destinos, con normalización de espacios solo para cotejo.
- Las secciones, cifras y textos restantes de las otras seis fuentes se preservan en sus destinos o, para el Hierofante anterior, como versión explícitamente reemplazada. Las sustituciones de contenido corresponden a las decisiones enlazadas en las revisiones existentes.
- Revisión de Hierofante: [cotejo de versiones y alcance diferido](./REVISION_INTELIGENCIAS_Y_HIEROFANTE.md). No se recuperan los rasgos retirados para rellenar huecos.
- No se interpreta el archivado como balance certificado ni desarrollo completo de herramientas, lengua, fenómenos celestes o personajes.
- No se modifica el SRD, el mapa, las imágenes ni el export de nombres. No se alteran otras fuentes de `data/` ni compilados por considerarlos equivalentes sin cotejo.

Antes de mover: comprobar hash y existencia de destino activo para cada archivo, impedir sobrescrituras y verificar que todas las rutas estén dentro del repositorio. Después: actualizar enlaces Markdown activos y comprobar hashes de las fuentes archivadas.

## Ejecución

Las ocho fuentes fueron trasladadas después de comprobar sus destinos activos. Todos los hashes posteriores coinciden con los previos. Se actualizaron 10 documentos con enlaces entrantes; los nombres y rutas sin enlace que forman parte de inventarios históricos conservan su procedencia. No hubo borrados, cambios de contenido de las fuentes ni cambios en mapa, imágenes o SRD.

## Segundo lote: PNJs, trasfondos y Aurelianos

Coberturas previas cotejadas de nuevo con los destinos actuales; los pasajes pendientes de desarrollo permanecen preservados sin inventarlos.

| Fuente | Destino activo | Cobertura y tratamiento |
|---|---|---|
| [PNJs_Principales_Romanance.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/PNJs_Principales_Romanance.md>) | [canon/pnjs/pnjs-principales.md](canon/pnjs/pnjs-principales.md) | [CONSOLIDACION_TANDA_1.md](CONSOLIDACION_TANDA_1.md): Ocho fichas y reglas transversales. Reemplazos expresos: Jarsag/Orden, niveles individuales, semielfo y Sellos, Deren INT20 y Rocío conciliado el 2026-10-14. |
| [Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Aldren_el_Precavido_-_Canon_Fundacional_Romanance.md>) | [canon/pnjs/pnjs-principales.md](canon/pnjs/pnjs-principales.md) | [CONSOLIDACION_TANDA_1.md](CONSOLIDACION_TANDA_1.md): Ficha 8 y complemento fundacional: identidad, cultura y comercio de Los Lagos, personalidad, protecciones, tablilla, apariencia y pendientes. Ciudad natal y desarrollo futuro sin inventar. |
| [Anexo_Homebrew_PNJs_Romanance.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Anexo_Homebrew_PNJs_Romanance.md>) | [canon/pnjs/anexo-mecanico-pnjs.md](canon/pnjs/anexo-mecanico-pnjs.md) | [CONSOLIDACION_TANDA_1.md](CONSOLIDACION_TANDA_1.md): Especie/subraza, Linaje exclusivo de Aldren, trasfondos, subclases y usos. Decisiones expresas de Sellos y Rocío prevalecen; forja/mercadeo remiten a su destino específico. |
| [trasfondos_personajes_romanance.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/trasfondos_personajes_romanance.md>) | [canon/lore/trasfondos-personajes-jugadores.md](canon/lore/trasfondos-personajes-jugadores.md) | [CONSOLIDACION_TANDA_2.md](CONSOLIDACION_TANDA_2.md): Cinco PJ y contexto de Levit. Edades/llegadas, viaje largo de Jantry, Berk, biblioteca y cronología de Spriggan según autor; nombres antiguos históricos. |
| [Historia_Jantry_Emberflame.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Historia_Jantry_Emberflame.md>) | [canon/lore/jantry-relato-de-trasfondo.md](canon/lore/jantry-relato-de-trasfondo.md) | [CONSOLIDACION_TANDA_2.md](CONSOLIDACION_TANDA_2.md): Relato completo. Edad, viaje y residencia corregidos según autor; infancia conserva punto de vista del personaje y no limita tamaño actual de Berk. |
| [Anexo_Aureliano_Romanance.md](<_archivo/fuentes-historicas/consolidados-2026-10-14/Anexo_Aureliano_Romanance.md>) | [canon/lore/aurelianos.md](canon/lore/aurelianos.md) | [CONSOLIDACION_AURELIANOS_Y_SILENTE.md](CONSOLIDACION_AURELIANOS_Y_SILENTE.md): Introducción y secciones I–XI preservadas; juramentos íntegros en canon/lore/juramentos.md. Extinción por ramas según autor; Heredero suspendido sin sustituirlo. |

[Evidencia del segundo lote](./_archivo/fuentes-historicas/migracion-2026-10-14/lote-pnjs-trasfondos-aurelianos.json). Las diferencias de redacción de Aldren se conservan como paráfrasis cotejadas en la ficha y su complemento; las de los Juramentos están cubiertas en su documento propio, con el orden canónico ya resuelto.

Segundo lote ejecutado: seis fuentes archivadas, con huellas anterior/posterior coincidentes y enlaces entrantes actualizados en 14 documentos. Total de esta tanda: **14 fuentes**, originales íntegros.

## Verificación final

86 documentos activos/de control y registros de este lote: 937 enlaces locales comprobados, cero destinos faltantes. Las catorce fuentes archivadas conservan su SHA-256 y ya no están en sus rutas anteriores. [Resultado verificable](./_archivo/fuentes-historicas/migracion-2026-10-14/enlaces-activos.json). El chequeo comprueba existencia de destino, no todos los fragmentos internos de encabezados.
