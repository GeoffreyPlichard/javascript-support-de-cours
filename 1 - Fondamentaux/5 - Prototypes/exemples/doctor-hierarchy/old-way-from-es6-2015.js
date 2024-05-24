
// Fonction constructeur Membre Vérifié
function VerifiedMember(name, age) {
  this.name = name;
  this.age = age;
}

// Ajout de la prop "verified" à toutes les instances de VerifiedMember
VerifiedMember.prototype.verified = true;

// Fonction constructeur Docteur
function Doctor(name, age, expertise) {
  this.name = name;
  this.age = age;
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

// Lier [[Prototype]] au .prototype de Verified Member
Object.setPrototypeOf(Doctor.prototype, VerifiedMember.prototype);

// Création de l'instance
let gpDoctor = new Doctor("Dr Strange", 34, "diagnosis");