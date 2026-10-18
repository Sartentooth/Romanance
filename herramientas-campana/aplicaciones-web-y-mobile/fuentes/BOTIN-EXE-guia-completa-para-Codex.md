# BOTÍN.EXE — Guía completa de continuidad y desarrollo en Codex

Fecha de consolidación: 12 de octubre de 2026.  
Autor y dirección del proyecto: **Sarten / Sebas**.  
Colaboración: **Reldor Dawncaller · ChatGPT / Codex**.  
Base de trabajo existente: **loot-generator.html**, versión visible **1.2**, herramienta personal del DM.  
Estado: proyecto en desarrollo; Loot y D100 implementados parcialmente y en revisión. No hay aprobación final de las tablas y fichas por parte del usuario en el historial disponible.

Este documento reúne requisitos, decisiones, comportamiento del archivo existente, pendientes y alternativas reemplazadas. No incluye código. Debe acompañar al HTML ya generado: **continuar desde ese archivo, no reconstruirlo desde cero**.

## 1. Objetivo y usuario

Crear una herramienta para el director de juego que agilice la preparación y el uso en mesa de D&D 2024, llamado informalmente D&D 5.5e en la conversación. Evitar perder tiempo buscando objetos, reglas y referencias en distintos manuales.

El usuario dirige su mundo propio, Romanance, y necesita libertad para añadir contenido y aplicar reglas de su mesa. Su grupo era de nivel 3 cuando se definieron los ejemplos de loot; ese dato no debe quedar fijado como restricción del programa.

Primero se desarrolla una versión personal funcional. Existe intención de pulirla y venderla en el futuro, posiblemente mediante una web propia o Play Store, pero esa etapa no está iniciada.

La herramienta es para el **DM**. Una herramienta para jugadores sería un proyecto o etapa posterior, con funciones propias. No introducir requisitos de jugadores en los flujos actuales.

### Requisitos generales aprobados

- Funcionamiento autónomo y sin conexión a internet, incluyendo consulta de contenido incorporado, creación y generación.
- Uso sencillo y rápido tanto durante la preparación como durante una sesión.
- Adaptación a smartphones y escritorio/web.
- Interfaz funcional, compacta y de inspiración DOS/terminal. La estética elaborada no es una prioridad.
- Español como idioma preferido de las fichas y controles.
- Posibilidad de crear contenido propio y reglas homebrew.
- Consultas rápidas mediante listas y buscadores, con texto explicativo y detalles de cada entrada.
- Respaldo y traslado de datos entre dispositivos.

**Límite actual:** el producto entregado es un HTML autocontenido que se abre en un navegador. No es todavía una aplicación Android instalable ni una publicación comercial. La forma de empaquetar la versión final no se decidió.

## 2. Principio transversal: una sola base de contenido

**Decisión expresa del usuario:** como todos los módulos trabajan a partir de listados, debe existir un único juego compartido de listas y datos del que se nutran todas las secciones.

Loot, Mercado, enfrentamientos, crafteo, editores y consultas deben reutilizar esa base. No mantener fichas independientes del mismo objeto para cada módulo.

La organización técnica se decidirá más adelante. No se aprobó una tecnología de base de datos, estructura de carpetas, framework ni formato definitivo.

### Consecuencias funcionales del principio

- Un objeto creado debe poder estar disponible en los módulos correspondientes según su tipo y configuración.
- Las referencias a objetos desde tablas deben aprovechar su ficha compartida.
- Los textos, atributos y referencias deben completarse en esa base común.
- El contenido original y las modificaciones homebrew deben distinguirse.
- Las exclusiones de generación deben ser claras: existir en una lista de consulta no obliga a aparecer en loot.

### Excepción y distinción importante

Las **tablas oficiales D100 son fijas**: mantienen sus nombres, entradas y rangos originales. Compartir las fichas no significa recalcular ni alterar sus probabilidades.

La tabla de equipo de 100 posiciones tiene la excepción acordada de 82 entradas más 18 selecciones aleatorias persistentes; su detalle aparece más abajo.

Los resultados históricos actuales conservan una copia de los datos del momento de la tirada. Esa persistencia sirve para que un cambio posterior de precios o fichas no modifique un loot ya generado. No confundir estos resultados con un segundo catálogo independiente.

