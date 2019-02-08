import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../player.service';
import {Player} from '../player';
import {UsernameValidator} from '../../validators/username';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-player',
    templateUrl: './create-player.component.html',
    styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {
    public createPlayerForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private playerService: PlayerService,
        private usernameValidator: UsernameValidator,
        private router: Router) {
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

        const player = document.getElementById('player');

        const constraints = {
            video: true,
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                (<HTMLVideoElement>player).srcObject = stream;
            });
    }


    onSubmit({value, valid}: { value: Player, valid: boolean }) {
        console.log(value, valid);
        // Save snapshot of current video stream to a hidden canvas
        const canvas = document.getElementById('canvas');
        const image = (<HTMLCanvasElement>canvas).getContext('2d');
        const player = document.getElementById('player');
        image.drawImage((<HTMLVideoElement>player), 0, 0, (<HTMLCanvasElement>canvas).width, (<HTMLCanvasElement>canvas).height);
        const dataURL = (<HTMLCanvasElement>canvas).toDataURL();
        if (valid) {
            // this.playerService.storeInS3Bucket(dataURL);
            this.playerService.savePlayer({name: this.createPlayerForm.value.name})
                .subscribe(data => this.onSuccess(data.name));

        }
    }


    // private validateNameNotTaken = (control: AbstractControl) => {
    //     this.playerService.checkPlayerNotTaken(control.value);
    //     return this.playerService.checkPlayerNotTaken(control.value);
    // };

    onSuccess(data) {
        alert(`Player ${data} saved successfully!`);
        this.router.navigate(['/']);
    }
}
