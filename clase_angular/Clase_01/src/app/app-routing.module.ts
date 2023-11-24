import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { VerPokemonComponent } from '../app/components/ver-pokemon/ver-pokemon.component';
import { TablaPokemonComponent } from './components/tabla-pokemon/tabla-pokemon.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'ingresar', component: IngresarComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'pokemon', component: VerPokemonComponent},
  { path: 'verPokemon/:id', component:TablaPokemonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
