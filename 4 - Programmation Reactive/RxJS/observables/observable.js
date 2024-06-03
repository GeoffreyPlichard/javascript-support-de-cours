// Création d'un observable HTTP autour de fetch




// Le comportement du stream consistera à faire un call http
// L'observer permet d'implémenter l'observable. Il sera call une fois 
// qu'on sera subscribed
const http$ = Observable.create(observer => {

  // Permet d'annuler un call HTTP
  const controller = new AbortController();
  const signal = controller.signal;

  fetch('/api/courses', {signal})
    .then(response => {
      // Ici on prend en charge un cas d'erreur qui potentiellement
      // ne passerait pas dans le catch
      if (response.ok) {
        return response.json();
      } else {
        observer.error('Request failed with status code: ' + response.status);
      }
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
  
  // On retourne une fonction de callback qui sera trigger quand on 
  // unsubscribe. Ici on cancel le call HTTP dans ce cas.
  return () => controller.abort();
});

// Client

http$.subscribe(
  courses => console.log(courses),
  noop,
  () => console.log('completed')
)