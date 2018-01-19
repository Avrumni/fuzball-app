import { Injectable } from '@angular/core';

@Injectable()
export class LeaderBoardService {

  constructor() { }

  public get(): Promise<any> {
      return Promise.resolve([{
          player1: 'John Smith',
          player2: 'Jane Smith',
          winRate: 40
      }, {
          player1: 'John Smith',
          player2: 'Jane Smith',
          winRate: 30
      }, {
          player1: 'John Smith',
          player2: 'Jane Smith',
          winRate: 10
      }]);
  }
}
