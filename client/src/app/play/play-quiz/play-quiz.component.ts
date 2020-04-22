import {Component, OnInit} from '@angular/core';
import {Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {answerFirstTry} from '../questions/questions.component';

@Component({
  selector: 'app-quizToAnswer',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
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
  isAnswerVisible = false;
  isQuestionVisible = true;
  hasEnded = false;
  rightAnswer: string;
  ongoingQuestion: Question;
  guestName: string;

  constructor(public quizService: QuizService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.guestName = sessionStorage.getItem('selectedGuest');
    console.log('ahhh', this.guestName);
    if (this.guestName === undefined || this.guestName == null) {
      this.router.navigate(['/']);
    }
    this.ongoingQuestion = this.quizService.getQuestion();
  }

  goToNextQuestion(answerFT: answerFirstTry) {
    this.rightAnswer = answerFT.answer.value;
    this.isQuestionVisible = false;
    // triggers "makeAnswerAppear()"
  }

  async makeAnswerAppear() {
    if (!this.isQuestionVisible) {
      this.isAnswerVisible = true;
      const q = await this.quizService.getNextQuestion();
      if (q == null) {
        this.hasEnded = true;
      } else {
        this.ongoingQuestion = q;
        console.log('Le père a changé ongoingQuestion', this.ongoingQuestion);
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

