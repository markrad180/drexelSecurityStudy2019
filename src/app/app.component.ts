import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- contact -->
    <app-contact></app-contact>

    <!-- home -->
    <app-home></app-home>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})

export class AppComponent {
  title = 'drexelSecurityStudy2019';
}
