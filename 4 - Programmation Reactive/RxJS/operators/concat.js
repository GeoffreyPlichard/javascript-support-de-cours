// Produit une concaténation séquentielle (à la suite)
// quand le premier observable est completed, le deuxième commence à émettre.
// Si le premier observable ne se termine jamais, les autres ne commencent pas.

const source1$ = of(1, 2, 3);

const source2$ = of(4, 5, 6);

const source3$ = of(7, 8, 9);

// Blue print de 3 stream à la suite
const result$ = concat(source1$, source2$, source3$);

// Produit 1, 2, 3, 4, 5, 6, 7, 8, 9, une fois subscribed.