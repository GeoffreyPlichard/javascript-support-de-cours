# Les Evènements en Javascript

Les évènements sont des actions qui sont déclenchées chaque fois que l'utilisateur intéragie avec une page web (clique, taper au clavier...).

## Comment créer des évènements ?

Grâce à Javascript.
Les évènements font partie de l'API DOM mais on y intéragie avec JS.
L'API DOM fournie des **Event Listeners** (écouteurs d'évènements) qu'on attache à des éléments du DOM et quand une action est déclenchée, une **fonction de callback** est exécutée en Javascript. On appelle ça un **event handler**.

On peut attacher ces évènements de plusieurs manières:

- Dans le HTML (**inline event listeners**)

`<button onclick="handler()>Clique</button>`

- (**property listeners**)

```
let btn = document.querySelector('button);
btn.onclick= () => {console.log('Hello World')};

```

- Dans le Javascript en récupérant un élement du dom (**event listeners**)

```
let btn = document.querySelector('button);
btn.addEventListener('click', handler);

```

## Question performance ?

Les listeners ne font rien jusqu'à ce qu'un event soit déclenché. Il n y a donc pas d'utilisation de ressources en attendant.

## D'où viennent les évènements ?

Les évènements viennent de l'interface EventTarget, dont hérite chaque Node. Il permet aux nodes d'utiliser les évènements grâce à la méthode addEventListener.
