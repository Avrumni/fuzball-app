import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../player.service';
import {Player} from '../player';
import {ObserveOnMessage} from 'rxjs/operators/observeOn';
import {Observable} from 'rxjs/Observable';
import {UsernameValidator} from '../../validators/username';

@Component({
    selector: 'app-create-player',
    templateUrl: './create-player.component.html',
    styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {
    public createPlayerForm: FormGroup;

    constructor(private fb: FormBuilder, private playerService: PlayerService, private usernameValidator: UsernameValidator ) {
    }

    ngOnInit() {
        this.createPlayerForm = this.fb.group({
            name: [
                '',
                [
                    Validators.required,
                    Validators.minLength(4)
                ],
                this.usernameValidator.checkUsername.bind(this.usernameValidator)]
        });
    }


    onSubmit({value, valid}: { value: Player, valid: boolean }) {
        console.log(value, valid);
        if (valid) {
            this.playerService.savePlayer({name: this.createPlayerForm.value.name})
                .subscribe(data => console.log('player city', data),
                    error => console.log('something broke', error));

        }
    }


    // private validateNameNotTaken = (control: AbstractControl) => {
    //     this.playerService.checkPlayerNotTaken(control.value);
    //     return this.playerService.checkPlayerNotTaken(control.value);
    // };
}
