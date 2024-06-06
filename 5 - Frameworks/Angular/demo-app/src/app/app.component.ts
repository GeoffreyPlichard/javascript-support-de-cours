import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [LoadingService, MessagesService],
  imports: [
    RouterOutlet, 
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LoadingComponent,
    MessagesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';

  logout() {

  }
}
