import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUserCircle, faSearch, faListUl, faLayerGroup, faCode, faCheckSquare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss']
})
export class MenulateralComponent implements OnInit {
  faUserCircle = faUserCircle
  faSearch = faSearch
  faListUl = faListUl
  faLayerGroup = faLayerGroup
  faCheckSquare = faCheckSquare
  faCode = faCode
  faHeart = faHeart
  faAngular = faAngular

  busqueda:FormGroup
  constructor(private authService:AutenticacionService) { }

  ngOnInit() {
    this.busqueda = new FormGroup({
      buscame: new FormControl(null, Validators.required)
    })
  }

  buscar(){}

  logout() {
    //this.autenticacionServicio.logout()
    this.authService.logout()
  }

}
