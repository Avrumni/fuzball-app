import {Injectable} from '@angular/core';

@Injectable()
export class LeaderBoardService {

    constructor() {
    }

    public get(): Promise<any> {
        return Promise.resolve([{
            player1: 'John Smith',
            player2: 'Jane Smith',
            winRate: 40
        }, {
            player1: 'Sam Zhao',
            player2: 'Max Rowles',
            winRate: 30
        }, {
            player1: 'Finn Balsara',
            player2: 'Jake Ho',
            winRate: 10
        }]);
    }
}
