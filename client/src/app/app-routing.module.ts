import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizzComponent} from "./quizz/quizz.component";
import {ThemesComponent} from "./themes/themes.component";
import { MainComponent } from './main/main.component';
import {GuestSelectionComponent} from './guest-selection/guest-selection.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'guestSelection', component: GuestSelectionComponent},
  {path: 'themes', component: ThemesComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'quizz', component: QuizzComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