**Pendiente:** el archivo actual todavía tiene un catálogo del prototipo y datos adicionales para D100. No afirmar que el principio de base única ya está resuelto en la implementación.

## 3. Módulos previstos y alcance real

| Módulo | Requisito funcional | Estado vigente |
| --- | --- | --- |
| Loot | Generar cofres, enemigos, grupos y otros hallazgos; ajustar riqueza, magia y rarezas | Implementado con reglas del prototipo; revisión pendiente |
| D100 | Resolver las tablas del DM y la tabla de equipo, con dado digital o físico | Implementado en 1.2; revisión de contenido pendiente |
| Catálogo y consultas | Buscar fichas, consultar detalles y crear objetos | Soporte actual del generador; no es aún el compendio completo |
| Homebrew | Crear/modificar reglas de mesa y definir dónde se aplican | Hay notas separadas y reglas de precios; motor general pendiente |
| Mercado | Oferta por categorías y economía del mundo | Pendiente |
| Enfrentamientos | Cantidad de enemigos, estadísticas y habilidades; agrupar los repetidos | Pendiente |
| Crafteo común | Armas, instrumentos, pociones y otros objetos; creación libre | Pendiente |
| Crafteo mágico | Crear objetos mágicos, separado del crafteo común | Pendiente |
| Especies/razas y subrazas | Crear contenido fuera del SRD y adaptarlo al mundo | Pendiente |
| Clases y subclases | Crear y modificar contenido propio | Pendiente |
| Trasfondos | Crear contenido propio | Pendiente |

Los editores de especies y clases siguen siendo necesarios aunque se usen poco: Sarten ya creó una especie y modificó contenido para su mundo. Se mencionaron Aureliano y Silente, pero sus rasgos no estaban disponibles. **No inventar esos rasgos ni convertir los nombres en fichas terminadas.**

### Listas de consulta solicitadas

- Objetos comunes/equipo no mágico.
- Objetos mágicos.
- Armas y armaduras.
- Dotes, separadas por tipo de dote.
- Conjuros.
- Reglas originales y reglas homebrew.
- Clases, incluidas las variantes que corresponda.
- Razas/especies y subrazas cuando se creen.
- Trasfondos.
- Monstruos.

Cada entrada debe tener explicación y detalles. Los buscadores deben facilitar encontrar información rápidamente. La clasificación exacta de estas listas queda por organizar sobre la base compartida.

## 4. Loot: generación existente

El generador de cofres y enemigos y la tirada D100 son mecanismos distintos. Las tablas D100 no sustituyeron las fórmulas del generador.

### Controles actuales

- Nombre opcional del próximo loot.
- Nivel de la party: 1–20.
- Dificultad: trivial, fácil, media, difícil y mortal.
- Fuente: cofre, enemigo individual, grupo u otro hallazgo.
- Cantidad de enemigos si se elige grupo.
- Multiplicador de riqueza: 0–10.
- Probabilidad de magia por intento: 0–100 %.
- Número de intentos mágicos: 0–20.
- Pesos de rareza automáticos según nivel o manuales.
- Opción expresa para permitir artefactos propios y porcentaje correspondiente.
- Restablecimiento de parámetros.

El multiplicador de riqueza afecta monedas, gemas y cantidad de equipo. La magia se configura aparte. Cada intento mágico puede generar un objeto; por ejemplo, tres intentos permiten entre cero y tres objetos antes de agrupar repeticiones.

Los objetos habilitados creados por el usuario pueden participar en el generador. Sarten probó este comportamiento y confirmó que sus objetos aparecían al marcarlos.

### Fórmulas documentadas en la aplicación actual

Estos valores describen el prototipo y **no deben presentarse como tablas oficiales del DM**.

| Banda de nivel | Riqueza base orientativa en PO |
| --- | --- |
| 1–4 | 10–60 |
| 5–10 | 60–400 |
| 11–16 | 400–3000 |
| 17–20 | 3000–12000 |

| Dificultad | Multiplicador |
| --- | --- |
| Trivial | 0,5 |
| Fácil | 0,75 |
| Media | 1 |
| Difícil | 1,35 |
| Mortal | 1,75 |

