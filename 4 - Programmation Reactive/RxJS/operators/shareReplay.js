// On créé 2 blue print pour chaque type de cours
// Le problème ici c'est que, comme on va subscribe 2 fois (1 pour chaque stream),
// on va avoir 2 call HTTP
// shareReplay permet de partager un stream aux différents abonnés
// au lieu de créer un nouveau stream à chaque fois et donc avoir qu'un call HTTP.

// Ici on partage l'émission du stream entre les subscribers
const courses$ = http$.pipe(
  tap(() => console.log('HTTP request executed !')),
  map(res => Object.values(res["payload"])),
  shareReplay()
);

const beginnerCourses$ = courses$.pipe(
  map(courses => courses.filter(course => course.category === 'BEGINNER'))
);

const advancedCourses$ = courses$.pipe(
  map(courses => courses.filter(course => course.category === 'ADVANCED'))
);