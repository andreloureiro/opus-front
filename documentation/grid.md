---
layout: default
title: Grid - Opus Front
class: Grid
---

## Grid

O grid utilizado pelo __Opus Front__ tem base no [Pure CSS](). Ao invés de utilizarmos colunas fixas, trabalhamos com frações da área disponível para conteúdo. O próprio desenvolvedor irá encontrar a divisão adequada para o layout que está desenvolvendo.

Você pode trabalhar com frações 2, 3, 4, 5, 6, 7, 8, 12 e 24 avos. Abaixo, exemplos de utilização do grid:

<h3>2/2</h3>
<div class="grid-test grid">
    <div class="grid-unit-1-2">
        <p>1/2</p>
    </div>
    <div class="grid-unit-1-2">
        <p>1/2</p>
    </div>        
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-2">
        <p>1/2</p>
    </div>
    <div class="grid-unit-1-2">
        <p>1/2</p>
    </div>        
</div>
{% endhighlight %}

<h3>3/3</h3>
<div class="grid-test grid">
    <div class="grid-unit-1-3">
        <p>1/3</p>
    </div>
    <div class="grid-unit-2-3">
        <p>2/3</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-2-3">
        <p>2/3</p>
    </div>
    <div class="grid-unit-1-3">
        <p>1/3</p>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-3">
        <p>1/3</p>
    </div>
    <div class="grid-unit-2-3">
        <p>2/3</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-3">
        <p>2/3</p>
    </div>
    <div class="grid-unit-1-3">
        <p>1/3</p>
    </div>
</div>
{% endhighlight %}

<div class="grid-test">
    <h3>4/4</h3>
    <div class="grid-test grid">
        <div class="grid-unit-1-4">
            <p>1/4</p>
        </div>
        <div class="grid-unit-3-4">
            <p>3/4</p>
        </div>
    </div>
    <div class="grid-test grid">
        <div class="grid-unit-2-4">
            <p>2/4</p>
        </div>
        <div class="grid-unit-2-4">
            <p>2/4</p>
        </div>
    </div>
    <div class="grid-test grid">
        <div class="grid-unit-3-4">
            <p>3/4</p>
        </div>
        <div class="grid-unit-1-4">
            <p>1/4</p>
        </div>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-4">
        <p>1/4</p>
    </div>
    <div class="grid-unit-3-4">
        <p>3/4</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-4">
        <p>2/4</p>
    </div>
    <div class="grid-unit-2-4">
        <p>2/4</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-3-4">
        <p>3/4</p>
    </div>
    <div class="grid-unit-1-4">
        <p>1/4</p>
    </div>
</div>
{% endhighlight %}

<div class="grid-test">
    <h3>5/5</h3>
    <div class="grid-test grid">
        <div class="grid-unit-1-5">
            <p>1/5</p>
        </div>
        <div class="grid-unit-4-5">
            <p>4/5</p>
        </div>
    </div>
    <div class="grid-test grid">
        <div class="grid-unit-2-5">
            <p>2/5</p>
        </div>
        <div class="grid-unit-3-5">
            <p>3/5</p>
        </div>
    </div>
    <div class="grid-test grid">
        <div class="grid-unit-3-5">
            <p>3/5</p>
        </div>
        <div class="grid-unit-2-5">
            <p>2/5</p>
        </div>
    </div>
    <div class="grid-test grid">
        <div class="grid-unit-4-5">
            <p>4/5</p>
        </div>
        <div class="grid-unit-1-5">
            <p>1/5</p>
        </div>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-5">
        <p>1/5</p>
    </div>
    <div class="grid-unit-4-5">
        <p>4/5</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-5">
        <p>2/5</p>
    </div>
    <div class="grid-unit-3-5">
        <p>3/5</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-3-5">
        <p>3/5</p>
    </div>
    <div class="grid-unit-2-5">
        <p>2/5</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-4-5">
        <p>4/5</p>
    </div>
    <div class="grid-unit-1-5">
        <p>1/5</p>
    </div>
</div>
{% endhighlight %}

