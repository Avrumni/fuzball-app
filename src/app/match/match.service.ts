import {Injectable} from '@angular/core';
import {Match} from './match';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ApiConstants} from '../common/api.constants';

@Injectable()
export class MatchService {

    constructor(private httpClient: HttpClient) {
    }

    public getAll(): Promise<Match[]> {
        return this.httpClient.get<Match[]>(ApiConstants.MATCH).toPromise();

    }
}
