import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUserCircle, faSearch, faListUl, faLayerGroup, faCode, faCheckSquare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";

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
  faCode = faCode
  faCheckSquare = faCheckSquare
  faHeart = faHeart
  faAngular = faAngular

  busqueda:FormGroup
  constructor() { }

  ngOnInit() {
    this.busqueda = new FormGroup({
      buscame: new FormControl(null, Validators.required)
    })
  }

  buscar(){}

}
