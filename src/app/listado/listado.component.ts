import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../servicios/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  tareas:Tarea[]

  constructor(private tareaService:TareaService, private router:Router) { }

  ngOnInit() {
    this.listar()
    this.tareaService.onActualizar.subscribe(
      ()=>this.listar()
    )
  }

  listar(){
    this.tareaService.listar()
    .subscribe(resp=>this.tareas = resp)
  }

}
