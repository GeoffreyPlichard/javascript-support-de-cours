// switchMap créé un dérivé d'une valeur.
// Si une nouvelle valeur du source stream est produite, la 
// précédente valeur est cancelled.

// Dans l'example d'un champ de recherche
// Si on cherche une nouvelle valeur pendant qu'un call est déjà
// en cours, il sera annulé. L'observable sera unsubscribed.

fromEvent(input, 'keyup')
  .pipe(
    map(event => event.target.value),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(search => this.loadLessons(search))
  )
  .subscribe();

