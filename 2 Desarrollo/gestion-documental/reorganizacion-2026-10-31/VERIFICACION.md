# Verificación final de la reorganización

**Fecha:** 31/10/2026 · **Estado:** COMPLETADA.

- 5.430 archivos existentes cubiertos por el manifiesto de movimientos; destino y hash verificados individualmente al aplicar la migración.
- 187 documentos de consulta comprobados, con 1.812 enlaces locales: ninguno roto. Se excluyen de este control las fuentes íntegras, snapshots, referencias reglamentarias, archivo histórico y para-borrar.
- Mapas, imágenes, PDF, DOCX, audio y archivo histórico conservados sin cambios de contenido. La transcripción y el SRD también se trasladan íntegros.
- Seis comprobaciones existentes del prototipo pasan: núcleo, v2, fichas, listas, encuentros y formato.
- Compilación completa comprobada en una copia externa: 1.503 entradas, 20 tablas mágicas y 82 piezas de equipo. El catálogo original del proyecto no se recompiló ni alteró durante esta prueba.
- Audio grande, modelos de Whisper y material para-borrar excluidos de Git. Ningún archivo preparado en staging; sin commits ni push.
- Tres referencias a exports antiguos, ya reemplazados por el autor antes de esta tarea, quedan como menciones textuales sin enlaces rotos. No se restauran esos mapas.
- Los archivos prescindibles se separaron en para-borrar; no se eliminaron físicamente archivos. Solo se retiraron directorios que habían quedado vacíos tras el traslado.

El manifiesto anterior íntegro y las versiones de los documentos previas al ajuste de rutas están en previos/. Los enlaces internos de fuentes históricas conservadas pueden describir la estructura anterior: se localizan por movimientos.json, sin convertirlas en documentación vigente.
