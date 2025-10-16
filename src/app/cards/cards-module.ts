import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { Cardbutton } from '../cardbutton/cardbutton';
import { CardRoxo } from '../card-roxo/card-roxo';
import { CardRosa } from '../card-rosa/card-rosa';
import { CardButtonCancel } from '../card-button-cancel/card-button-cancel';

@NgModule({
  imports: [CommonModule, Card, Cardbutton, CardRoxo, CardRosa, CardButtonCancel],
  exports: [Card, Cardbutton, CardRoxo, CardRosa, CardButtonCancel],
})
export class CardsModule { }