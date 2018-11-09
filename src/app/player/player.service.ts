import {Injectable} from '@angular/core';
import {Player} from './player';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from '../common/api.constants';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class PlayerService {

    constructor(private httpClient: HttpClient) {
    }

    public getAll(): Observable<Player[]> {
        return this.httpClient
            .get<Player[]>(ApiConstants.PLAYERS);
    }

    public savePlayer(player: Player): Observable<Player> {
        return this.httpClient.post<Player>(ApiConstants.PLAYERS, player)
            .do((updatedPlayer) => {
                player.id = updatedPlayer.id;
            });
    }

    public checkPlayerNotTaken(player: Player) {

        const yolo = this.httpClient
            .get<Player[]>(ApiConstants.PLAYERS)
            .map(users => users.filter(user => user.name === player.name));
        console.log('playaz', player, yolo);
        return this.httpClient
            .get<Player[]>(ApiConstants.PLAYERS)
            .map(users => users.filter(user => user.name === player.name));
    }
}
