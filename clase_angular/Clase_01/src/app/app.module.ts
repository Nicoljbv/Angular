import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { VerPokemonComponent } from '../app/components/ver-pokemon/ver-pokemon.component';
import { TablaPokemonComponent } from '../app/components/tabla-pokemon/tabla-pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { VerPokeAguaComponent } from './components/ver-poke-agua/ver-poke-agua.component';
import { VerPokeTierraComponent } from './components/ver-poke-tierra/ver-poke-tierra.component';
import { VerPokeFuegoComponent } from './components/ver-poke-fuego/ver-poke-fuego.component';
import { VerPokeHierbaComponent } from './components/ver-poke-hierba/ver-poke-hierba.component';
import { ClaveNuevaComponent } from './clave-nueva/clave-nueva.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IngresarComponent,
    RegistrarComponent,
    VerPokemonComponent,
    TablaPokemonComponent,
    MenuComponent,
    VerPokeAguaComponent,
    VerPokeTierraComponent,
    VerPokeFuegoComponent,
    VerPokeHierbaComponent,
    ClaveNuevaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
