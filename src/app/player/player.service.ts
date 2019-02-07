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
        console.log(player)
        return this.httpClient.post<Player>(ApiConstants.PLAYERS, player)
            .do((updatedPlayer) => {
                player.id = updatedPlayer.id;
            });
    }
    // public storeInS3Bucket(image): void {
    //     var albumBucketName = 'BUCKET_NAME';
    //     var bucketRegion = 'REGION';
    //     var IdentityPoolId = 'IDENTITY_POOL_ID';
    //
    //     AWS.config.update({
    //         region: bucketRegion,
    //         credentials: new AWS.CognitoIdentityCredentials({
    //             IdentityPoolId: IdentityPoolId
    //         })
    //     });
    //
    //     var s3 = new AWS.S3({
    //         apiVersion: '2006-03-01',
    //         params: {Bucket: albumBucketName}
    //     });
    //     console.log('storin')
    //     this.httpClient.post('http://fuzzball.ap-southeast-2.amazonaws.com/bucket', image)
    //         .do((success) => {
    //            alert(success)
    //         }, error => alert(error));
    // }
    // public checkPlayerNotTaken(player: Player) {
    //
    //     const yolo = this.httpClient
    //         .get<Player[]>(ApiConstants.PLAYERS)
    //         .map(users => users.filter(user => user.name === player.name));
    //     console.log('playaz', player, yolo);
    //     return this.httpClient
    //         .get<Player[]>(ApiConstants.PLAYERS)
    //         .map(users => users.filter(user => user.name === player.name));
    // }
}
