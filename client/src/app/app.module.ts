import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './play/questions/questions.component';
import { PlayQuizComponent } from './play/play-quiz/play-quiz.component';
import {QuizSelectionComponent} from './play/quiz-selection/quiz-selection.component';
import {ThemesSelectionComponent} from './play/themes-selection/themes-selection.component';
import {MainComponent} from './main/main.component';
import {GuestSelectionComponent} from './play/guest-selection/guest-selection.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {GuestListComponent} from './management/guests/guest-list/guest-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmDeletion} from './management/guests/guest-list/modal-confirm-deletion';
import {GuestEditComponent} from './management/guests/guest-edit/guest-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemesListComponent} from './management/quizzes/themes/themes-list/themes-list.component';
import {ThemesCreationComponent} from './management/quizzes/themes/themes-creation/themes-creation.component';
import {QuizzesListComponent} from './management/quizzes/quiz/quizzes-list/quizzes-list.component';
import {QuizCreationComponent} from './management/quizzes/quiz/quiz-creation/quiz-creation.component';
import {QuestionsListComponent} from './management/quizzes/quiz/questions/questions-list/questions-list.component';
import {ModalConfirmQuestionDeletion} from './management/quizzes/quiz/questions/questions-list/modal-confirm-question-deletion';
import {QuestionEditComponent} from './management/quizzes/quiz/questions/question-edit/question-edit.component';
import {ModalConfirmAnswerDeletion} from './management/quizzes/quiz/questions/question-edit/modal-confirm-answer-deletion';
import {AnswerEditComponent} from './management/quizzes/quiz/questions/answers-edit/answer-edit.component';
import {ImageListComponent} from './management/images/image-list/image-list.component';
import {ImageEditComponent} from './management/images/image-edit/image-edit.component';
import {ImageAddComponent} from './management/images/image-add/image-add.component';

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
    GuestEditComponent,
    ThemesListComponent,
    ThemesCreationComponent,
    QuizzesListComponent,
    QuizCreationComponent,
    QuestionsListComponent,
    ModalConfirmQuestionDeletion,
    QuestionEditComponent,
    ModalConfirmAnswerDeletion,
    AnswerEditComponent,
    ImageListComponent,
    ImageEditComponent,
    ImageAddComponent
  ],
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
