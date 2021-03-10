import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './components/listado-superusuario/registrar/registrar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';

//servicios
import {SuperUsuariosService} from './service/usuarios.service';
import {ConfirmationDialogService} from './service/popup-user.service'

//Rutas
import {APP_ROUTING} from './app-routing.module';
import { CrudUserComponent } from './components/listado-superusuario/crud-user/crud-user.component';
import { PopupUserComponent } from './components/listado-superusuario/popup-user/popup-user.component';
import { ListadoSuperusuarioComponent } from './components/listado-superusuario/listado-superusuario.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    NavbarComponent,
    HomeComponent,
    IngresarComponent,
    CrudUserComponent,
    PopupUserComponent,
    ListadoSuperusuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
    
  ],
  providers: [
    SuperUsuariosService,
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
