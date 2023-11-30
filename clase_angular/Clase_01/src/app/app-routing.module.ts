import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { VerPokemonComponent } from '../app/components/ver-pokemon/ver-pokemon.component';
import { TablaPokemonComponent } from './components/tabla-pokemon/tabla-pokemon.component';
import { MenuComponent } from './components/menu/menu.component';
import { VerPokeAguaComponent } from './components/ver-poke-agua/ver-poke-agua.component';
import { VerPokeFuegoComponent } from './components/ver-poke-fuego/ver-poke-fuego.component';
import { VerPokeTierraComponent } from './components/ver-poke-tierra/ver-poke-tierra.component';
import { VerPokeHierbaComponent } from './components/ver-poke-hierba/ver-poke-hierba.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'ingresar', component: IngresarComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'pokemon', component: VerPokemonComponent},
  { path: 'verPokemon/:id', component:TablaPokemonComponent},
  { path: 'menu' , component:MenuComponent},
  { path: 'pokemonAgua' , component:VerPokeAguaComponent},
  { path: 'pokemonFuego' , component:VerPokeFuegoComponent},
  { path: 'pokemonTierra' , component:VerPokeTierraComponent},
  { path: 'pokemonHierba' , component:VerPokeHierbaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
