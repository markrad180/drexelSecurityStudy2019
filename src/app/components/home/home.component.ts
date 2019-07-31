import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-white is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">2019 Drexel Lebow Security Study</h1>

    </div>
    </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/clean_background.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
