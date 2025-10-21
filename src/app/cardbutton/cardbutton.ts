import { Component, EventEmitter, Output, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-cardbutton',
  standalone: true,
  imports: [],
  templateUrl: './cardbutton.html',
  styleUrls: ['./cardbutton.scss']
})
export class Cardbutton {

  propTest: boolean = false;

  @Input({ transform: booleanAttribute }) buttonDisabled: boolean = false;

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onButtonClick');

    this.buttonClickEmitter.emit(true);
  }
}
