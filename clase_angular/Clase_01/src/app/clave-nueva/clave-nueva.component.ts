import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clave-nueva',
  templateUrl: './clave-nueva.component.html',
  styleUrls: ['./clave-nueva.component.css']
})
export class ClaveNuevaComponent {

  existe: boolean = false;
  claveLocalStorage = 'datosUsuarios';

  constructor(private router: Router) { }

  formularioClaveN = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required])
  });

  submit() {
    this.existe = false;
    const datosAlmacenados = localStorage.getItem(this.claveLocalStorage);

    // Parsea los datos almacenados o inicializa una lista vacía si no hay datos
    const listaDatos = datosAlmacenados ? JSON.parse(datosAlmacenados) : [];

    for (const dato of listaDatos) {
      if (dato.correo === this.formularioClaveN.value.correo) {
        this.existe = true;
        dato.clave = this.formularioClaveN.value.clave;
        break; // Stop searching once a match is found
      }
    }

    if (this.existe) {
      console.log("Cambio de contraseña exitoso");
      console.log(this.formularioClaveN.value.correo);
      console.log(this.formularioClaveN.value.clave);

      // Save the updated data back to localStorage
      localStorage.setItem(this.claveLocalStorage, JSON.stringify(listaDatos));

      this.router.navigate(['/ingresar']);
    } else {
      console.log("Usuario o clave incorrectos");
    }

    this.formularioClaveN.reset();
  }
}
