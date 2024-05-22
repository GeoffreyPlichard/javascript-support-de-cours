# Les Objets

En javascript, tout est objet.
Il y a plusieurs méthodes pour créer un objet:

- Objet littéral (Litteral Object)

_object-literal.js_

Le problème de cette méthode est que nous ne pouvons pas partager d'informations entre les objets pour faire de l'héritage car il n y a pas de .prototype.

- Une fonction

_object-function.js_

Créer un objet en utilisant une fonction (**Instanciation Pattern**) permet de pouvoir instancier l'objet.
Il y a plusieurs façons d'instancier un objet (voir section Prototypes) et celle présenté dans le fichier ci-dessus est la plus basique.
