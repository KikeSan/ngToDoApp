import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  faUserCircle,
  faSearch,
  faListUl,
  faLayerGroup,
  faCode,
  faCheckSquare,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faGithubAlt,
  faMedium,
  faBehance,
  faFacebook,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { TareaService } from '../servicios/tarea.service';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss']
})
export class MenulateralComponent implements OnInit {
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  faListUl = faListUl;
  faLayerGroup = faLayerGroup;
  faCheckSquare = faCheckSquare;
  faCode = faCode;
  faHeart = faHeart;
  faAngular = faAngular;
  faBell = faBell;
  faGithubAlt = faGithubAlt;
  faMedium = faMedium;
  faBehance = faBehance;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  cantAll = 0;
  cantTodo = 0;
  cantDoing = 0;
  cantComplete = 0;

  busqueda: FormGroup;
  constructor(
    private authService: AutenticacionService,
    private tareaService: TareaService
  ) {}

  ngOnInit() {
    this.busqueda = new FormGroup({
      buscame: new FormControl(null, Validators.required)
    });

    this.contar();
    this.tareaService.onActualizar.subscribe(() => {
      this.contar();
    });
  }

  contar() {
    this.tareaService.listar().subscribe(tareas => {
      console.log('Contar----- ', tareas.length);
      this.cantAll = tareas.length;
      this.cantTodo = tareas.filter(t => t.status == 'todo').length;
      this.cantDoing = tareas.filter(t => t.status == 'doing').length;
      this.cantComplete = tareas.filter(t => t.status == 'complete').length;
    });
  }

  buscar() {}

  logout() {
    //this.autenticacionServicio.logout()
    this.authService.logout();
  }
}
