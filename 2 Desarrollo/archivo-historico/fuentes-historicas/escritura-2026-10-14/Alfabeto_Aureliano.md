# Alfabeto Aureliano

> Sistema de escritura de los Aurelianos — alfabeto de sustitución (tipo Aurebesh), no un idioma con gramática propia. Cada símbolo representa una letra del español. Uso actual: inscripciones, nombres propios, texto decorativo. No reemplaza al latín oscuro ya usado puntualmente en el medallón de Morvath (eso queda como está, es un caso aparte).

---

## Lógica del sistema

Base visual heredada del motivo recurrente de la Cordillera (los sellos concéntricos de la Cámara de los Juramentos): **todo glifo es un círculo**, con trazos internos que varían según la letra. El sistema es generativo, no 30 formas arbitrarias para memorizar sueltas:

- **Vocales (A, E, I, O, U):** una línea completa que atraviesa todo el círculo, en 5 ángulos distintos.
- **Consonantes de un trazo (B, C, D, F, G, H, J, K, L, M, N, Ñ):** una sola marca corta ("aguja de reloj") en una de 12 posiciones alrededor del círculo.
- **Consonantes de dos trazos (P, Q, R, RR, S, T, V, W, X, Y, Z, CH, LL):** dos marcas combinadas, para las 13 letras restantes.

Total: **30 glifos**, cubriendo el abecedario español completo (incluye Ñ, CH, LL, RR como símbolos propios).

## Tabla de referencia — ángulos

**Vocales** (línea completa, ángulo en grados):

| Letra | Ángulo |
|---|---|
| A | 0° |
| E | 36° |
| I | 72° |
| O | 108° |
| U | 144° |

**Consonantes de un trazo** (posición única, tipo reloj):

| Letra | Ángulo | Letra | Ángulo |
|---|---|---|---|
| B | 0° | H | 150° |
| C | 30° | J | 180° |
| D | 60° | K | 210° |
| F | 90° | L | 240° |
| G | 120° | M | 270° |
| | | N | 300° |
| | | Ñ | 330° |

**Consonantes de dos trazos** (par de posiciones):

| Letra | Ángulos | Letra | Ángulos |
|---|---|---|---|
| P | 0°, 150° | W | 180°, 330° |
| Q | 30°, 180° | X | 210°, 0° |
| R | 60°, 210° | Y | 240°, 30° |
| RR | 90°, 240° | Z | 270°, 60° |
| S | 120°, 270° | CH | 300°, 90° |
| T | 150°, 300° | LL | 330°, 120° |
| V | 0°, 60° | | |

---

## Archivos relacionados

- **`Alfabeto_Aureliano.svg`** — lámina de referencia completa, los 30 glifos con su letra correspondiente, vectorial.
- **Transliterador interactivo (artifact publicado):** escribe texto en español y lo convierte en vivo a glifos Aurelianos, con opción de descarga como SVG. [https://claude.ai/artifact/ByzSjLrHuMV9CHnrYuwuH9](https://claude.ai/artifact/ByzSjLrHuMV9CHnrYuwuH9)

## Pendiente (no bloqueante)

- Fuente tipográfica instalable (.TTF) — requiere herramientas de tipografía dedicadas, no se hizo todavía.
- Capa cosmética adicional dentro de cada glifo (textura, puntos, variación de grosor) — el esqueleto generativo ya está cerrado y no se rompe al agregar esto encima.

---

## Estado del documento

**Versión:** 1.0
**Estado:** Canon aprobado — sistema de escritura Aureliano (alfabeto de sustitución, 30 glifos).
