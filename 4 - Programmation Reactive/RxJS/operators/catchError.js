// catchError est trigger si un des observable a failed.

// Ici, en cas d'erreur, on retourne un observable avec tableau vide.
const courses$ = http$.pipe(
  map(res => Object.values(res["payload"])),
  catchError(err => of([])) 
);