import { Component, OnInit } from '@angular/core';
import { SuperUsuariosService, superUsuario } from '../../../service/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  usuario: string = "Ingresar";
  constructor() { }

  ngOnInit(): void {
  }

  

}
