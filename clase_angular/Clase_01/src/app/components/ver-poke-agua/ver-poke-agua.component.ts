import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-ver-poke-agua',
  templateUrl: './ver-poke-agua.component.html',
  styleUrls: ['./ver-poke-agua.component.css']
})
export class VerPokeAguaComponent implements OnInit{

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
        this.data = results.filter(this.tipoWater);
        console.log(this.data);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

  tipoWater(pokemon: any): boolean {
    // Verifica si al menos uno de los tipos del Pokémon es 'water'
    return pokemon.types.some((type: any) => type.type.name === 'water');
  }

  verPokemon(pokemon: any) {
    this.router.navigate(['/verPokemon', pokemon.id]);
  }

}
