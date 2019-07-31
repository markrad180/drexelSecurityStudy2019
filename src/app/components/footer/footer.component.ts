import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        Made with <3 by <a href="https://twitter.com/radman180">Mark Rad</a>
      </p>
    </div>
    </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
