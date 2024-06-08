import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesCardListComponent } from './courses-card-list.component';
import { setupCourses } from '../common/setup-test-data';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CoursesCardListComponent', () => {
  let component: CoursesCardListComponent;

  // Objet utilitaire pour aider à débugger
  let fixture: ComponentFixture<CoursesCardListComponent>;

  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoursesCardListComponent,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
    // Si on utilise pas async await ici, le code
    // sera exécuté après les tests assertions (it(...)).

    // .then(() => {

    // });
    
    fixture = TestBed.createComponent(CoursesCardListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course list', () => {

    // On passe des datas au component
    component.courses = setupCourses();

    // On notifie à Angular qu'un changement a été effectué pour
    // update le DOM. Sinon le component sera vide.

    //console.log(el.nativeElement.outerHTML); // Vide

    fixture.detectChanges();

    //console.log(el.nativeElement.outerHTML); // OK

    console.log(el.nativeElement.outerHTML);

    // On identifie tous les éléments avec cette classe
    const cards = el.queryAll(By.css('.course-card'))

    expect(cards).withContext('Could not find cards').toBeTruthy();

    expect(cards.length).withContext('Unexpected number of courses').toBe(14);
  });
});
