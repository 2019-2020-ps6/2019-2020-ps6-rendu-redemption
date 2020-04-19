import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { QuestionsComponent } from './play/questions/questions.component';
import { PlayQuizComponent } from './play/play-quiz/play-quiz.component';
import { QuizSelectionComponent } from './play/quiz-selection/quiz-selection.component';
import { ThemesSelectionComponent } from './play/themes-selection/themes-selection.component';
import { GuestSelectionComponent } from './play/guest-selection/guest-selection.component';

import { GuestListComponent } from './management/guests/guest-list/guest-list.component';
import { GuestEditComponent } from './management/guests/guest-edit/guest-edit.component';
import { ModalConfirmDeletion } from './management/guests/guest-list/modal-confirm-deletion';
import { ThemesListComponent } from './management/quizzes/themes/themes-list/themes-list.component';
import { ThemesCreationComponent } from './management/quizzes/themes/themes-creation/themes-creation.component';
import { QuizzesListComponent } from './management/quizzes/quiz/quizzes-list/quizzes-list.component';
import { QuizCreationComponent } from './management/quizzes/quiz/quiz-creation/quiz-creation.component';
import { QuestionsListComponent } from './management/quizzes/quiz/questions/questions-list/questions-list.component';
import { ModalConfirmQuestionDeletion } from './management/quizzes/quiz/questions/questions-list/modal-confirm-question-deletion';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
  ],
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
    GuestEditComponent,
    ThemesListComponent,
    ThemesCreationComponent,
    QuizzesListComponent,
    QuizCreationComponent,
    QuestionsListComponent,
    ModalConfirmQuestionDeletion,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
