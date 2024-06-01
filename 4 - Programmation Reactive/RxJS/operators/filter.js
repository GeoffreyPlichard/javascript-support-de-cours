// Permet de filtrer les valeurs d'un stream


// On créé un blue print avec les valeurs valides du formulaire
const filteredValues$ = form.valueChanges.pipe(
  filter(() => this.form.valid)
);