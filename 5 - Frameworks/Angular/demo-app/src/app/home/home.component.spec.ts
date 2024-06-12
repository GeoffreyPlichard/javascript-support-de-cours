import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { DebugElement } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CoursesStore } from "../services/courses.store";
import { LoadingService } from "../loading/loading.service";
import { MessagesService } from "../messages/messages.service";
import { setupCourses } from "../common/setup-test-data";
import { By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";

describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let el: DebugElement;
  let coursesStore: any;

  const beginnerCourses = setupCourses().filter(course => course.category === 'BEGINNER')

  beforeEach(async () => {

    const coursesServiceSpy = jasmine.createSpyObj('CoursesStore', ['filterByCategory']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HomeComponent,
        NoopAnimationsModule
      ],
      providers: [
        LoadingService,
        MessagesService,
        {
          provide: CoursesStore,
          userValue: coursesServiceSpy
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    coursesStore = TestBed.inject(CoursesStore);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display only beginner courses', () => {
    
    // Ici on utilise of() car filterByCategory est censé
    // retourner un observable
    // coursesStore.filterByCategory
    //   .and
    //   .returnValue(of(beginnerCourses));
    
    // Appliquer les data dans le template
    fixture.detectChanges();

    const tabs = el.queryAll(By.css('.mat-mdc-tab-group'));

    expect(tabs.length).withContext('Unexpected number of tabs').toBe(1);
  });

});