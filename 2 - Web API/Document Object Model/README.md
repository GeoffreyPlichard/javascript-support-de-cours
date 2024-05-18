# Document Object Model (DOM)

Le DOM ne fait pas partie de Javascript. C'est une **API Web**. Chaque navigateur possède ses propres APIs pour manipuler le DOM.
C'est une structure hiérarchique en arbre (Tree) qui représente le document HTML et dont chaque branche constitue un noeud (Node).

## Architecture hiérarchique

L'objet le plus haut dans la hiérarchie est **Window** (Object qui est créé lors du premier contexte d'exécution en Javascript, avant les fonctions etc...).

## Document

Quand le navigateur récupère le fichier HTML du serveur, il parse la structure HTML pour en faire un modèle (Document Object Model) qui est ensuite affiché à l'écran.
Ensuite grâce à l'objet "document", nous pouvons communiquer avec le modèle à travers plusieurs méthodes.

Pour visualier le document dans le console:

`console.dir(document);`

## Forms

Pour accéder aux formulaire, nous pouvons utiliser la méthode fournie par l'objet document:

`document.forms`

# Browser Object Model (BOM)

L'objet window est fournie par le **Browser Object Model**. Le BOM permet à Javascript de récupérer des informations en plus qu'avec le DOM. Par exemple, l'historique de navigation, l'écran, le storage etc...

# Qui est qui ?

Le code présent dans le fichier .html est le **HTML** (Hypertext Markup Language).

L'objet document, présent dans "window", permet de communiquer avec le **DOM**, qui lui est un modèle créé à partir du HTML.

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

# --------------------

# Accéder aux élements

# --------------------

Il y a plusieurs façon d'accéder aux élements HTML grâce au DOM. Par id, nom de balise, classe...
Le plus important est de savoir ce qui est retourné par ces méthodes.

## Element Node

Retourné par getElementById('header').
Il y a plusieurs types de noeuds (Node) auxquels sont attribué un code.
Par exemple le code 1 est un "Element Node":

```
header.nodeType // 1
header.nodeName // "DIV"
```

## HTMLCollection

Retourné par getElementsByClassName()

Un HTMLCollection n'est pas un array, on ne peut pas y accéder avec forEach.
Par contre une boucle for peut être utilisée.
