import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Match} from '../match';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from '../../common/api.constants';
import {Player} from '../../player/player';
import {Subscriber} from 'rxjs/src/Subscriber';

@Injectable()
export class CurrentMatchService {
    private currentMatch: Match = null;

    constructor(private router: Router, private httpClient: HttpClient) {
    }

    public get(): Match {
        if (!this.currentMatch) {
            return null;
        }

        return {
            ...this.currentMatch
        };
    }

    public set(match: Match) {
        this.currentMatch = match;
    }

    public save(match: Match): Observable<Match> {
        console.log(match)
        return Observable.create((observer: Subscriber<Match>) => {
            this.addNewPlayers(match).subscribe(() => {
                this.httpClient.post<Match>(ApiConstants.MATCH, match).subscribe((savedMatch) => {
                    observer.next(savedMatch);
                });
            });
        });
    }


    private addNewPlayers(match: Match): Observable<Player[]> {
        const observables: Observable<Player>[] = [];

        if (!match.teamA.player1.id) {
            observables.push(this.savePlayer(match.teamA.player1));
        }
        if (!match.teamA.player2.id) {
            observables.push(this.savePlayer(match.teamA.player2));
        }
        if (!match.teamB.player1.id) {
            observables.push(this.savePlayer(match.teamB.player1));
        }
        if (!match.teamB.player2.id) {
            observables.push(this.savePlayer(match.teamB.player2));
        }

        if (observables.length > 0) {
            return Observable.forkJoin(observables);
        } else {
            return Observable.create((obs) => {
                obs.next([]);
            });
        }
    }

    private savePlayer(player: Player): Observable<Player> {
        return this.httpClient.post<Player>(ApiConstants.PLAYERS, player).do((updatedPlayer) => {
            player.id = updatedPlayer.id;
        });
    }
}
