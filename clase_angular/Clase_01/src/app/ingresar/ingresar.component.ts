import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

  existe:Boolean=false
  claveLocalStorage = 'datosUsuarios';

  constructor(private router: Router) { }

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required])
  });

  
  submit() {
    this.existe = false;
    const datosAlmacenados = localStorage.getItem(this.claveLocalStorage);
  
    // Parsea los datos almacenados o inicializa una lista vacía si no hay datos
    const listaDatos = datosAlmacenados ? JSON.parse(datosAlmacenados) : [];
  
    for (const dato of listaDatos) {
      if (dato.nombre === this.formularioContacto.value.nombre && dato.clave === this.formularioContacto.value.clave) {
        this.existe = true;
      }
    }
  
    if (this.existe) {
      console.log("Bienvenido");
      console.log(this.formularioContacto.value.nombre);
      console.log(this.formularioContacto.value.clave);
      
      this.router.navigate(['/dashboard']);
      
    } else {
      console.log("Usuario o clave incorrectos");
    }
  
    this.formularioContacto.reset();
  }
  
}