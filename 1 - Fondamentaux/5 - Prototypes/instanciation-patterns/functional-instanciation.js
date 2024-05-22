
// On créé une factory function.
function Person(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.greetings = function() {
    console.log(`Hi, im ${this.name}`);
  }

  return obj;
}

let person = Person("John", 30);
let person2 = Person("Paul", 50);

person.greetings === person2.greetings // False !

// Le problème de ce pattern est qu'on créé des copies d'objets uniques
// en mémoire. Il n'y a pas de notion d'héritage.