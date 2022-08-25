import { Component } from '@angular/core';
import { ICard } from './models/card';
import { cards as data } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-itlogia';

  cards: ICard[] = data;
}
