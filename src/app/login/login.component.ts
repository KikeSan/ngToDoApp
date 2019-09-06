import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faIdBadge = faIdBadge
  faLock = faLock

  grupo:FormGroup

  constructor(private authService:AutenticacionService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
    })
  }

  login(){
    this.authService.login(this.grupo.value.username,this.grupo.value.password)
  }

}
