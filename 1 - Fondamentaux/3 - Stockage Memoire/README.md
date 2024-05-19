# Comment Javascript Gère la Mémoire

Dans les langages bas niveaux (Low Levels) comme C ou C++, la mémoire est allouée et libérée manuellement. Dans ces langages, si la mémoire n'est pas libérée correctement, celà peut conduire à des fuites mémoire (**Memory Leaks**)

Dans les langages haut niveaux (High Levels) comme Javascript ou Python, la mémoire est allouée automatiquement quand des objets sont créés et libérée quand ces objets ne sont plus utilisé. Des fuites mémoires peuvent arriver quand même (TODO)

C'est ce qu'on appelle **Garbage Collection**.

En Javascript, les variables ne sont pas stockées de la même façon.

Les **Primitive Types** (types primitifs: String, Number, Boolean, Null, Undefined, Symbol) sont **stockés directement dans la "stack"**.

Les **Reference Types** (types "objets" ou "référencés": Array, Function, Object) **sont stockés dans le Memory Heap** ("tas de mémoire") et on y **accède par référence**.
