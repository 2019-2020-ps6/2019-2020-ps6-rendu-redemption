import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../models/question.model';
import {Answer} from '../../models/answer.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-questionToAnswer',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('isAnswerCorrect', [
      state('correct', style({
        backgroundColor: '#00FF00'
      })),
      state('incorrect', style({
        opacity: 0,
        visibility: 'hidden'
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

  @Output() goToNextQuestion: EventEmitter<Answer> = new EventEmitter<Answer>();
  @Input() question: Question;
  forAnimation: String[];
  sub: Subscription;

  constructor() {
  }


  ngOnInit() {
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }

    const source = interval(10000);
    this.sub = source.subscribe(val => this.oui());
  }

  oui(): void {
    console.log(this.question);
  }

  verifyAnswer(answer: Answer) {
    if (answer.isCorrect) {
      this.forAnimation[this.question.answers.indexOf(answer)] = 'correct';
    } else {
      this.forAnimation[this.question.answers.indexOf(answer)] = 'incorrect';
      //TODO est-ce qu'on disable le button
    }
  }

  goToNext(i: number, event: AnimationEvent) {
    if (i == -2 || this.forAnimation[i] === 'correct') {
      this.goToNextQuestion.emit(this.question.answers[i]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On a changé l\'input');
  }

}

