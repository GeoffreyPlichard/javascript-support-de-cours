// debouceTime permet de créer un delay sur les valeurs émises par le
// source stream.
// Si une nouvelle valeur est émise pendant l'interval qui a été
// configuré, la première valeur sera annulée (discarded).


// Ici on émet une valeur avec que si la valeur source
// a été émise au delà de 200 millisecondes
fromEvent(input, 'keyup')
  .pipe(
    map(event => event.target.value),
    debounceTime(200)
  )
  .subscribe();