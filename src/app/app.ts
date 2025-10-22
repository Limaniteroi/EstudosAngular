import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  name: string = 'Marianna';

  handleInputChange(event: string){
    console.log(event);

    this.name = event.toUpperCase();
 }

}
