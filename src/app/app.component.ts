import { Component } from '@angular/core';

@Component({
  selector: 'app-pm-root',
  template: `
    <div><H1>{{pageTitle}}</H1>
      <app-product-list></app-product-list>
    </div>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle  = 'Acme Product Management';
}
