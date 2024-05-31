import { interval } from 'rxjs';

// Ici interval$ n'est pas un stream of values
// C'est une définition, un "blue print"
const interval$ = interval(1000);

// Un observable ne fait rien tant qu'on ne s'y abonne pas.
// Pour créer une stream of values:
interval$.subscribe(val => {
  // console.log("Stream 1 " + val);
});

// Ici on créé un deuxième stream qui va émettre sa propre séquence de valeurs
// toutes les secondes
interval$.subscribe(val => {
  // console.log("Stream 2 " + val);
});