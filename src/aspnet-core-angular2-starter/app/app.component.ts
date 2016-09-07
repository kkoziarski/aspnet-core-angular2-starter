import { Component }          from '@angular/core';

@Component({
    selector: 'ancng-app',
    templateUrl: 'app/app.component.html'
    //   styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Hello from AppComponent';
    copyYear : number;
    
    constructor(){
        let today = new Date();
        this.copyYear = today.getFullYear();
    }
}