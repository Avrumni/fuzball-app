import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Player} from '../player';

@Component({
    selector: 'app-select-player',
    templateUrl: './select-player.component.html',
    styleUrls: ['./select-player.component.scss']
})
export class SelectPlayerComponent {
    @Input()
    public players: Player[];

    // New
    @Input()
    public player: Player;

    @Output()
    public playerChange = new EventEmitter<Player>();

    @Input()
    public isPlayerSelected: (player: Player) => boolean;

    public newPlayer = false;

    constructor() {
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
