import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Quizz} from '../models/quizz.model';
import {QUIZZ_MOCK} from '../mocks/quizzes.mock';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
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
}
