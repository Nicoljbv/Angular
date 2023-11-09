import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: String='';
  saludo: String='';

  constructor(){
  
  }
  
  ngOnInit(): void {
  
  }

  mostrarNombre(){
    this.saludo = `Bienvenid@ ${this.nombre}`
  }
}

