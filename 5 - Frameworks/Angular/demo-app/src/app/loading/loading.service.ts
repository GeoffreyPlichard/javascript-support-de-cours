import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, concatMap, finalize, of, tap } from "rxjs";

@Injectable()
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    // Créé une valeur initiale qui sera tout de suite completed
    // pour pouvoir créer une chaine d'observable.
    return of(null).pipe(
      // Génère un side effet avec tap
      tap(() => this.loadingOn()),
      // Après avoir émis la 1ère valeur null, on émet les valeurs 
      // de l'observable récupéré en paramètre
      concatMap(() => obs$),
      // Quand l'observable récupéré est completed on stop le loading
      finalize(() => this.loadingOff())
    );

  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }

}