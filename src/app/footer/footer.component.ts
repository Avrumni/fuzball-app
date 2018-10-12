import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentMatchService} from '../match/current-match/current-match.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Input()
    public banner() {
        switch (this.router.url) {
            case '/':
                return {
                    text: 'Start a new match'
                };
            case '/match/create':
                return {
                    text: 'Kickoff!'
                };
            default:
                return {
                    text: 'Hello'
                };
        }
    }

    constructor(private router: Router, private currentMatchService: CurrentMatchService) {
        console.log(this.router.url);
    }

    ngOnInit() {

    }

    onClick() {
        console.log(this.currentMatchService);
        this.router.navigate(['/match/create']);
    }
}
