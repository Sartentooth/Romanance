# Recepción y cotejo — sistema de gremios, 2026-10-19

**Estado:** INTEGRACIÓN APROBADA Y APLICADA; PARTE FUNCIONAL EN TESTEO EN MESA (v0.1).

Fuente: [consolidado entregado por el autor](<../../archivo-historico/fuentes-historicas/mixtos-2026-10-31/Romanance_Sistema_Gremios_Aventureros_Consolidado.md>), fechado 2026-10-19, sin versión nueva del sistema asignada. SHA-256 `76a16b6d49b2cdb195fa0aabf6966647e8aaa93b5a42c472a3fcc0206cf3a86e`. Original intacto y conservado en su ubicación.

## Cambios explícitos respecto de la documentación vigente

| Tema | Vigente anterior | Nueva decisión del autor |
|---|---|---|
| Rangos | Básico/medio/avanzado provisionales | Aprendiz/Oficial/Maestro definitivos |
| Ascenso | Sin umbrales | 25/50 PX acumulados, padrino, evaluación, tasa; gestión aproximada de un día |
| Reputación | Sin saldo mecánico definido | Un único saldo de PX/reputación por titular y gremio; puede ser negativo |
| Encargos | Resultado sin escala de PX | Éxito +1 a +5; fracaso resta la misma cantidad; no son PX de nivel D&D |
| Grupos | Pago grupal; rango no precisado | Grupo titular con rango y saldo independientes, sin duplicación individual |
| Colaboradores | Responsabilidad del avanzado confirmada | Solo el titular cobra y cambia PX; admite externos y rangos inferiores |
| Sanción por rango | Multa y expulsión por reincidencia | No se ofrecen encargos superiores; no hay multa automática por acompañar o dificultad inesperada |
| Cobro | Momento no fijado | Al verificar el cumplimiento; botín según contrato |
| Institución | Niveles y d20 contemplados, sin valores | Desarrollo pospuesto, evaluación anual o según DM; Gran Maestre no equivale a director ni añade votos |

Las tasas de 1/10/100 PO y pagos de 10/35/50 % se conservan. El mínimo anterior de **1 pieza de plata** no está mencionado ni revocado: la propuesta lo conserva sin inventar redondeos.

## Protección del lore existente

Las nueve fichas, sedes, requisitos de oficio, beneficios profesionales, voz ante el Consejo, explotación de Lunargenta y excepción de Sanadores se conservan. La independencia del saldo de cada afiliación no elimina por sí sola el alcance común del Gremio de Aventureros. El acceso narrativo de un Maestro no concede automáticamente archivos restringidos: subsiste la regla específica de Bibliotecarios.

No se identificó una contradicción sustantiva sin resolver que impida preparar esta integración. Las diferencias anteriores son reemplazos explícitos en la nueva fuente; sus omisiones no se convierten en derogaciones. Detalles de constitución de grupos, redondeos, privilegios y administración institucional siguen abiertos en su alcance declarado.

## Diff preparado

[Propuesta concreta de cambios](<../../para-borrar/parches-aplicados/PROPUESTA_INTEGRACION_GREMIOS_2026-10-19.diff>): nueva guía funcional, bloque operativo del 1 Canon oficial y documentación de herramientas. Las versiones de los encabezados del diff son propuestas; todavía no son versiones vigentes. Se comprobó que todo el contenido del 1 Canon oficial desde «Gremio Minero y Lunargenta» hasta el final permanece literal en la propuesta.

La sección 13 de la entrega solicita: «Presentar un diff antes de consolidar cambios canónicos». Por eso se deja el resultado revisable y no se sustituyen aún archivos activos, se archivan fuentes ni se registra en el manifiesto una aplicación que no ocurrió. Tampoco se crean interfaces, automatizaciones o nuevas mecánicas.

## Aprobación y aplicación — 2026-10-19

El autor aprobó expresamente el diff y pidió pasar la parte funcional a testeo en mesa. Se aplicaron los cuatro archivos propuestos, actualizando sus estados y el término residual «avanzado» a «titular de rango superior». La guía funcional tiene revisión documental 0.1; esto no asigna retroactivamente una versión al consolidado recibido.

Las secciones anteriores conservan el cotejo previo: sus menciones a propuesta o falta de aplicación describen ese momento y quedan superadas por este cierre. La sección 13 de la fuente ya fue satisfecha mediante el diff y la aprobación posterior. No hay una autorización pendiente.

Las nueve fichas y el lore se preservan. Fuente recibida intacta en `data/`; copias íntegras de los tres documentos activos anteriores en [2 Desarrollo/archivo-historico/fuentes-historicas/gremios-pre-integracion-2026-10-19](<../../archivo-historico/fuentes-historicas/gremios-pre-integracion-2026-10-19/README.md>). El diff original se conserva como antecedente de la revisión aprobada. El manifiesto registra la nueva precedencia; los análisis anteriores no rigen donde la guía los reemplaza.

No se informa una prueba ya realizada: el autor enviará sus resultados. Cargos, niveles institucionales, Bastiones y automatizaciones siguen fuera de este testeo funcional. No se realizaron commits ni push.

## Archivo de la transferencia — 31/10/2026

SHA256 idéntico a la entrega aprobada. Los13 apartados están cubiertos por guía funcional, nueve fichas, reemplazos registrados y pendientes del sistema. La fuente se archiva íntegra; ya no permanece en data pese a las notas anteriores de recepción. [Cobertura y hashes](<REVISION_LIMPIEZA_MIXTOS_2026-10-31.md>). No se cambia el reglamento ni se certifica validación en mesa por este archivo.
