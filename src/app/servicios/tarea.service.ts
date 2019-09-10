import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { delay, map, filter, pluck } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  onActualizar:Subject<any> = new Subject()

  constructor(private http:HttpClient) { }

  listar():Observable<Tarea[]>{
    return this.http.get<any>('http://localhost:8001/tareas').pipe(delay(100))
  }

  detallar(id:string):Observable<Tarea>{
    return this.http.get<Tarea>(`http://localhost:8001/tareas/editar/${id}`).pipe(pluck("result"))
  }

  filtrar(param):Observable<Tarea[]>{
    console.log('FILTRAR> ',param);
    
    return this.http.get<any>('http://localhost:8001/tareas')
    .pipe(
      map(tarea=>{
        return tarea.filter(task=>{
          return task.status === param
        })
      })
    )
  }
  insertar(tarea:Tarea):Observable<any>{
    return this.http.post(`http://localhost:8001/tareas?title=${tarea.title}&description=${tarea.description}&status=${tarea.status}`,tarea)
  }

  modificar(tarea:Tarea):Observable<any>{
    return this.http.put(`http://localhost:8001/tareas/${tarea.id}`,tarea)
  }

  eliminar(tarea:Tarea):Observable<any>{
    return this.http.delete(`http://localhost:8001/tareas/${tarea.id}`)
  }
}
