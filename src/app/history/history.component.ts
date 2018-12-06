import {Component, OnInit} from '@angular/core';
import {MatchService} from '../match/match.service';
import {Match} from '../match/match';
import {Router} from '@angular/router';
import {DataService} from '../common/services/data.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    public matches: Match[] = [];
    public path = ['match/create'];

    constructor(private historyService: MatchService, private dataService: DataService, private router: Router) {
    }

    ngOnInit() {
        if (this.dataService.hasData()) {
            this.matches = this.dataService.getData();
        } else {
            this.historyService.getAll().then((matches) => {
                this.dataService.setData(matches);
                this.matches = matches;
            }, error => {
                console.log(error);
            });
        }
    }

    routeChange() {
        this.router.navigate(['match/create']);
    }
}
