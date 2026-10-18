# Prototipo 0.2 — ajustes para probar en mesa

**Fecha:** 2026-10-17. **Estado:** implementación local para revisión del autor. No es la aplicación integral terminada ni una entrega comercial. Procedencia: decisiones directas del autor en el chat, posteriores a la guía recibida.

[Abrir herramienta](./dist/index.html) · [Base de producto](../base-de-producto.md) · [Captura móvil](./capturas/loot-0.2-mobile.png) · [Captura escritorio](./capturas/loot-0.2-escritorio.png)

**Resumen vigente para continuar:** [Estado y pendientes](../ESTADO-Y-PENDIENTES.md). Este documento conserva las tandas en orden; sus correcciones posteriores prevalecen sobre el estado inicial y no implican que todos los pendientes históricos sigan abiertos.

## Alcance de esta tanda

- Pantalla compacta, pestañas de texto y paneles plegados. Inicialmente plegados; desde la revisión posterior del 2026-10-17, los paneles que abre el usuario permanecen abiertos al cambiar opciones y navegar entre secciones durante esa apertura de la app, hasta cerrarlos manualmente. Pueden abrirse varias fichas simultáneamente. El resultado nuevo se abre y recibe foco visual; los anteriores se conservan plegados. Temas verde, ámbar y monocromo.
- Loot rápido en un botón: presupuesto personal/acumulado y cantidad de magia por VD; rarezas por nivel de party. Ajustes manuales independientes: dificultad, riqueza, probabilidad y máximo de magia, pesos de rareza y excepción expresa para artefactos propios. El máximo manual parte de uno y admite otros valores. El modo rápido conserva las cantidades de la referencia DMG, que pueden superar uno.
- Monedas, gemas y arte comparten un presupuesto exacto: no se agrega un excedente del 25 % ni del 50 %. El resto se completa en monedas. La selección de hasta cuatro gemas/obras que caben es una decisión del prototipo, no una tabla de frecuencia atribuida al manual. Magia y equipo se informan por separado.
- D100 separado de Loot: veinte tablas preservadas del HTML original, ingreso de dado físico (00 = 100), familia al azar y sorteo uniforme independiente. Equipo de cien posiciones: primeras 82 preservadas y últimas 18 regenerables, nueve armas y nueve herramientas.
- Biblioteca única para objetos, conjuros, reglas y contenido propio; sin pestañas duplicadas de Conjuros y Reglas. Las modificaciones identifican Homebrew y conservan la referencia original consultable.
- Formulario único de Homebrew: tipo primero; campos que no corresponden ocultos y deshabilitados. Objetos, servicios, conjuros, reglas, dotes, trasfondos, especies, clases y subclases. Alcance global o varios contextos; autoría, versión, procedencia y condiciones de uso.
- Mercado con objetos y servicios, cantidades, descuento elegido por el DM, total y exportación TXT. Pago mixto en platino, oro, electro, plata y cobre; vuelto automático con electro opcional y comprobación de una combinación alternativa. Se informa cualquier precio pendiente; no se transforma en cero.
- Disponibilidad manual del DM o renovación aleatoria de stock con mínimo configurable. Las herramientas del comerciante no bloquean fabricación. No hay caja comercial, billetera de PJ, calendario ni seguimiento de encargos.
- Crafteo: materias primas, objeto base comprado o fabricado, extras, costo total, tiempo y requisitos informativos. Recetas comunes, mágicas, pociones, pergaminos y propias. No se cobra dos veces un concepto de fabricación. Los cálculos monetarios usan unidades enteras de cobre; tiempos de objetos comunes se redondean a días completos por unidad en este prototipo.
- Rocío de Ethen actualizado a la decisión vigente del 2026-10-14: fabricación de 25 PO y siete días; precio de venta pendiente. Su ficha reemplaza las pociones de curación en el contexto Romanance. Tömörbaatar permite consultar Yunque Certero. Las reglas narrativas se muestran como referencia; no se interpretan como código.
- Respaldo completo y restauración con vista previa y confirmación. Paquetes JSON de contenido propio separados del respaldo: vista previa, alcance elegido al importar, IDs coincidentes omitidos o copiados, sin sobrescritura silenciosa. Importados inicialmente desactivados; se habilitan desde Contexto. No exportan historias ni nombres de contextos con el paquete compartible.
- Contextos limitados a contenido y reglas. Se mantiene la decisión de que esta herramienta **no es un gestor de campañas**.

