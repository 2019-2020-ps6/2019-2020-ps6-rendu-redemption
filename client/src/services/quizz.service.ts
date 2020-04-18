import {Injectable} from '@angular/core';
import {Quiz} from '../models/quiz.model';
import {QUIZZ_MOCK} from '../mocks/quizzes.mock';
import {Question} from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuiz: Quiz = undefined;
  private questionToModify: Question = undefined;
  private compt: number = 0;

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = QUIZZ_MOCK;

  constructor() {
  }

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  getQuestion(): Question {
    return this.quizzes[0].questions[this.compt];
  }

  getNextQuestion(): Question {
    return this.quizzes[0].questions[++this.compt];
  }

  createTheme(quizToCreate: Quiz) {
    console.log('On veut créer un quiz', quizToCreate);
  }

  setCurrentQuiz(quiz: Quiz) {
    this.currentQuiz = quiz;
  }

  getCurrentQuiz(): Quiz {
    return this.currentQuiz;
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    console.log("On supprime la question", question, "du quiz", quiz);
  }

  setQuestionToModify(question: Question) {
    this.questionToModify = question;
  }

  getQuestionToModify(): Question {
    return this.questionToModify;
  }
}
