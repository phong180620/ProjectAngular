import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-ngcontent',
    template: `
    <nav class="nav justify-content-start bg-dark text-white p-2">
      <ng-content select=".logo"></ng-content>
      <ng-content select=".title"></ng-content>
      <a class="nav-link active" href="#">Active link</a>
      <a  class="nav-link" href="#">Link</a>
      <a class="nav-link disabled" href="#">Disable Link</a>

    </nav>
  `
})

export class DemoNgContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
