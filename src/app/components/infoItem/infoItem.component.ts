import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './infoItem.component.html',
  styleUrls: ['./infoItem.component.css'],
})
export class InfoItemComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;
}
