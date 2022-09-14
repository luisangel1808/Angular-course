import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template:`
  <h1>{{title}}</h1>
  <span>{{number}}</span>
  <h1>La base es: {{base}}</h1>
  <button (click)="operate(base)">Aumentar</button>
  <button (click)="operate(-base)">Disminuir</button>
  `
})

export class CounterComponent{
  title:string = 'Counter app';
  number:number = 10;
  base:number = 5;

  operate(nbr:number){
    this.number += nbr;
  }

}
