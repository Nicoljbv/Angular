import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  constructor( private router:Router) {

  }

  
  resultado: String=''
  claveLocalStorage = 'datosUsuarios';

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    clave: new FormControl('', [Validators.required])
  });

  submit() {
    if (this.formularioContacto.valid){
      this.resultado = "Todos los datos son válidos";
      //localStorage.setItem('usuarios', JSON.stringify(this.formularioContacto.value));
       // Obtén los datos almacenados actualmente en localStorage
    const datosAlmacenados = localStorage.getItem(this.claveLocalStorage);

    // Parsea los datos almacenados o inicializa una lista vacía si no hay datos
    const listaDatos = datosAlmacenados ? JSON.parse(datosAlmacenados) : [];

    // Agrega el nuevo conjunto de datos al final de la lista
    listaDatos.push(this.formularioContacto.value);

    // Guarda la lista actualizada en localStorage
    localStorage.setItem(this.claveLocalStorage, JSON.stringify(listaDatos));
    
      this.formularioContacto.reset();
    }else{
      this.resultado = "Hay datos vacios o inválidos en el formulario";
  }
}

login(){
  this.router.navigate(['/ingresar']);
}
}
