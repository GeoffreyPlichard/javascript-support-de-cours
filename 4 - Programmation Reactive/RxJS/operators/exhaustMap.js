// exhaustMap créé une nouvelle source de valeur à partir de la première
// Le point intéressant est que la 1ère source est ignoré tant que
// la 2ème est toujours en cours.


// Ici, si on clique plusieurs fois sur le bouton, le stream click
// est ignoré tant que le call n'est pas fini.
// Cela évite de cliquer plusieurs fois et envoyer plein de calls.
fromEvent(element, 'click')
  .pipe(
    exhaustMap(() => this.saveCourse(this.form.value))
  )
  .subscribe();

