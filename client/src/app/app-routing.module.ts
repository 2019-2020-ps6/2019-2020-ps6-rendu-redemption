import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuizSelectionComponent} from './play/quiz-selection/quiz-selection.component';
import {PlayQuizComponent} from './play/play-quiz/play-quiz.component';
import {ThemesSelectionComponent} from './play/themes-selection/themes-selection.component';
import {MainComponent} from './main/main.component';
import {GuestSelectionComponent} from './play/guest-selection/guest-selection.component';
import {GuestListComponent} from './management/guests/guest-list/guest-list.component';
import {GuestEditComponent} from './management/guests/guest-edit/guest-edit.component';
import {ThemesListComponent} from './management/quizzes/themes/themes-list/themes-list.component';
import {ThemesCreationComponent} from './management/quizzes/themes/themes-creation/themes-creation.component';
import {QuizzesListComponent} from './management/quizzes/quiz/quizzes-list/quizzes-list.component';
import {QuizCreationComponent} from './management/quizzes/quiz/quiz-creation/quiz-creation.component';
import {QuestionsListComponent} from './management/quizzes/quiz/questions/questions-list/questions-list.component';
import {QuestionEditComponent} from './management/quizzes/quiz/questions/question-edit/question-edit.component';
import {AnswerEditComponent} from './management/quizzes/quiz/questions/answers-edit/answer-edit.component';
import {ImageListComponent} from './management/images/image-list/image-list.component';
import {ImageEditComponent} from './management/images/image-edit/image-edit.component';
import {ImageAddComponent} from './management/images/image-add/image-add.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'guest-selection', component: GuestSelectionComponent},
  {path: 'themes-selection', component: ThemesSelectionComponent},
  {path: 'quiz-selection', component: QuizSelectionComponent},
  {path: 'play-quiz', component: PlayQuizComponent},
  {path: 'manage-guests/guests-list', component: GuestListComponent},
  {path: 'manage-guests/modify-guest', component: GuestEditComponent},
  {path: 'manage-quizzes/themes-list', component: ThemesListComponent},
  {path: 'manage-quizzes/create-theme', component: ThemesCreationComponent},
  {path: 'manage-quizzes/quiz-list', component: QuizzesListComponent},
  {path: 'manage-quizzes/create-quiz', component: QuizCreationComponent},
  {path: 'manage-quizzes/questions-list', component: QuestionsListComponent},
  {path: 'manage-quizzes/question-edit', component: QuestionEditComponent},
  {path: 'manage-quizzes/answer-edit', component: AnswerEditComponent},
  {path: 'manage-quizzes/questions-list', component: QuestionsListComponent},
  {path: 'manage-images/images-list', component: ImageListComponent},
  {path: 'manage-images/modify-image', component: ImageEditComponent},
  {path: 'manage-images/add-image', component: ImageAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
