function Person(name, age) {
  this.name = name; // Specific properties in constructor function
  this.age = age;   // are unique to instances
}

Person.prototype.greeting = function() { // Methods in prototype are shared
  console.log(`Hi Im ${this.name}`);    // between instances
}

let person = new Person("John", 30);
let person2 = new Person("Paul", 50);

// Le mot-clé new, permet de faire ceci:

// let obj = Object.create(Person.prototype);
// let this = obj;
// return this;