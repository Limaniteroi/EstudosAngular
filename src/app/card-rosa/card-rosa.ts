import { Component } from '@angular/core';
import { Cardbutton } from '../cardbutton/cardbutton';
import { CardButtonCancel } from '../card-button-cancel/card-button-cancel';

@Component({
  selector: 'app-card-rosa',
  standalone: true,
  imports: [Cardbutton, CardButtonCancel],
  templateUrl: './card-rosa.html',
  styleUrls: ['./card-rosa.scss']
})
export class CardRosa {

}
