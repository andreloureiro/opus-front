---
layout: default
title: Base - Opus Front
class: Base
---
## Base

<br>

### Normalize

A base do __Opus Front__ é constituída pelo [Normalize]().

Para quem não conhece, o __Normalize__ é um reset moderno para CSS, que além de resolver inconsistências de comportamento de layout de elementos crossbrowser, aplica um estilo mínimo aos elementos.

Todo o suporte de reset oferecido pelo __Normalize__ é suficiente para a base do __Opus Front__. Mesmo assim, alguns estilos foram adicionados ao `base.css`

<br>

### Web Font

O __Opus Front__ utiliza a fonte [Open Sans](), disponível através do [Google Web Fonts]().

Para manter o framework enxuto, a fonte é incorporada via @import a partir do CSS.

<br>

### Elementos escondidos

Para esconder elementos, você pode inserir o atributo `hidden` no elemento desejado.

```html
<div class="conteudo" hidden></div>
```