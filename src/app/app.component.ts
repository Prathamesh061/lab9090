import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="child">Get Child Component</a>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
