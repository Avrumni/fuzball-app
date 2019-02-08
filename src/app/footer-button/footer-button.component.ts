import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'footer-button-component',
    templateUrl: './footer-button.component.html',
    styleUrls: ['./footer-button.component.scss']
})

export class FooterButtonComponent implements OnInit {

    @Input()
    public routeTo: string;


    constructor(public router: Router) {

    }

    ngOnInit() {

    }


}
