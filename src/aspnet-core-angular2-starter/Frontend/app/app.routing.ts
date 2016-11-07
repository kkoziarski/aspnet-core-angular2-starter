import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { ScratchpadComponent }  from './scratchpad/scratchpad.component';

import { HeroesListComponent }      from './heroes/heroes-list.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';
import { HeroesDashboardComponent }      from './heroes/heroes-dashboard.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  { 
    path: 'about', 
    component: AboutComponent
  },
  { 
    path: 'heroes', 
    component: HeroesListComponent
  },
  {
    path: 'heroes-dashboard',
    component: HeroesDashboardComponent
  },
  {
    path: 'hero-detail/:id',
    component: HeroDetailComponent
  },
  { 
    path: 'scratchpad', 
    component: ScratchpadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
