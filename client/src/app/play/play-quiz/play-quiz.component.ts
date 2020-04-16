import {Component, OnInit} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';
import {QuizzService} from '../../../services/quizz.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  rightAnswer: String;
  ongoingQuestion: Question;

  constructor(public quizService: QuizzService) {
  }

  ngOnInit() {
    this.ongoingQuestion = this.quizService.getQuestion();
  }

  goToNextQuestion(answer: Answer) {
    this.rightAnswer = answer.value;
    this.isQuestionVisible = false;
    //triggers "makeAnswerAppear()"
  }

  async makeAnswerAppear() {
    if (!this.isQuestionVisible) {
      this.isAnswerVisible = true;
      this.ongoingQuestion = await this.quizService.getNextQuestion();
      console.log('Le père a changé ongoingQuestion', this.ongoingQuestion);
      await this.delay(2000);
      this.isAnswerVisible = false;
      //triggers makeQuestionAppear
    }
  }

  makeQuestionAppear() {
    if(!this.isAnswerVisible)
      this.isQuestionVisible = true;
  }
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

