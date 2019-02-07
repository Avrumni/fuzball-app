import {Team} from '../team/team';

export interface Match {
    teamA: Team;
    teamAScore: number;
    teamB: Team;
    teamBScore: number;
    startTime?: number;
    timePlayed?: number;
}