<h3>6/6</h3>
<div class="grid-test grid">
    <div class="grid-unit-1-6">
        <p>1/6</p>
    </div>
    <div class="grid-unit-5-6">
        <p>5/6</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-2-6">
        <p>2/6</p>
    </div>
    <div class="grid-unit-4-6">
        <p>4/6</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-3-6">
        <p>3/6</p>
    </div>
    <div class="grid-unit-3-6">
        <p>3/6</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-4-6">
        <p>4/6</p>
    </div>
    <div class="grid-unit-2-6">
        <p>2/6</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-5-6">
        <p>5/6</p>
    </div>
    <div class="grid-unit-1-6">
        <p>1/6</p>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-6">
        <p>1/6</p>
    </div>
    <div class="grid-unit-5-6">
        <p>5/6</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-6">
        <p>2/6</p>
    </div>
    <div class="grid-unit-4-6">
        <p>4/6</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-3-6">
        <p>3/6</p>
    </div>
    <div class="grid-unit-3-6">
        <p>3/6</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-4-6">
        <p>4/6</p>
    </div>
    <div class="grid-unit-2-6">
        <p>2/6</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-5-6">
        <p>5/6</p>
    </div>
    <div class="grid-unit-1-6">
        <p>1/6</p>
    </div>
</div>
{% endhighlight %}

<h3>7/7</h3>
<div class="grid-test grid">
    <div class="grid-unit-1-7">
        <p>1/7</p>
    </div>
    <div class="grid-unit-6-7">
        <p>6/7</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-2-7">
        <p>2/7</p>
    </div>
    <div class="grid-unit-5-7">
        <p>5/7</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-3-7">
        <p>3/7</p>
    </div>
    <div class="grid-unit-4-7">
        <p>4/7</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-4-7">
        <p>4/7</p>
    </div>
    <div class="grid-unit-3-7">
        <p>3/7</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-5-7">
        <p>5/7</p>
    </div>
    <div class="grid-unit-2-7">
        <p>2/7</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-6-7">
        <p>6/7</p>
    </div>
    <div class="grid-unit-1-7">
        <p>1/7</p>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-7">
        <p>1/7</p>
    </div>
    <div class="grid-unit-6-7">
        <p>6/7</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-7">
        <p>2/7</p>
    </div>
    <div class="grid-unit-5-7">
        <p>5/7</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-3-7">
        <p>3/7</p>
    </div>
    <div class="grid-unit-4-7">
        <p>4/7</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-4-7">
        <p>4/7</p>
    </div>
    <div class="grid-unit-3-7">
        <p>3/7</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-5-7">
        <p>5/7</p>
    </div>
    <div class="grid-unit-2-7">
        <p>2/7</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-6-7">
        <p>6/7</p>
    </div>
    <div class="grid-unit-1-7">
        <p>1/7</p>
    </div>
</div>
{% endhighlight %}

<h3>8/8</h3>
<div class="grid-test grid">
    <div class="grid-unit-1-8">
        <p>1/8</p>
    </div>
    <div class="grid-unit-7-8">
        <p>7/8</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-2-8">
        <p>2/8</p>
    </div>
    <div class="grid-unit-6-8">
        <p>6/8</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-3-8">
        <p>3/8</p>
    </div>
    <div class="grid-unit-5-8">
        <p>5/8</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-4-8">
        <p>4/8</p>
    </div>
    <div class="grid-unit-4-8">
        <p>4/8</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-5-8">
        <p>5/8</p>
    </div>
    <div class="grid-unit-3-8">
        <p>3/8</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-6-8">
        <p>6/8</p>
    </div>
    <div class="grid-unit-2-8">
        <p>2/8</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-7-8">
        <p>7/8</p>
    </div>
    <div class="grid-unit-1-8">
        <p>1/8</p>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-8">
        <p>1/8</p>
    </div>
    <div class="grid-unit-7-8">
        <p>7/8</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-8">
        <p>2/8</p>
    </div>
    <div class="grid-unit-6-8">
        <p>6/8</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-3-8">
        <p>3/8</p>
    </div>
    <div class="grid-unit-5-8">
        <p>5/8</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-4-8">
        <p>4/8</p>
    </div>
    <div class="grid-unit-4-8">
        <p>4/8</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-5-8">
        <p>5/8</p>
    </div>
    <div class="grid-unit-3-8">
        <p>3/8</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-6-8">
        <p>6/8</p>
    </div>
    <div class="grid-unit-2-8">
        <p>2/8</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-7-8">
        <p>7/8</p>
    </div>
    <div class="grid-unit-1-8">
        <p>1/8</p>
    </div>
</div>
{% endhighlight %}

<h3>12/12</h3>
<div class="grid-test grid">
    <div class="grid-unit-1-12">
        <p>1/12</p>
    </div>
    <div class="grid-unit-11-12">
        <p>11/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-2-12">
        <p>2/12</p>
    </div>
    <div class="grid-unit-10-12">
        <p>10/12</p>
    </div>
