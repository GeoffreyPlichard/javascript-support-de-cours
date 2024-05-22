function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person = new Person("John", 30);
let person2 = new Person("Paul", 50);

// Le mot-clé new, permet de faire ceci:

// let obj = Object.create(Person.prototype);
// let this = obj;
// return this;