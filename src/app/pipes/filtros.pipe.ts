import { Pipe, PipeTransform } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {
  constructor(private tareaService:TareaService){}
  transform(value: Array<any>, buscar: string): any {
    //this.tareaService.listar().subscribe(resp=>{
      try {
        console.log('PIPE> ', value);

        const resultado = value.filter(item => {
          console.log(item.title.toUpperCase().indexOf(buscar.toUpperCase()) > -1);

          return item.title.toUpperCase().indexOf(buscar.toUpperCase()) > -1
        })
        console.log(resultado);

        return resultado
      } catch (error) {
        
      }
      
    //})
    
  }

}
