// Permet de récupérer uniquement un nombre donné de valeurs émises. 
// Le stream sera ensuite completed juste après.

obs$.pipe(
  take(2)
);