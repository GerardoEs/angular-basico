import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

 
  constructor(){

  }
  

  nuevo: Personaje = {
   
      nombre: 'Roxhi',
      poder: 2000
    
  }

  

cambiarNombre(event:any){
  //event.preventDefault();
  console.log(event.taget.value);

}

}


