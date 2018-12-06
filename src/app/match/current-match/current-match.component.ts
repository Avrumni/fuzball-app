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
    public interval;

    constructor(private currentMatchService: CurrentMatchService,
                private router: Router) {
    }

    ngOnInit() {
        setInterval(() => {
            this.interval = Date.now() - this.timer;
            this.minutes = Math.floor((this.interval % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((this.interval % (1000 * 60)) / 1000);
            this.seconds = secs < 10 ? `0${secs}` : secs;
        }, 100);

        this.match = this.currentMatchService.get();

        if (!this.match) {
            this.router.navigate(['/match/create']);
        }
    }
    ngOnDestroy() {
        if(this.interval) {
            clearInterval(this.interval)
        }
    }

    onSubmit() {
        this.saving = true;
        this.currentMatchService.save(this.match).subscribe(() => {
            this.router.navigate(['']);
        });

    }
}
