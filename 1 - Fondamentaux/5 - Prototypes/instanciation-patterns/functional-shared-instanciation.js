
let sharedMethods = {
  greetings: function() {
    console.log(`Hi, im ${this.name}`);
  }
}

// On créé une factory function.
function Person(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.greetings = sharedMethods.greetings;

  return obj;
}

let person = Person("John", 30);
let person2 = Person("Paul", 50);

person.greetings === person2.greetings // True !

// Avec cette méthode, on partage la méthode en mémoire.
// Par contre si on modifie la méthode greetings d'un objet, elle ne pointera 
// plus au même endroit.

sharedMethods.greetings = function() {
  console.log('New method');
}

let person3 = Person("Bob", 40);
person.greetings === person3.greetings // False !