// AsyncSubject

const asyncSubject = new AsyncSubject(0);

const series$ = asyncSubject.asObservable();
series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);

subject.complete();

setTimeout(() => {
  series$.subscribe(val => console.log("late subscription" + val));
}, 3000);

// Ici, on reçoit que la dernière valeur

// 3, 3
