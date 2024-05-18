# Document Object Model (DOM)

Le DOM ne fait pas partie de Javascript. Chaque navigateur possède sa propre API pour manipuler le DOM, la **Web API**.
C'est une structure hiérarchique en arbre (Tree) qui représente le document HTML et dont chaque branche constitue un noeud (Node).

## Architecture hiérarchique

L'objet le plus haut dans la hiérarchie est **Window** (Object qui est créé lors du premier contexte d'exécution en Javascript, avant les fonctions etc...).

## Document

Le deuxième noeud dans la hiérarchie est l'objet **document**, qui représente la page HTML. C'est grâce à cet objet que nous pouvons accéder aux différents noeuds (balises HTML).
Quand le navigateur récupère le fichier HTML du serveur, il parse la structure HTML pour en faire un modèle (Document Object Model) qui est ensuite affiché à l'écran.
Ensuite grâce à l'objet "document", nous pouvons communiquer avec le modèle.

Pour visualier le document dans le console:

`console.dir(document);`

## Forms

Pour accéder aux formulaire, nous pouvons utiliser la méthode fournie par l'objet document:

`document.forms`

# Browser Object Model (BOM)

L'objet window est fournie par le **Browser Object Model**. Le BOM permet à Javascript de récupérer des informations en plus qu'avec le DOM. Par exemple, l'historique de navigation, l'écran, le storage etc...

# Qui est qui ?

Le code présent dans le fichier .html est le **HTML** (Hypertext Markup Language).

L'objet présent dans "window" est le **DOM**

Ce qui est affiché dans le navigateur est le **Render Tree**, une association du DOM (Document Object Model) et du CSSOM (CSS Object Model).

Par exemple:

```
<body>
  <p style="display:none">Ce texte n'est pas visible</p>
</body>
```

Le paragraphe dans cet exemple fait partie du DOM, mais est **retiré du Render Tree**, donc invisible à l'écran.

# Le cas des Pseudo Elements

Les pseudo éléments sont des sélecteurs CSS qui peuvent cibler des éléments HTML pour manipuler une partie de l'élement sélectionné.
Ces élements ne font pas partie du DOM. **Il font partie du CSSOM et ne peuvent donc pas être manipulés par Javascript**.

# Où peut-on voir le DOM ?

Nulle part ! La représentation la plus fiable est dans le Developer Tool des navigateurs, qui rajoute en plus certains pseudo-élements.
