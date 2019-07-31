import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-white">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/drexel_horizontal_blue.png">
        </a>
      </div>
    </nav>
  `,
  styles: []
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
