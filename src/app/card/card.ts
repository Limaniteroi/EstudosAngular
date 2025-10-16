import { Component, ViewEncapsulation } from '@angular/core';
import { Cardbutton } from '../cardbutton/cardbutton';
import { CardButtonCancel } from "../card-button-cancel/card-button-cancel";
import {MatSliderModule} from '@angular/material/slider';


interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  imports: [Cardbutton, CardButtonCancel, MatSliderModule],
})

export class Card {
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  };
}
