import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';
import {QuizzesComponent} from './quizzes/quizzes.component';

const routes: Routes = [
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: '', redirectTo: '/questions', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