Cofre multiplica por 1,2; enemigo individual por 0,4; grupo y otro hallazgo por 1. En grupos se multiplica además por cantidad de enemigos dividida por cuatro.

Los pesos se normalizan entre rarezas que tienen objetos elegibles. Un peso cero excluye la rareza. Pueden repetirse objetos y se agrupan sus cantidades. Las gemas y piezas de arte provienen de valores de ambientación del prototipo.

No hay artefactos precargados: deben crearse y habilitarse expresamente.

## 5. Sorteo uniforme del catálogo

Existe un botón de sorteo que selecciona un objeto mágico entre los elegibles del catálogo, incluidos objetos propios habilitados.

Su comportamiento actual:

- Exige que la rareza tenga peso mayor que cero.
- Todos los objetos elegibles tienen la misma probabilidad individual.
- No usa la magnitud del peso como probabilidad ni el porcentaje de magia.
- Incluye artefactos solamente cuando están permitidos.
- No equivale necesariamente a sortear todo el catálogo sin filtros.

### Cambio aprobado y todavía no aplicado

**Mover el sorteo de la pestaña Loot a la pestaña D100.** Allí deben distinguirse dos bloques:

1. D100 por tablas: tablas originales del manual y tabla de equipo.
2. Sorteo del catálogo: objetos habilitados, incluidos propios, con sus filtros de rareza.

La pestaña Loot queda orientada a preparar cofres, enemigos y otros hallazgos.

El HTML 1.2 revisado para este documento **todavía muestra «Sorteo uniforme» en Loot**. No marcar la tarea como terminada hasta mover realmente el control y verificar su funcionamiento.

## 6. D100: solución vigente

Se eligió usar las tablas existentes del Manual del DM 2024 porque resultan más sencillas de utilizar que el sistema de apuestas por cercanía.

**La rareza la decide el DM en todos los casos.** En D100 no inferir ni imponer la rareza por nivel de la party. El nivel puede orientar al usuario, pero no determina la tabla automáticamente.

### Rarezas y familias

Los nombres de rareza en la interfaz deben ser:

**Común → Infrecuente → Raro → Muy raro → Legendario.**

No usar «épico» como sustituto de «muy raro» en las tablas actuales. «Artefacto» se trata aparte para contenido propio del generador; no añadir una sexta rareza a las tablas oficiales acordadas.

| Familia | Alcance señalado en la conversación |
| --- | --- |
| Armamento | Armas y armaduras |
| Instrumentos | Objetos de utilidad variados; no solo instrumentos musicales |
| Objetos arcanos | Familia del manual |
| Reliquias | Familia del manual |

Son cuatro familias por cinco rarezas: **20 tablas mágicas D100**. El archivo contiene 544 filas con intervalos; ese número de filas no significa 544 objetos distintos.

### Comportamiento existente en 1.2

- Elegir familia y rareza mediante botones.
- Seleccionar familia al azar con D4, como opción adicional implementada.
- Tirar D100 digitalmente.
- Ingresar el resultado de un dado físico.
- Tratar 00 como 100 en la resolución.
- Ingresar D4 físico opcional cuando la familia es al azar.
- Ver tabla y resultado con ficha disponible.
- Registrar la tirada en el historial persistente.
- Aplicar opcionalmente el reemplazo de pociones por Rocío de Ethen.

El mapeo D4 actual es: 1 armamento, 2 instrumentos, 3 objetos arcanos y 4 reliquias. Es una facilidad de la implementación actual; no se documenta aquí como una regla obligatoria del manual.

### Integridad de tablas

Los nombres y rangos oficiales quedan como en el manual. Una regla homebrew transforma el resultado si está activa, pero no reescribe la tabla original. Conviene poder reconocer qué objeto salió originalmente cuando existe reemplazo.

No decidir si un personaje puede usar el objeto como condición para mostrarlo. Sarten indicó que las restricciones de pergaminos corresponden al DM, no a la herramienta.

### Tabla de equipo de 100 posiciones

