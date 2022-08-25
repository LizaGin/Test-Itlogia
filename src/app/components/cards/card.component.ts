import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: ICard;

  @Output() buttonClick = new EventEmitter();

  public click(index: number): void {
    this.buttonClick.emit(index);
  }
}
