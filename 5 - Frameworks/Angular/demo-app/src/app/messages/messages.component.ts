import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MessagesService } from './messages.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, MatIconModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

  showMessages = false;

  errors$!: Observable<string[]>;

  constructor(public messagesService: MessagesService) {
    console.log('Created messages component');
  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$
      .pipe(
        tap(() => this.showMessages = true)
      );
  }

  onClose() {
    this.showMessages = false;
  }

}
