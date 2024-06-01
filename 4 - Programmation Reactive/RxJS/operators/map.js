// Transforme les items émis par un observable grâce à une fonction qui
// retourne chaque item


// Ici on créé un nouveau blue print courses$
// map produit qu'une seule valeur ici car il s'agit d'une requête HTTP
const courses$ = http$.pipe(
  map(res => Object.values(res["payload"]))
);