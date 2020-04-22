// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';

// Communication.
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Image} from "../models/image.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * The server URL.
   */
  private serverURL: string;

  /**
   * The server options.
   * These options are used for JSON requests.
   */
  private serverOptions: object;

  /**
   * The list of quizzes.
   */
  private quizzes: Quiz[];

  /**
   * The observable list of quizzes.
   */
  private quizzes$: BehaviorSubject<Quiz[]>;

  // TODO: Use route params or user session.
  private compt = 0;
  private currentQuiz: Quiz = undefined;
  private questionToModify: Question = undefined;
  private answerIndexToModify: number = undefined;

  /**
   * Constructs the image service.
   * @param http The HTTP client.
   */
  constructor(private http: HttpClient) {
    // Initialize the service.
    this.serverURL = environment.serverURL;
    this.serverOptions = environment.serverOptions;

    // Initialize the images.
    this.quizzes = [];
    this.quizzes$ = new BehaviorSubject<Quiz[]>(this.quizzes);
    this.findAllQuizzes();
  }

  /*
   * PLAY
   */

  /**
   * Returns the observable list of quizzes.
   */
  getQuizzes(): Observable<Quiz[]> {
    return this.quizzes$.asObservable();
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

  /**
   * Finds all the quizzes.
   */
  findAllQuizzes() {
    this.http
      .get<Quiz[]>(`${this.serverURL}/quizzes`)
      .subscribe((quizzes: Quiz[]) => {
        this.quizzes = quizzes;
        this.quizzes$.next(this.quizzes);
      });
  }

  /**
   * Finds a quiz by id.
   * @param quizId The id of the quiz.
   */
  findQuiz(quizId: number): Quiz {
    return this.quizzes.find((quiz: Quiz) => quiz.id === quizId);
  }

  /**
   * Finds a quiz by theme id.
   * @param themeId The theme id to be found.
   */
  findQuizByTheme(themeId: number): Quiz {
    return this.quizzes.find((quiz: Quiz) => quiz.theme.id === themeId);
  }

  /**
   * Creates a quiz.
   * @param quiz The quiz to be created.
   */
  createQuiz(quiz: Quiz) {
    this.http
      .post<Quiz>(`${this.serverURL}/quizzes`, quiz, this.serverOptions)
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  /**
   * Updates a quiz.
   * @param quiz The quiz to be updated.
   */
  updateQuiz(quiz: Quiz) {
    this.http
      .put<Quiz>(`${this.serverURL}/quizzes/${quiz.id}`, quiz, this.serverOptions)
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  /**
   * Deletes a quiz.
   * @param quiz The quiz to be deleted.
   */
  deleteQuiz(quiz: Quiz) {
    this.http
      .delete<Quiz>(`${this.serverURL}/quizzes/${quiz.id}`)
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  /**
   * Creates a question.
   * @param question The question to be created.
   */
  createQuestion(question: Question) {
    this.http
      .post<Question>(
        `${this.serverURL}/quizzes/${this.currentQuiz.id}/questions`,
        question,
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  updateQuestion(question: Question) {
    this.http
      .put<Question>(
        `${this.serverURL}/quizzes/${this.currentQuiz.id}/questions/${question.id}`,
        question,
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  deleteQuestion(question: Question) {
    this.http
      .delete<Question>(
        `${this.serverURL}/quizzes/${this.currentQuiz.id}/questions/${question.id}`
      )
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  createAnswer(answer: Answer) {
    this.http
      .post<Answer>(
        `${this.serverURL}/quizzes/${this.currentQuiz.id}/questions/${this.questionToModify.id}/answers`,
        answer,
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  updateAnswer(answer: Answer) {
    this.http
      .put<Answer>(
        `${this.serverURL}/quizzes/${this.currentQuiz.id}/questions/${this.questionToModify.id}/answers/${answer.id}`,
        answer,
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }

  deleteAnswer(questionToEdit: Question, answer: Answer) {
    this.http
      .delete<Answer>(
        `${this.serverURL}/quizzes/${this.currentQuiz.id}/questions/${questionToEdit.id}/answers/${answer.id}`,
      )
      .subscribe(() => {
        this.findAllQuizzes();
      });
  }
}
