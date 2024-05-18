# Document Object Model

Le DOM ne fait pas partie de Javascript. Chaque navigateur possède sa propre API pour manipuler le DOM, la **Web API**.
C'est une structure hiérarchique en arbre (Tree) qui représente le document HTML et dont chaque branche constitue un noeud (Node).

## Architecture hiérarchique

L'objet le plus haut dans la hiérarchie est **Window** (Object qui est créé lors du premier contexte d'exécution en Javascript, avant les fonctions etc...).

## Document

Le deuxième noeud dans la hiérarchie est l'objet **document**, qui représente la page HTML. C'est grâce à cet objet que nous pouvons accéder aux différents noeuds (balises HTML).
Quand le navigateur récupère le fichier HTML du serveur, il parse la structure HTML pour en faire un modèle (Model) qui est ensuite affiché à l'écran.
Ensuite grâce à l'objet "document", nous pouvons communiquer avec le modèle.

Pour visualier le document dans le console:

`console.dir(document);`
