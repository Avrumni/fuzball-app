import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Player} from '../player';
import {Match} from '../../match/match';
import {Team} from '../../team/team';

@Component({
    selector: 'app-select-player',
    templateUrl: './select-player.component.html',
    styleUrls: ['./select-player.component.scss']
})
export class SelectPlayerComponent implements OnInit, OnChanges {
    @Input()
    public players: Player[];

    // New
    @Input()
    public player: Player;

    @Output()
    public playerChange = new EventEmitter<Player>();

    @Input()
    public playerAvailable: (player: Player) => boolean;

    public newPlayer = false;

    constructor() {
    }

    ngOnInit() {
        console.log('Player is', this.player);
        console.log('Players are', this.players);
        console.log('PA is', this.playerAvailable);
    }

    ngOnChanges(changes) {
        console.log('Change: ', changes);
    }

    public toggleCreate() {
        this.newPlayer = !this.newPlayer;
        if (this.newPlayer) {
            this.player = {
                name: ''
            };
        } else {
            this.player = null;
        }

        this.onChange();
    }

    public onChange() {
        this.playerChange.emit(this.player);
    }
}
