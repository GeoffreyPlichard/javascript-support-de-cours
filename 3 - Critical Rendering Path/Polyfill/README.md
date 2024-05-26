# Polyfills

Un des problème majeur qu'on rencontre quand on est développeur est que les navigateurs ne prennent pas tous en compte les recommandations du W3C.

Le **W3C (World Wide Web Consortium)** est un groupe de personnes qui mettent en place des standards pour que le fonctionnement du web soit harmonisé.

Il y a aussi **ECMAScript**, qui est le langage de script sur lequel Javascript est basé. ECMAScript définie les standards et décide des nouvelles fonctionnalités à ajouter.

Mais les navigateurs ne sont pas obligés de se plier à ces standards. Par exemple, Internet Explorer a longtemps mis en place ses propres règles et fonctionnalités.

Pour palier à ce problème, on doit mettre en place des **polyfill**.

Un polyfill fournie un **fallback**, un script qui sera exécuté en cas d'abscence d'une fonctionnalité.

On peut trouver des polyfills déjà fabriqué sur le web. Par exemple ici:
https://html5please.com.

## Comment créer un polyfill ?

Prenons l'exemple de la méthode .forEach() en Javascript.

Pour savoir une une méthode existe en Javascript, il faut chercher cette méthode dans le prototype de la fonction constructeur (voir section prototypes).
Par exemple:

`Array.prototype.forEach`

Si "undefined" est retourné, il faut recréer cette méthode pour qu'elle soit comprise par le navigateur. Voir _forEach.js_
