let personProto = {
  greetings: function() {
    console.log(`Hi, Im ${this.name} and I have ${this.age} years old.`);
  }
}

let person = Object.create(personProto, {
  age: {
    value: 30,
    enumerable: true,
    writable: true
  }
});

person.name = "John";

person.greetings();