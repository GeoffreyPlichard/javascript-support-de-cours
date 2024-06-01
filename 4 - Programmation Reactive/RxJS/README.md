# RXJS - Reactive Extension for Javascript

RxJS est une librairie basé sur ReactiveX, qui repose sur le design pattern Observer, Iterator et la programmation fonctionnelle. (Voir le cours Typescript / Design Patterns).

RxJS repose sur des flux de valeurs (**Streams of Values**) qui sont émis et sur lesquels ont peut réagir. Il permet de combiner plusieurs streams de valeurs de manière élégante en évitant le **Callback Hell** en Javascript.

Par exemple, en Javascript, setInterval va produire un stream d'évènements. Il va émettre des évènements tous les x temps et on y réagit grâce à une fonction de callback.

Ces fonctions, comme setTimeout, setInterval ou les EventListener sont fournis par le DOM.

## Observables

Un observable est un objet qui permet de créer un stream of values. C'est un **blue print** qui détermine le comportement qu'aura le flux.

`const interval$ = interval(1000)`

Ici on créé un objet interval$ (le $ est une convention) qui va produire un flux toutes les secondes.
Il faut ensuite créer ce flux grâce à la méthode subscribe().

`interval$.subscribe(callback)`

**Aucune valeur n'est émise tant qu'on est pas abonné (subscribe) à l'observable.**
Voir exemple _creation/interval.js_

On peut aussi créer un observable à partir d'un évènement du DOM avec le méthode **fromEvent()**

`const clickStream$ = fromEvent(document, 'click')`

C'est l'équivalent d'un document.addEventListener('click')

Subscribe a 3 arguments:

- Le handler: Callback déclenché si tout va bien
- Le error handler: Callback déclenché si erreur
- le terminated handler: Callback déclenché quand le stream est terminé

```
clickStream$.subscribe(
  evt => console.log(evt),
  err => console.log(err),
  () => console.log('completed')
);
```

**Quand le stream est terminé, il n'émettera plus.**

On peut terminer un stream avec la méthode unsubscribe accessible depuis l'objet de souscription:

```
const subscription = interval$.subscribe(...);
subscription.unsubscribe();
```
