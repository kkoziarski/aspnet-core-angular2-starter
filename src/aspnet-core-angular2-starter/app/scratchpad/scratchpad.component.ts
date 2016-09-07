import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { DataService } from '../services/dataService';

@Component({
    selector: 'ancng-scratchpad',
    templateUrl: 'app/scratchpad/scratchpad.component.html',
    providers: [
        DataService
    ]
})

export class ScratchpadComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(
        private router: Router,
        private _dataService: DataService
        ) {

        this.values = [];
        this.message = "Hello from ScratchpadComponent ctor";
    }

    ngOnInit() {
        this._dataService
        .GetAll()
        .subscribe(data => this.values = data,
                error => console.log(error),
                () => console.log('Get all complete'));
    }
}
