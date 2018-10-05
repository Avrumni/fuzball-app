import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'footer-button',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Input()
    public word() {
        switch (this.router.url) {
            case '/': return 'Start a new match';
            case '/match/create': return 'Start a new game';
            default: return 'Hello';
        }
    }

    constructor(private router: Router) {
        console.log(this.router.url);
    }

    ngOnInit() {
    }

    onClick() {
        console.log('yolo');
        this.router.navigate(['/match/create']);
    }
}
