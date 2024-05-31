import { fromEvent } from 'rxjs';

// Création d'un observable à partir d'un évènement du DOM

const click$ = fromEvent(document, 'click');

// Création du stream
click$.subscribe();