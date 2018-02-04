import {Component, OnInit} from '@angular/core';
import {LeaderBoardService} from './leader-board.service';

@Component({
    selector: 'app-leader-board',
    templateUrl: './leader-board.component.html',
    styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
    public rankings = [];

    constructor(private leaderBoardService: LeaderBoardService) {
    }

    ngOnInit() {
        this.leaderBoardService.get().then((rankings) => {
            this.rankings = rankings;
        });
    }
}
