import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';
import {Player} from '../player';

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
        console.log('create playerNumber');
        this.playerService.savePlayer({name: ''});
        this.router.navigate(['/match/create']);
    }
}