- Posiciones 1–82: entradas de equipo aventurero aportadas desde el SRD.
- Posiciones 83–100: 18 entradas seleccionadas aleatoriamente.
- Nueve de esas entradas corresponden a armas/armaduras.
- Nueve corresponden a herramientas.
- Las selecciones adicionales quedan persistentes hasta regenerarlas expresamente.
- Una recarga o una nueva tirada no debe cambiar esas 18 posiciones.
- Regenerarlas no debe alterar las primeras 82 entradas.

La extracción actual cuenta con listas auxiliares de 51 armas/armaduras y 25 herramientas. Los detalles y precios de las entradas adicionales no están completos ni todos revisados. Un precio pendiente no debe interpretarse como objeto gratuito.

## 7. Regla de Romanance: Rocío de Ethen

### Decisión de ambientación

En el mundo de Sarten no hay pociones de curación. Cuando sale una, se reemplaza por el brebaje **Rocío de Ethen**.

Es un brebaje **no mágico** de hierbas del campo, de receta élfica. Equilibra la mente y el cuerpo, permitiendo pensar con claridad o conjurar con calma en un momento de ansiedad. No cura por sí mismo ni debe describirse como una poción milagrosa.

### Efecto aprobado

- Se consume para activarlo.
- Es de un solo uso.
- El jugador elige aplicar el bonificador a una tirada de **Medicina**, **Supervivencia** o al **dado de un conjuro curativo**.
- Se mencionaron paladín y clérigo como ejemplos, no como clases exclusivamente permitidas.
- El efecto dura **una hora o hasta usar el beneficio, lo que ocurra primero**.
- Quedó asentado que no se acumulan bonificadores ni usos pendientes.
- Preparación y estacionado: **7–8 días**.

| Variante | Bonificador | Precio aprobado |
| --- | --- | --- |
| Común | +1 | 50 PO |
| Infrecuente | +1 | Pendiente |
| Raro | +2 | Pendiente |
| Muy raro | +3 | Pendiente |
| Legendario | +4 | Pendiente |

La clasificación por rareza identifica sus variantes aunque el brebaje sea no mágico.

### Implementación y límites

En D100 hay una opción «Aplicar Rocío de Ethen», activada por defecto para Romanance y persistente. Conserva el objeto original de la tabla y muestra el reemplazo como homebrew separada. La poción de la tabla de equipo se reemplaza por la variante común.

Debe comprobarse que el reemplazo se aplique donde corresponda en la futura base compartida y en todos los módulos necesarios; no asumir que todo el catálogo y el generador ya están armonizados con esta regla.

**Pendientes:** precios de variantes superiores, rendimiento por lote y posibles precisiones mecánicas que aparezcan al probarla. No inventar cantidades ni extender el bonus automáticamente a todas las tiradas o a todo un conjuro.

El precio de 120 PO fue una alternativa considerada y reemplazada por la decisión final de **50 PO para el común**. Cualquier otra escala de precios sugerida anteriormente no queda aprobada por este documento.

## 8. Homebrew: conservar siempre el original

**Decisión expresa:** no pisar las reglas originales; mostrar la regla homebrew en los ítems.

El objetivo futuro es poder crear o modificar reglas y elegir qué módulos deben verlas y aplicar sus cambios. El motor general de reglas todavía no existe.

Actualmente:

- Las fichas base conservan la información original y reciben notas homebrew separadas.
- Los objetos propios siguen siendo editables.
- Hay reglas específicas de precios.
- Hay una transformación específica para Rocío de Ethen en D100.

Estas funciones no equivalen todavía a un sistema completo de homebrew para combate, crafteo, especies y clases.

### Precios homebrew

El usuario detectó que los precios cargados se perdían al refrescar. Se corrigió y el usuario confirmó la persistencia.

Comportamiento vigente:

- Persisten hasta que el usuario los quite o desactive explícitamente.
- Es posible activar/desactivar su aplicación sin borrar las reglas.
- El precio original se conserva separado del precio efectivo.
- Se admite regla por ítem o por categoría.
- Una regla de ítem tiene prioridad sobre una de categoría.
- Se admiten precio fijo o multiplicador y una nota.
- Las reglas afectan nuevos resultados; no recalculan retroactivamente las listas históricas.
- Existen importación y exportación específicas de reglas de precios.
- El respaldo completo incluye las reglas y su estado de activación.

La economía general de Romanance y los precios del futuro Mercado aún no se definieron. Los precios del prototipo no deben convertirse en tarifas oficiales por accidente.

