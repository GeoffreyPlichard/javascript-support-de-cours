# Les Prototypes

Les prototypes en Javascript sont un moyen d'accéder aux propriétés d'un objet à partir d'un autres objet.

Quand les autres langages utilisent des **classes**, Javascript utilise des **prototypes**.

Les prototypes permettent de faire de l'héritage par prototype (**Prototypal Inheritance**).

Javascript est donc un **langage orienté objet**.

Tous les objets ont un objet "prototype" [[Prototype]] qui leur est associé automatiquement à leur création. Cet objet fait référence à un autre objet et créé ainsi une chaine.
Le premier prototype peut être considéré comme une boite à outils livrée avec l'objet.
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

Quand un objet est créé, le moteur Javascript lui ajoute [[Prototype]] automatiquement.
Celui là pointera vers le prototype (pas [[Prototype]] !) de la fonction qui l'a créé (le prototype de la fonction Object() si on ne précise pas).

![alt text](./img/object-function.png)

![alt text](./img/object-function2.png)

## Classes ES6

Javascript ES6 permet d'utiliser le mot clé class pour ressembler aux autres langages. Mais ce n'est qu'un **Syntactic Sugar** (une extension de la syntaxe pour la rendre plus lisible) et à la fin, on obtient toujours de l'héritage par prototype.

## [[Prototype]]

Quand un objet est créé, Javascript créé un lien vers son prototype ([[Prototype]]) en mémoire. Et celui là sera le prototype Object.
Ce prototype "root" à lui un prototype qui vaut "null".
Notre premier objet est donc créé **à partir du constructeur de Object**.
Plus précisemment, le [[Prototype]] pointe vers le prototype du constructeur de la fonction (pas [[Prototype]], voir la section fonctions).

![alt text](./img/prototype.png)

Dans la console:

![alt text](./img/prototype2.png)

```
let doctor = {};
let doctor = new Object(); // même résultat.
```

On ne peut pas accéder directement à cet objet [[Prototype]] car c'est une propriété interne (**Internal Property** ou **Internal Slot**).
Pour ce faire il faut utiliser:

`doctor.__proto__;`
ou
`Object.getPrototypeOf(doctor);`

## Object

Presque tous les objets sont des instances de Object. Les types primitifs ne sont pas des instances de Object mais Javascript créé un wrapper autour, ce qui permet d'avoir accès au méthodes de Object.

Tous les data types complexes (Array, Function) héritent de Object.prototype.
Les primitifs n'ont pas de prototypes, mais Javascript en interne, créé un wrapper autour de ces types primitifs, ce qui leur donne accès aussi au prototype de Object.

Object est lui même une fonction.
String(), Number() ou Boolean() sont aussi des fonctions qui wrappent ces mêmes types primitifs.

![alt text](./img/object.png)

On peut d'ailleur les exécuter pour accéder à leur prototype. Prototype qui pointe vers l'objet global.

![alt text](./img/object2.png)

## Le cas de Null

Null est particulier dans le sens où il est considéré comme un type primitif, mais si on vérifie son type, on verra qu'il est de type object mais n'est pas une instance de Object...

![alt text](./img/null.png)

La version courte est qu'il s'agit d'un bug dans Javascript.

La version longue est celle-ci:

Dans la version originale de Javascript, les valeurs étaient stockées en 32 octets.
Les 3 premiers octets représentaient le type (000 pour tous les objets) et les octets restant la valeur.
Comme "null" représente rien ou "void", ses 32 octets sont 0.
Et donc aujourd'hui, quand l'interpréteur Javascript lit les 3 premiers octets (000), il retourne sont type en tant qu'objet.

## Les cas des primitifs

Quand on créé un type string (ou autre primitif), Javascript stocke la variable dans la mémoire Stack (Voir la section stockage mémoire).
Nous n'avons donc pas accès à son prototype car il n'en a pas.

`let name = "John";`

Mais, quand on traite un primitif comme un objet, Javascript va en interne créer un wrapper temporaire (basé sur son type pour exposer uniquement les méthodes nécessaires) et le détruire juste après son utilisation (question de performance).

On peut aussi créer un objet explicitement. Un objet sera créé avec chaque lettre correspondant à une paire clé: valeur.

`let name = new String("John");`

![alt text](./img/string2.png)

## Prémisses de l'héritage

On peut faire pointer un prototype vers un autre objet:

![alt text](./img/link-proto.png)

![alt text](./img/link-proto2.png)

Dans cet exemple, on modifie le prototype d'un objet existant, ce qui n'est pas la manière la plus performante car Javascript doit casse la chaine de prototype existante et en recréer une nouvelle.
Une méthode plus efficace est de faire ça à la création d'un objet:

```
let verifiedMember = {
  verified: true
};

let doctor = Object.create(verifiedMember, {
  name: {
    value: "Dr Strange"
  }
});
```

Mais cette méthode et verbeuse ce qui peut poser problème si l'application prend de l'ampleur.

Nous pouvons aussi créer une chaine de prototype (Prototype Chain) de cette manière:

![alt text](./img/prototype-chain.png)
