import {Injectable} from '@angular/core';
import {Quiz} from '../models/quiz.model';
import {QUIZZ_MOCK} from '../mocks/quizzes.mock';
import {Question} from '../models/question.model';
import {Answer} from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionToModify: Question = undefined;
  private answerIndexToModify: number = undefined;

  constructor() {
  }

  setQuestionToModify(question: Question) {
    this.questionToModify = question;
  }

  getQuestionToModify(): Question {
    return this.questionToModify;
  }

  createQuestion(questionToCreate: Question) {
    console.log("On veut créer la question dans le service question", questionToCreate);
  }

  updateQuestion(questionToCreate: Question) {
    console.log("On veut update la question dans le service question", questionToCreate);
  }

  setAnswerIndexToModify(i: number) {
    this.answerIndexToModify = i;
  }

  getAnswerToModify(): Answer {
    return this.questionToModify.answers[this.answerIndexToModify];
  }
}
