import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../Component/button/button';
import { Card } from '../Component/card/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Button, 
    Card
  ],
  exports: [
    Button,
    Card
  ]
})
export class ComponentsModuleModule { }
