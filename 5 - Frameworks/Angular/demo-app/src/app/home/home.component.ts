// Smart component
// Le rôle principal de ce composant est de récupérer les données
// et de les envoyer à la couche présentation

import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { CoursesStore } from '../services/courses.store';

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
    private coursesStore: CoursesStore
  ) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');
    
    this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
  }
}