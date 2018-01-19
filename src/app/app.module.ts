import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { CreateMatchComponent } from './match/create-match/create-match.component';
import { CurrentMatchComponent } from './match/current-match/current-match.component';
import { CreatePlayerComponent } from './player/create-player/create-player.component';
import {LeaderBoardService} from './leader-board/leader-board.service';

const routes: Routes = [
  {path: '', component: LeaderBoardComponent},
  {path: 'match/create', component: CreateMatchComponent},
  {path: 'match/current', component: CurrentMatchComponent},
  {path: 'player/create', component: CreatePlayerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LeaderBoardComponent,
    CreateMatchComponent,
    CurrentMatchComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [
      LeaderBoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
