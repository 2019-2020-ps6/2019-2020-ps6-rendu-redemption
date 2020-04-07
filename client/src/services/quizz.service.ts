import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Quizz} from '../models/quizz.model';
import {QUIZZ_MOCK} from '../mocks/quizzes.mock';
import {Question} from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private compt: number = 0;

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quiz: Quizz = QUIZZ_MOCK;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizBehaviorSubject: BehaviorSubject<Quizz> = new BehaviorSubject(this.quiz);

  constructor() {
  }

  getQuiz(): Quizz {
    return this.quiz;
  }

  getQuestion(): Question {
    return this.quiz.questions[this.compt];
  }

  getNextQuestion(): Question {
    return this.quiz.questions[++this.compt];
  }
}
