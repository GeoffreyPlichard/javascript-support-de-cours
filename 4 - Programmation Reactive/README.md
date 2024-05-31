RxJS est une librairie basé sur ReactiveX, qui repose sur le design pattern Observer, Iterator et la programmation fonctionnelle. (Voir le cours Typescript / Design Patterns).

RxJS repose sur des flux de valeurs (Streams of Values) qui sont émis et sur lesquels ont peut réagir.

Par exemple, en Javascript, setInterval va produire un stream d'évènements. Il va émettre des évènements tous les x temps et on y réagit grâce à une fonction de callback.

Ces fonctions, comme setTimeout, setInterval ou les EventListener sont fournis par le DOM.
