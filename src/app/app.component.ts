import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fussball Time';

    constructor(public router: Router, private _location: Location) {
        console.log(this.router.url);
    }


    backClicked() {
        this._location.back();
    }
}
