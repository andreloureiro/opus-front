---
layout: default
title: Forms - Opus Front
class: Forms
---

## Forms

O __Opus Front__ possui diferentes formatos de formulÃ¡rio jÃ¡ definidos para serem aplicados a diversos casos de uso.

<br>

### FormulÃ¡rio Vertical

<form action="#" class="form">
    <fieldset>
        <label for="name">Nome</label>
        <input type="text" id="name">
        <label for="email">Email</label>
        <input type="email" id="email">
        <label for="password">Senha</label>
        <input type="password" id="password">
    </fieldset>
</form>

{% highlight html linenos=table %}
<form action="#" class="form">
    <fieldset>
        <label for="name">Nome</label>
        <input type="text" id="name">
        <label for="email">Email</label>
        <input type="email" id="email">
        <label for="password">Senha</label>
        <input type="password" id="password">
    </fieldset>
</form>
{% endhighlight %}

<br>

### FormulÃ¡rio Horizontal

<form action="#" class="form form--inline">
    <fieldset>
        <input type="text" placeholder="Nome">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Senha">
        <label for="remember">
            <input type="checkbox" id="remember"> Lembrar
        </label>
        <button type="submit" class="button">Enviar</button>
    </fieldset>
</form>

{% highlight html linenos=table %}
<form action="#" class="form form--inline">
    <fieldset>
        <input type="text" placeholder="Nome">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Senha">
        <label for="remember">
            <input type="checkbox" id="remember"> Lembrar
        </label>
        <button type="submit" class="button">Enviar</button>
    </fieldset>
</form>
{% endhighlight %}

<br>

### FormulÃ¡rio Alinhado

<form action="#" class="form form--aligned">
    <fieldset>
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name">
        </div>
        <div class="form-group">
            <label for="address">EndereÃ§o</label>
            <input type="text" id="adress">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email">
        </div>
        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password">
        </div>
        <div class="form-group-buttons">
            <label for="accept-inline">
                <input type="checkbox" id="accept-inline"> Li e aceito os termos de serviÃ§os
            </label>
            <button type="submit" class="button">Enviar</button>
        </div>
    </fieldset>
</form>

{% highlight html linenos=table %}
<form action="#" class="form form--aligned">
    <fieldset>
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name">
        </div>
        <div class="form-group">
            <label for="address">EndereÃ§o</label>
            <input type="text" id="adress">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email">
        </div>
        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password">
        </div>
        <div class="form-group-buttons">
            <label for="accept">
                <input type="checkbox"> Li e aceito os termos de serviÃ§os
            </label>
            <button type="submit" class="button">Enviar</button>
        </div>
    </fieldset>
</form>
{% endhighlight %}

<br>

### FormulÃ¡rio Multi-Coluna

<form action="#" class="form">
    <fieldset>
        <div class="grid">
            <div class="grid-unit-1-3">
                <label for="name">Nome</label>
                <input type="text" id="name">
            </div>
            <div class="grid-unit-1-3">
                <label for="surname">Sobrenome</label>
                <input type="text" id="surname">
            </div>
            <div class="grid-unit-1-3">
                <label for="email">Email</label>
                <input type="email" id="email">
            </div>
            <div class="grid-unit-1-3">
                <label for="password">Senha</label>
                <input type="password" id="password">
            </div>
            <div class="grid-unit-1-3">
                <label for="confirm-password">Confirmar Senha</label>
                <input type="password" id="confirm-password">
            </div>
            <div class="grid-unit-1-3">
                <label for="accept">
                    <input type="checkbox" id="accept"> Li e aceito os termos de serviÃ§o
                </label>
                <button type="submit" class="button">Enviar</button>
            </div>
        </div>
    </fieldset>
</form>

{% highlight html linenos=table %}
<form action="#" class="form">
    <fieldset>
        <div class="grid">
            <div class="grid-unit-1-3">
                <label for="name">Nome</label>
                <input type="text" id="name">
            </div>
            <div class="grid-unit-1-3">
                <label for="surname">Sobrenome</label>
                <input type="text" id="surname">
            </div>
            <div class="grid-unit-1-3">
                <label for="email">Email</label>
                <input type="email" id="email">
            </div>
            <div class="grid-unit-1-3">
                <label for="password">Senha</label>
                <input type="password" id="password">
            </div>
            <div class="grid-unit-1-3">
                <label for="confirm-password">Confirmar Senha</label>
                <input type="password" id="confirm-password">
            </div>
            <div class="grid-unit-1-3">
                <label for="accept">
                    <input type="checkbox" id="accept"> Li e aceito os termos de serviÃ§o
                </label>
                <button type="submit" class="button">Enviar</button>
            </div>
        </div>
    </fieldset>
</form>
{% endhighlight %}

<br>

## Inputs

AlÃ©m dos formulÃ¡rios, o __Opus Front__ trÃ¡s trÃªs tipos diferentes de estilos para inputs. Basta apenas acrescentar o atributo desejado:

<br>

### Input obrigatÃ³rio

<form action="#" class="form">
    <input type="text" placeholder="Este Ã© um input obrigatÃ³rio" required>
</form>

{% highlight html linenos=table %}
<form action="#" class="form">
    <input type="text" placeholder="Este Ã© um input obrigatÃ³rio" required>
</form>
{% endhighlight %}

<br>

### Input desabilitado

<form action="#" class="form">
    <input type="text" placeholder="Este Ã© um input desabilitado" disabled>
</form>

{% highlight html linenos=table %}
<form action="#" class="form">
    <input type="text" placeholder="Este Ã© um input desabilitado" disabled>
</form>
{% endhighlight %}

<br>

### Input somente leitura

<form action="#" class="form">
    <input type="text" value="Este Ã© um input somente leitura" readonly>
</form>

{% highlight html linenos=table %}
<form action="#" class="form">
    <input type="text" value="Este Ã© um input somente leitura" readonly>
</form>
{% endhighlight %}

