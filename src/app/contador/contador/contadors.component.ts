import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h1>La Base es:<strong>{{base}}</strong></h1>
    <button (click)="baseacumulada(base);">+{{base}}</button>
    <button (click)="baseacumulada(-base);">-{{base}}</button>
    <h1><span>{{numero}}</span></h1>
    `
})
export class ContadorComponent{

    public titulo: string = 'Contador App';
    numero: number =5;
    base: number = 5;
    cuenta: number= 0;
    

  
  baseacumulada(recibe:number){
    
    this.numero+=recibe;
    
  }

}