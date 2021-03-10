import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/listado-superusuario/registrar/registrar.component';
import {IngresarComponent} from './components/ingresar/ingresar.component'
import {CrudUserComponent} from './components/listado-superusuario/crud-user/crud-user.component'


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'newUser', component: CrudUserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
