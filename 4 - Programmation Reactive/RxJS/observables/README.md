# Subjects

Un Subject est à la fois **un observer et un observable**.
Il permet de contrôler le stream de valeurs.
Il permet aussi le **multicasting**, qui produit le même stream pour plusieurs abonnés.
Par contre, le Subject n'a pas de mémoire. Si on souscrit après que les valeurs ont été émises, ces valeurs ne seront pas disponibles.

On peut par exemple émettre des nouvelles valeurs:
`subject.next()`

On peut aussi chainer des observables avec:
`subject.pipe(...)`

# BehaviorSubject

Le BehaviorSubject permet le **late subscription**. Si des valeurs ont été émises avant la subscription, elle seront disponible, ce qui n'est pas le cas avec un Subject.