## Prueba sugerida al autor

1. En Loot, generar rápido y luego probar manual con magia al 100 % y máximo uno. Comparar monedas + gemas/arte con el total; subir el máximo para comprobar la elección del DM.
2. En Mercado, elegir Servicios, agregar cerveza y cambiar la cantidad. Abrir Pago y vuelto y combinar monedas. Probar también un objeto con precio pendiente.
3. En Crafteo, comparar referencia general y Tömörbaatar; probar una receta mágica con base y un pergamino. Revisar costo y tiempo, sin restricciones de herramientas del comerciante.
4. En Homebrew, alternar Regla, Conjuro y Objeto. Crear una variante y comprobar el original conservado, alcance y activación por contexto.
5. Exportar un respaldo antes de cambiar de navegador o forma de apertura. Compartir contenido propio por JSON, importar con un ID coincidente y comprobar que no cambia la ficha existente.

## Verificación realizada

`scripts/check-v2.cjs` comprueba cobertura de los 2.000 resultados de las veinte tablas D100, referencias válidas y IDs únicos; mil generaciones rápidas por niveles, cien generaciones manuales con máximo uno, presupuesto monetario exacto, cinco monedas y vuelto, recetas y bases, Rocío, migración del estado 0.1 y paquetes con colisiones/desactivación inicial. Pasó junto con las comprobaciones de sintaxis.

En navegador: formulario de reglas sin precio ni herramientas; compra de tres cervezas (12 PC), pago con 1 PO y vuelto de 1 PE + 3 PP + 8 PC; descarga de respaldo y restauración confirmada con aviso visible; generación rápida y persistencia al recargar. Vista móvil de 390 × 844, contenido sin desborde horizontal de página (la barra de pestañas tiene su propio desplazamiento), resultado nuevo abierto y anteriores plegados. Sin errores de consola en ese recorrido. Las capturas documentan el estado de prueba, no contenido canónico nuevo.

Los JSON mal formados, tipos/cantidades inválidos y alcances inexistentes se rechazan. Los efectos escritos no se ejecutan. La validación no determina equilibrio mecánico ni autenticidad de la autoría declarada.

## Límites pendientes al entregar 0.2 — registro inicial

- La biblioteca reúne 1.086 entradas, pero parte de las referencias mágicas D100 aún tiene ficha descriptiva pendiente o extracción heredada sin cotejo editorial. No equivale a disponer del texto completo y validado de todos los objetos del DMG.
- Precios de magia dependientes de una base o del nivel del conjuro requieren completar esos datos. Servicios sin tarifa cerrada permanecen pendientes. La comida lujosa tiene discrepancia entre las fuentes revisadas y no se resolvió por inferencia.
- Las reglas propias descriptivas no constituyen un motor genérico de ejecución de reglas. Crear una clase o subclase guarda su ficha y progresión escrita; no crea una hoja de personaje automatizada.
- Pendientes de futuras tandas: generador de encuentros integrado con loot, demás sistemas planteados, revisión editorial completa, distribución autorizada del contenido y experiencia bilingüe. No se añaden a esta tanda para retrasar la prueba.
- La incorporación de referencias del DMG para estudio local no declara autorizado distribuir comercialmente su texto. La ayuda incluye atribución SRD y procedencia; revisión de contenidos/licencias sigue pendiente antes de publicar.

