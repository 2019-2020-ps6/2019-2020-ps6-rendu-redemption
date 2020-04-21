import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-questionToAnswer',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('isAnswerCorrect', [
      state('null', style({
        opacity: 1,
        visibility: 'visible',
      })),
      state('correct', style({
        backgroundColor: '#00FF00'
      })),
      state('incorrect', style({
        opacity: 0,
        visibility: 'hidden',
      })),
      transition('* => correct', [
        animate('0.25s')
      ]),
      transition('* => incorrect', [
        animate('0.5s')
      ]),
    ])
  ]
})

export class QuestionsComponent implements OnInit, OnChanges {

  @Output() goToNextQuestion: EventEmitter<answerFirstTry> = new EventEmitter<answerFirstTry>();
  @Input() question: Question;
  forAnimation: String[];
  numberOfErrors: number;
  skiped: boolean;
  enableSkip: boolean;

  constructor() {
  }


  async ngOnInit() {
    this.enableSkip = false;
    this.numberOfErrors = 0;
    this.skiped = false;
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
    await this.delay(10000);
    this.enableSkip = true;
  }

  verifyAnswer(answer: Answer) {
    if (answer.isCorrect) {
      this.forAnimation[this.question.answers.indexOf(answer)] = 'correct';
    } else {
      this.forAnimation[this.question.answers.indexOf(answer)] = 'incorrect';
      this.numberOfErrors++;
    }
  }

  goToNext(i: number, event: AnimationEvent) {
    if (i == -2 || this.forAnimation[i] === 'correct') {
      let res : answerFirstTry = {
        answer: this.question.answers[i],
        numberOfErrors: this.numberOfErrors,
        skiped: this.skiped
      }
      this.goToNextQuestion.emit(res);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
export interface answerFirstTry {
  answer: Answer;
  numberOfErrors: number;
  skiped: boolean;
}

