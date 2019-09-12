import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NuevaComponent } from './nueva/nueva.component';
import { EditarComponent } from './editar/editar.component';
import { NologueadoComponent } from './nologueado/nologueado.component';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { FiltrosPipe } from './pipes/filtros.pipe';

const rutas:Routes = [
  {path:'',component:LoginComponent},
  {path:'tareas', component:MenulateralComponent, children:[
    {path:'',component:ListadoComponent},
    /* {path:'todo', component:ListadoComponent},
    {path:'doing', component:ListadoComponent},
    {path:'complete', component:ListadoComponent}, */
    {path:'nueva',component:NuevaComponent},
    {path:'editar/:id',component:EditarComponent},
    {path:':status',component:ListadoComponent},
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
    MenulateralComponent,
    FiltrosPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
