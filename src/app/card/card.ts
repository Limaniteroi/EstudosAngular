import { Component, Input, numberAttribute, ViewEncapsulation } from '@angular/core';
import { Cardbutton } from '../cardbutton/cardbutton';
import { CardButtonCancel } from "../card-button-cancel/card-button-cancel";
import {MatSliderModule} from '@angular/material/slider';


// interface IPlano {
//   infos: IInfos;
// }

// interface IInfos {
//   tipo: string;
//   preco: number;
// }

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  imports: [Cardbutton, MatSliderModule],
  //CardButtonCancel
})

// function handlePlanType(value: string) {
//   return value.toUpperCase(); 
// }

export class Card {

  @Input({required: true, alias:'planPriceAlias', transform: numberAttribute }) planPrice: number = 0;
  @Input({alias: 'planType', transform: (value: string) => value.toUpperCase() }) planType: string= '';


  // set planType(value: string){
  //   this._planType =  value.toUpperCase();
  // }

  // get planType(): string{
  //   return this._planType;
  // }

  //private _planType: string = '';


  buttonClicked(valueEmitted: boolean){
    console.log('ButtonClicked', valueEmitted);
    console.log('planType:', this.planType);

    this.planType = 'Teste';
  }

  // plano: IPlano = {
  //   infos: {
  //     tipo: 'Simples',
  //     preco: 100,
  //   }
  // };
}
