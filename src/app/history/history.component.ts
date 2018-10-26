import {Component, OnInit} from '@angular/core';
import {MatchService} from '../match/match.service';
import {Match} from '../match/match';
import {Router} from '@angular/router';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    public matches: Match[] = [];
    public path = ['match/create'];

    constructor(private historyService: MatchService, private router: Router) {
    }

    ngOnInit() {
        this.historyService.getAll().then((matches) => {
            this.matches = matches;
        });
    }

    routeChange() {
        this.router.navigate(['match/create']);
    }
}
