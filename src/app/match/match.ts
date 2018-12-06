import {Team} from '../team/team';
import {Time} from '@angular/common';

export interface Match {
    teamA: Team;
    teamAScore: number;
    teamB: Team;
    teamBScore: number;
    startTime?: number;
    timePlayed?: number;
}
