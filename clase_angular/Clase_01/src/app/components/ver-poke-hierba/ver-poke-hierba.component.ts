import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-ver-poke-hierba',
  templateUrl: './ver-poke-hierba.component.html',
  styleUrls: ['./ver-poke-hierba.component.css']
})
export class VerPokeHierbaComponent implements OnInit{

  data : any[] = [];


  constructor(private apiService: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    const observables = [];
  
    for (let i = 1; i <= 150; i++) {
      observables.push(this.apiService.getData(i));
    }
    
    forkJoin(observables).subscribe(
      (results: any[]) => {
        // Filtrar solo los Pokémon de tipo 'water'
        this.data = results.filter(this.tipoGrass);
        console.log(this.data);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

  tipoGrass(pokemon: any): boolean {
    // Verifica si al menos uno de los tipos del Pokémon es 'water'
    return pokemon.types.some((type: any) => type.type.name === 'grass');
  }

  verPokemon(pokemon: any) {
    this.router.navigate(['/verPokemon', pokemon.id]);
  }


}
