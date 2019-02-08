import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentMatchService} from './current-match.service';
import {Router} from '@angular/router';
import {Match} from '../match';

@Component({
    selector: 'app-match',
    templateUrl: './current-match.component.html',
    styleUrls: ['./current-match.component.scss']
})
export class CurrentMatchComponent implements OnInit, OnDestroy {
    public match: Match;
    public saving = false;
    public minutes;
    public seconds;
    public timer = new Date().getTime();
    public distance;
    public interval;

    constructor(private currentMatchService: CurrentMatchService,
                private router: Router) {
    }

    ngOnInit() {
        this.startTimer();

        this.match = this.currentMatchService.get();

        if (!this.match) {
            this.router.navigate(['/match/create']);
        }
    }

    ngOnDestroy() {
        if (this.interval) {
            console.log('yep')
            clearInterval(this.interval);
        }
    }

    onSubmit() {
        const completedMatch = {
            ...this.match,
            timePlayed: this.distance,
            startTime: this.timer
        };
        this.saving = true;
        this.currentMatchService.save(completedMatch).subscribe((success) => {
            this.onSuccess();
        });

    }

    public startTimer() {
        this.interval = setInterval(() => {
            this.distance = Date.now() - this.timer;
            this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((this.distance % (1000 * 60)) / 1000);
            this.seconds = secs < 10 ? `0${secs}` : secs;
        }, 100);
    }

    onSuccess() {
        alert('Game recorded!')
        this.router.navigate(['/']);
    }
}
