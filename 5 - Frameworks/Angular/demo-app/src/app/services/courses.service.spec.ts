import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { COURSES } from "../../../server/db-data";
import { Course } from "../model/course";
import { HttpErrorResponse } from "@angular/common/http";


describe('CoursesService', () => {

  let coursesService: CoursesService,
      httpTestingController: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CoursesService
      ]
    });

    coursesService = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should retrive all courses', () => {

    coursesService.loadAllCourses().subscribe(courses => {

      expect(courses).withContext('No courses returned').toBeTruthy();

      expect(courses.length).withContext('incorrect number of courses').toBe(14);

      const course = courses.find(course => parseInt(course.id) === 16);

      expect(course?.description).toBe('Stripe Payments In Practice');
      
    });

    const req = httpTestingController.expectOne('/api/courses');

    expect(req.request.method).toEqual('GET');

    // Permet de fournir un MOCK
    req.flush({
      payload: Object.values(COURSES)
    });

    
  });

  it('should save the course data', () => {
    const changes: Partial<Course> = {description: 'Testing course'};
    coursesService.saveCourse('12', changes)
      .subscribe(course => {

        expect(course.id).toBe(12);

      });

    // Set up le mock http request
    // Save course va construire une requête http sur cette url
    const req = httpTestingController.expectOne('/api/courses/12');

    expect(req.request.method).toEqual('PUT');

    // Test le body envoyé au serveur
    expect(req.request.body.description).toEqual(changes.description);

    // Ici on trigger la requête mocké
    // et on simule la réponse avec l'objet modifié
    req.flush({
      ...COURSES[12],
      ...changes
    });
  });

  it('should give an error if save course fail', () => {
    const changes: Partial<Course> = {description: 'Testing course'};

    coursesService.saveCourse('12', changes)
      .subscribe(
        () => fail('the save course operation should have failed'),
        (error: HttpErrorResponse) => {
          expect(error.status).toBe(500);
          
        }
      );
    
    const req = httpTestingController.expectOne('/api/courses/12');

    expect(req.request.method).toEqual('PUT');

    req.flush('Save course failed', {
      status: 500,
      statusText: 'Internal Server Error'
    });

  });

  afterEach(() => {
    httpTestingController.verify();
  });
});