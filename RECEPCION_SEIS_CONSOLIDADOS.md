# Recepción y cruce de seis consolidados de chats

**Fecha:** 2026-10-04. **Versión del informe operativo:** 1.0. **Estado:** CANON EN CONSOLIDACIÓN.

Los seis archivos existen en `data/archivos md/` y fueron leídos. Se cruzaron con las fuentes locales y la revisión anterior de chats. Amplían el material recuperado; no son seis reemplazos automáticos ni garantizan una exportación completa de los historiales. Cada consolidado declara su alcance y distingue propuestas de aprobaciones.

Se registraron tamaño, fecha y SHA-256 de cada entrada en [inventario-seis-consolidados.csv](./_archivo/fuentes-historicas/revision-chats-2026-10-04/inventario-seis-consolidados.csv). No se modificaron estos seis archivos ni los originales anteriores. No se abrieron imágenes, no se editó Azgaar y no se movieron fuentes. El working tree conserva cambios sin commit; no se creó ni cambió rama.

## Tratamiento y destinos propuestos

Las rutas de destino todavía no contienen consolidaciones activas. «Archivo histórico» es un movimiento futuro, posterior a verificar conservación de la información válida.

| Archivo actual | Qué recupera / estado | Destino propuesto | Tratamiento y qué reemplaza |
|---|---|---|---|
| [Escritura_Aureliana_Consolidacion_Chat.md](<./data/archivos md/Escritura_Aureliana_Consolidacion_Chat.md>) | Base de 30 glifos v1.0; SVG normativo; retoques cosméticos; aprobación textual de una base estética con luz azul. Consolidado sin versión asignada. | `canon/lore/alfabeto-aureliano.md` + `canon/arte/escritura-aureliana.md` | Consolidar con Alfabeto v1.0, separar geometría de dirección estética. Fuente íntegra → `_archivo/fuentes-historicas/`. No reemplaza léxico ritual ni resuelve gramática. |
| [Consolidado_Sistema_Objetos_de_Legado_Romanance.md](<herramientas-campana/armas-legendarias/consolidado-de-trabajo.md>) | Recupera arquitectura preliminar, pilares, PI, rituales, balance tentativo y caso piloto Alba de Hierro. EN DESARROLLO; sin versión del sistema ni nombre definitivo. | `herramientas-campana/armas-legendarias/diseno-preliminar.md` + `herramientas-campana/armas-legendarias/estado-y-dependencias.md` | Conservar propuestas como propuestas; registrar decisiones y dependencias. No constituye reglamento aprobado. Fuente íntegra → histórico después del cotejo. No cambiar carpeta/nombre definitivo por el título «objetos». |
| [Consolidado_Sistema_Viajes_y_Mazo_de_Drix.md](<herramientas-campana/consolidado-de-trabajo-viajes-y-drix.md>) | Secciones 5–9 de Viajes v1.2 Testing, mazo v0.1 histórico, alias de Drix, cartas/lote de prueba y pendientes. EN DESARROLLO. | `herramientas-campana/viajes/estado-y-dependencias.md` + `herramientas-campana/mazo-de-drix/estado-y-ajustes-pendientes.md`; reglamentos en destinos del plan anterior | Separar sistemas con remisiones. No sustituye todo Viajes: omite apartados y tablas de la fuente extensa. Tampoco recupera todos los ajustes posteriores de Drix. Fuente → histórico tras preservar ambos alcances. |
| [Romanance_Consolidacion_Canon_2026-10-04.md](<./data/archivos md/Romanance_Consolidacion_Canon_2026-10-04.md>) | Panorama de decisiones del mundo, cargos, territorios, culturas, Lunargenta y estado de documentos. CANON EN CONSOLIDACIÓN; corte fechado, sin número de versión declarado. | Decisiones verificadas → destinos temáticos del plan; documento completo → `_archivo/fuentes-historicas/` | Conservar como snapshot de procedencia. No reemplaza las fuentes extensas ni prevalece automáticamente sobre los consolidados específicos. Tiene desajustes señalados abajo. |
| [Romanance_Consolidacion_Direccion_Visual.md](<./data/archivos md/Romanance_Consolidacion_Direccion_Visual.md>) | Preferencias explícitas, referencias, comparación A/B aceptada, seis estudios continentales pendientes y limitaciones del historial visual. EN DESARROLLO; sin numeración. | `canon/arte/direccion-visual-en-desarrollo.md` | Conservar distinguiendo aprobaciones, diagnósticos históricos y propuestas. Fuente → histórico después de vincular archivos disponibles. No elegir imágenes maestras por sufijo ni archivar imágenes ahora. |
| [Romanance_Consolidado_Plots_Sesiones_Arco_I.md](<./data/archivos md/Romanance_Consolidado_Plots_Sesiones_Arco_I.md>) | Hechos de sesión 1, preparación de sesión 2, fases, subplots, opciones de ubicación y reemplazo explícito de ficha temprana de Deren. CANON EN CONSOLIDACIÓN; sin versión. | `canon/plots-y-subplots/arco-i-registro-y-pendientes.md` + `canon/arcos/arco-i.md` | Consolidar con plots local y evidencia de chat sin perder pasajes posteriores del original. Fuente → histórico tras cotejo. Armas excluidas expresamente: no reclamarle ese contenido ni inferir su retiro. |

