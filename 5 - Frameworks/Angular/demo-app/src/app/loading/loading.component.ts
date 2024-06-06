import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingService } from './loading.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
