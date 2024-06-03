// Cet operator permet d'envoyer différentes tâches en parallèle.
// Equivalent de Promise.all() pour les promesses.


// Ici, le stream sera terminé quand les 2 call HTTP seront retournés.
// Il retourne un Tuple avec 2 valeurs dans ce cas ci:
const courses$ = http$.pipe(
  map(res => Object.values(res["payload"]))
);

const lessons$ = http$.pipe(
  map(res => Object.values(res["payload"]))
);

forkJoin(courses$, lessons$)
  .pipe(
    tap(([course, lessons]) => {
      console.log('course', course);
      console.log('lessons', lessons);
    })
  )
  .subscribe();