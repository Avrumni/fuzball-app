import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-player',
    templateUrl: './create-player.component.html',
    styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

    constructor(private playerService: PlayerService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log('create player');
        this.playerService.savePlayer({name: ''});
        this.router.navigate(['/match/create']);
    }
}
