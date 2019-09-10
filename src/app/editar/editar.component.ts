import { Component, OnInit } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  id: string
  types: string[] = ['todo', 'doing', 'complete']
  grupo:FormGroup
  constructor(private tareaService:TareaService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    })
    //this._id = this.activateRoute.snapshot.paramMap.get("_id")
    //Necesitamos un observador sino solo se ejecuta una vez
    this.activateRoute.paramMap.subscribe(
      (data:any) =>{
        this.id = data.params.id

        this.tareaService.detallar(this.id)
          .subscribe(
            resp => this.grupo.patchValue(resp)
          )
      }
    )
  }

  actualizar(){
    this.tareaService.modificar(this.grupo.getRawValue())
    .subscribe(resp=>{
      this.tareaService.onActualizar.next()
      this.router.navigate(["/tareas"])
      alert("Tarea Actualizado!")
    })
  }

  volver(){
    this.router.navigate(["/tareas"])
  }

}
