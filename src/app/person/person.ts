import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-person',
  imports: [NgFor, NgIf],
  templateUrl: './person.html',
  styleUrl: './person.scss'
})

export class Person {

  @Input({ required: true}) personName: string = '';
  @Input({ required: true}) personAge: number = 0;
  @Input({ required: true}) personIndex: number = 0;
  @Input({ required: true}) isFirst: boolean = false;
  @Input({ required: true}) isLast: boolean = false;
  @Input({ required: true}) isOdd: boolean = false;
  @Input({ required: true}) isSelected: boolean = false;
  
  @Output('personSelected') onPersonSelectEmitt = new EventEmitter<number>();

  selectPerson(){
    this.onPersonSelectEmitt.emit(this.personIndex);
  }
}
