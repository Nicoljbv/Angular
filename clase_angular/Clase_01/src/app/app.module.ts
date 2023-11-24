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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IngresarComponent,
    RegistrarComponent,
    VerPokemonComponent,
    TablaPokemonComponent
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
