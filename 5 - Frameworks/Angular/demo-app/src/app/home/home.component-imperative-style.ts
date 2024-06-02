import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    MatCardModule, 
    MatTabsModule, 
    MatButtonModule,
    CourseDialogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beginnerCourses: Course[] = [];
  advancedCourses: Course[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {
    // Approche impérative qui ne justifie pas l'utilisation d'un observable
    // Ici on peut très bien utiliser une promesse.
    // Utiliser une approche impérative avec des observables peut conduire
    // au même problème de callback hell qu'on avait avant l'apparition des promesses.
    // De plus, le composant ne devrait pas savoir d'où proviennent les données et devrait
    // être testable facilement sans devoir utiliser un vrai HTTP backend.
    // Ce code n'est pas non plus réutilisable ailleurs
    // ----------
    // Le fait de garder les données dans des mutable variable (beginnerCourses) est aussi problématique.
    // Si on fait un changement sur ces variable, la vue ne peut pas le savoir.
    // On doit donc utiliser ngOnChanges de manière systématique.
    // Ce n'est pas non plus très performant dû au change detection. 
    // Et on ne peut pas utiliser le onPush detection.
    this.http.get('/api/courses')
      .subscribe(
        (res: any) => {
          const courses: Course[] = res["payload"].sort(sortCoursesBySeqNo);
          this.beginnerCourses = courses.filter(course => course.category == "BEGINNER");
          this.advancedCourses = courses.filter(course => course.category == "ADVANCED");
        });

  }

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}