// Pipe permet de chainer plusieurs operators pour produire de nouveaux
// observables

obs$.pipe(
  op1(),
  op2()
  op3()
);