## 9. Resultados, historial y listas guardadas

La herramienta conserva resultados para el DM, pero una vez entregados a los jugadores muchas listas dejan de ser útiles. Sarten solicitó una limpieza masiva para no borrar veinte o más resultados uno por uno.

### Distinciones vigentes

| Acción | Efecto |
| --- | --- |
| Generar resultado | Se guarda automáticamente en el historial local |
| Guardar lista | Marca la lista para protegerla de la limpieza masiva |
| Limpiar historial | Borra en una operación los resultados no marcados como guardados |
| Limpiar pantalla | Oculta los resultados previos sin borrar el historial |
| Ver historial completo | Recupera la visualización de los resultados ocultos |
| Duplicar | Crea una copia sin marcar automáticamente como guardada |
| Eliminar individualmente | Permite gestionar una entrada concreta |

Hay buscador de resultados por nombre, objeto o notas. Los resultados admiten edición, duplicado y salida de texto.

**No confundir** «sin guardar lista» con «no persistente»: todas las tiradas persisten; la marca sirve para proteger de la limpieza masiva.

Sarten confirmó que persistencia, limpieza y guardado de listas funcionaban bien. Esto no reemplaza las pruebas de regresión después de futuros cambios.

## 10. Catálogo y presentación de las fichas

### Diseño solicitado y realizado

- Catálogo como lista compacta.
- Al seleccionar un objeto se despliega su ficha.
- El elemento activo queda resaltado para mantener la orientación al leer.
- El borde se resalta al pasar el mouse.
- Evitar mostrar todas las fichas abiertas al mismo tiempo en móvil.
- En resultados de loot, mostrar la información directamente, porque allí es útil y hay espacio.
- Etiquetas de rareza claras y de color propio.
- Acciones pequeñas junto al nombre del resultado.

### Datos existentes y deuda de contenido

El catálogo del generador conserva **88 entradas del prototipo: 73 mágicas y 15 de equipo**. No es el catálogo completo de D&D ni el conjunto de todos los objetos que pueden salir en D100.

El módulo D100 incorporó **184 fichas extraídas del SRD español**, además de tablas y listas de equipo. La extracción necesita revisión de formato, variantes y correspondencia exacta con los resultados. Los objetos exclusivos del Manual del DM no tienen todos sus textos incorporados.

Algunas entradas usan textos resumidos o heredados del prototipo; otras tienen referencia pendiente. **Incluir el texto de cada ítem para disponer de sus referencias es un requisito pendiente y explícito del usuario.**

Se cotejaron rarezas reconocibles con el Markdown inglés aportado. Las ambiguas se marcan para revisión y se excluyen del generador hasta clasificarlas. No dar por validada una ficha por haber corregido solamente su rareza.

Para el compendio final deberán distinguirse nombre, explicación, propiedades, rareza cuando corresponda, precio base y precio de mesa, requisitos de uso/sintonización, fuente y homebrew. Esta enumeración orienta la revisión; la estructura técnica final sigue pendiente.

## 11. Interfaz retro y adaptación a dispositivos

### Decisiones vigentes

- Marca: **BOTÍN.EXE**.
- En el lenguaje habitual del producto se prefieren «loot» y «lootear»; no se decidió cambiar la marca.
- Tres colores de monitor: verde, ámbar amarillo/anaranjado y monocromo blanco/gris.
- Preferencia de monitor persistente.
- Animación sencilla del nombre; el archivo actual usa un cursor titilante.
- Resaltar nuevos resultados con un efecto básico breve.
- Respetar reducción de movimiento cuando esté configurada.
- Menú/panel izquierdo compacto, inspirado en la segunda imagen aportada.
- Evitar menús desplegables en ese panel; usar opciones visibles mediante botones.
- Barras deslizantes para parámetros numéricos apropiados.
- Recuadros de rareza con su color propio.
- Menos texto repetido y mejor jerarquía de lectura.
- Mantener buscador en resultados.

Colores usados actualmente como referencia: común gris, infrecuente verde, raro azul, muy raro violeta, legendario dorado y artefacto tono cálido. No se fijaron códigos de color como requisito inmutable.

### Diseño final pendiente

