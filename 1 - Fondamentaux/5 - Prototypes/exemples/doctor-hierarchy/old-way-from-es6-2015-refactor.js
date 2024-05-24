// Fonction constructeur User
function User(name, age) {
  this.name = name.toUpperCase(); // gpDoctor name sera en uppercase parcequ'au final, this.name fait référence à gpDoctor name
  this.age = age;
  // "this" vient de VerifiedMember, qui vient de doctor, qui vient de gpDoctor
}

// Ajout de la prop "admin" à toutes les instances de User
User.prototype.admin = false;

// Fonction constructeur Membre Vérifié
function VerifiedMember(name, age) {
  // "this" viens de Doctor (qui vient de gpDoctor)
  User.call(this, name, age); // On invoque la fonction constructeur User avec le contexte de gpDoctor
}

// Ajout de la prop "verified" à toutes les instances de VerifiedMember
VerifiedMember.prototype.verified = true;

// Fonction constructeur Docteur
function Doctor(name, age, expertise) {
  // "this" vient de gpDoctor
  VerifiedMember.call(this, name, age) // On invoque la fonction constructeur VerifiedMember avec le contexte de gpDoctor
  this.doctor = true;
  this.expertise = expertise;
}

// Ajout de la méthode dans le prototype
// Le slot [[Prototype]] de l'instance créé par cette fonction constructeur
// pointera vers ce prototype.
Doctor.prototype.introduceSelf = function() {
  console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can
  help you with ${this.expertise} related issues`);
}

// Lier [[Prototype]] au .prototype
Object.setPrototypeOf(Doctor.prototype, VerifiedMember.prototype);
Object.setPrototypeOf(VerifiedMember.prototype, User.prototype);

// Création de l'instance
let gpDoctor = new Doctor("Dr Strange", 34, "diagnosis");