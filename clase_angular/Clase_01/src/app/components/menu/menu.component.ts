import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(private apiService: ApiService, private router:Router) {

  }

  verPokemones() {
    this.router.navigate(['/pokemon']);
  }

  verPokemonesA() {
    this.router.navigate(['/pokemonAgua']);
  }

  verPokemonesF() {
    this.router.navigate(['/pokemonFuego']);
  }

  verPokemonesT() {
    this.router.navigate(['/pokemonTierra']);
  }

  verPokemonesH() {
    this.router.navigate(['/pokemonHierba']);
  }

  cerrarSesion() {
    this.router.navigate(['/dashboard']);
  }
}
