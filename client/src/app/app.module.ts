import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './play/questions/questions.component';
import { PlayQuizComponent } from './play/play-quiz/play-quiz.component';
import {QuizSelectionComponent} from './play/quiz-selection/quiz-selection.component';
import {ThemesSelectionComponent} from "./play/themes-selection/themes-selection.component";
import {MainComponent} from './main/main.component';
import {GuestSelectionComponent} from './play/guest-selection/guest-selection.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {GuestListComponent} from './management/guests/guest-list/guest-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmDeletion} from './management/guests/guest-list/modal-confirm-deletion';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent,
    PlayQuizComponent,
    QuizSelectionComponent,
    ThemesSelectionComponent,
    MainComponent,
    GuestSelectionComponent,
    GuestListComponent,
    ModalConfirmDeletion,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
