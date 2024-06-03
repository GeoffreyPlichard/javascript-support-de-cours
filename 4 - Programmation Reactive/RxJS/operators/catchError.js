// catchError est trigger si un des observable a failed.

// Ici, en cas d'erreur, on retourne un observable avec tableau vide.
const courses$ = http$.pipe(
  map(res => Object.values(res["payload"])),
  catchError(err => of([])) 
);

// Dans le cas où l'on veut ne plus émettre de values et retourner
// l'erreur directement de manière bloquante on peut utiliser throwError()
const courses$ = http$.pipe(
  map(res => Object.values(res["payload"])),
  catchError(err => {
    console.log('Error occured', err);
    return throwError(err);
  }); 
);
