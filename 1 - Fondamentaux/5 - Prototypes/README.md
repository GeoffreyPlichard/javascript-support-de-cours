# Les Prototypes

Les prototypes en Javascript sont un moyen d'accéder aux propriétés d'un objet à partir d'un autres objet.

Quand les autres langages utilisent des **classes**, Javascript utilise des **prototypes**.

Les prototypes permettent de faire de l'héritage par prototype (**Prototypal Inheritance**).

Javascript est donc un **langage orienté objet**.

Tous les objets ont un objet "prototype" [[Prototype]] qui leur est associé automatiquement à leur création. C'est une référence au parent.
On peut considérer le prototype comme une boite à outils livrée avec l'objet.
Une fois l'objet créé, il aura accès aux méthodes de la boite à outils (le prototype).

```
const person {
  name: "john"
}

person.name.toUpperCase() // toUpperCase est une méthode du prototype
```

On peut par exemple vérifier si l'objet possède une propriété grâce à la méthode hasOwnProperty.

`person.hasOwnProperty('name') // true`

## Primitifs

On ne peut pas modifier le prototype des types primitifs et ce pour des questions de performance. Ils sont en effet stockés dans la Call Stack (voir la section Stockage Mémoire).

Pour avoir accès au prototype d'un type string, on peut soit passer par la création avec constructeur:

![alt text](./img/string.png)

Soit en utilisant une méthode de Object:

```
const test = 'test';
Object.getPrototypeOf(test);
```

## Fonctions

Les fonctions sont des objets particuliers dans le sens où ils héritent de deux objets prototypes

![alt text](./img/function.png)

## Classes ES6

Javascript ES6 permet d'utiliser le mot clé class pour ressembler aux autres langages. Mais ce n'est qu'un **Syntactic Sugar** (une extension de la syntaxe pour la rendre plus lisible) et à la fin, on obtient toujours de l'héritage par prototype.
