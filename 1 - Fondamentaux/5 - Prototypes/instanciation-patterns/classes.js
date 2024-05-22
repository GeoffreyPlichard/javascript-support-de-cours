// Classes are just syntactic sugar to do pseudoclassical instanciation

class Person {
  constructor(name, age) {
    this.name = name;  // Specific properties in constructor function
    this.age = age;     // are unique to instances
  }

  greeting() {                          // Methods outside constructor
    console.log(`Hi Im ${this.name}`);  // are shared between instances
  }
}

let person = new Person("John", 30);
let person2 = new Person("Paul", 50);