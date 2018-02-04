import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Match} from "../match";

@Injectable()
export class CurrentMatchService {
    private currentMatch: Match = null;

    constructor(private router: Router) {
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
}
