import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

   private _personajes: Personaje[]=[
        {
         nombre: 'Gerar',
          poder: 50000
        },
       {
          nombre: 'Nander',
          poder: 3000
       }
      ];

      get personajes():Personaje[]{
         return [...this._personajes];
      }
    constructor(){}

    agregarPersonaje(personaje:Personaje){
      this._personajes.push(personaje);

    }
}