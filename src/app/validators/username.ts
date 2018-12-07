import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthProvider} from '../auth/auth';

@Injectable()
export class UsernameValidator {

    public debouncer: any;

    constructor(private httpClient: HttpClient, private authProvider: AuthProvider) {
    }

    public checkUsername(control: FormControl): any {


        return new Promise(resolve => {


            this.authProvider.validateUsername(control.value).subscribe((res) => {
                console.log(res);
                if (res.name) {
                    resolve({'usernameInUse': true});
                }
            }, (err) => {
                resolve(null);
                console.log(err)
            });

        });

    }
}
