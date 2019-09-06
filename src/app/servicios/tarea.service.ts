import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { delay } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  onActualizar:Subject<any> = new Subject()

  constructor(private http:HttpClient) { }

  listar():Observable<Tarea[]>{
    return this.http.get<any>('http://localhost:8001/tareas').pipe(delay(500))
  }
}
