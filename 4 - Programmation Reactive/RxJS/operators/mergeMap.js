// Fonctionne comme concatMap sauf qu'il fonctionne en parallèle
// et non pas en séquence.
// Dans le scénario ci-dessous, le concatMap est préférable 
// car on a besoin d'attendre qu'une requête soit terminée pour en 
// envoyer une autre.


this.form.valuesChanges
  .pipe(
    filter(() => this.form.valid),
    mergeMap(changes => this.saveCourse(changes))
  )
  .subscribe();

  saveCourse(changes) {
    return fromPromise(fetch(`/api/courses/${this.course.id}`, {
      method: 'PUT',
      body: JSON.stringify(changes),
      header: {
        'content-type': 'application/json'
      }
    }));

  }