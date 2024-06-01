// shareReplay permet de partager un stream aux différents abonnés
// au lieu de créer un nouveau stream à chaque fois

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