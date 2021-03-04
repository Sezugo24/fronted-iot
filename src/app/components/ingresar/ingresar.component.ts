import { Component, OnInit } from '@angular/core';
import { SuperUsuariosService, superUsuario } from '../../service/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

  users: superUsuario[] = [];
  email: string = "";
  password: string = "";
  constructor(private _usuariosService: SuperUsuariosService,
              private _router: Router
  ) { }

  ngOnInit(): void {
    this.users = this._usuariosService.getUsusarios();
  }

  verCrudUser(){
    //traer usuarios de la bbase de datos
    let userInfo: any = this._usuariosService.searchUsuario(this.email);
    let passwordUser = userInfo[0].password;
    console.log("contraseña ingresada, pass db: ");
    console.log(this.password);
    console.log(passwordUser);

    if(passwordUser == this.password ){
      this._router.navigate( ['/newUser'] );
    }
    else{
      console.log("usuario o contraseña incorrectos")
    }
    console.log(this.email);
    console.log(this.password);
    console.log(this._usuariosService.searchUsuario(this.email));    
  }

}
