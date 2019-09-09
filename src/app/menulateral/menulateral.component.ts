import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss']
})
export class MenulateralComponent implements OnInit {
  faUserCircle = faUserCircle
  busqueda:FormGroup
  constructor() { }

  ngOnInit() {
    this.busqueda = new FormGroup({
      buscame: new FormControl(null, Validators.required)
    })
  }

  buscar(){}

}
