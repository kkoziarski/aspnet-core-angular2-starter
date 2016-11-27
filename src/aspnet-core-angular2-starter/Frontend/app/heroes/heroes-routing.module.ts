import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HeroesListComponent } from "./heroes-list.component";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesDashboardComponent } from './heroes-dashboard.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroesListComponent },
  { path: 'heroes/dashboard',  component: HeroesDashboardComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }