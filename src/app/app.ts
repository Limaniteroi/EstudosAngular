import { Component, Pipe, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { StatusClassPipe } from './pipes/status-class.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UpperCasePipe, StatusClassPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  text = 'Felipe';
  pessoa = { name: 'Felipe', status: 1};
  pessoa2 = { name: 'Luiz', status: 2};
  pessoa3 = { name: 'Leo', status: 3};

  getStyle(status: number){

    console.log('getStyle');

    return {
    'active': status === 1,
    'partial': status === 2,
    'blocked': status === 3,
    }
  }
}
