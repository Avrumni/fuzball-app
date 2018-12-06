import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LeaderBoardComponent} from './leader-board/leader-board.component';
import {LeaderBoardService} from './leader-board/leader-board.service';
import {CreateMatchComponent} from './match/create-match/create-match.component';
import {CurrentMatchComponent} from './match/current-match/current-match.component';
import {CreatePlayerComponent} from './player/create-player/create-player.component';
import {HeaderComponent} from './header/header.component';
import {FooterButtonComponent} from './footer-button/footer-button.component';

import {PlayerService} from './player/player.service';
import {CurrentMatchService} from './match/current-match/current-match.service';
import { SelectPlayerComponent } from './player/select-player/select-player.component';
import {HttpClientModule} from '@angular/common/http';
import {HistoryComponent} from './history/history.component';
import {MatchService} from './match/match.service';
import {UsernameValidator} from './validators/username';
import {AuthProvider} from './auth/auth';
import {DataService} from './common/services/data.service';

const routes: Routes = [
    {path: '', component: HistoryComponent},
    {path: 'addPlayer', component: CreatePlayerComponent},
    {path: 'match/create', component: CreateMatchComponent},
    {path: 'match/current', component: CurrentMatchComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        LeaderBoardComponent,
        CreateMatchComponent,
        CurrentMatchComponent,
        CreatePlayerComponent,
        HeaderComponent,
        FooterButtonComponent,
        SelectPlayerComponent,
        HistoryComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        DataService,
        LeaderBoardService,
        UsernameValidator,
        AuthProvider,
        PlayerService,
        CurrentMatchService,
        CreateMatchComponent,
        MatchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
