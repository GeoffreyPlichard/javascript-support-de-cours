
function fc1() {
  console.log('Fonction 1');
  fc2();
}

function fc2() {
  console.log('Fonction 2');
  fc3();
}

function fc3() {
  console.log('Fonction 3');
}

fc1();