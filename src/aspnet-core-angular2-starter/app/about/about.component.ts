import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
    selector: 'my-about',
    templateUrl: 'app/about/about.component.html'
})

export class AboutComponent implements OnInit {

    public message: string;

    constructor(private router: Router) {
        this.message = "Hello from AboutComponent ctor";
    }

    ngOnInit() {
       
    }
}
