import {Injectable} from '@angular/core';
import {Quiz} from '../models/quiz.model';
import {Question} from '../models/question.model';
import {Answer} from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private compt = 0;
  private currentQuiz: Quiz = undefined;
  private questionToModify: Question = undefined;
  private answerIndexToModify: number = undefined;

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[];

  constructor() {
  }

  /*
   * PLAY
   */
  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  getQuestion(): Question {
    return this.quizzes[0].questions[this.compt];
  }

  getNextQuestion(): Question {
    const q = this.quizzes[0].questions[++this.compt];
    if (q === undefined) {
      return null;
    }
    return q;
  }

  /*
   * PASS ELEMENTS BETWEEN PAGES
   */

  setCurrentQuiz(quiz: Quiz) {
    this.currentQuiz = quiz;
  }

  getCurrentQuiz(): Quiz {
    return this.currentQuiz;
  }

  setQuestionToModify(question: Question) {
    this.questionToModify = question;
  }

  getQuestionToModify(): Question {
    return this.questionToModify;
  }

  setAnswerIndexToModify(i: number) {
    this.answerIndexToModify = i;
  }

  getAnswerToModify(): Answer {
    if (this.answerIndexToModify === undefined) {
      return undefined;
    }
    const answer = this.questionToModify.answers[this.answerIndexToModify];
    if (answer === undefined) {
      return null;
    }
    return answer;
  }

  /*
   * DATA TO BACK
   */

  createQuiz(quizToCreate: Quiz) {
    console.log('On veut créer le quiz', quizToCreate);
  }

  createQuestion(questionToCreate: Question) {
    console.log('On veut créer la question', questionToCreate, 'dans le quiz', this.currentQuiz);
  }

  updateQuestion(questionToCreate: Question) {
    console.log('On veut update la question', questionToCreate, 'du quiz', this.currentQuiz);
  }

  deleteQuestion(question: Question) {
    console.log('On veut supprimer la question', question, 'du quiz', this.currentQuiz);
  }

  createAnswer(answerToCreate: Answer) {
    console.log('On veut créer la réponse', answerToCreate, 'dans la question', this.questionToModify, 'du quiz', this.currentQuiz);
    // TODO
  }

  updateAnswer(answerToCreate: Answer) {
    console.log('On veut modifier la réponse', answerToCreate, 'dans la question', this.questionToModify, 'du quiz', this.currentQuiz);
    // TODO
  }

  deleteAnswer(questionToEdit: Question, reponse: Answer) {
    console.log('On veut supprimer la réponse', reponse, ' de la question ', questionToEdit, 'du quiz', this.currentQuiz);
    // TODO
  }
}
