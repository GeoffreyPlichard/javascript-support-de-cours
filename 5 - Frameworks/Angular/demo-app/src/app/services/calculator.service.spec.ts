import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// Pour disable une suite, utiliser 'x'
// xdescribe('CalculatorService', () => {

// Pour focus sur une suite en particulier, utiliser 'f'
// fdescribe('CalculatorService', () => {

// Créer une suite de tests
describe('CalculatorService', () => {

  let calculator: CalculatorService,
      loggerSpy: any

  beforeEach(() => {
    console.log('Calling beforeEach');

    // Ici on créé une instance du service dont dépend le calculator
    // const logger = new LoggerService();
    // spyOn(logger, 'log');

    // Ici on mock le service car on veut tester CalculatorService
    // en isolation.
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    // Instanciation du service Calculator
    // calculator = new CalculatorService(loggerSpy);

    // Au lieu d'instancier le service directement
    // on utilise le Dependency Injection.
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        // LoggerService // Injecter directement is on veut utiliser
                         // du service et non un mock
        
                   
        // Pour utiliser un mock, il faut fournir un DI token.
        // C'est un identifiant unique pour ce qui va être injecté.
        // On utilise useValue pour définir ce qu'on va appler à la place
        // du service.
        {
          provide: LoggerService,
          useValue: loggerSpy
        }
      ]
    });

    calculator = TestBed.inject(CalculatorService);
    
  });

  it('should add two numbers', () => {
    console.log('Calling add test');

    const result = calculator.add(2, 2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('Calling subtract test');

    const result = calculator.subtract(2, 2);

    expect(result).withContext('unexpected subtract result').toBe(0);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});