import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizzComponent} from "./quizz/quizz.component";

const routes: Routes = [
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'quizz', component: QuizzComponent},
  {path: '', redirectTo: '/quizz', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
