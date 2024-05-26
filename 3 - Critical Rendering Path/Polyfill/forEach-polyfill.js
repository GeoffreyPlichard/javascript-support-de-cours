
Array.prototype.forEach = function(callback, argThis) {

  // Vérifier si le callback est bien une fonction
  if (typeof(callback) !== function) {
    throw new TypeError(callback = ' is not a function');
  }

  for (var i = 0; i < this.length; i++) {
    // Ici on utilise call pour définir le contexte de la fonction de callback
    // car par défaut le contexte global est utilisé.
    callback.call(argThis, this[i], i, this);
  }


}