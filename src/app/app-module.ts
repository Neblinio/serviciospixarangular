import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonajes } from './services/service.personajes';
import { CreatePersonaje } from './components/create-personaje/create-personaje';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [App, MenuComponent, HomeComponent, PersonajesComponent, CreatePersonaje],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePersonajes],
    bootstrap: [App],
})
export class AppModule {}
