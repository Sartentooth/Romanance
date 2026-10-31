# Herramientas del DM — prototipo navegable 0.2

**Fecha:** 2026-10-17 · **Estado:** PROTOTIPO LOCAL / DISEÑO EN REVISIÓN.

[Abrir versión actual](./dist/index.html) · [Entrega 0.2: cambios, pruebas y pendientes](./ENTREGA-0.2.md)

**Para retomar:** [estado vigente y pendientes](../ESTADO-Y-PENDIENTES.md). Resume las últimas revisiones y prevalece sobre pendientes históricos que ya se resolvieron.

La entrega 0.2 aplica los ajustes acordados en este chat: interfaz compacta, loot rápido/manual, biblioteca única, listas propias, homebrew adaptable, servicios, monedas configurables, crafteo informativo y JSON compartible. Funciona sin internet; no incorpora gestión de campañas. El documento de entrega prevalece sobre las funciones y pendientes de la versión anterior detallada abajo.

Exportar respaldo antes de cambiar de navegador o de apertura como archivo a HTTP. El estado 0.1 se migra; el HTML original 1.2 permanece intacto y usa datos independientes.

Encuentros calcula por nivel/cantidad de PJ y PX según VD, con botín opcional. Biblioteca incluye los 330 bloques de monstruos y animales del SRD local y permite crear criaturas homebrew. Biblioteca organiza el catálogo compartido por listas y muestra por separado las veinte tablas aleatorias del DMG. «Mis listas» permite selección múltiple y transferencia entre columnas, guardar por contexto o globalmente, e importar/exportar JSON con las dependencias de homebrew. El respaldo completo también conserva estas listas. El catálogo local suma 1503 fichas; los textos OCR del DMG mantienen su indicación de cotejo pendiente. Más detalle y pruebas en la entrega.

## Actualizar la alpha web

La alpha está en GitHub Pages. Después de cambiar JS, CSS o datos, ejecutar desde la raíz del repositorio:

```powershell
node herramientas-campana/aplicaciones-web-y-mobile/prototipo/scripts/build-data.mjs
node herramientas-campana/aplicaciones-web-y-mobile/prototipo/scripts/check-formatting.mjs
node herramientas-campana/aplicaciones-web-y-mobile/prototipo/scripts/check-sheets.cjs
```

El generador actualiza los catálogos y las versiones de los recursos en `dist/index.html`; incluir los cambios de `dist/` y los archivos nuevos junto a las fuentes en el commit/push. Revisar el despliegue en Actions y recargar la app. Ctrl+F5 fuerza una actualización si el navegador retiene archivos anteriores. Los botines guardados mantienen su texto histórico; consultar Biblioteca o generar un resultado nuevo para ver el catálogo corregido. No hace falta borrar datos del navegador.

---

## Registro anterior: prototipo 0.1


**Fecha:** 2026-10-12 · **Estado:** PROTOTIPO LOCAL / DISEÑO PROPUESTO PARA REVISIÓN.

Desarrollo autorizado por el autor en este chat mientras descansa. No representa aprobación de la interfaz, de una tecnología definitiva ni de reglas nuevas. Implementación buildless HTML/CSS/JavaScript para probar los flujos de la [base de producto](../base-de-producto.md).

**Límite de alcance confirmado el 2026-10-14:** la sección Campañas solo configura disponibilidad y activación de contenido y reglas; no convierte esta app en un gestor de campañas. El gestor que pudiera integrar estas herramientas queda para otro proyecto futuro, cuando el autor aporte su diseño anterior. No extender este prototipo hacia seguimiento de sesiones, tramas, misiones o calendarios.

## Abrir

Abrir [dist/index.html](./dist/index.html) en un navegador. Los archivos CSS y JavaScript deben permanecer junto al HTML; no requiere instalación, cuentas ni conexión. Para vista previa con Node, desde la raíz del repositorio:

```powershell
node herramientas-campana/aplicaciones-web-y-mobile/prototipo/scripts/serve.mjs
```

Luego abrir `http://127.0.0.1:4173/prototipo/dist/index.html`. El servidor solo escucha en este equipo; detener con Ctrl+C.

El almacenamiento de una apertura como archivo y el de una apertura mediante HTTP pueden ser diferentes. Exportar un respaldo antes de cambiar la forma de abrirlo. No importa ni modifica los datos del prototipo 1.2; usa una clave de almacenamiento distinta.

## Funciones disponibles

- Campaña activa: Mesa libre y Romanance; creación de campañas adicionales.
- Biblioteca compartida con búsqueda, fichas y paginación: 168 objetos, 339 conjuros y 154 entradas del glosario extraídos de las fuentes SRD locales.
- Mercado: elección y creación de comerciantes, compra con cantidades, total monetario, precios pendientes, exportación de compra y stock persistente por campaña/comerciante.
- Disponibilidad manual del DM o sorteo de prueba: 8 fichas, 1–3 unidades adicionales por ficha sorteada y mínimo configurable por objeto. Son valores de demostración, no reglas de economía aprobadas.
- Crafteo: cálculo no mágico según precio y herramienta documentada; comprobación de capacidad del fabricante; recetas propias con días y materiales. Se muestra plazo, sin calendario ni registro de encargos.
- Homebrew: ficha genérica para objetos, conjuros, reglas, dotes, trasfondos, especies, clases y subclases; creación desde una referencia; disponibilidad global o para varias campañas. Conserva la referencia original.
- Activación/desactivación de contenido propio por campaña, distinta de su disponibilidad.
- Loot: sorteo uniforme simple del contenido habilitado, resultado sin botín y snapshots por campaña. Conserva los últimos 100 resultados en total. No reproduce las fórmulas ni las tablas D100 de la versión 1.2.
- Respaldo JSON con validación y confirmación de reemplazo. Protección del almacenamiento previo si su lectura falla; aviso si no se puede guardar.
- Enlace al generador original, intacto, para consultar sus funciones y D100.

