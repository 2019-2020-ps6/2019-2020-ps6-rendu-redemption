// App.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main component.
import { MainComponent } from './main/main.component';

// // Play components.
// import { GuestSelectionComponent } from './play/guest-selection/guest-selection.component';
// import { ThemesSelectionComponent } from './play/themes-selection/themes-selection.component';
// import { QuizSelectionComponent } from './play/quiz-selection/quiz-selection.component';
// import { PlayQuizComponent } from './play/play-quiz/play-quiz.component';

// Guest components.
import { GuestListComponent } from './admin/guests/guest-list/guest-list.component';
import { GuestFormComponent } from './admin/guests/guest-form/guest-form.component';
import { GuestNewComponent } from './admin/guests/guest-new/guest-new.component';
import { GuestEditComponent } from './admin/guests/guest-edit/guest-edit.component';

// // Result components.
// import { ResultsListComponent } from './admin/results/results-list/results-list.component';
// import { QuestionResultsListComponent } from './admin/results/question-results-list/question-results-list.component';
//
// // Image components.
// import { ImageListComponent } from './admin/images/image-list/image-list.component';
// import { ImageEditComponent } from './admin/images/image-edit/image-edit.component';
// import { ImageAddComponent } from './admin/images/image-add/image-add.component';
//
// // Quiz components.
// import { ThemesListComponent } from './admin/quizzes/themes/themes-list/themes-list.component';
// import { ThemesCreationComponent } from './admin/quizzes/themes/themes-creation/themes-creation.component';
// import { QuizzesListComponent } from './admin/quizzes/quiz/quizzes-list/quizzes-list.component';
// import { QuizCreationComponent } from './admin/quizzes/quiz/quiz-creation/quiz-creation.component';
// import { QuestionsListComponent } from './admin/quizzes/quiz/questions/questions-list/questions-list.component';
// import { QuestionEditComponent } from './admin/quizzes/quiz/questions/question-edit/question-edit.component';
// import { AnswerEditComponent } from './admin/quizzes/quiz/questions/answers-edit/answer-edit.component';

const routes: Routes = [
  { path: '', component: MainComponent},

  // // Play routes.
  // { path: 'guests', component: GuestSelectionComponent},
  // { path: 'themes', component: ThemesSelectionComponent},
  // { path: 'quizzes', component: QuizSelectionComponent},
  // { path: 'play', component: PlayQuizComponent},

  // Guest routes.
  { path: 'admin/guests', component: GuestListComponent},
  { path: 'admin/guests/new', component: GuestNewComponent},
  { path: 'admin/guests/:guestId', component: GuestEditComponent},

  // // Result routes.
  // { path: 'admin/guests/results', component: GuestSelectionComponent},
  // { path: 'admin/guests/:guestId/results', component: ResultsListComponent},
  // { path: 'admin/guests/:guestId/results/:resultId', component: QuestionResultsListComponent},
  //
  // // Image routes.
  // { path: 'admin/images', component: ImageListComponent},
  // { path: 'admin/images/new', component: ImageAddComponent},
  // { path: 'admin/images/:imageId', component: ImageEditComponent},
  //
  // // Quiz routes.
  // { path: 'admin/themes', component: ThemesListComponent},
  // { path: 'admin/themes/new', component: ThemesCreationComponent},
  // { path: 'admin/themes/:themeId/quizzes', component: QuizzesListComponent},
  // { path: 'admin/themes/:themeId/quizzes/new', component: QuizCreationComponent},
  // { path: 'admin/quizzes/:quizId/questions', component: QuestionsListComponent},
  // { path: 'admin/quizzes/:quizId/questions/:questionId', component: QuestionEditComponent},
  // { path: 'admin/quizzes/:quizId/questions/:questionId/answers/:answerId', component: AnswerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
