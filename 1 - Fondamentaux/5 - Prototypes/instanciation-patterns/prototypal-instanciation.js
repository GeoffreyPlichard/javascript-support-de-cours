// On créé une factory function.
function Person(name, age) {
  let obj = Object.create(Person.prototype);
  obj.name = name;
  obj.age = age;
  return obj;
}

Person.prototype.greetings = function() {
  console.log(`Hi, im ${this.name}`);
}

let person = Person("John", 30);
let person2 = Person("Paul", 50);

// Change la méthode greeting
Person.prototype.greetings = function() {
  console.log(`Hi, im NEW ${this.name}`);
}

person.greetings(); // Hi, im NEW...

// Tous les prototypes des instances pointent sur le prototype de Person