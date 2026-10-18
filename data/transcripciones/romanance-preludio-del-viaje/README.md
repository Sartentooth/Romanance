# Audio — Romanance, preludio del viaje

**Estado:** TRANSCRIPCIÓN AUTOMÁTICA COMPLETA / PENDIENTE DE COTEJO.

El procesamiento finalizó: 2 h 32 min 25 s de audio, transcritos en aproximadamente 26 minutos. La finalización del proceso no valida la exactitud del texto.

El autor entregó el audio de la sesión y autorizó instalar Whisper para procesarlo localmente. La grabación dura aproximadamente 2 h 32 min. La fecha de recepción no determina la fecha de juego ni la cronología interna de la campaña.

## Fuente y derivados

- Original, preservado en su ubicación: `C:/Users/Sarten/Downloads/Romanance preludio del viaje.m4a`.
- `transcripcion-automatica.md`: texto con marcas de tiempo, generado progresivamente; solo está completo cuando `metadatos.json` indica `completada: true`.
- `segmentos-automaticos.jsonl`: segmentos originales del reconocedor con tiempos e indicadores técnicos. Estos indicadores no equivalen a una verificación del contenido.
- `metadatos.json`: modelo, idioma, duración y estado del proceso.

La transcripción no identifica hablantes. Puede confundir nombres, voces superpuestas, bromas y términos del juego. El texto bruto se conserva sin corregir por inferencia. Una futura revisión debe separar hechos jugados, decisiones del autor, propuestas y comentarios fuera de personaje, cotejando los pasajes dudosos antes de consolidarlos.

[Revisión inicial centrada en la preparación del viaje](../../../herramientas-campana/viajes/revision-playtest-preparacion-2026-10-12.md), v0.1: observaciones y decisiones reconstruidas, pendientes de cotejo del autor. No cambia el texto bruto ni incorpora automáticamente contenido al canon.

## Procesamiento local

Motor: faster-whisper 1.2.1; modelo Whisper small multilingüe; idioma español; CPU, int8. Lector de audio PyAV 16.1.0, fijado por compatibilidad. No se envía la grabación a un servicio de transcripción.

Script: [transcribir-sesion.py](../../../herramientas-campana/viajes/transcribir-sesion.py).

El entorno está en `tmp/whisper-runtime/` y el modelo en `tmp/whisper-models/`, excluidos de Git mediante `tmp/.gitignore`. El script rechaza sobrescribir una transcripción existente. Para nuevas sesiones, usar otro directorio de destino.

Referencias técnicas: [Whisper de OpenAI](https://github.com/openai/whisper) y [faster-whisper](https://github.com/SYSTRAN/faster-whisper).
