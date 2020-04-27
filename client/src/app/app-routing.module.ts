// App.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main component.
import { MainComponent } from './main/main.component';

// Guest components.
import { GuestListComponent } from './admin/guests/guest-list/guest-list.component';
import { GuestFormComponent } from './admin/guests/guest-form/guest-form.component';
import { GuestNewComponent } from './admin/guests/guest-new/guest-new.component';
import { GuestEditComponent } from './admin/guests/guest-edit/guest-edit.component';

// // Result components.
// import { ResultsListComponent } from './admin/results/results-list/results-list.component';
// import { QuestionResultsListComponent } from './admin/results/question-results-list/question-results-list.component';

// Image components.
import { ImageListComponent } from './admin/images/image-list/image-list.component';
import { ImageEditComponent } from './admin/images/image-edit/image-edit.component';
import { ImageNewComponent } from './admin/images/image-new/image-new.component';

// Theme components.
import { ThemeListComponent } from './admin/themes/theme-list/theme-list.component';
import { ThemeEditComponent } from './admin/themes/theme-edit/theme-edit.component';
import { ThemeNewComponent } from './admin/themes/theme-new/theme-new.component';

// Quiz components.
import { QuizListComponent } from './admin/quizzes/quiz-list/quiz-list.component';
import { QuizEditComponent } from './admin/quizzes/quiz-edit/quiz-edit.component';
import { QuizNewComponent } from './admin/quizzes/quiz-new/quiz-new.component';

// Question components.
import { QuestionListComponent } from './admin/quizzes/questions/question-list/question-list.component';
import { QuestionEditComponent } from './admin/quizzes/questions/question-edit/question-edit.component';
import { QuestionNewComponent } from './admin/quizzes/questions/question-new/question-new.component';

// // Play components.
// import { GuestSelectionComponent } from './play/guest-selection/guest-selection.component';
// import { ThemesSelectionComponent } from './play/themes-selection/themes-selection.component';
// import { QuizSelectionComponent } from './play/quiz-selection/quiz-selection.component';
// import { PlayQuizComponent } from './play/play-quiz/play-quiz.component';

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

  // Image routes.
  { path: 'admin/images', component: ImageListComponent},
  { path: 'admin/images/new', component: ImageNewComponent},
  { path: 'admin/images/:imageId', component: ImageEditComponent},

  // Theme routes.
  { path: 'admin/themes', component: ThemeListComponent},
  { path: 'admin/themes/new', component: ThemeNewComponent},
  { path: 'admin/themes/:themeId', component: ThemeEditComponent},

  // Quiz routes.
  { path: 'admin/themes/:themeId/quizzes', component: QuizListComponent},
  { path: 'admin/themes/:themeId/quizzes/new', component: QuizNewComponent},
  { path: 'admin/themes/:themeId/quizzes/:quizId', component: QuizEditComponent},

  // Question routes.
  { path: 'admin/quizzes/:quizId/questions', component: QuestionListComponent},
  { path: 'admin/quizzes/:quizId/questions/new', component: QuestionNewComponent},
  { path: 'admin/quizzes/:quizId/questions/:questionId', component: QuestionEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
