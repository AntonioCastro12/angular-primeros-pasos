import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  template: `
  <h1>{{title2}}</h1>
  <h1>{{couenter}}</h1>
  <button (click)="increaseBye(-1)">-1</button>
  <button (click)="Reset()">Reset</button>
  <button (click)="increaseBye(+1)">+1</button>


  `


})

export class CounterComponent {
  public title2:string  = 'Counter';
  public couenter: number = 10;

  increaseBye(value: number):void{
    this.couenter +=  value;


  }

  Reset():void{
    this.couenter =10;
  }
 }


