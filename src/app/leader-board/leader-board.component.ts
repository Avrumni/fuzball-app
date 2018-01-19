import {Component, OnInit} from '@angular/core';
import {LeaderBoardService} from './leader-board.service';

@Component({
    selector: 'app-leader-board',
    templateUrl: './leader-board.component.html',
    styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
    private leaderBoardService: LeaderBoardService;
    public rankings = [];

    constructor(leaderBoardService: LeaderBoardService) {
        this.leaderBoardService = leaderBoardService;
    }

    ngOnInit() {
        this.leaderBoardService.get().then((rankings) => {
            this.rankings = rankings;
        });
    }
}