</div>
<div class="grid-test grid-test grid">
    <div class="grid-unit-3-12">
        <p>3/12</p>
    </div>
    <div class="grid-unit-9-12">
        <p>9/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-4-12">
        <p>4/12</p>
    </div>
    <div class="grid-unit-8-12">
        <p>8/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-5-12">
        <p>5/12</p>
    </div>
    <div class="grid-unit-7-12">
        <p>7/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-6-12">
        <p>6/12</p>
    </div>
    <div class="grid-unit-6-12">
        <p>6/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-7-12">
        <p>7/12</p>
    </div>
    <div class="grid-unit-5-12">
        <p>5/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-8-12">
        <p>8/12</p>
    </div>
    <div class="grid-unit-4-12">
        <p>4/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-9-12">
        <p>9/12</p>
    </div>
    <div class="grid-unit-3-12">
        <p>3/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-10-12">
        <p>10/12</p>
    </div>
    <div class="grid-unit-2-12">
        <p>2/12</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-11-12">
        <p>11/12</p>
    </div>
    <div class="grid-unit-1-12">
        <p>1/12</p>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-12">
        <p>1/12</p>
    </div>
    <div class="grid-unit-11-12">
        <p>11/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-12">
        <p>2/12</p>
    </div>
    <div class="grid-unit-10-12">
        <p>10/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-3-12">
        <p>3/12</p>
    </div>
    <div class="grid-unit-9-12">
        <p>9/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-4-12">
        <p>4/12</p>
    </div>
    <div class="grid-unit-8-12">
        <p>8/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-5-12">
        <p>5/12</p>
    </div>
    <div class="grid-unit-7-12">
        <p>7/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-6-12">
        <p>6/12</p>
    </div>
    <div class="grid-unit-6-12">
        <p>6/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-7-12">
        <p>7/12</p>
    </div>
    <div class="grid-unit-5-12">
        <p>5/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-8-12">
        <p>8/12</p>
    </div>
    <div class="grid-unit-4-12">
        <p>4/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-9-12">
        <p>9/12</p>
    </div>
    <div class="grid-unit-3-12">
        <p>3/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-10-12">
        <p>10/12</p>
    </div>
    <div class="grid-unit-2-12">
        <p>2/12</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-11-12">
        <p>11/12</p>
    </div>
    <div class="grid-unit-1-12">
        <p>1/12</p>
    </div>
</div>
{% endhighlight %}

<h3>24/24</h3>
<div class="grid-test grid">
    <div class="grid-unit-1-24">
        <p>1/24</p>
    </div>
    <div class="grid-unit-23-24">
        <p>23/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-2-24">
        <p>2/24</p>
    </div>
    <div class="grid-unit-22-24">
        <p>22/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-3-24">
        <p>3/24</p>
    </div>
    <div class="grid-unit-21-24">
        <p>21/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-4-24">
        <p>4/24</p>
    </div>
    <div class="grid-unit-20-24">
        <p>20/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-5-24">
        <p>5/24</p>
    </div>
    <div class="grid-unit-19-24">
        <p>19/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-6-24">
        <p>6/24</p>
    </div>
    <div class="grid-unit-18-24">
        <p>18/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-7-24">
        <p>7/24</p>
    </div>
    <div class="grid-unit-17-24">
        <p>17/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-8-24">
        <p>8/24</p>
    </div>
    <div class="grid-unit-16-24">
        <p>16/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-9-24">
        <p>9/24</p>
    </div>
    <div class="grid-unit-15-24">
        <p>15/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-10-24">
        <p>10/24</p>
    </div>
    <div class="grid-unit-14-24">
        <p>14/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-11-24">
        <p>11/24</p>
    </div>
    <div class="grid-unit-13-24">
        <p>13/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-12-24">
        <p>12/24</p>
    </div>
    <div class="grid-unit-12-24">
        <p>12/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-13-24">
        <p>13/24</p>
    </div>
    <div class="grid-unit-11-24">
        <p>11/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-14-24">
        <p>14/24</p>
    </div>
    <div class="grid-unit-10-24">
        <p>10/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-15-24">
        <p>15/24</p>
    </div>
    <div class="grid-unit-9-24">
        <p>9/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-16-24">
        <p>16/24</p>
    </div>
    <div class="grid-unit-8-24">
        <p>8/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-17-24">
        <p>17/24</p>
    </div>
    <div class="grid-unit-7-24">
        <p>7/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-18-24">
        <p>18/24</p>
    </div>
    <div class="grid-unit-6-24">
        <p>6/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-19-24">
        <p>19/24</p>
    </div>
    <div class="grid-unit-5-24">
        <p>5/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-20-24">
        <p>20/24</p>
    </div>
    <div class="grid-unit-4-24">
        <p>4/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-21-24">
        <p>21/24</p>
    </div>
    <div class="grid-unit-3-24">
        <p>3/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-22-24">
        <p>22/24</p>
    </div>
    <div class="grid-unit-2-24">
        <p>2/24</p>
    </div>
