# Escritura aureliana — revisión para cierre

**Versión:** 1.1 local · **Fecha:** 2026-10-10 · **Estado:** CANON CERRADO para el alcance documental actual; desarrollo posterior diferido.

## Base aprobada

[Alfabeto activo](<../../../1 Canon oficial/lore/alfabeto-aureliano.md>): 30 glifos y tablas aprobados; SVG normativo. El acabado ornamental y la TTF son desarrollo posterior, no requisitos para conservar esa base. La imagen ornamental se mantiene como dirección estética; V requiere ajuste gráfico futuro según la precedencia ya documentada.

## Transliterador de ejemplo

Se leyó el [HTML aportado](<D:/Sarten/Juegos de Rol/D&D 5.5e - Romanance/Romanance/Transliterador Aureliano.html>) sin editarlo, copiarlo ni ejecutarlo. La mejora de la herramienta fue diferida expresamente por el autor. Es una implementación de referencia, no una autoridad para cambiar glifos.

La correspondencia entre el arreglo de consonantes dobles y los pares angulares está desplazada desde V hasta LL:

| Glifo | HTML actual | Canon |
|---|---|---|
| V | [180, 330] | [0, 60] |
| W | [210, 0] | [180, 330] |
| X | [240, 30] | [210, 0] |
| Y | [270, 60] | [240, 30] |
| Z | [300, 90] | [270, 60] |
| CH | [330, 120] | [300, 90] |
| LL | [0, 60] | [330, 120] |

El resto de los pares dobles y los arreglos de vocales y consonantes simples coinciden en sus valores con las tablas documentadas. Esto es cotejo de los datos, no certificación del funcionamiento visual.

Otras observaciones estáticas para cuando se mejore:

- El botón para mostrar/ocultar letras apunta a `id="labels"`, inexistente; tampoco hay una regla CSS `.hide` que implemente esa función.
- Las vocales con tilde y Ü se tratan como caracteres desconocidos. Ñ tiene signo propio y debe preservarse al resolver la normalización.
- La exportación filtra solo letras: elimina espacios, puntuación y saltos de línea. Exporta todo en una única fila.
- CH, LL y RR se reconocen antes que las letras individuales; convierte el texto a mayúsculas.

No se alteran las tablas canónicas para adaptarlas al programa. La corrección del programa queda para el trabajo posterior autorizado por el autor, sin diseño nuevo en esta revisión.

## Decisión de cierre — autor, 2026-10-10

El autor indica cerrar esta etapa y registrar para más adelante el desarrollo restante. Se preservan el alfabeto de 30 glifos, el léxico y las fórmulas existentes. No se necesita hablar aureliano en mesa ahora. La posible distinción entre lengua base y registro ritual para tablillas, magia y artes arcanas es una idea futura, no una nueva regla.

El [alfabeto activo](<../../../1 Canon oficial/lore/alfabeto-aureliano.md>), v1.1, registra las referencias fonéticas y conceptuales del autor: estructura, ligera musicalidad, autoridad al alzar la voz, posible escritura de conceptos y posible asignación de sonidos a signos o grupos. No se generan elementos lingüísticos nuevos.

El cierre documental no declara terminado el acabado ornamental, la TTF ni el transliterador. Esos trabajos se difieren expresamente; sus pendientes técnicos y referencias siguen preservados. La diferencia gráfica de V se resuelve por la precedencia ya aprobada del SVG, sin editar la imagen.

[Manifiesto](<../../../1 Canon oficial/INDICE_CANON.md>) · [Dirección visual](<../../../1 Canon oficial/arte/escritura-aureliana.md>) · [Registro técnico](<../../archivo-historico/fuentes-historicas/escritura-2026-10-10/revision-transliterador.json>).
