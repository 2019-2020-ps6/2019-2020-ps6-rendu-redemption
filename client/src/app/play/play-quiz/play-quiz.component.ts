import {Component, OnInit} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';
import {QuizService} from '../../../services/quizz.service';
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
  isAnswerVisible: boolean = false;
  isQuestionVisible: boolean = true;
  hasEnded: boolean = false;
  rightAnswer: String;
  ongoingQuestion: Question;
  numberOfCorrectAnswers: number = 0;

  constructor(public quizService: QuizService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ongoingQuestion = this.quizService.getQuestion();
  }

  goToNextQuestion(answerFT: answerFirstTry) {
    this.rightAnswer = answerFT.answer.value;
    if(answerFT.numberOfErrors == 0)
      this.numberOfCorrectAnswers++;
    this.isQuestionVisible = false;
    //triggers "makeAnswerAppear()"
  }

  async makeAnswerAppear() {
    if (!this.isQuestionVisible) {
      this.isAnswerVisible = true;
      let q = await this.quizService.getNextQuestion();
      if(q == null) {
        this.hasEnded = true;
      }
      else{
        this.ongoingQuestion = q;
        console.log('Le père a changé ongoingQuestion', this.ongoingQuestion);
        await this.delay(2000);
      }
      this.isAnswerVisible = false;
      //triggers makeQuestionAppear
    }
  }

  makeQuestionAppear() {
    if(!this.isAnswerVisible && !this.hasEnded)
      this.isQuestionVisible = true;
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

