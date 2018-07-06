import {Injectable} from '@angular/core';
import {Player} from './player';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from '../common/api.constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlayerService {

    constructor(private httpClient: HttpClient) {
    }

    public getAll(): Observable<Player[]> {
        return this.httpClient
            .get<Player[]>(ApiConstants.PLAYERS);
    }

    public savePlayer(player: Player) {
        console.log('save ' + player.name + ' successfully!');
    }
}
