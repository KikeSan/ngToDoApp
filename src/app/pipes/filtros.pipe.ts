import { Pipe, PipeTransform } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {
  constructor(private tareaService:TareaService){}
  transform(value: Array<any>, buscar: string): any {
    this.tareaService.listar().subscribe(resp=>{
      const resultado = resp.filter(item => {
        return item.title.toUpperCase().indexOf(buscar.toUpperCase()) > -1
      })
      return resultado
    })
    
  }

}
