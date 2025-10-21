import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cardbutton',
  standalone: true,
  imports: [],
  templateUrl: './cardbutton.html',
  styleUrls: ['./cardbutton.scss']
})
export class Cardbutton {

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onButtonClick');

    this.buttonClickEmitter.emit(true);
  }
}
