// concatMap permet de...


// Prenons cet example:
// Le principe est de sauvegarder les données chaque fois que le formulaire
// change en envoyant une requête PUT au serveur.
// Ici il y a 2 problèmes:
// Le 1er est l'imbrication de subscribe qui est un anti-pattern et doit être évité.
// 

this.form.valuesChanges
  .pipe(
    filter(() => this.form.valid)
  )
  .subscribe(changes => {

    const saveCourse$ = fromPromise(fetch(`/api/courses/${this.course.id}`, {
      method: 'PUT',
      body: JSON.stringify(changes),
      header: {
        'content-type': 'application/json'
      }
    
    saveCourse$.subscribe();

    }));
  });