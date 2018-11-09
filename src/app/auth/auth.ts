import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from '../common/api.constants';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {


    constructor(public httpClient: HttpClient){

    }

    public validateUsername(username) {
        return this.httpClient.get<any>(ApiConstants.PLAYERS + '/name/' + username)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(' error');
    }

}
