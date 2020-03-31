import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizzComponent} from './quizz/quizz.component';


const routes: Routes = [
  {path: 'quizz', component: QuizzComponent},
  {path: '', redirectTo: '/quizz', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
