import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../servicios/tarea.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  faEdit = faEdit
  faTrashAlt = faTrashAlt
  tareas:Tarea[]

  grupo:FormGroup

  constructor(private tareaService:TareaService, private router:Router, private actRouter:ActivatedRoute) { }

  ngOnInit() {
    /* this.grupo = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    }) */
    this.listar()
    this.tareaService.onActualizar.subscribe(
      ()=>this.listar()
    )
    this.actRouter.paramMap.subscribe((data:any)=>{
      //console.log('STATUS:> ',data.params.status);
      this.filtrar(data.params.status)
    })
    
  }

  listar(){
    if(location.pathname==='/tareas'){
      console.log('[listar]');
      
      this.tareaService.listar()
      .subscribe(resp=>this.tareas = resp)
    }
  }
  filtrar(param){
    console.log('Primer llamado ',param);
    
    if(param&&param!='nueva'){
      this.tareaService.filtrar(param)
      .subscribe(resp=>this.tareas = resp)
    }
  }

  editarTarea(id){
    this.router.navigate(["/tareas","editar",id])
  }

  eliminarTarea(tarea:Tarea){
    console.log('Eliminar tarea');
    if(!confirm("¿Está seguro que quiere eliminar la tarea?")) return false
    this.tareaService.eliminar(tarea)
    .subscribe((resp)=>{
      console.log('result api: ',resp);
      this.listar()
    })
  }

}