## Casos de Romanance

Se cargan los nombres y referencias de Batai, Tömörbaatar, Ethen y Temay desde el canon activo. Sus categorías de mostrador son una configuración amplia para probar interfaz, **no inventarios canónicos ni confirmación de que vendan todos los objetos ofrecidos**. El DM decide disponibilidad por defecto.

Yunque Certero usa precio ÷ 20. Para la prueba se redondea cada unidad a un mínimo de un día; este tratamiento se identifica en pantalla y no resuelve definitivamente todas las precisiones de la regla propia. La Marca de la Llama Eterna se muestra como referencia, sin aplicar automáticamente el +1 ni inventar un precio especial.

Con Temay puede introducirse el descuento que decida el DM, entre 0% y 25%; no se simula la tirada de negociación ni se fija su CD. La regla de Rocío quedó conciliada el 2026-10-14; su integración como receta activa sigue pendiente de implementación.

**Rocío de Ethen — contradicción resuelta por el autor, 2026-10-14.** Rige [Forja/Mercadeo v1.2](../../../canon/pnjs/forja-mercadeo-y-pociones.md): +1d4 a Medicina, Supervivencia o un conjuro de curación, elegido por el jugador; una hora o hasta usarlo, un solo uso; elaboración local con Kit de Herbolario, competencia y receta de Ethen, 7 días/25 PO. La guía de BOTÍN.EXE se conserva como fuente histórica; sus bonos fijos y 7–8 días ya no son la regla vigente. **Integración técnica pendiente:** el prototipo todavía omite las pociones estándar del catálogo efectivo de Romanance y no transforma automáticamente los resultados a Rocío. La base general conserva el SRD. Esta actualización documental no afirma un cambio de código ni una prueba funcional del reemplazo. La referencia cruzada al SRD es recordatorio, no una consulta requerida en cada generación.

## Límites reales

Los textos importados están en inglés, con algunos nombres traducidos como ayuda de búsqueda. Se preservan efectos, metadatos y bloques asociados a conjuros; falta cotejo completo con el PDF oficial español y revisión de formato. No se importaron las tablas ni los textos exclusivos del Manual del DM.

El editor es genérico: clases, subclases y conjuros no tienen todavía todos sus campos específicos ni progresiones automatizadas. Las notas de reglas propias no ejecutan efectos por sí mismas. No hay motor general de reglas, validación automática de balance, crafteo mágico, calculadora de pergaminos, generador de encuentros, viajes, Drix, sincronización ni PWA instalada.

El carrito consulta cantidades y no descuenta stock ni confirma ventas. Las recetas se calculan por unidad, sin asistentes ni optimización de lotes. La asignación automática de herramientas se limita a un subconjunto documentado; los demás objetos quedan sin receta calculable hasta definirla. Los faltantes no se presentan como fabricación imposible en el sistema completo.

## Verificación y mantenimiento

```powershell
node herramientas-campana/aplicaciones-web-y-mobile/prototipo/scripts/import-srd.mjs
node herramientas-campana/aplicaciones-web-y-mobile/prototipo/scripts/check.cjs
node --check herramientas-campana/aplicaciones-web-y-mobile/prototipo/dist/app.js
```

El importador usa `equipment.md`, `spells.md` y `rules-glossary.md` del SRD Markdown local. Regenera `dist/srd-data.js`; no edita esas fuentes. Los créditos de la app reconocen el SRD 5.2.1, CC BY 4.0, las adaptaciones de esta extracción y la colaboración del proyecto.

Pruebas de lógica ejecutadas: IDs únicos, preservación de bloque de Animated Object, cantidades y decimales, descuento, precios pendientes, materiales y tiempos, herramientas del fabricante, alcance por campaña, exclusiones, stock, snapshot histórico y validación de respaldos válidos e inválidos.

Prueba en navegador: compra de 3 espadas largas (45 PO), fabricación por Tömörbaatar (3 días y 21 PO de materiales bajo el criterio de esta prueba), creación de una variante exclusiva de Romanance, ausencia en Mesa libre y persistencia después de recargar. También se verificaron renovación y persistencia del stock, y ausencia de errores de consola en ese recorrido. La variante «Espada larga · prueba de interfaz» creada durante QA es un dato de prueba del navegador, no canon ni contenido inicial distribuido.

Se inspeccionó la interfaz de escritorio y se comprobó ausencia de desbordamiento horizontal en un viewport de 390 px. La inspección táctil en dispositivo real y la prueba completa de importación/exportación desde la interfaz quedan pendientes; el validador sí está probado. [Captura de escritorio](./capturas/mercado-escritorio.jpg).