Sarten propuso estudiar una vista conjunta de las herramientas de loot/tiradas en escritorio, aprovechando el ancho disponible. En móvil no quiere una única pantalla excesivamente larga que obligue a mucho scroll.

**Estado:** es una evaluación para el diseño final, no una decisión de eliminar ya todas las pestañas ni de mostrar todos los módulos a la vez.

## 12. Offline, persistencia y respaldos

El HTML actual contiene aplicación y datos incorporados, sin cuentas ni dependencias de red para generar resultados. Los enlaces externos de las referencias no sustituyen fichas offline.

Guarda en almacenamiento local del navegador, si está disponible. No existe sincronización automática entre dispositivos.

### Capacidades existentes

- Respaldo completo JSON de catálogo, parámetros, exclusiones, reglas de precios, activación, preferencias y resultados.
- Respaldo de tablas de equipo generadas y preferencias D100.
- Importación validada con confirmación antes de reemplazar datos.
- Exportación/importación de catálogo por separado.
- Exportación/importación de reglas de precios por separado.
- Aviso si no se puede guardar.
- Protección contra sobrescribir datos previos que no se pudieron leer correctamente.

Abrir otra copia del HTML, cambiar de navegador, borrar datos del navegador o usar otro dispositivo puede cambiar el almacenamiento disponible. Exportar respaldo antes de trasladar la mesa.

Las futuras migraciones deben conservar datos existentes y listas marcadas como guardadas. El cambio a una base compartida no autoriza borrar contenido propio ni homebrew.

## 13. Fuentes, versión personal y futura distribución

### Material aportado a lo largo del trabajo

- SRD 5.2.1 en Markdown inglés descargado por el usuario desde un repositorio de GitHub.
- SRD 5.2.1 oficial en español, PDF descargado de D&D Beyond.
- Manual del Dungeon Master 2024 en español, PDF de aproximadamente 84 MB.
- Extracto de tablas de objetos mágicos aleatorios del DM.
- Extractos de equipo aventurero, armas, armaduras y herramientas.
- HTML inicial realizado con Claude y aportado por Sarten.
- Capturas de interfaz y referencia de diseño del panel.

En mensajes tempranos se mencionó SRD 5.2. El material concretamente recibido para trabajar incluye **5.2.1**. Conservar esa distinción en la documentación.

### Alcance de contenido acordado

Sarten tiene clara la diferencia entre uso personal y venta y pidió trabajar primero en la versión personal. Los textos ajenos al SRD aportados desde manuales se tratan dentro de ese alcance; no asumir que están autorizados para una futura distribución comercial.

La aplicación actual incluye atribución al SRD 5.2.1 y a su licencia Creative Commons Attribution 4.0. Conservar esa atribución. Este documento no realiza una auditoría legal nueva ni declara comercializable el contenido completo incorporado.

Para una futura versión comercial queda pendiente revisar qué contenido se distribuye y las condiciones aplicables entonces. No mezclar silenciosamente textos de manuales personales con el paquete público.

### Créditos acordados

- Sarten / Sebas: idea, mundo, reglas de mesa y dirección.
- Reldor Dawncaller · ChatGPT / Codex: diseño e implementación en colaboración.
- Prototipo inicial aportado por Sarten, realizado con Claude.
- Atribuciones exigidas por las fuentes utilizadas.

Los créditos propios deben figurar además de la atribución a Wizards of the Coast, no en su lugar.

## 14. Cambios ya registrados en el archivo

| Versión visible documentada | Trabajo registrado |
| --- | --- |
| 1.0 | Generador offline, historial, edición, catálogo propio y respaldo completo |
| 1.1 | Tres monitores retro, catálogo desplegable, fichas visibles, créditos y homebrew separada |
| 1.1.1 | Panel izquierdo con botones y recuadros de rareza |
| 1.1.2 | Precios homebrew persistentes, guardar listas y limpieza masiva protegida |
| 1.2 | D100, 20 tablas mágicas, familia por D4, dado físico, equipo de 100 posiciones y Rocío de Ethen opcional |

Estos números corresponden a la aplicación. No inventar una versión nueva de la app por haber redactado este documento.

### Verificación conocida

