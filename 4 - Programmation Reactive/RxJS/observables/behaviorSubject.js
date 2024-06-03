// Subject

const subject = new Subject();

const series$ = subject.asObservable();
series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);

setTimeout(() => {
  series$.subscribe(val => console.log("late subscription" + val));
}, 3000); // Ne fonctionne pas avec un Subject.


// BehaviorSubject

const behaviorSubject = new BehaviorSubject(0);

const series$ = behaviorSubject.asObservable();
series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);

setTimeout(() => {
  series$.subscribe(val => console.log("late subscription" + val));
}, 3000); // Ici, malgré la souscription tardive, on reçoit quand même
// la dernière valeur (3)