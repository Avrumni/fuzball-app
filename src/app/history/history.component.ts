import {Component, OnInit} from '@angular/core';
import {MatchService} from '../match/match.service';
import {Match} from '../match/match';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    public matches: Match[] = [];

    constructor(private historyService: MatchService) {
    }

    ngOnInit() {
        this.historyService.getAll().then((matches) => {
            this.matches = matches;
        });
    }
}
