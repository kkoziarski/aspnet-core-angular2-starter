import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes.component";
import { HeroesListComponent } from "./heroes-list.component";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesDashboardComponent } from './heroes-dashboard.component';

const heroesRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        children: [
            {
                path: '',
                component: HeroesListComponent
            },
            {
                path: 'dashboard',
                component: HeroesDashboardComponent
            },
            {
                path: ':id',
                component: HeroDetailComponent
            }
        ]
    }
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

/*
const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];
*/