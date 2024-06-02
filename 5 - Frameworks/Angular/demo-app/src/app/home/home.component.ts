// Smart component
// Le rôle principal de ce composant est de récupérer les données
// et de les envoyer à la couche présentation

import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {MatTabsModule} from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    AsyncPipe,
    MatTabsModule, 
    CoursesCardListComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beginnerCourses$!: Observable<Course[]>;
  advancedCourses$!: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    const courses$ = this.coursesService.loadAllCourses()
      .pipe(
        map(courses => courses.sort(sortCoursesBySeqNo))
      );

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'BEGINNER'))
    );
    
    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED'))
    );
  }
}