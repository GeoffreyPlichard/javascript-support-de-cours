// throttleTime fait la même chose que throttle en rajoutant l'interval

fromEvent(input, 'keyup')
  .pipe(
    map(event => event.target.value),
    throttleTime(500)
  )
  .subscribe();