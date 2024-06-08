import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { DebugElement } from "@angular/core";
import { CoursesService } from "../services/courses.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CoursesStore } from "../services/courses.store";
import { LoadingService } from "../loading/loading.service";
import { MessagesService } from "../messages/messages.service";

describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let el: DebugElement;

  beforeEach(async () => {

    const coursesServiceSpy = jasmine.createSpyObj('CoursesStore', ['filterByCategory']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HomeComponent
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
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});