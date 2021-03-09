import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from "@angular/common/http";


export interface superUsuario {
    nombre: string;
    password: string;
    email:string;
}

@Injectable()
export class SuperUsuariosService {
    private superUsuarios: superUsuario[] = [];
    
    getUsusarios(){
        return this.superUsuarios;
    }
    getUsuario(idx: number){
        return this.superUsuarios[idx];
    }   
    
    setUsuario(usuario : superUsuario){
      this.superUsuarios.push(usuario);
    }
    setUsuarios(usuarios :superUsuario[]){
      this.superUsuarios = usuarios;
    }

}