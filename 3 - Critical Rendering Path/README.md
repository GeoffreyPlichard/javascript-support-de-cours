# Rendering Engine

Le processus de rendu (**Rendering Process**) est la façon dont le navigateur affiche une page web.

Le navigateur travaille avec plusieurs environnements:

- Le moteur Javascript (Javascript engine)

- Le moteur de rendu (Rendering Engine)

- Le navigateur lui-même

Le moteur de rendu est un élément du navigateur. Il peut-être différent selon le navigateur (Gecho, Edge, Webkit, Blink...).
Il est responsable de l'affichage du contenu renvoyé par le serveur.

Il y a 4 étapes par lesquelles passe le moteur de rendu:

- La création du **DOM et du CSSOM**

- La création de l'arbre de rendu (**Rendering Tree**)

- La mise en page de l'arbre de rendu (**Layout**)

- L'impression des données à l'écran (**Painting**)

Toutes ces étapes représentent le processus de rendu.
