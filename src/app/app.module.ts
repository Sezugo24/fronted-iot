import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


//Rutas
import {APP_ROUTING} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
