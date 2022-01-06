import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent  {

 heroes: string[]=['spideman','batman','hulk','superman'];
 heroeborrado:string|undefined ='';
 borrarHeroe(){
   //console.log("Borrando...");
   this.heroeborrado=this.heroes.pop() || '';
 }   
}
