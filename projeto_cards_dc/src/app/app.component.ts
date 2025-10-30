import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="item">
        <div class="balance-card">
          <div class="balance-card__header">
            <div class="balance-card__header-title">
              <img class="balance-card__header-icon" src="icons/icon-hand.png"/>
              <h1>Saldos Disponíveis</h1>
            </div>
          </div>
          <div class="balance-card__content"></div>
        </div>
      </div>
      <div class="item">
        <div class="credit-card"></div>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'Cards';
}