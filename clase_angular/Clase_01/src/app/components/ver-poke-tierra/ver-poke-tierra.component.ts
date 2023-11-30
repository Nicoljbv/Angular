import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ver-poke-tierra',
  templateUrl: './ver-poke-tierra.component.html',
  styleUrls: ['./ver-poke-tierra.component.css']
})
export class VerPokeTierraComponent implements OnInit{

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
        this.data = results.filter(this.tipoGround);
        console.log(this.data);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

  tipoGround(pokemon: any): boolean {
    // Verifica si al menos uno de los tipos del Pokémon es 'water'
    return pokemon.types.some((type: any) => type.type.name === 'ground');
  }

  verPokemon(pokemon: any) {
    this.router.navigate(['/verPokemon', pokemon.id]);
  }

}
