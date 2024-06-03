// Finalize permet d'effectuer des actions dans le cas où
// un observable est terminé ou est en erreur.
// Equivalent de .finally() pour les promesses.


// Ici, si une erreur est levée, on bypass les operators et arrive
// directement dans le finalize.
// On peut placer le catch error aux différents points de la chaine 
// d'observables.
const courses$ = http$.pipe(
  catchError(err => {
    console.log('Error occured', err);
    return throwError(err);
  })
  map(res => Object.values(res["payload"])),
  .finalize(() => {
    console.log('Do some cleanup stuff');
  });
);