En el trabajo previo se ejecutaron pruebas de lógica con un entorno simulado: persistencia y migración, precios y su desactivación, protección de listas, respaldos, monitores y resolución de D100. Se recorrieron las 2000 combinaciones de resultado de las 20 tablas mágicas, además de equipo y casos de Rocío de Ethen.

**Limitaciones:** esas pruebas no equivalen a revisión visual en navegador real ni a cotejar todos los textos contra los manuales. La prueba visual completa de móvil y escritorio seguía pendiente. No se volvió a ejecutar la suite para producir esta guía; esta entrega no modifica la app.

## 15. Pendientes para cerrar Loot y D100

### Contenido y coherencia

- [ ] Recibir la revisión de Sarten; todavía no hay confirmación final registrada.
- [ ] Cotejar nombres y rangos de las tablas con el manual y corregir posibles errores de extracción.
- [ ] Completar los textos de los ítems y sus referencias.
- [ ] Revisar las fichas extraídas del SRD: formato, variantes y correspondencia.
- [ ] Completar fichas exclusivas del DM para la versión personal.
- [ ] Revisar las 82 entradas de equipo.
- [ ] Completar y revisar datos de armas, armaduras y herramientas usadas en las 18 posiciones extra.
- [ ] Revisar precios heredados y representar claramente los pendientes de tasación.
- [ ] Definir cómo unificar el catálogo del prototipo y el contenido D100 sin alterar tablas ni resultados previos.
- [ ] Verificar el alcance del reemplazo de pociones por Rocío en todos los generadores aplicables.

### Funciones y diseño

- [ ] Mover Sorteo uniforme a la pestaña D100 y diferenciarlo de las tiradas por tablas.
- [ ] Probar la función de sorteo después del traslado y evitar dependencia confusa de controles ocultos de Loot.
- [ ] Reducir texto repetido y mejorar presentación dinámica de ayuda y fichas.
- [ ] Probar interfaz real en móvil y escritorio, incluyendo tablas y textos largos.
- [ ] Comprobar uso completo: generar, resolver dado físico, buscar, editar, guardar, limpiar, exportar e importar.
- [ ] Actualizar registro de cambios y tareas con trabajo realmente terminado.

### Decisiones de mesa pendientes

- [ ] Precios de Rocío infrecuente, raro, muy raro y legendario.
- [ ] Rendimiento por lote de Rocío si se necesita para crafteo/mercado.
- [ ] Resolver precisiones mecánicas que plantee Sarten al probar las fichas.

Los precios de variantes de Rocío pueden permanecer pendientes sin bloquear el cierre funcional del módulo, siempre que se muestren como pendientes.

## 16. Etapas posteriores

La secuencia conversada fue cerrar y revisar Loot/D100 y luego avanzar al Mercado. No existe todavía un cronograma ni especificación detallada de los módulos futuros.

### Mercado

Mostrar armas, armaduras, herboristería, cueros, herramientas y otras categorías solicitadas, según la economía del mundo. Debe consumir la base compartida y mostrar objetos creados mediante crafteo cuando corresponda.

Pendiente definir tipos de mercado, disponibilidad, existencias, fórmulas de precio y controles. No introducir fórmulas económicas nuevas como decisiones ya aprobadas.

### Enfrentamientos

Generar cantidad de enemigos, estadísticas y habilidades. Si se repiten, mostrar cantidad en vez de duplicar fichas completas. Presupuesto de dificultad, selección de monstruos y reglas de generación aún por definir.

### Crafteo

Permitir fabricar objetos existentes y crear otros no incluidos, desde armas e instrumentos musicales hasta pociones. Separar crafteo común y mágico. Integrar los resultados con el catálogo y Mercado. Recetas, costos, tiempos, requisitos y rendimiento siguen pendientes salvo los datos concretos de Rocío.

### Editores y compendio

Incluir creación de especies/subrazas, clases/subclases y trasfondos, además de las listas de consulta. No suponer que hay reglas universales oficiales para balancear cualquier creación: revisar las fuentes que se aporten y distinguir reglas de propuestas de diseño.

### Mejora de última etapa

Crear tablas personalizadas de D100 u otro dado según necesite el DM. Deben distinguirse de las tablas oficiales fijas. Esta mejora se pospuso expresamente para el final.

