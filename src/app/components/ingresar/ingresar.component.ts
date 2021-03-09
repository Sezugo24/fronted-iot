import { Component, OnInit } from '@angular/core';
import { SuperUsuariosService, superUsuario } from '../../service/usuarios.service';
import { Router} from '@angular/router'; 
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

  users: any = [];
  user: string = "";
  password: string = "";
  constructor(private _usuariosService: SuperUsuariosService,
              private _router: Router,
              private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
      this.httpClient.get("assets/data.json").subscribe(data =>{
      this.users = data;
      console.log("data: ");
      console.log(data); 
    });
  }

  buscarUsuario(termino: string){

    let usuariosArr:superUsuario[] = [];
    termino = termino.toLowerCase(); 
    let index : number = -1;
    for (let usuario of this.users){          
      let nombre = usuario.nombre.toLowerCase();
      if (nombre.indexOf(termino) >=0 ){
        usuariosArr.push(usuario);
      }    
    }
    return usuariosArr;
  }

  verCrudUser(){
    //traer usuarios de la bbase de datos
    let userInfo: any = this.buscarUsuario(this.user);
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
    console.log(this.user);
    console.log(this.password);
    console.log(this.buscarUsuario(this.user));    
  }
 
}
