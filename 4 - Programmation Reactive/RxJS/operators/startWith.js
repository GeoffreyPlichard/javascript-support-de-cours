// startWith permet d'initialiser un stream avec une valeur initiale.

// Produit une chaine vide en premier
obs$.pipe(
  startWith(''),
  op1(),
  op2()
  op3()
);