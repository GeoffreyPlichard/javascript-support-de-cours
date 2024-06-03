// retryWhen créé un nouveau stream en cas d'erreur
// jusqu'à ce qu'il n'y ait plus d'erreurs

const courses$ = http$.pipe(
  map(res => Object.values(res["payload"])),
  retryWhen(errors => errors.pipe(
    // Permet d'attendre avant d'émettre une nouvelle valeur
    // Si on utilise juste delay() ici, ça décalerai l'erreur
    // de 2 secondes et ce n'est pas ce qu'on veut.
    // On veut que, après l'erreur, on attende 2 secondes.
    delayWhen(() => {
      timer(2000)
    })
    // Après 2 secondes, retryWhen va renvoyer une requête HTTP
  ))
);