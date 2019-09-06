import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TareaService } from '../servicios/tarea.service';
import { faAlignLeft, faFile } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
  faFile = faFile
  faAlignLeft = faAlignLeft
  types: string[] = ['todo', 'doing', 'complete']
  grupo:FormGroup
  constructor(private tareaService:TareaService, private router:Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    })
    
  }
  
  newTask(){
    console.log('NUEVO::: ', this.grupo.getRawValue());
    this.tareaService.insertar(this.grupo.getRawValue())
    .subscribe(()=>{
      this.tareaService.onActualizar.next()
      this.router.navigate(['/tareas'])
      alert('Tarea Creada con éxito!')
    })
  }

}
