import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-pm-root',
  template: `
    <div><H1>{{pageTitle}}</H1>
      <app-product-list></app-product-list>
    </div>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProductService ]
})
export class AppComponent {
  pageTitle  = 'Acme Product Management';
}
