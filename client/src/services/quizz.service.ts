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
  private quizzes: Quizz[] = QUIZZ_MOCK;

  constructor() {
  }

  getQuizzes(): Quizz[] {
    return this.quizzes;
  }

  getQuestion(): Question {
    return this.quizzes[0].questions[this.compt];
  }

  getNextQuestion(): Question {
    return this.quizzes[0].questions[++this.compt];
  }
}
