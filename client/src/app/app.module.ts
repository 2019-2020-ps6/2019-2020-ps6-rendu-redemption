// App.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

// Styles.
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// App components.
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent} from './main/main.component';

// // Play components.
// import { GuestSelectionComponent } from './play/guest-selection/guest-selection.component';
// import { ThemesSelectionComponent} from './play/themes-selection/themes-selection.component';
// import { QuizSelectionComponent} from './play/quiz-selection/quiz-selection.component';
// import { QuestionsComponent } from './play/questions/questions.component';
// import { PlayQuizComponent } from './play/play-quiz/play-quiz.component';

// Guest components.
import { GuestListComponent } from './admin/guests/guest-list/guest-list.component';
import { GuestFormComponent } from './admin/guests/guest-form/guest-form.component';
import { GuestModalComponent } from './admin/guests/guest-modal/guest-modal.component';
import { GuestEditComponent } from './admin/guests/guest-edit/guest-edit.component';
import { GuestNewComponent } from './admin/guests/guest-new/guest-new.component';

// // Result components.
// import { ResultsListComponent } from './admin/results/results-list/results-list.component';
// import { QuestionResultsListComponent } from './admin/results/question-results-list/question-results-list.component';

// Image components.
import { ImageListComponent } from './admin/images/image-list/image-list.component';
import { ImageComponent } from './admin/images/image/image.component';
import { ImageFormComponent } from './admin/images/image-form/image-form.component';
import { ImageEditComponent } from './admin/images/image-edit/image-edit.component';
import { ImageNewComponent } from './admin/images/image-new/image-new.component';
import { ImageModalComponent } from './admin/images/image-modal/image-modal.component';

//
// // Quiz components.
// import { ThemesListComponent } from './admin/quizzes/themes/themes-list/themes-list.component';
// import { ThemesCreationComponent } from './admin/quizzes/themes/themes-creation/themes-creation.component';
// import { QuizzesListComponent } from './admin/quizzes/quiz/quizzes-list/quizzes-list.component';
// import { QuizCreationComponent } from './admin/quizzes/quiz/quiz-creation/quiz-creation.component';
// import { QuestionsListComponent } from './admin/quizzes/quiz/questions/questions-list/questions-list.component';
// import { ModalConfirmQuestionDeletion } from './admin/quizzes/quiz/questions/questions-list/modal-confirm-question-deletion';
// import { QuestionEditComponent } from './admin/quizzes/quiz/questions/question-edit/question-edit.component';
// import { ModalConfirmAnswerDeletion } from './admin/quizzes/quiz/questions/question-edit/modal-confirm-answer-deletion';
// import { AnswerEditComponent } from './admin/quizzes/quiz/questions/answers-edit/answer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,

    GuestListComponent,
    GuestFormComponent,
    GuestModalComponent,
    GuestEditComponent,
    GuestNewComponent,

    ImageListComponent,
    ImageComponent,
    ImageFormComponent,
    ImageEditComponent,
    ImageNewComponent,
    ImageModalComponent,

    // QuestionsComponent,
    // PlayQuizComponent,
    // QuizSelectionComponent,
    // ThemesSelectionComponent,
    // GuestSelectionComponent,
    //
    // ThemesListComponent,
    // ThemesCreationComponent,
    // QuizzesListComponent,
    // QuizCreationComponent,
    // QuestionsListComponent,
    // ModalConfirmQuestionDeletion,
    // QuestionEditComponent,
    // ModalConfirmAnswerDeletion,
    // AnswerEditComponent,
    // ResultsListComponent,
    // QuestionResultsListComponent,
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