## Ejecución y datos

Abrir `dist/index.html` con sus archivos adyacentes funciona sin internet. Para vista previa HTTP local usar `node scripts/serve.mjs` desde esta carpeta; escuchar solo en 127.0.0.1 y detener con Ctrl+C. Almacenamiento de archivo y HTTP puede ser diferente: exportar/restaurar para trasladar datos.

La clave del prototipo 0.1 se conserva y migra a esquema 2 manteniendo contenido e historial. El generador original 1.2 y sus datos propios no se modifican ni se migran automáticamente. `core.js` y `app.js` anteriores permanecen; la entrada actual usa `core-v2.js` y `app-v2.js`, con el núcleo anterior para migrar.

Regenerar catálogo/entrada: `node scripts/build-data.mjs`. Comprobar: `node scripts/check-v2.cjs`. Fuentes locales preservadas en `../fuentes/`; los PDF originales no se modifican.


## Revisión posterior a las anotaciones del autor — 2026-10-17

- Una única acción «Crear homebrew» sobre la base; «Editar homebrew» para contenido propio existente. El formulario distingue crear contenido independiente y reemplazar una referencia por contexto, conservando la base. Marca turquesa (#45ded1), independiente de las rarezas.
- Los paneles abiertos/cerrados conservan su estado al recalcular y al navegar durante la sesión. Se retira el cierre automático de fichas hermanas. Los filtros del sorteo independiente y los valores del dado físico tampoco se vacían al generar su resultado.
- Loot muestra la descripción y los atributos conservados de los objetos no mágicos. Los snapshots nuevos también incluyen atributos y bonificaciones de los objetos propios. Los resultados históricos mantienen la información que tenían al generarse.
- Inputs y menús de una misma fila alineados por su base, con igual altura; ampliación del panel de cálculo de Crafteo.
- Crafteo agrega creación de objetos nuevos e «Imbuir magia», mediante el formulario homebrew compartido. Elección de rareza, habilidades escritas, bonificación mágica +1/+2/+3, materiales de receta anotados y vista previa de costo/tiempo. Las plantillas respetan mínimos distintos para armas/escudos y armaduras (SRD ES pp. 235 y 252). Otras propiedades necesitan evaluación del DM; no se garantiza balance automático de efectos arbitrarios.
- Valor mágico de referencia por rareza (SRD p. 225), con precio de la base sumado y reducción por consumible. Botón explícito para aplicarlo al precio de una ficha; puede conservarse el valor elegido por el DM. Los pergaminos siguen su regla específica, no ese botón genérico.
- Elementos y costos: texto de componentes conocidos, presupuesto de materias primas, base y extras separados. Los manuales no proporcionan recetas detalladas de cada materia para cualquier objeto; una ficha sin esa información lo dice. El presupuesto de receta y la mano de obra no se duplican como cargos inventados.
- Margen bruto del comerciante: venta total menos fabricación total. Venta editable opcional; admite pérdidas. No es un beneficio neto después de gastos generales ni una tarifa comercial que se atribuya al manual.
- D100 aclara que usa rangos de tablas y el D4 opcional elige familia. «Elegir un objeto al azar» selecciona uniformemente la biblioteca con filtros independientes; no es otra tirada sobre las tablas.

La idea de combinar cristales, minerales y materiales de los PJ se conserva como ampliación futura del creador. Requiere reglas propias de interacción y evaluación de resultados; no se convierte por inferencia en un sistema oficial ni en canon de Romanance.

Verificación adicional: pruebas de las rarezas de armas/armaduras/escudos +1/+3, valor mágico con base (armadura de placas +1 = 5500 PO), componentes exportables y bonificación conservada en snapshots. En navegador: cambiar pesos no cierra los dos paneles de Loot; cambiar fabricante/cantidad conserva requisitos y elementos desplegados; cambiar familia conserva la tabla D100 abierta; sortear mantiene el filtro Raro; creación de una hoz de prueba +1 conserva base y efecto, calcula costos y admite margen negativo sin error. Ficha de prueba identificada como tal, sin incorporación al canon.

Control visual adicional: cantidad y fabricante terminan a la misma altura; panel Crafteo ampliado; marca Homebrew verificada en turquesa. Ancho móvil 390 × 844 sin desborde horizontal de página. [Captura de la revisión de Crafteo](./capturas/crafteo-revision-0.2.png).


## Revisión de propiedades mágicas y referencias — 2026-10-17

Etiquetas separadas también en Crafteo. Texto compuesto de descripción, propiedad mágica, bonificación y atributos sin repetir bloques iguales; no se borran campos originales de las fichas guardadas. La referencia original pasa a un botón de consulta, sin reproducir su ficha debajo de la creación.

Campo explícito «Propiedad mágica / habilidades». Una nueva creación marcada mágica sin bonificación debe describir su efecto o partir de una referencia ya mágica. Rareza y valor no generan efectos por sí solos. La descripción de propiedades no ejecuta reglas automáticamente.

Se admiten +4/+5 como homebrew: no se extrapolan rarezas ni tarifas oficiales de las plantillas +1/+2/+3. Requieren rareza y receta propias decididas por el DM. La vista previa mantiene como pendientes costo y días vacíos. Pruebas de lógica y sintaxis pasadas para +4/+5, receta pendiente, deduplicación y propiedad conservada en snapshots/paquetes.


## Corrección por las fuentes aportadas — 2026-10-17

El autor aporta `C:/Users/Sarten/Downloads/TESOROS DMG PAG 216 A 327.pdf` y una captura de «Poder de objetos mágicos según su rareza». Se cotejan visualmente las páginas impresas 217, 220–223 del PDF escaneado y la tabla adjunta. El archivo tiene 113 páginas sin capa textual; el número impreso prevalece sobre el nombre del archivo al citarlo.

**Prevalece sobre el registro anterior:** el límite de las fichas genéricas +1/+2/+3 no es el límite de la guía de diseño. La tabla de diseño admite un máximo de +4 para legendarios; +5 sigue fuera de esa guía. Se corrige la plantilla +4 para elegir Legendario y permitir costo/tiempo por rareza, sin exigir una receta arbitraria. Sigue siendo contenido propio diseñado con orientación DMG, no una ficha genérica del catálogo oficial. Pruebas: +4 con base de 50 PO = 100050 PO y 250 días; se rechaza situarlo por debajo de Legendario en el cálculo; +5 no obtiene tarifa oficial automática.

La guía señala máximos por rareza: nivel de conjuro 1/3/5/8/9 y bonificador —/+1/+2/+3/+4. Son orientaciones para diseñar efectos; no dan por equilibrada cualquier combinación, frecuencia de uso o acumulación de propiedades.

Se confirma la diferencia entre valor de referencia de mercado y fabricación, la base adquirida o fabricada por separado, las jornadas de ocho horas, ayudantes, competencias/herramientas, conjuros preparados cuando el objeto permite lanzarlos y la regla específica de consumibles/pergaminos. Las comprobaciones de disponibilidad siguen siendo informativas para el DM según las decisiones de producto vigentes; no se agrega una restricción automática al mercado.

**Dirección de interfaz propuesta, pendiente de desarrollar:** dos recorridos con cálculo compartido. Crear objeto: define objeto, base opcional, propiedades, rareza y receta. Imbuir magia: parte de una base existente, conserva sus propiedades físicas y permite añadir efectos, bonificación, activación, cargas y requisitos. Debe distinguir base ya disponible de base por comprar o fabricar, para no cobrarla nuevamente; el prototipo actual todavía no tiene esa opción. No se presume una tarifa oficial de mejora por diferencia entre dos encantamientos.


## Bonificador opcional y propiedades mágicas independientes — 2026-10-17

Aplicado el criterio confirmado por el autor: «Sin bonificador» es el punto de partida; cambiar rareza no asigna bonos. Se elige aparte conjuro de biblioteca, aptitud mágica o ambos; también se puede usar solo una bonificación. Armas y armaduras admiten propiedades menores sin bonificador, sin exclusión automática por ser comunes. La guía de diseño muestra máximos; no concede todos los beneficios ni garantiza el balance de su combinación.

El selector de conjuros busca en la biblioteca habilitada del contexto, incluidos los conjuros propios. Guarda nombre, nivel y referencia, activación, usos diarios/cargas/a voluntad/consumo, recuperación y condiciones. Un conjuro nuevo se crea primero como ficha de biblioteca; esta tanda no agrega un segundo editor de conjuros dentro del modal. Avisos por superar el nivel de referencia o por un conjuro de nivel 1 a voluntad en un común; no se cambia la rareza automáticamente. Los efectos se conservan en la ficha, snapshots y JSON; importar como copias remapea la referencia si el conjuro propio está incluido en el paquete. Si se comparte un objeto que usa un conjuro propio, incluir también la ficha del conjuro para compartir sus reglas completas.

«Imbuir magia» abre un recorrido sobre el objeto seleccionado: propiedades físicas plegadas, sin cambiar tipo/referencia, magia activada y bonificación inicialmente cero si la base no era mágica. «Crear objeto nuevo» mantiene la definición física. Ambos comparten formulario y cálculo. Mejorar un objeto ya mágico solicita una receta propia; no se inventa una tarifa oficial por diferencia.

La base puede comprarse, fabricarse o estar ya disponible. Aportarla no suma costo ni días de base. El valor de referencia de venta conserva el valor de la base aunque ya esté disponible; costo de elaboración y valoración de mercado son distintos. La decisión sobre cómo obtener la base pertenece a la consulta actual, no a un inventario ni a la ficha compartida del objeto. Se aplica también a bases de objetos que no son armas ni armaduras. Recetas propias mágicas con base explícita separan su costo de receta y el de la base.

Comprobaciones: amuleto de prueba con Luz, común, bono cero y un uso diario; 50 PO/5 días con base aportada, 55 PO/5 días al comprar la base de 5 PO. Editar/recargar conserva el conjuro. Proyectil mágico a voluntad en común muestra aviso; elegir Raro no agrega un bono. Sin errores de consola en el recorrido. Modal móvil de 390 × 844 sin desborde horizontal. Pruebas de lógica verifican además paquetes con conjuros, IDs remapeados, guía sin mutaciones, costos con base disponible/comprada/fabricada y respaldo de snapshots largos.

[Captura de objeto mágico sin bonificador](./capturas/magia-sin-bonificador-0.2.png). Las fichas de prueba se identifican como pruebas de interfaz y no se incorporan al canon.

## Catálogo compartido, referencias y monedas — 2026-10-17

Todas las secciones consultan el catálogo común habilitado en el contexto; no se crean copias por módulo. Referencias del editor con filtro de tipo, búsqueda y grupos; los selectores de Crafteo también agrupan las mismas fichas. Al abrir o elegir una referencia, atributos que ya están incluidos en la descripción no se vuelven a cargar en el segundo campo. Los datos originales guardados permanecen disponibles.

Crear al azar usa ese catálogo y abre un borrador editable sin guardarlo. Permite tipo, base opcional y magia. Armas y armaduras usan plantillas +1/+2/+3; una base mundana de otra categoría puede recibir un conjuro habilitado de nivel 0 o 1, sin bonificación, común y con un uso diario. Son propuestas de homebrew para revisar; no nuevas fichas oficiales. Si se elige una plantilla ya mágica se conservan sus efectos, sin inventar otros.

Oro, plata y cobre son la presentación predeterminada. Platino y electro se reciben desde «Monedas opcionales» y pueden habilitarse para presentar importes y vuelto. Cada contexto permite equivalencias propias expresadas en cobre entero. Romanance ofrece desactivadas las tres denominaciones de Luz con las equivalencias del canon: Aurora 5 PC, Zenith 5 PP, Ocaso 5 PO. Se incluyen en el respaldo completo. El vuelto conserva exactamente el valor; no se promete la combinación con menos monedas para equivalencias arbitrarias.

Se amplía la importación de equipo a las tablas de monturas, arreos y vehículos del SRD: precios, capacidad de carga, peso y estadísticas de vehículos grandes cuando la tabla los proporciona. Estabulación es un servicio diario. Monturas y vehículos no entran en loot ni reciben una receta de fabricación inventada. El catálogo queda en 1111 fichas, incluidos 339 conjuros y 154 entradas del glosario; esto no significa que todas las fichas mágicas estén completas.

La revisión detecta descripciones concatenadas en la extracción heredada del HTML. El importador corta el siguiente encabezado con categoría para evitar mostrar varios objetos como una sola ficha. Se mantiene el estado pendiente de cotejo. La extracción preliminar por columnas `dist/dmg-source.json`, generada por `scripts/extract-dmg.py`, es material de revisión y **no se carga en la aplicación**: contiene errores de OCR y encabezados de ilustraciones. Falta cotejar y completar las fichas mágicas y variantes de las veinte tablas contra el PDF. No dar el catálogo por completo hasta cerrar esa auditoría; tampoco añadir otra lista paralela de objetos ingleses que duplique los existentes.

Pruebas de lógica: moneda por contexto, vuelto exacto con Luz, entradas inválidas, respaldo, borradores sin mutar originales, selección de base incompatible y propiedades del dirigible. Pasa `scripts/check-v2.cjs` y la sintaxis de `dist/app-v2.js`. Comprobación en navegador: selector agrupado, búsqueda «daga», borrador mágico editable, segundo campo sin duplicado y pago con las tres monedas base; diálogo de equivalencias de Romanance visible. Esta tanda no guarda fichas aleatorias de prueba.

### Ajuste de monedas visibles y precio — 2026-10-17

Pago y combinación de vuelto muestran únicamente las monedas habilitadas en la configuración del contexto. Si no hay extras habilitadas, desaparece «Monedas opcionales». Deshabilitar una moneda excluye sus cantidades del pago; se conservan guardadas para recuperarlas al habilitarla, también al modificar cantidades de otras monedas. «Usar valor por rareza · SRD» comparte fila con el precio unitario en el editor; se oculta para tipos que no son objetos.

Verificado en navegador: solo PO/PP/PC con extras desactivadas; al habilitar platino aparece únicamente PPT como extra; deshabilitarlo vuelve a ocultarlo. Configuración original restaurada tras la prueba. Precio y botón alineados por su borde inferior. Pruebas de lógica cubren exclusión de pagos ocultos y reactivación de Luz; las comprobaciones existentes siguen pasando. [Captura de la fila de precio](./capturas/precio-y-rareza-0.2.png).

## Biblioteca por listas y armador de listas propias — 2026-10-17

Se aplica el esquema del autor: lista propia a la izquierda, listas de origen y flechas en el centro, fichas con selección múltiple a la derecha. Se agregan o quitan referencias con las flechas; agregar repetidamente no duplica una ficha. Guardado explícito, nombre editable, alcance global o por contextos y consulta de cada ficha con ⓘ. La biblioteca permite consultar después cada lista propia como otra lista. En móvil los paneles se apilan, con búsqueda y flechas accesibles. No es gestión de inventarios ni de campañas.

Listas base separadas: conjuros; objetos mágicos; artefactos; armas; armaduras; anillos; bastones; objetos maravillosos; pergaminos; pociones; varas; varitas; equipo; herramientas; monturas; vehículos; equipo de montura; servicios; reglas; dotes; trasfondos; especies/linajes; clases y subclases. Las veinte tablas DMG se consultan individualmente por familia y rareza, con sus rangos D100 y vínculos a las mismas fichas del catálogo. «Por clasificar» aparece solo si hay contenido sin una categoría reconocida.

Se completa el catálogo de referencia local hasta 1173 fichas: 339 conjuros, 404 objetos mágicos (incluye ocho artefactos), 154 entradas del glosario, 17 dotes, cuatro trasfondos, nueve especies, doce clases y doce subclases del SRD, más equipo y servicios. Las progresiones de subclases se separan del texto de clase. La cobertura es del SRD local y del catálogo de tesoros aportado; no se afirma incluir los suplementos de D&D ni todas las opciones exclusivas del PHB. No se incorporan reglas nuevas al canon de Romanance.

**Actualiza el pendiente anterior de fichas mágicas vacías:** `extract-dmg.py` extrae por columnas las páginas impresas 226–325 y preserva las fuentes. `enrich-catalog.mjs` vincula encabezados a IDs existentes, corrige alias explícitos de OCR y completa descripciones; no genera fichas paralelas en otro idioma. Se emplean 357 vínculos de texto del DMG y 32 referencias inglesas del SRD donde la extracción no aisló la ficha. Instrumento de ilusiones (DMG p. 285) y Útil bolsita de especias de Heward (p. 316) se cotejan visualmente. Se suman ocho objetos singulares fuera de las tablas aleatorias; permanecen excluidos de loot por defecto, con fabricación sin receta asignada. `catalog-coverage.json` informa cero referencias descriptivas vacías y cero encabezados de la extracción sin vincular.

**Límite de verificación:** cargar una descripción OCR no equivale a revisar sus cifras, tablas internas o cada término. Las fichas OCR conservan «pendiente de cotejo»; no se marcan como verificadas ni se certifica automáticamente su balance. Los textos ingleses siguen identificados como tales. El paquete local aún requiere el trabajo editorial y de distribución ya documentado antes de una versión comercial.

El respaldo añade `customLists` sin invalidar respaldos 0.1/0.2 anteriores. Cada lista almacena IDs, nombre y alcance; no copia descripciones ni precios. El JSON `botin-list` incluye las fichas propias referidas, sus bases propias y conjuros propios necesarios. Importar agrega una lista y permite usar IDs existentes o crear copias; al copiar se remapean tanto la selección de lista como las referencias entre fichas. Las referencias no instaladas se conservan visibles, en lugar de descartarlas. Las nuevas fichas propias importadas quedan desactivadas como los paquetes previos. Límites de validación: 500 listas y 10000 referencias únicas por lista.

Pruebas: `check-v2.cjs` y `check-lists.cjs` pasan. Cubren cobertura de todas las fichas en listas, veinte tablas D100, IDs únicos, selección sin duplicados, quitar sin tocar la ficha, migración de respaldos, importación/exportación, copias y remapeo de conjuros dependientes. En navegador: tabla DMG, agregar varias fichas, quitar/reagregar, guardar y recuperar tras recargar, sin errores de consola. Prueba de interfaz HTTP conservada como «Equipo de viaje · ejemplo» con Antorcha, Raciones y Cuerda; no es canon ni se inyecta en los datos del usuario al abrir como archivo. Móvil 390 × 844 sin desborde horizontal del documento; la navegación superior mantiene su desplazamiento propio.

[Armador de listas](./capturas/listas-propias-0.2.png) · [Vista móvil](./capturas/listas-propias-mobile-0.2.png).

## Encuentros y bestiario compartido — 2026-10-17

El autor solicita cálculo por VD y cantidad de jugadores/PJ, consulta de monstruos y posibilidad de agregar los faltantes a mano. Se cargan íntegros los bloques del SRD local: 235 de `monsters-A-Z.md` y 95 de `animals.md`, total 330. El importador comprueba que no omita ninguna línea de VD de las fuentes; conserva estadísticas, rasgos y acciones como texto, más VD/PX, CA, PG, velocidades, tipo y PX alternativos de guarida como campos de consulta. Cuatro bloques usan el orden «700 XP» en vez de «XP 700»; ambos formatos se reconocen. Catálogo total: 1503 fichas. No equivale a todo el Manual de Monstruos; el autor confirma que basta esta base.

Biblioteca añade Monstruos con filtros por VD y tipo. Se admiten en listas propias. El editor incorpora el tipo Monstruo, VD/PX, datos básicos y descripción completa; permite crear o modificar criaturas con el alcance habitual del homebrew y compartirlas por JSON. Al elegir VD se propone su PX de tabla, editable por el DM. Esto no reescribe ataques/rasgos ni garantiza equilibrio de la criatura.

Encuentros usa las tablas locales del SRD 5.2.1, `Gameplay Toolbox / Combat Encounters` y `Monsters / Experience Points by Challenge Rating`, importadas en `encounter-data.js`. Nivel 1–20 y cantidad de PJ determinan presupuestos bajo/moderado/alto. Se suman los PX de los enemigos; no se suman VD ni se aplican multiplicadores de cantidad de 2014. Se muestran PX consumidos, margen, categoría calculada y reparto igual orientativo por PJ. Si falta una ficha o está excluida, el cálculo se señala como incompleto.

Generación con filtros de VD, tipo y lista propia; máximo elegido y opción de permitir VD superior al nivel de PJ. La heurística propone hasta tres fichas distintas, sin superar el presupuesto. También permite elegir criaturas manualmente o consultar cantidades solo por VD; en este último caso VD 0 usa 10 PX, mientras una ficha concreta puede tener 0. Límites de consulta: 1–20 PJ, 1–100 criaturas. Los avisos por muchos enemigos o VD superior se mantienen plegados; no son una prohibición automática del DM.

Botín predeterminado: ninguno. A elección del DM se generan pertenencias por VD/cantidad de cada grupo o tesoro acumulado tomando el VD más alto; se conserva el presupuesto exacto del núcleo de Loot. La vista previa aparece junto al encuentro y solo se agrega al historial de Loot al pulsar Guardar. Cambiar la composición o configuración invalida la vista previa. No se infiere que cada animal tenga pertenencias ni que un encuentro deba entregar tesoro.

Se guarda la consulta actual por contexto y se incluye en respaldo, con migración de estados previos que no tienen `encounters`. No se añade historial de encuentros, iniciativa, seguimiento de PG, calendario o gestión de sesiones. Se puede exportar la consulta en TXT. El filtro de listas propias ya tiene aquí un consumidor concreto, además de su consulta en Biblioteca.

Pruebas: `check-encounters.cjs`, `check-lists.cjs` y `check-v2.cjs` pasan. Casos de presupuesto: cuatro PJ de nivel 1, baja 200 PX; cinco de nivel 3, moderada 1125; seis de nivel 15, alta 46800. Se comprueban VD fraccionarios, XP de guarida, 240 generaciones, máximo de criaturas, referencias ausentes, botín sin excedente, restauración y monstruos homebrew. En navegador se reprodujo el ejemplo de dos druidas y nueve estirges para cinco PJ de nivel 3: 1125 PX. Se corrigió la actualización del presupuesto durante edición numérica, sin depender de abandonar el campo. Probados botín, guardado en Loot, filtros de Biblioteca, alta manual de una variante de Bandit y persistencia de la consulta. Sin errores de consola en el recorrido. Móvil 390 × 844 sin desborde horizontal del documento.

[Encuentros en escritorio](./capturas/encuentros-0.2.png) · [Encuentros en móvil](./capturas/encuentros-mobile-0.2.png). Las fichas/consultas de prueba HTTP no constituyen canon ni se inyectan en el almacenamiento del usuario al abrir por archivo.