## Qué mejora respecto de la revisión anterior

- **CH01–CH02:** ya hay documento local independiente del diseño preliminar de objetos/armas y del piloto. Se preservan propuestas completas de arquitectura; siguen sin existir reglamento final, versión numérica ni poderes futuros cerrados. No hay que volver a pedir un volcado global de ese chat para registrar lo recibido.
- **CH04–CH05:** Viajes/Drix aporta lote de prueba, identidad «Drix de los Corredores» como alias/easter egg de Aldren y distribución propuesta de 30 cartas. No incluye Deseo torcido ni recoge expresamente todo el ajuste de «caos mágico» de los mensajes recuperados; esas evidencias anteriores se conservan.
- **CH11:** el específico de escritura registra una aprobación posterior de base estética —«ahora si!!!!!!!!» y «marca esto como base del canon»— además de la geometría aprobada. Supera el alcance de los cinco intercambios que había podido leer; no autoriza cambiar los glifos.
- **CH12:** la dirección visual distingue con más precisión preferencias expresas, resultados A/B aceptados, recomendaciones y estudios sin selección posterior. Ya hay guía textual para preparar la revisión de imágenes.
- **C01 / Deren:** dos consolidados describen expresamente que la ficha mecánica temprana queda reemplazada por la posterior de PNJs, nivel 16. Se puede registrar ese reemplazo documental sin inventar otra ficha; el original todavía no se editó.
- **C20 / versión de Viajes:** el específico identifica v1.1 como anterior y v1.2 como vigente para testing en secciones 5–9. Esto aclara el corte documental; no resuelve la duración de etapas ni aprueba todos los campos mecánicos.

## Desajustes y omisiones que frenan cierres automáticos

