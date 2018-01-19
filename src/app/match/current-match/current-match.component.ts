import { Component, OnInit } from '@angular/core';
import {CurrentMatchService} from './current-match.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './current-match.component.html',
  styleUrls: ['./current-match.component.css']
})
export class CurrentMatchComponent implements OnInit {
    public match;

  constructor(
      private currentMatchService: CurrentMatchService,
      private router: Router
  ) { }

  ngOnInit() {
    this.match = this.currentMatchService.get();
    console.log(this.match);
    if (!this.match) {
        this.router.navigate(['/match/create']);
    }
  }

  onSubmit() {
      console.log('submit');
      this.router.navigate(['']);
  }
    onCancel() {
        this.router.navigate(['/match/create']);
    }
    onRestart() {
        this.router.navigate(['/match/current']);
    }
}
