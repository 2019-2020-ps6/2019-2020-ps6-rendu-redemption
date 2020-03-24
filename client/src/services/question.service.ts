import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Question} from '../models/question.model';
import {QUESTION_MOCK} from '../mocks/questions.mock';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private question: Question = QUESTION_MOCK;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public questionBehaviorSubject: BehaviorSubject<Question> = new BehaviorSubject(this.question);

  constructor() {
  }

  getQuestion() : Question{
    //TODO récupérer une nouvelle question
    return this.question;
  }
}
