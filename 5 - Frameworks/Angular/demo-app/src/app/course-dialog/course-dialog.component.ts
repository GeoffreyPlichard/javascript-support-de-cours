import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { LoadingService } from '../loading/loading.service';
import { LoadingComponent } from '../loading/loading.component';
import { MessagesComponent } from '../messages/messages.component';
import { MessagesService } from '../messages/messages.service';
import { CoursesStore } from '../services/courses.store';


@Component({
    selector: 'course-dialog',
    standalone: true,
    providers: [  
        MatDatepickerModule,
        provideMomentDateAdapter(),
        LoadingService,
        MessagesService
    ],
    imports: [
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        LoadingComponent,
        MessagesComponent
    ],
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent {

    form: FormGroup;

    course:Course;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course,
        private coursesStore: CoursesStore,
    ) {

        this.course = course;

        this.form = this.fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });

    }

    save() {
      const changes = this.form.value;

      this.coursesStore
        .saveCourse(this.course.id, changes)
        .subscribe();

        this.dialogRef.close(changes);
    }

    close() {
        this.dialogRef.close();
    }

}