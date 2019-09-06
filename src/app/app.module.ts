import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NuevaComponent } from './nueva/nueva.component';
import { EditarComponent } from './editar/editar.component';
import { NologueadoComponent } from './nologueado/nologueado.component';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { MenulateralComponent } from './menulateral/menulateral.component';

const rutas:Routes = [
  {path:'',component:LoginComponent},
  {path:'tareas', component:MenulateralComponent, children:[
    {path:'',component:ListadoComponent},
    {path:'nueva',component:NuevaComponent},
    {path:'editar',component:EditarComponent}
  ]},
  {path:'**',component:NologueadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NuevaComponent,
    EditarComponent,
    NologueadoComponent,
    ListadoComponent,
    MenulateralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
