import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  minhaProp = true;
  
  toggleProp(){
    this.minhaProp = !this.minhaProp;
  }

  isTruthly(){
    // return "0";
    // return true;
    // return 1;
    // return [];
    // return "teste";
    //return {};
  }

  isFalsy(){
    // return null;
    // return undefined;
    // return false;
    // return 0;
    // return NaN;
    //return "";
  }
}
