// Transforme les items émis par un observable grâce à une fonction qui
// retourne chaque item


// Ici on créé un nouveau blue print courses$
const courses$ = http$.pipe(
  map(res => Object.values(res["payload"]))
);