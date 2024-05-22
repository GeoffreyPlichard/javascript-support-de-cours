
let person = {
  name: "John",
  greetings: () => {
    return this.name;
  }
};

person.age = 30;
person.greetings();