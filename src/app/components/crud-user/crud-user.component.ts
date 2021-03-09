import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { superUsuario, } from '../../service/usuarios.service';
import {ConfirmationDialogService} from '../../service/popup-user.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html'
})
export class CrudUserComponent implements OnInit {

  user :String = "";
  password: String = "";
  users: superUsuario[]  = [];

  constructor(private _router: Router,
              private httpClient: HttpClient,
              private _confirmationDialogService:ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.httpClient.get<superUsuario[]>("assets/data.json").subscribe((data: superUsuario[] )=>{
      this.users = data;
      console.log("data: ")
      console.log(data);
    });
  }

  verRegistrar(){
    this._router.navigate( ['/registrar']);   
  }
  
  public openConfirmationDialog(usuario:string = "") {
    let mensaje = 'Enserio desea eliminar el usuario \'' + usuario + '\'?' ;
    this._confirmationDialogService.confirm('Confirmar', mensaje)
    .then((confirmed) => console.log('usuario ha confirmado:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}

