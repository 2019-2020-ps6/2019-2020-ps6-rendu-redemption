import {Component, OnInit} from '@angular/core';
import {Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {questionResultPlusAnswer} from '../questions/questions.component';
import {Quiz} from '../../../models/quiz.model';
import {TransitionService} from '../../../services/transition.service';
import {Guest} from '../../../models/guest.model';
import {ResultService} from '../../../services/result.service';
import {Result} from '../../../models/result.model';

@Component({
  selector: 'app-quiz-to-answer',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
  styles: [`
    .size {
      font-size: 400%;
      font-weight: bold;
    }

    .contrast {
      background: black;
    }
  `],
  animations: [
    trigger('inAndOut', [
      state('true', style({
        opacity: '1'
      })),
      state('false', style({
        opacity: '0'
      })),
      transition(':leave', [
        animate('1s', style({opacity: 0}))
      ]),
      transition(':enter', [
        animate('1s', style({opacity: 1}))
      ]),
    ]),
  ]
})

export class PlayQuizComponent implements OnInit {
  // Needed to function
  questionIndex: number;
  actualQuiz: Quiz;
  ongoingQuestion: Question;
  guest: Guest;
  // For the animations and a good flow
  isAnswerVisible = false;
  isQuestionVisible = true;
  hasEnded = false;
  // Yes
  rightAnswer: string;
  profile: string;
  guestName: string;
  progressPercent: number;
  progressHeight: number;
  result: Result;

  constructor(private quizService: QuizService,
              private resultService: ResultService,
              private transitionService: TransitionService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let guest: Guest;
    guest = JSON.parse(sessionStorage.getItem('selectedGuest'));
    this.guest = guest;
    this.guestName = guest.firstName + ' ' + guest.lastName;
    this.profile = guest.accessibility;

    //Set quiz
    this.route.paramMap
      .subscribe((paramMap) => {
        // Get the quiz id from the route.
        const quizId = parseInt(paramMap.get('quizId'), 10);

        // Get the quiz.
        this.quizService
          .getQuiz(quizId)
          .subscribe((quiz) => {
            if (quiz) {
              this.actualQuiz = quiz;
            }
          });
      });

    if (this.guest === undefined || this.guest == null || this.actualQuiz === undefined) {
      this.router.navigate(['/']);
    } else {
      this.questionIndex = 0;
      this.progressPercent = 0;
      this.ongoingQuestion = this.actualQuiz.questions[this.questionIndex];
      this.resultService
        .createResult(this.guest.id, this.actualQuiz.id, false)
        .subscribe((result: Result) => {
          this.result = result;
          this.delay(1800000).then(() => {
              this.resultService.updateResult(this.result.id, this.guest.id, this.actualQuiz.id, true);
            }
          );
        });
    }
  }

  setSize() {
    let style = {
      size: this.profile === 'tbd1' || this.profile === 'tbd2',
    };
    if (this.profile === 'tbd1' || this.profile === 'tbd2') {
      this.progressHeight = 40;
    }
    return style;
  }

  setContrast() {
    let style = {
      contrast: this.profile === 'tbd2',
    };
    return style;
  }

  goToNextQuestion(qRPA: questionResultPlusAnswer) {
    this.rightAnswer = qRPA.answer.value;
    this.resultService.createQuestionResultAndAnswers(this.result.id, qRPA.questionResult.questionId, qRPA.questionResult.skipped, qRPA.questionResult.answers);
    this.isQuestionVisible = false;
    // triggers "makeAnswerAppear()"
  }

  async makeAnswerAppear() {
    if (!this.isQuestionVisible) {
      this.questionIndex++;
      this.isAnswerVisible = true;
      this.progressPercent = Math.round((this.questionIndex / this.actualQuiz.questions.length) * 100);
      if (this.questionIndex === this.actualQuiz.questions.length) {
        this.hasEnded = true;
      } else {
        this.ongoingQuestion = this.actualQuiz.questions[this.questionIndex];
        await this.delay(2000);
      }
      this.isAnswerVisible = false;
      // triggers makeQuestionAppear
    }
  }

  makeQuestionAppear() {
    if (!this.isAnswerVisible && !this.hasEnded) {
      this.isQuestionVisible = true;
    }
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  backToTheme() {
    this.router.navigate(['/themes-selection']);
  }
}

