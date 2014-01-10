---
layout: default
title: Opus Front
class: Home
---

## O que é

O __Opus Front__ é um framework CSS simples, modularizado, focado em um código semântico e de alta performance.

O objetivo do desenvolvimento do __Opus Front__ é auxiliar na montagem de layouts de projetos web, facilitar a criação de protótipos e padronizar o desenvolvimento front-end na empresa.

<br>

## Módulos

O __Opus Front__ é composto por diversos módulos, visando otimizar e influir o mínimo possível no carregamento de assets. Você pode baixar apenas os módulos que irá utilizar, ou baixar o framework completo.

Os módulos disponíveis são:

```bash
base.css
grid.css
forms.css
tables.css
menus.css
buttons.css
messages.css
```

No menu ao lado, você pode navegar até o módulo desejado e ver mais instruções.

<br>

## Código semântico

O __Opus Front__ utiliza parte da proposta de organização de nomenclatura [BEM (Block, Element, Modifier)]().

Usando __BEM__, temos um código legível e com fácil reconhecimento da estrutura de um componente. Diferentes níveis da estrutura de um componente são separados por dois underlines __, enquanto os modificadores são separados por dois hífens --

Como exemplo, o HTML de um carrossel seria algo próximo a isso:

```html
<div class="carrossel">
    <div class="carrossel__wrapper">
        <div class="carrossel__slide--ativo"></div>
        <div class="carrossel__slide"></div>
        <div class="carrossel__slide"></div>
    </div>
</div>
```

O `carrossel` é o bloco do componente, `__wrapper` e `__slide` são os elementos abaixo do `carrossel`, e `--ativo` é o modificador que indica que aquele slide é o ativo no momento.

Nesta versão inicial, ainda não temos componentes com uma estrutura mais elaborada. Fazemos uso apenas da síntaxe para os modificadores, como por exemplo o módulo de mensagens tem seu status identificado com o __BEM__:

<div class="message message--error">
    <p>Ocorreu um erro. Tente novamente</p>
</div>

```html
<div class="message message--error">
    <p>Ocorreu um erro. Tente novamente</p>
</div>
```

<br>

## Compatibilidade

Seguindo a convenção de suporte no desenvolvimento front-end, o __Opus Front__ será compatível com as duas versões anteriores às versões atuais dos browsers atuais:

- Internet Explorer 8+
- Chrome 29+
- Firefox 22+
- Opera 10+


