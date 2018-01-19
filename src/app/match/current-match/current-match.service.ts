import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class CurrentMatchService {
    private currentMatch = null;

    constructor(private router: Router) {
    }

    public get() {
        if (!this.currentMatch) {
            return null;
        }

        return {
            ...this.currentMatch
        };
    }

    public set(match) {
        this.currentMatch = match;
    }
}
