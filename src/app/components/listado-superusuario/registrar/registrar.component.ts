import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html'
})
export class RegistrarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  verCrud(){
    this._router.navigate( ['/newUser'] );
  }
}
