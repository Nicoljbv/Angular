import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { forkJoin } from 'rxjs';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.css']
})
export class VerPokemonComponent implements OnInit{

  data : any[] = [];

  constructor(private apiService: ApiService, private router:Router) {

  }
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
        this.data = results;
        console.log(this.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  // En VerPokemonComponent
verPokemon(pokemon: any) {
  this.router.navigate(['/verPokemon', pokemon.id]);
}

  
  }



