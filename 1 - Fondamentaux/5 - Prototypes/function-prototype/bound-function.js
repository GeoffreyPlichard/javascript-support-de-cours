let personProto = {
  greetings: function() {
    return this.name;
  }
}

const person = {
  name: "John",
}

// Utilise l'objet person comme contexte (this)
let personMessage = personProto.greetings.bind(person);

// personMessage n'a pas pour but d'être utilisé comme fonction constructeur
// il ne possède donc pas de .prototype