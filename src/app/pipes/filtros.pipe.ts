import { Pipe, PipeTransform } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {
  constructor(private tareaService:TareaService){}

  transform(value: Array<any>, buscar: string): any {
    console.log('Pipe: ',value);
    console.log('Pipe Buscar: ', buscar.toUpperCase());
    
    //const tareas = this.tareaService.listar()
    console.log('TRAER LISTA-----> ', this.tareaService.listar())
    
    this.tareaService.listar().subscribe(resp=>{
      console.log('subscribe--->',resp);
      
      const resultado = resp.filter(item => {
        console.log('filter--->',item);
        
        return item.title.toUpperCase().indexOf(buscar.toUpperCase()) > -1
      })
      console.log('resultado--->',resultado);
      
      return resultado
    })
    
  }

}
