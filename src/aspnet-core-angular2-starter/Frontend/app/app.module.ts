import './rxjs-extensions';

import { NgModule }         from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';

import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { HeroesListComponent }      from './heroes/heroes-list.component';
import { HeroesDashboardComponent }   from './heroes/heroes-dashboard.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';
import { HeroSearchComponent }  from './heroes/hero-search.component';
import { ScratchpadComponent }  from './scratchpad/scratchpad.component';
import { DataService }          from './services/dataService'
import { HeroService }          from './services/hero.service';
import { Configuration }        from './app.constants';


import { routing }              from './app.routing';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeroesListComponent,
        HeroDetailComponent,
        HeroesDashboardComponent,
        HeroSearchComponent,
        ScratchpadComponent
    ],
    providers: [
        DataService,
        HeroService,
        Configuration
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {
}