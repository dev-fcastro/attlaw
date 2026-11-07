# ATTLAW · identidad visual v1

Base: imagen de referencia facilitada por el usuario.

## Identidad
- Negro autoridad: `#0B0D12`
- Cobre justicia/equilibrio: `#B77A3F`
- Gris soporte: `#EAECEF`
- Blanco: `#FFFFFF`
- Logo: vectorizado de la versión principal de la referencia. El nombre y la forma están convertidos a trazados SVG.
- Tipografía de apoyo sugerida: Manrope. La referencia menciona Montserrat Alternates / Exo 2 personalizadas, pero no incluye archivos fuente; el trazado del logo conserva su forma sin depender de esas fuentes.

## Archivos
- `logo/`: principal, horizontal, inverso, monocromos e isotipo.
- `icons/`: ocho iconos SVG de interfaz; usan `currentColor`.
- `characters/`: dos ilustraciones PNG transparentes para piezas editoriales y onboarding.
- `preview/identidad.html`: guía visual y ejemplos de uso.
- `source/`: referencia original.

## Uso
- Fondo claro: `logo-principal.svg` o `logo-horizontal.svg`.
- Fondo oscuro: `logo-oscuro.svg`.
- Tamaños pequeños: isotipo; no incluir el descriptor a tamaños pequeños.
- Área de seguridad: dejar alrededor al menos la altura de la barra cobre del isotipo.
- Personajes: usarlos como apoyo visual, nunca como sello oficial o elemento del logo.

## Estado
Propuesta inicial basada en una imagen raster. Los SVG del logo son trazados automáticos limpios, revisables en Inkscape.

## Integración
- `tokens.css` y `brand.json` reúnen los valores para el software.
- `logo/app-icon-dark.svg` y `logo/app-icon-light.svg` son iconos de app; incluyen PNG de 512 px.
- `logo/patron-monograma.svg` es un recurso de fondo opcional.

## Universo visual v2
- `characters/abogada-senior.png`: abogada de mayor edad, medio cuerpo; asesoría y confianza.
- `characters/clienta.png`: clienta, medio cuerpo; acompañamiento y resultados.
- `characters/abogado-senior.png`: abogado blanco mayor, medio cuerpo; experiencia y revisión.
- `scenes/equipo-expediente.png`: colaboración sobre un expediente.
- `scenes/preparacion-audiencia.png`: preparación de una audiencia remota.

Los personajes tienen fondo transparente. Las escenas incluyen fondo y están pensadas para módulos y landing. Evitar textos superpuestos sobre detalles importantes; mantener el texto de interfaz como capa HTML separada.

## Último personaje v3
- `characters/abogada-pelirroja.png`: abogada pelirroja de piel muy clara, lentes negros, traje negro y labios rojos. PNG transparente de medio cuerpo para asesoría y perfiles editoriales.

## Personaje v4
- `characters/abogado-estoico.png`: hombre de piel clara, cabello negro con mechón en la frente, traje y pantalón negros, postura muy recta y expresión seria. PNG transparente de cuerpo completo. Uso: estrategia, revisión y mensajes de confianza institucional.
