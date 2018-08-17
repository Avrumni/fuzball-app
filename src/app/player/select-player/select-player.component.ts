import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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

    @ViewChild('newPlayerName')
    public newPlayerInput: ElementRef;

    @ViewChild('existingPlayer')
    public existingPlayerInput: ElementRef;

    constructor() {
    }

    public toggleCreate() {
        this.newPlayer = !this.newPlayer;
        if (this.newPlayer) {
            this.player = {
                name: ''
            };
            this.focus('newPlayerInput');
        } else {
            this.player = null;
            this.focus('existingPlayerInput');
        }

        this.onChange();
    }

    public onChange() {
        this.playerChange.emit(this.player);
    }

    private focus(inputName: keyof this) {
        // This uses a timeout to give the document a chance to update and display
        // the new field before we try focus it
        setTimeout(() => {
            const input: ElementRef = this[inputName];
            console.log('focus', input);
            if (input) {
                input.nativeElement.focus();
            }
        }, 100);
    }
}
