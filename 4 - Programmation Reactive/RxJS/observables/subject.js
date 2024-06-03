

const subject = new Subject();

// On créé un stream of values à partir du subject
// series$ va émettre les valeurs du subject.
const series$ = subject.asObservable();
series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();