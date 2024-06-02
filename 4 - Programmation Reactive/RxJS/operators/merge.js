// Merge fait la même chose que concat
// sauf qu'au lieu de produire des valeurs à la suite, il les produit 
// en parallèle
// Si un des observable est en erreur, le stream mergé s'arrête.


const interval1$ = interval(1000);

const interval2$ = interval.pipe(
  map(val => 10 * val)
);

const result$ = merge(interval1$, interval2$);

result$.subscribe();

// Produit: 0 0, 1 10, 2 20, 3 30...
