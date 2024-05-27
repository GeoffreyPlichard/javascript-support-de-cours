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
  Une fois que l'arbre est prêt, le navigateur commence le processus de Layout.
  Il calcule les dimensions de l'endroit où les éléments doivent s'insérer sur la page.

- L'impression des données à l'écran (**Painting**)
  Une fois que le layout est prêt, il faut ajouter les attributs de style (couleurs, margin, animations, etc).

Toutes ces étapes représentent le processus de rendu.

## Le navigateur

Le navigateur passe par 4 étapes:

- La récupération de la ressource sur le serveur (**Fetch**)

- Le traitement de cette ressource (**Process**)

- L'affichage (**Display**)

- Le stockage (**Storage**)

Chaque onglet ouvert sur le navigateur passe par ces 4 étapes.

**Fetch:**
Le navigateur vérifie si un cache local (Local Cache) existe.
Si ce n'est pas le cas, la couche Réseau (Network Layer) doit créer un nouveau paquet HTTP avec le nom de domaine récupéré dans la barre d'adresse.
Une fois que les données sont récupérées, les datas sont fournies au moteur de rendu (Rendering Engine).

**Process:**
La couche réseau a fournie les données au navigateur.
Maintenant, le navigateur doit fournir les autres couches, le moteur de rendu, le moteur Javascript et le UI Backend.

- Rendering Engine: Le moteur de rendu est responsable de l'affichage du contenu. Les données seront affichées en accords avec le **Content-Type** ou **MIME** (HTML, XML, JSON, Images, etc).
  Les moteurs de rendu sont différents en fonction des navigateurs et la plupart sont écrit en C++.
  Une des principales briques du moteur de rendu est le **HTML parser**. Si du HTML a été demandé, il devra lire le HTML et le CSS.
  Une fois que le HTML et CSS a été parsé, le **Render Tree Object** est construit.
  Il va ensuite suivre le processus de "layout" et "paint" pour être affiché à l'écran.

- Javascript Engine: Parse le code Javascript en code Machine. Ils sont écrit pour la plupart aussi en C++.
  Les moteurs Javascript incluent un Memory Heap et une Call Stack (voir section mémoire Javascript).

- UI Backend: Responsable de la création des widgets de base comme les éléments de formulaire etc. Chaque navigateur possède aussi son propre UI Backend. C'est pour cette raison que les éléments UI ne sont pas les mêmes dans navigateur à l'autre.

**Display:**
Cette partie est gérée par le moteur du navigateur. Il fournie une interface haut niveau au Rendering Engine.
Il charge l'URL et aide l'utilisateur à naviguer sur la page (frontend).
Il permet aussi à Javascript d'afficher des éléments comme des alertes ou barres de progression.

**Storage:**
Les navigateurs possède aussi une capacité de stockage pour afficher les pages plus rapidement.
La persistance des données est effectuées par plusieurs API (Local Storage, Session Storage, Cookies, webSQL, IndexedDB, FileSystem, AppCache et Services Workers).

- Local Storage et Session Storage: Sont des paires clé:valeur qui peuvent stocker n'importe quel élément Javascript
- Session Storage: Garde les données en mémoire tant que la session est active.
- Cookie: Collection de paire clé:valeur stocké dans la mémoire du navigateur. Ils naviguent entre le serveur et le navigateur ce qui ne les rend pas très performants. C'est même la méthode la moins performante pour stocker les données dans le navigateur.
  Mais c'est une solution utile concernant la sécurité.

# Critical Rendering Path

Que se passe-t-il quand le HTML est prêt ?
Le moteur de rendu (Rendering Engine) parse le HTML et le convertie en DOM nodes qu'on appelle le **Content Tree** (arbre de contenu).
Dans le même temps, le moteur va aussi parse le style. Ces informations de style et les instructions visuelles du HTML vont être utilisés pour créér un autre arbre: le CSSOM.
Le tout va former le **Render Tree** (arbre de rendu).

L'étape suivant est d'afficher le contenu sur l'écran.

Intervient le **Layout Process**, qui prend chaque node et lui donne les coordonnées exactes de l'endroit où il doit être affiché sur l'écran.

Et enfin, le **Painting**. Le Render Tree est scanné et chaque node est affiché au bon endroit sur l'écran, utilisant la couche UI Backend.

Le processus (Critical Rendering Path), est fluide. Il s'exécute au fur et à mesure que les données sont récupérées depuis le serveur.
