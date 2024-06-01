// On créé 2 blue print pour chaque type de cours
// Le problème ici c'est que, comme on va subscribe 2 fois (1 pour chaque stream),
// on va avoir 2 call HTTP (voir operator shareReplay)

const courses$ = http$.pipe(
  map(res => Object.values(res["payload"]))
);

const beginnerCourses$ = courses$.pipe(
  map(courses => courses.filter(course => course.category === 'BEGINNER'))
);

const advancedCourses$ = courses$.pipe(
  map(courses => courses.filter(course => course.category === 'ADVANCED'))
);