import { Component, signal } from '@angular/core';
import { Button } from "./Component/button/button";
import { Card } from "./Component/card/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button, Card],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  buttonClicked(){
    console.log("Button clicked!");
  }
}
