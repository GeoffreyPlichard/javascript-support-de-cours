// Si deux valeurs consécutives sont les mêmes, on émet seulement
// une valeur


// Dans plusieurs cas, quand on tape au clavier, on peut avoir 
// des lettres qui sont dupliquées.
// Par exemple en appuyant sur MAJ et ensuite une lettre, cela retournera
// 2 fois la lettre.
// On peut utiliser distinctUntilChanged pour éviter les duplications.
fromEvent(input, 'keyup')
  .pipe(
    map(event => event.target.value),
    distinctUntilChanged()
  )
  .subscribe();