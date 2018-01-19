import {Injectable} from '@angular/core';
import {Player} from './player';

@Injectable()
export class PlayerService {

    constructor() {
    }

    public getAll(): Promise<Player[]> {
        return Promise.resolve([{
            name: 'John Smith'
        }, {
            name: 'Jane Smith'
        }, {
            name: 'Smith Johnson'
        }, {
            name: 'Nick Balsaras'
        }, {
            name: 'Benny Ho'
        }, {
            name: 'Carol Cheng'
        }]);
    }

    public savePlayer(player: Player) {
        console.log('save ' + player.name + ' successfully!');
    }
}
