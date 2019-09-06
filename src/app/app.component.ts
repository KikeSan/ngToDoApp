import { Component } from '@angular/core';
import { AutenticacionService } from './servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngToDoApp';
  logueado:boolean = false

  constructor(private authService:AutenticacionService){}

  ngOnInit(): void {
    this.logueado = this.authService.estaLogueado()

    this.authService.onCambioEstado.subscribe(
      estado=> this.logueado = estado
    )
  }

  logout(){
    this.authService.logout()
  }
}
