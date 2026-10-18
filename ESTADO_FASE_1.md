# Estado operativo — consolidación de Romanance

**Versión:** 1.4 · **Fecha:** 2026-10-14 · **Estado:** FASE 1 EN CURSO.

Este resumen distingue cierres de la etapa, desarrollo futuro y trabajo documental restante. Complementa el [manifiesto](./INDICE_CANON.md) y el [plan de migración](./PLAN_MIGRACION_FASE_1.md); no reemplaza sus fuentes ni declara auditado íntegramente todo el repositorio en esta tanda.

## Cerrado para el alcance actual

| Bloque | Estado y referencia |
|---|---|
| Biblia y Crónicas antiguas | Cobertura y archivo histórico ejecutados, con integridad comprobada. [Registro](./REVISION_COBERTURA_BIBLIA_Y_CRONICAS.md). |
| Anexo de Morvath | Lore, módulo y resultado separados; original archivado con hash verificado. [Cobertura](./REVISION_COBERTURA_MORVATH.md). |
| Nueve gremios de Romanance | Propósitos, requisitos, obligaciones, beneficios, sedes y gobierno cotejados. Borrador archivado íntegro el 2026-10-14. [Canon vigente](./canon/lore/gremios.md) y [cobertura](./canon/lore/cobertura-fuente-gremios.md). |
| Escritura aureliana | Base documental cerrada; 30 glifos y precedencia del SVG. [Cierre](./REVISION_CIERRE_ESCRITURA_AURELIANA.md). Lengua completa y acabado posterior no bloquean la fase. |
| Inteligencias y Hierofante | Alcance actual suficiente por decisión del autor; base de conjuros del mago 1–9 sin sus trucos. [Revisión](./REVISION_INTELIGENCIAS_Y_HIEROFANTE.md). No equivale a balance completo de una clase jugable. |
| Geografía necesaria para esta fase | Suficiente por decisión del autor; no ampliar para rellenar el mapa. Referencias en [revisión cartográfica](./mundo/mapas/revision-cartografica.md). |
| Preparación del viaje | Sesión completada dentro del alcance previsto, según valoración del autor; dos horas y media suficientes. [Revisión v0.3](./herramientas-campana/viajes/revision-playtest-preparacion-2026-10-12.md). No hacía falta iniciar el recorrido sin eventos preparados. |
| Hoja de viaje | v0.2 simplificada vigente; registro de jugadores y uso flexible. La versión anterior se conserva. [PDF](./output/pdf/viajes-hoja-de-decisiones-v0.2.pdf). |
| Nombres Kalashtar y Vedalken | Entrega confirmada por el autor; TXT completo preservado. [Recepción](./mundo/azgaar/revision-namesbase-2026-10-14.md). Limpiar otras bases es una tarea aparte. |

## Desarrollo futuro o prueba posterior — no reabrir como hueco de canon

- Viajes: jugar etapas, fogones y Motivación para evaluar su funcionamiento; los eventos concretos los prepara el DM después de conocer el recorrido. La party conoce solo lo investigado o descubierto, no el programa de encuentros.
- Drix: probar su impacto durante viajes. La prueba urbana de El camino prestado no generó reacción significativa. Categorías de las doce y doble línea de Extraordinarias quedan para revisión/maquetación; no se alteran efectos ahora.
- Gremios y Bastiones: crecimiento anual, mejoras, valores y reglamento detallado. Solo Jantry se afilió en la sesión; no se exige afiliación al resto.
- Herramientas y aplicaciones: continuar en su desarrollo propio. La consulta asistida de precios resultó útil para acelerar las compras. No se crea otro chat sin petición expresa.
- Lengua aureliana completa, fonética, TTF, transliterador y pulido de especie/clase: diferidos expresamente.
- Sennari, quori, localidad portuaria y caña legendaria: desarrollo futuro según el alcance seleccionado. [Ficha](./canon/pnjs/sennari.md).
- Manifestación única de Morvath mediante la Luz en Arco III/Aldenor: suceso futuro aprobado, pendiente de escena concreta. [Registro](./canon/plots-y-subplots/morvath-manifestacion-de-la-luz-arco-iii.md).
- Juego de cartas para ciudades: idea anotada, sin lote diseñado. [Propuesta del autor](./ideas-nuevas/mazo-de-eventos-para-ciudades.md).
- Heredero: **EN SUSPENSO** por Maximus; sin línea alternativa o sustituto.

## Trabajo documental que sí queda

1. Cotejar la cobertura de los compilados grandes de chats y fuentes mixtas de plots, geografía y herramientas antes de archivarlos; no se marca todo `data/` como reemplazado.
2. Cotejar los pasajes inseguros de la transcripción cuando sean necesarios para registrar hechos; no limpiar nombres, inventarios o rumores por conjetura.
3. La limpieza opcional de bases reales de Azgaar requiere revisar asociaciones del mapa actual, especialmente Tierras Libres/Cantonese y referencias por número. No impide usar el export completo recibido.

## Migración documental completada en esta tanda

[Informe de catorce fuentes](./REVISION_MIGRACION_FUENTES_2026-10-14.md): ciudad, PNJs y Aldren, anexo mecánico, forja/mercadeo, trasfondos y relato de Jantry, Aurelianos, Silente, cosmología, moneda, economía inmobiliaria, anexo oficial de Inteligencias/Hierofante y versión anterior de Hierofante. Fuentes íntegras, hash verificado y referencias actualizadas. Se suma a los archivos ya ejecutados de Biblia, Crónicas, gremios y Morvath.

La consolidación documental de esas fuentes está cerrada. Sus desarrollos futuros no son condiciones para archivarlas. Los adjuntos, compilados y archivos todavía presentes siguen sujetos a su propio cotejo; no se declara terminada toda la Fase 1 por este lote.

## Contradicción de Rocío — RESUELTA, 2026-10-14

El autor fija **+1d4 a Medicina, Supervivencia o un conjuro de curación**, elegido por el jugador; **una hora o hasta usarlo**, un solo uso. Elaboración local: **7 días y 25 PO**, Kit de Herbolario, competencia y receta de Ethen. Pociones estándar no nativas; alteración al entrar desde otro plano. Conjuros de curación sin cambios. La nota de consulta del SRD es recordatorio, no un paso obligatorio repetido.

Esta decisión reemplaza 1 día/25 PO y los bonos fijos/7–8 días de la guía de BOTÍN.EXE. [Regla consolidada](./canon/pnjs/forja-mercadeo-y-pociones.md). La discrepancia de canon está cerrada; su implementación en la aplicación sigue siendo trabajo técnico pendiente, no una decisión sin resolver.

No se modifican fundamentos originales, JSON de Azgaar ni imágenes. No se realizan commits ni push.


## Reubicación de documentos mixtos — 2026-10-14

Tres fuentes cubiertas archivadas y dos documentos de desarrollo reubicados íntegros. [Informe de cobertura y destinos](./REVISION_REUBICACION_DOCUMENTOS_MIXTOS_2026-10-14.md). Los cinco hashes coinciden antes y después del movimiento.

Alfabeto original, Drix original y Viajes v1.2: ARCHIVADOS. Consolidados de objetos de legado y Viajes/Drix: EN DESARROLLO, en herramientas. Los compilados grandes, fuentes mixtas restantes y adjuntos requieren su propio cotejo. No se declara terminada la fase ni se amplía la geografía para cerrar estos movimientos.
