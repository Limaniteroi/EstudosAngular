import { Component, signal } from '@angular/core';
import { Card } from './card/card';
import { CardRoxo } from './card-roxo/card-roxo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card, CardRoxo],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  cardPlanType = 'Simples';
  cardPlanPrice = 5000;
  
  handlePlanType(text: string) {
    this.cardPlanType = text;
  }

  protected readonly title = signal('project-init');
}
