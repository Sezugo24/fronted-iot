import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';

//servicios
import {SuperUsuariosService} from './service/usuarios.service';

//Rutas
import {APP_ROUTING} from './app-routing.module';
import { CrudUserComponent } from './components/crud-user/crud-user.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    NavbarComponent,
    HomeComponent,
    IngresarComponent,
    CrudUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
    
  ],
  providers: [
    SuperUsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
