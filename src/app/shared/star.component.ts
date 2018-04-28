import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  @Output() ratingClicked = new EventEmitter<string>();

  starWidth: number;
  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 98 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
