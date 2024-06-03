// Permet de combiner plusieurs observable en récupérant les dernières
// valeurs émises et en les transmettant au next().
// Retourne un Tuple

// Ici on récupère la dernière valeur de courses$
this.loadSessons()
  .pipe(
    withLatestFrom(this.courses$)
  )
  .subscribe(([lessons, courses]) => {
    console.log('lessons', lessons);
    console.log('courses', lessons);
  });