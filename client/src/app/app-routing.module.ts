import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuizSelectionComponent} from './play/quiz-selection/quiz-selection.component';
import {PlayQuizComponent} from './play/play-quiz/play-quiz.component';
import {ThemesSelectionComponent} from './play/themes-selection/themes-selection.component';
import {MainComponent} from './main/main.component';
import {GuestSelectionComponent} from './play/guest-selection/guest-selection.component';
import {GuestListComponent} from './management/guests/guest-list/guest-list.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'guest-selection', component: GuestSelectionComponent},
  {path: 'themes-selection', component: ThemesSelectionComponent},
  {path: 'quiz-selection', component: QuizSelectionComponent},
  {path: 'play-quiz', component: PlayQuizComponent},
  {path: 'manage-guests', component: GuestListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
