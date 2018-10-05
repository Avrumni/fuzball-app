import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LeaderBoardComponent} from './leader-board/leader-board.component';
import {LeaderBoardService} from './leader-board/leader-board.service';
import {CreateMatchComponent} from './match/create-match/create-match.component';
import {CurrentMatchComponent} from './match/current-match/current-match.component';
import {CreatePlayerComponent} from './player/create-player/create-player.component';
import {FooterComponent} from './footer/footer.component';

import {PlayerService} from './player/player.service';
import {CurrentMatchService} from './match/current-match/current-match.service';
import { SelectPlayerComponent } from './player/select-player/select-player.component';
import {HttpClientModule} from '@angular/common/http';
import {HistoryComponent} from './history/history.component';
import {MatchService} from './match/match.service';

const routes: Routes = [
    {path: '', component: HistoryComponent},
    {path: 'match/create', component: CreateMatchComponent},
    {path: 'match/current', component: CurrentMatchComponent},
    {path: 'playerNumber/create', component: CreatePlayerComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        LeaderBoardComponent,
        CreateMatchComponent,
        CurrentMatchComponent,
        CreatePlayerComponent,
        FooterComponent,
        SelectPlayerComponent,
        HistoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        LeaderBoardService,
        PlayerService,
        CurrentMatchService,
        MatchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
