// Permet de créer un observable à partir d'une promesse

const source$ = fromPromise(
  fetch(url, {})
)