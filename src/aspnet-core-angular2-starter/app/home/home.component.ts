import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { DataService } from '../services/dataService';

@Component({
    selector: 'my-home',
    templateUrl: 'app/home/home.component.html',
    providers: [
        DataService
    ]
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(
        private router: Router,
        private _dataService: DataService
        ) {

        this.values = [];
        this.message = "Hello from HomeComponent ctor";
    }

    ngOnInit() {
        this._dataService
        .GetAll()
        .subscribe(data => this.values = data,
                error => console.log(error),
                () => console.log('Get all complete'));
    }
}
