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

window.document n'est pas vraiment le "root" en réalité. Il est créé à partir du HTMLDocument dont le premier élement est le HTML.
Pour accéder au document html:

`let html = document.documentElement;`

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
Il retourne uniquement les élements de type Element Node.
Il est aussi **dynamique** ou **mutable**, les élements sont mis à jour si ils sont ajoutés ou modifiés.

## NodeList

Retourné par querySelectorAll()

On peut utiliser le forEach avec le type NodeList.
Il retourne tous les types de Node (text, comment, element...)
Il est **statique** ou **immutable** et ne peut donc pas être modifié.

# --------------------

# Nodes

# --------------------

Un "node" (noeud) est un item de la représentation de l'arbre HTML.

Les nodes peuvent inclurent d'autres nodes, du contenu ou des attributs.

Les différents types de nodes sont:

- Element nodes (code: 1): Qui représente un élement HTML (div, span...)

- Text nodes (code: 3): Par exemple, le texte présent dans un paragraphe ou les espaces, retours à la ligne...

- Comment nodes (code 8): Les commentaires dans le HTML

- Document Fragment Node (code 11): Une portion du DOM extrait pour former un "fragment"

### Comment visualiser un node:

Pour visualiser un node, il suffit de sélectionner un élement dans l'onglet "Elements", et ensuite taper $0 dans la console:

![alt text](./img/find-node.png)

![alt text](./img/find-node2.png)

## Naviguer dans le DOM

Exemple de méthodes pour naviguer dans le DOM:

- lastChild / lastElementChild
- firstChild / firstElementChild
- parentNode
- nextSibling / nextElementSibling
- previousSibling / previousElementSibling
- children (retourne HTMLCollection)
- childNodes (retourne NodeList avec tous les types de nodes)

Ces méthodes peuvent être chainés:

`h2.parentNode.parentNode.nextSibling`

Par exemple, pour accéder au texte d'un H1:

```
let h1 = document.getElementByTagName('h1'); // Retourne HTMLCollection
h1[0].children // Retourne [] car aucun enfant
h1[0].firstChild // Retourne le texte du H1
h1[0].lastChild // Retourne le texte aussi !
```

## Manipuler le DOM

Nous pouvons créer des élements avec la méthode "createElement"

`let p = document.createElement('p')`

L'élement est créé mais pas ajouté au DOM. Pour ce faire il faut lui trouver un parent et l'attacher à ce parent via la méthode appendChild().

```
let body = document.querySelector('body');
body.appendChild(p);

```

Pour ajouter du texte au paragraphe:

```
let p = document.createElement('p');
p.textContent = "Hello World";
```

Nous pouvons utiliser aussi la méthode innerHTML mais il y a un risque de faille XSS car du Javascript inline peut y être ajouté tandis que textContent supprime les balises HTML.

Pour insérer un élement par rapport aux siblings, nous pouvons utiliser insertBefore().
Il n y a pas de méthode insertAfter(), pour ce faire nous pouvons cibler le nextElementSibling pour faire un insertBefore().

## Hierarchie

Prenons l'exemple d'un paragraphe:

`<p></p>`

Sa hiérarchie dans le DOM sera:

- Dom Object: L'objet récupéré dans le DOM.

- HTMLParagraphElement: Contient les propriétés spécifiques à un paragraphe

- HTMLElement: Il contient les éléments HTML.

- Element: Il contient les élément sans les espace etc... On peut y accéder avec nextElementSibling, children ou querySelector

- Node: Permet de naviguer dans le DOM avec des méthodes telles que parentNode, childNode ou nextSibling. Il contient aussi les textes, espaces et retours à la ligne d'un élément

- EventTarget: Interface qui héberge les évènements et les méthodes telles que getElementById

- Object: La racine de chaque élement qui est l'équivalent de Object en Javascript

## Dom Extension

Utilisé par PrototypeJS ou Mootools, il permet d'ajouter des fonctionnalités au DOM.

```
Element.prototype.red = function(){
  this.style.color = 'red';
}

let p = document.createElement('p');
p.red();
```

Modifier le prototype du DOM n'est pas une bonne pratique.
Mieux vaut utiliser la méthode utilisé par jQuery, qui encapsule les objets dans un wrapper et qui fait référence à l'original en ajoutant des fonctionnalitée.
