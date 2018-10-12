import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentMatchService} from '../match/current-match/current-match.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(public router: Router, private _location: Location) {
        console.log(this.router.url);
    }

    ngOnInit() {
    }

    backClicked() {
        this._location.back();
    }
}
