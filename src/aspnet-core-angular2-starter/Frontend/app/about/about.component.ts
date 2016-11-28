import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngnco-about',
    templateUrl: 'app/about/about.component.html'
})

export class AboutComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = "Hello from AboutComponent ctor";
    }

    ngOnInit(): void {
       
    }
}
