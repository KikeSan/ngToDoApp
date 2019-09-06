import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../servicios/tarea.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  tareas:Tarea[]

  constructor(private tareaService:TareaService, private router:Router, private actRouter:ActivatedRoute) { }

  ngOnInit() {
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
    this.tareaService.listar()
    .subscribe(resp=>this.tareas = resp)
  }
  filtrar(param){
    console.log('Primer llamado ',param);
    
    if(param&&param!='nueva'){
      this.tareaService.filtrar(param)
      .subscribe(resp=>this.tareas = resp)
    }
  }

}