| ID | Evidencia concreta | Tratamiento pendiente |
|---|---|---|
| SC01 | General, §7 y §46: alfabeto/sistema gráfico definitivo pendiente. Escritura, §§1–4 y 7: geometría de 30 glifos v1.0 aprobada y base estética aprobada; acabado específico aún abierto. | Separar escritura base, lengua y acabado ornamental. No presentar «todo pendiente» ni «todo cerrado». No modificar fuentes por inferencia de alcance. |
| SC02 | La escritura cita `alfabeto_aurelià_en_pergamí_místico.png` como base aprobada. No se encontró ese nombre en el inventario local. La guía visual tampoco dispone de binarios/prompts de comparación A/B ni seis estudios. | Registrar referencias no vinculadas. No asumir que una imagen local con nombre distinto es la misma ni declarar pérdida de una fuente previamente consolidada. La comparación visual requerirá identificar las piezas. |
| SC03 | Viajes/Drix no contiene Deseo torcido ni su activación. Los mensajes CH05 sí registran el pedido y aceptación del último ajuste. Ventisca todavía deja al Director elegir pertenencias, mientras CH04 pide evitar decisiones improvisadas sobre efectos. | Preservar ambos cortes; recuperar texto completo de la carta y mantener la tensión UX visible. No descartarla por omisión ni inventar el efecto. |
| SC04 | Viajes/Drix §9 deja máximo de 5 Motivación sin confirmación expresa; el archivo Viajes v1.2 lo documenta. General §37 todavía deja abierta la versión 1.1/1.2 sin recoger el alcance específico. | Registrar v1.2 Testing y salvedad de Motivación; no cambiar el máximo ni rediseñar el sistema. C20 sobre duración de etapas continúa. |
| SC05 | Plots §3 y general §17 repiten seis atacantes, cinco muertos, un suicida y líder escapado. Sigue sin precisar si el suicida está incluido en los cinco. | C24 continúa; no sumar una séptima criatura ni quitar una baja. |
| SC06 | Plots §§1,5,20 conserva sesión 2 como planeamiento, y omite parte del Farol Apagado que aparece en general §17 y en el original local. El chat previo aporta un adjunto descrito como sesión jugada, sin contenido recuperado. | C23 continúa. No sustituir el original solo por el nuevo resumen ni convertir rutas posibles en hechos. |
| SC07 | General §22 pide limpiar Port Ersag/Licove y afirma que existen como registros; visual §9 distingue `removed: true` para Port Ersag. La auditoría inicial ya distingue registros eliminados. | Existencia de registro no equivale a asentamiento activo. Mantener no canon según decisión del autor; cualquier limpieza técnica se propone primero, sin editar JSON. |
| SC08 | General §22 llama deliberado al cambio de bioma de Berk; visual §9 y las instrucciones iniciales mantienen la conciliación geográfica pendiente. | Registrar bosque de coníferas como dato del JSON. No cerrar descripción regional ni cultura por esa afirmación del snapshot; Berk sigue en revisión cartográfica. |

Estos desajustes no requieren generar lore. No se adopta un consolidado por ser más largo o reciente; se preservan los alcances y decisiones expresas, y los pasajes incompatibles permanecen detenidos.

## Cobertura que sigue pendiente

- CH03 y CH06: cronología fina de Spriggan y llegada de Jantry/Elián en 429 D.R. Los seis archivos no resuelven todos esos cruces.
- CH07–CH10: Aurora/septiembre, material de juegos de la Fiesta, Alegre Vagabundo y detalles de sesión permanecen en la evidencia de chats. No hay entre estos seis un consolidado específico de «Material para el DM» o del registro completo del Enigma. No hace falta reexportar todo el proyecto; se puede trabajar con la evidencia existente y pedir únicamente el contenido puntual no recuperado cuando sea necesario.
- Las contradicciones de Juramentos, macroarcos, cosmología, distancias y mecánicas propias que siguen en el plan anterior no desaparecen por recibir estos archivos.
- Las dependencias a `ROMANANCE_MASTER_CANON_*`, copias `(3)` y nombres antiguos se registran como referencias del entorno de origen, no como nuevos archivos faltantes que deban recrearse.

## Límite de esta ronda y orden de continuación

La recepción permite pasar de búsqueda general a consolidación por bloques. Primero se preservan las fuentes y sus estados; después se incorporan los reemplazos explícitos y datos compatibles. Se mantiene la matriz sección original → sección de destino antes de archivar cualquier fuente. Arte puede revisarse usando la guía textual y vinculando imágenes; una revisión de aspecto no crea lore ni obliga a rediseñar.

No se certifica que esté recuperado «todo» el historial. Lo pendiente es concreto y localizado: textos/archivos no vinculados y decisiones en conflicto. Esta ronda actualiza manifiesto y plan; no ejecuta movimientos ni cierra esas decisiones por cuenta del asistente.

## Actualización del 2026-10-09 — referencia de escritura

La referencia ornamental de SC02 está ahora disponible por entrega directa del autor: [recepción y cotejo](./RECEPCION_ESCRITURA_AURELIANA_2026-10-09.md). El MD recibido tiene el mismo hash que la recepción original. Se mantiene la tabla anterior como diagnóstico de aquel momento; la falta de esta imagen ya no es un pendiente actual. Las demás piezas de SC02 conservan su estado.
