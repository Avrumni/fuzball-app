import {Component, OnInit} from '@angular/core';
import {CurrentMatchService} from './current-match.service';
import {Router} from '@angular/router';
import {Match} from '../match';

@Component({
    selector: 'app-match',
    templateUrl: './current-match.component.html',
    styleUrls: ['./current-match.component.scss']
})
export class CurrentMatchComponent implements OnInit {
    public match: Match;
    public saving = false;

    constructor(private currentMatchService: CurrentMatchService,
                private router: Router) {
    }

    ngOnInit() {
        this.match = this.currentMatchService.get();

        if (!this.match) {
            this.router.navigate(['/match/create']);
        }
    }

    onSubmit() {
        this.saving = true;
        this.currentMatchService.save(this.match).subscribe(() => {
            this.router.navigate(['']);
        });
    }
}
