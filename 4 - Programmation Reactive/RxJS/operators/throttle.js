// throttle est un peu comme debounceTime sauf que les valeurs seront émises
// régulièrement en fonction du timer


// Ici, seulement la première valeur à partir de chaque intervalle 
// sera émise.
// Dans le cas d'un typeahead, on utilisera le debounceTime()
fromEvent(input, 'keyup')
  .pipe(
    map(event => event.target.value),
    throttle(() => interval(500))
  )
  .subscribe();