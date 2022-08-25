import { Component } from '@angular/core';
import { cards as data } from 'src/app/data/data';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards: ICard[] = data;
  public imageOpen = false;
  public index = -1;

  public onClick(index: number): void {
    this.imageOpen = true;
    this.index = index - 1;
  }
}
