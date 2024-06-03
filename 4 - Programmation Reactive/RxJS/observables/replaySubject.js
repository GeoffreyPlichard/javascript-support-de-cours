// ReplaySubject

const replaySubject = new ReplaySubject(0);

const series$ = replaySubject.asObservable();
series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);

subject.complete();

setTimeout(() => {
  series$.subscribe(val => console.log("late subscription" + val));
}, 3000);

// Ici, on reçoit toutes les valeurs

// 1, 2, 3, 1, 2, 3
