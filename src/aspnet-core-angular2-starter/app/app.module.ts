import './rxjs-extensions';

import { NgModule }         from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';

import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';
import { HomeComponent }    from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { DataService }      from './services/dataService'
import { Configuration } from './app.constants';

import { routing }          from './app.routing';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    providers: [
        DataService,
        Configuration
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {
}