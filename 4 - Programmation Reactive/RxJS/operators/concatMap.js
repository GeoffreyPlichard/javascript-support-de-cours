// concatMap permet de...


// Prenons cet example:
// Le principe est de sauvegarder les données chaque fois que le formulaire
// change en envoyant une requête PUT au serveur.
// Ici il y a 2 problèmes:
// Le 1er est l'imbrication de subscribe qui est un anti-pattern et doit être évité.
// Le 2ème problème est qu'on attend pas qu'une requête soit terminée.

// Ce qu'on voudra faire sera de concaténer le stream valuesChanges avec celui
// du saveCourse$()
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

// Solution avec concatMap
// Avec concatMap, pour chaque valeur émise, on va créer un deuxième
// observable qui dérive du premier
// C'est seulement quand l'observable dérivé sera fini, que le 1er observable
// passera à la valeur suivante etc.

// Dans ce cas ci:
// On tape sur une touche du clavier, ça émet une valeur dans le stream
// valuesChanges.
// Un nouvel observable est créé et envoie un call HTTP.
// Tant que la réponse n'est pas renvoyée, le stream valuesChanges n'émet
// pas de valeurs.
// Quand la réponse arrive, une deuxième valeur est émise par le valuesChanges
// avec le reste des caractères tapés.
// Un deuxième observalbe dérivé est créé et un call HTTP est envoyé.
// etc...

this.form.valuesChanges
  .pipe(
    filter(() => this.form.valid),
    concatMap(changes => this.saveCourse(changes))
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