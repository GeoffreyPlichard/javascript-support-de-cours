// Permet de récupérer uniquement la première valeur émise. Le stream
// sera ensuite completed juste après.

obs$.pipe(
  first()
);