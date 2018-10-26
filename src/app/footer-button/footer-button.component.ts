import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentMatchService} from '../match/current-match/current-match.service';
import {injectTemplateRef} from '@angular/core/src/render3';
import {CreateMatchComponent} from '../match/create-match/create-match.component';

import {PlayerService} from '../player/player.service';
import {Match} from '../match/match';


@Component({
    selector: 'app-footer-button',
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
