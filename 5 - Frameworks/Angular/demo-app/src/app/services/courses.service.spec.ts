import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { COURSES, findLessonsForCourse } from "../../../server/db-data";
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

  it('should find a list of lessons', () => {

    coursesService.findLessons('12')
      .subscribe(lessons => {

        expect(lessons).toBeTruthy();

        expect(lessons.length).toBe(3);
      });

    const req = httpTestingController.expectOne(req => req.url === '/api/lessons');

    expect(req.request.method).toEqual('GET');

    expect(req.request.params.get('courseId')).toEqual('12');
    expect(req.request.params.get('filter')).toEqual('');
    expect(req.request.params.get('sortOrder')).toEqual('asc');
    expect(req.request.params.get('pageNumber')).toEqual('0');
    expect(req.request.params.get('pageSize')).toEqual('3');

    req.flush({
      payload: findLessonsForCourse(12).slice(0, 3)
    });

  });

  afterEach(() => {
    httpTestingController.verify();
  });
});