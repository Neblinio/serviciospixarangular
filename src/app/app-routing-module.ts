import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { CreatePersonaje } from './components/create-personaje/create-personaje';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "personajes", component: PersonajesComponent},
    {path: "create", component: CreatePersonaje}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
