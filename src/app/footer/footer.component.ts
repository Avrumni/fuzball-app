import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'footer-button',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Input()
    public word = 'sdfdsfdsfsd';


    constructor(private router: Router) {
        console.log('loaded');
    }

    ngOnInit() {
    }

    onClick() {
        console.log('yolo');
        this.router.navigate(['/match/create']);
    }
}
