import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input({ required: true}) planType: string = '';
  @Input({ required: true}) planPrice: number = 0;
  @Input({ required: true}) cardStyle: 'orange' | 'purple' = 'orange';
}
