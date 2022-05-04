import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  template: '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css'],
})
export class HelloWorldComponent {
  title = 'Welcome to YourStep';
}
