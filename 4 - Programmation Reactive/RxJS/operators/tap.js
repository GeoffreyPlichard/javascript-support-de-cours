// Permet d'exécuter du code en dehors de la chaine d'observable
// par exemple update une variable dans le component ou afficher des logs

obs$.pipe(
  tap(() => console.log('Faire quelque chose pour chaque value émise'))
);