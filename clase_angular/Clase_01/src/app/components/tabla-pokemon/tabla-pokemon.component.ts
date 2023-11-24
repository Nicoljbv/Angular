import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tabla-pokemon',
  templateUrl: './tabla-pokemon.component.html',
  styleUrls: ['./tabla-pokemon.component.css']
})

export class TablaPokemonComponent  implements OnInit {

  pokemon: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const pokemonId = params['id'];
      this.getPokemon(pokemonId);
    });
  }

  getPokemon(id:any) {
    this.apiService.getData(id).subscribe(
      res => {
        this.pokemon = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  
}
