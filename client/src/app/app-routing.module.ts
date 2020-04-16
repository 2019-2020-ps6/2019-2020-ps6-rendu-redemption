import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuizSelectionComponent} from './play/quiz-selection/quiz-selection.component';
import {PlayQuizComponent} from './play/play-quiz/play-quiz.component';
import {ThemesSelectionComponent} from './play/themes-selection/themes-selection.component';
import {MainComponent} from './main/main.component';
import {GuestSelectionComponent} from './play/guest-selection/guest-selection.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'guestSelection', component: GuestSelectionComponent},
  {path: 'themes-selection', component: ThemesSelectionComponent},
  {path: 'quiz-selection', component: QuizSelectionComponent},
  {path: 'play-quiz', component: PlayQuizComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