</div>
<div class="grid-test grid">
    <div class="grid-unit-23-24">
        <p>23/24</p>
    </div>
    <div class="grid-unit-1-24">
        <p>1/24</p>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid">
    <div class="grid-unit-1-24">
        <p>1/24</p>
    </div>
    <div class="grid-unit-23-24">
        <p>23/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-2-24">
        <p>2/24</p>
    </div>
    <div class="grid-unit-22-24">
        <p>22/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-3-24">
        <p>3/24</p>
    </div>
    <div class="grid-unit-21-24">
        <p>21/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-4-24">
        <p>4/24</p>
    </div>
    <div class="grid-unit-20-24">
        <p>20/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-5-24">
        <p>5/24</p>
    </div>
    <div class="grid-unit-19-24">
        <p>19/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-6-24">
        <p>6/24</p>
    </div>
    <div class="grid-unit-18-24">
        <p>18/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-7-24">
        <p>7/24</p>
    </div>
    <div class="grid-unit-17-24">
        <p>17/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-8-24">
        <p>8/24</p>
    </div>
    <div class="grid-unit-16-24">
        <p>16/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-9-24">
        <p>9/24</p>
    </div>
    <div class="grid-unit-15-24">
        <p>15/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-10-24">
        <p>10/24</p>
    </div>
    <div class="grid-unit-14-24">
        <p>14/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-11-24">
        <p>11/24</p>
    </div>
    <div class="grid-unit-13-24">
        <p>13/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-12-24">
        <p>12/24</p>
    </div>
    <div class="grid-unit-12-24">
        <p>12/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-13-24">
        <p>13/24</p>
    </div>
    <div class="grid-unit-11-24">
        <p>11/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-14-24">
        <p>14/24</p>
    </div>
    <div class="grid-unit-10-24">
        <p>10/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-15-24">
        <p>15/24</p>
    </div>
    <div class="grid-unit-9-24">
        <p>9/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-16-24">
        <p>16/24</p>
    </div>
    <div class="grid-unit-8-24">
        <p>8/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-17-24">
        <p>17/24</p>
    </div>
    <div class="grid-unit-7-24">
        <p>7/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-18-24">
        <p>18/24</p>
    </div>
    <div class="grid-unit-6-24">
        <p>6/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-19-24">
        <p>19/24</p>
    </div>
    <div class="grid-unit-5-24">
        <p>5/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-20-24">
        <p>20/24</p>
    </div>
    <div class="grid-unit-4-24">
        <p>4/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-21-24">
        <p>21/24</p>
    </div>
    <div class="grid-unit-3-24">
        <p>3/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-22-24">
        <p>22/24</p>
    </div>
    <div class="grid-unit-2-24">
        <p>2/24</p>
    </div>
</div>
<div class="grid">
    <div class="grid-unit-23-24">
        <p>23/24</p>
    </div>
    <div class="grid-unit-1-24">
        <p>1/24</p>
    </div>
</div>
{% endhighlight %}

Você pode usar a combinação de quantas divs precisar.

<div class="grid-ex grid">
    <div class="grid-unit-1-5 menu">
        <p>Menu</p>
    </div>
    <div class="grid-unit-3-5 content">
        <p>Content</p>
    </div>
    <div class="grid-unit-1-5 sidebar">
        <p>Sidebar</p>
    </div>
</div>

{% highlight html linenos=table %}
<div class="grid-ex grid">
    <div class="grid-unit-1-5 menu">
        <p>Menu</p>
    </div>
    <div class="grid-unit-3-5 content">
        <p>Content</p>
    </div>
    <div class="grid-unit-1-5 sidebar">
        <p>Sidebar</p>
    </div>
</div>
{% endhighlight %}