let user = {
  admin: false
}

let verifiedMember = {
  verified: true,
  introduceSelf: function() {
    console.log('Hi, Im a verified member');
  }
}

let doctor = {
  name: "Dr Strange"
}

Object.setPrototypeOf(doctor, verifiedMember);
Object.setPrototypeOf(verifiedMember, user);

doctor.introduceSelf(); // Works !
doctor.admin; // Works too !