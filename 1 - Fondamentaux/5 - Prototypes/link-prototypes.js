let verifiedMember = {
  verified: true
};

let doctor = {
  name: "Dr Strange"
};

// Works but bad !
// doctor.__proto__ = verifiedMember; 

Object.setPrototypeOf(doctor, verifiedMember);