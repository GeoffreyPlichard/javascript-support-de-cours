// Création d'un observable HTTP autour de fetch




// Le comportement du stream consistera à faire un call http
// L'observer permet d'implémenter l'observable. Il sera call une fois 
// qu'on sera subscribed
const http$ = Observable.create(observer => {
  fetch('/api/courses')
    .then(response => {
      return response.json();
    })
    .then(body => {
      // Permet d'émettre des valeurs dans l'observable
      observer.next();
      observer.complete();
    })
    .catch(err => {
      // Pas besoin de complete ici car l'erreur stop le stream
      observer.error(err);
    });
});