import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
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
