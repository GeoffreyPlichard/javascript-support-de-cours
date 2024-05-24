
// Les classes font la même chose que la version ES6 avec setPrototypeOf()
// C'est juste plus élégant.

// class User
class User {
  contructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // admin = false; La syntaxe class ES6 ne permet pas d'ajouter des
  // propriétés au prototype
}

// Ajout de la prop "admin" à toutes les instances de User
User.prototype.admin = false;

// class Membre Vérifié
class VerifiedMember extends User {
  contructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
}

// Ajout de la prop "verified" à toutes les instances de VerifiedMember
VerifiedMember.prototype.verified = true;

// class Docteur. Extends: // Lier [[Prototype]] au .prototype de Verified Member
class Doctor extends VerifiedMember {
  constructor(name, age, expertise) {
    super();
    this.name = name;
    this.age = age;
    this.doctor = true;
    this.expertise = expertise;
  }

  // Ajout de la méthode dans le prototype
  // Le slot [[Prototype]] de l'instance créé par cette fonction constructeur
  // pointera vers ce prototype.
  introduceSelf() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can
    help you with ${this.expertise} related issues`);
  }
}


// Création de l'instance
let gpDoctor = new Doctor("Dr Strange", 34, "diagnosis");