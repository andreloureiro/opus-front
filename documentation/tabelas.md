---
layout: default
title: Tabelas - Opus Front
class: Tabelas
---

## Tabelas

O __Opus Front__ traz alguns tipos de tabelas já prontos, bastanto apenas declarar a classe de CSS desejada no elemento ```table```.

<br>

### Tabela comum

<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>

{% highlight html linenos=table %}
<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}
<br>

<h3>Tabela horizontal</h3>

<table class="table table--horizontal">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>

{% highlight html linenos=table %}
<table class="table table--horizontal">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

<br>

<h3>Tabela com bordas</h3>

<table class="table table--bordered">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>

{% highlight html linenos=table %}
<table class="table table--bordered">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

<br>

<h3>Tabela listrada</h3>

<table class="table table--stripped">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>

{% highlight html linenos=table %}
<table class="table table--stripped">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ano de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jose</td>
            <td>jose@email.com</td>
            <td>1980</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Joao</td>
            <td>joao@email.com</td>
            <td>1985</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sebastião</td>
            <td>bastiao@email.com</td>
            <td>1970</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Mario</td>
            <td>mario@email.com</td>
            <td>1983</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Berenice</td>
            <td>berenice@email.com</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}