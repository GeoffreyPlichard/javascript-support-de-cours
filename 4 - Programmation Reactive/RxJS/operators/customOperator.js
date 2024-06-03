// Operator de debug

export enum RxJsLoggingLevel {
  TRACE,
  DEBUG,
  INFO,
  ERROR
}

let rxjsLoggingLevel = RxJsLoggingLevel.INFO;

export function setRxJsLoggingLevel(level: RxJsLoggingLevel) {
  rxjsLoggingLevel = level;
}

// On créé une Higher Order Function (fonction qui retourne une fonction)
export const debug = (level: number, message: string) => 
  (source: Observable<any>) => source.pipe(
    tap(val => {
      // val correspond à l'observable précédant le debug
      if (level >= rxjsLoggingLevel) {
        console.log(message + ': ', val);
      }

    })
  );


// CLIENT

obs$.pipe(
  debug(RxJsLoggingLevel.INFO, "my custom debug log")
);