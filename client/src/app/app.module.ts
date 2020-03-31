import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizzComponent } from './quizz/quizz.component';
import {QuizzesComponent} from './quizzes/quizzes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent,
    QuizzComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