## 17. Alternativas anteriores reemplazadas o en pausa

### Apuesta D100 por número, lado y cercanía

Antes de adoptar las tablas del manual se estudió este juego:

- El jugador elige un número del 1 al 100 y un lado, arriba o abajo.
- Se tira D100 y se calcula la diferencia respecto del número elegido.
- Acertar el lado mantiene la tabla de cercanía; errarlo desplaza una tabla hacia un resultado inferior.
- El número exacto tiene una resolución especial.
- Cada tabla de premio debía tener 20 objetos aleatorios y resolverse después con D20.

Hubo expresiones iniciales ambiguas de los intervalos. En una aclaración posterior se dio el ejemplo de elegir 50 y arriba: 50 especial, 51–55 muy cercana, 56–60 cercana, 61–65 normal y 66–100 comunes; se indicó el mismo comportamiento inverso. El planteo anterior incluía además una «tabla menor». También se habló de compartir tabla entre exacto y muy cercano antes de nombrar exacto como especial.

**No resolver esas diferencias por cuenta propia:** el esquema no quedó como solución activa y debe volver a confirmarse si se retoma. Elegir 1 y arriba puede beneficiar el acierto de lado; Sarten lo entendió y aceptó como parte del juego, no como un defecto que hubiera que corregir.

**Estado vigente:** en pausa, sustituido como prioridad por las tablas oficiales D100. No implementarlo al continuar esta etapa.

### Otras ideas reemplazadas o sin aprobar

- Elegir «común, poco común, raro, épico, legendario, artefacto» era terminología de una solución anterior; para las tablas actuales usar los cinco nombres aprobados.
- Quitar completamente el sorteo fue una alternativa inicial. La decisión posterior es **trasladarlo a D100**, no eliminarlo.
- Una única vista en escritorio se estudiará en el diseño final; no está implementada ni se exige en móvil.
- 120 PO para Rocío común se descartó en favor de 50 PO.
- No se decidió una plataforma técnica definitiva ni publicar en Play Store ahora.

## 18. Criterios de continuidad para Codex

1. Leer el HTML existente y esta guía antes de cambiar la estructura.
2. Conservar las funciones útiles ya probadas y los datos del usuario.
3. Distinguir en el registro: aprobado, implementado, probado, pendiente y propuesta.
4. No marcar como completado algo que solo se acordó en conversación.
5. Mantener tablas oficiales y contenido original separados de homebrew.
6. Aplicar el principio de base compartida sin recalcular los loots históricos.
7. No inventar textos, precios, estadísticas ni rasgos faltantes.
8. Completar referencias offline; no sustituirlas por enlaces que obliguen a buscar durante la partida.
9. Hacer cambios concretos y pruebas apropiadas, informando sus límites.
10. Priorizar rapidez y claridad en mesa por encima de agregar opciones que alarguen los flujos.

### Propuesta de próximo bloque de trabajo, aún sujeta a la revisión del usuario

Recibir correcciones de Sarten, completar y revisar contenido, definir la organización de la base compartida y aplicar el traslado del sorteo. Después verificar persistencia, respaldos y uso real en los dos tamaños de pantalla. Avanzar al Mercado cuando Loot/D100 estén suficientemente cerrados.

## 19. Cobertura de esta consolidación

Se usaron el historial visible de esta conversación, el resumen de continuidad disponible, el archivo vigente `loot-generator.html` y el documento `BOTIN-EXE-principios-del-proyecto.md`.

El archivo vigente se consultó y coincide con la versión visible 1.2 descrita aquí. La nota de principios confirma la base compartida, las tablas D100 fijas, las tablas personalizadas futuras y el traslado pendiente del sorteo.

No se volvieron a cotejar página por página los manuales, el SRD ni las imágenes originales para redactar esta guía. No se incorporan aquí sus textos completos ni las filas de las tablas: ya están parcial o totalmente en el HTML y sus fuentes. El documento describe el alcance y las revisiones pendientes; no certifica que todo el contenido extraído sea correcto.

No hay en el historial disponible una respuesta posterior de Sarten aprobando su revisión de tablas y fichas. Mantener esa aprobación como pendiente.

La app existente no fue modificada durante esta consolidación.
