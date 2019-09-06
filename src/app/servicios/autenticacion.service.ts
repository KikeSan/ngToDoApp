import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  onCambioEstado: Subject<boolean> = new Subject<boolean>()

  constructor(private router:Router) { }

  estaLogueado():boolean{
    return sessionStorage.getItem('usuarioEstado')?true:false
  }
  login(us:string,pw:string){
    if (us==='kike'&&pw==='123456') {
      sessionStorage.setItem('usuarioEstado','true')
      this.router.navigate(['/tareas'])
      this.onCambioEstado.next(true)
    }
  }
  logout(){
    sessionStorage.clear()
    this.onCambioEstado.next(false)
    this.router.navigate(['/'])
  }
}
