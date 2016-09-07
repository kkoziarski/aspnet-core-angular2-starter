import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
    selector: 'my-home',
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;

    constructor(
        private router: Router
        ) {

        this.message = "Hello from HomeComponent ctor";
    }

    ngOnInit() {
    }
}
