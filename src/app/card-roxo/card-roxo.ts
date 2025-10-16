import { Component } from '@angular/core';
import { Cardbutton } from '../cardbutton/cardbutton';
import { CardButtonCancel } from "../card-button-cancel/card-button-cancel";

@Component({
  selector: 'app-card-roxo',
  standalone: true,
  imports: [Cardbutton, CardButtonCancel],
  templateUrl: './card-roxo.html',
  styleUrls: ['./card-roxo.scss']
})
export class CardRoxo {

}
