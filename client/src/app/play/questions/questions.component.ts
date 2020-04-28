import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Guest} from '../../../models/guest.model';
import {QuestionResult} from '../../../models/question-result.model';

@Component({
  selector: 'app-question-to-answer',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  styles: [`
    .contrast { font-size: 200%; font-weight: bold}
  `],
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

  @Output() goToNextQuestion: EventEmitter<questionResultPlusAnswer> = new EventEmitter<questionResultPlusAnswer>();
  @Input() question: Question;
  forAnimation: string[];
  answersClicked: number[];
  skipped: boolean;
  enableSkip: boolean;
  profile: string;

  constructor() {
  }


  async ngOnInit() {
    let guest: Guest;
    guest = JSON.parse(sessionStorage.getItem('selectedGuest'));
    this.profile = guest.accessibility;

    this.enableSkip = false;
    this.answersClicked = [];
    this.skipped = false;
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
    await this.delay(10000);
    this.enableSkip = true;
  }

  setStyle() {
    let style = {
      contrast: this.profile === 'tbd1',
    };
    return style;
  }

  verifyAnswer(answer: Answer) {
    if (answer.isCorrect) {
      this.forAnimation[this.question.answers.indexOf(answer)] = 'correct';
    } else {
      this.forAnimation[this.question.answers.indexOf(answer)] = 'incorrect';
      this.answersClicked.push(answer.id);
    }
  }

  goToNext(i: number, event: AnimationEvent) {
    if (i === -2 || this.forAnimation[i] === 'correct') {
      const res: questionResultPlusAnswer = {
          answer: this.question.answers[i],
          questionResult: {
            questionId: this.question.id,
            skipped: this.skipped,
            answers: this.answersClicked
          }
        }
      ;
      this.goToNextQuestion.emit(res);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
  }

  skip(): void {
    this.skipped = true;
    let correctAnswer: Answer;
    for (const answer of this.question.answers) {
      if (answer.isCorrect) {
        correctAnswer = answer;
      }
    }
    const res: questionResultPlusAnswer = {
        answer: correctAnswer,
        questionResult: {
          questionId: this.question.id,
          skipped: this.skipped,
          answers: this.answersClicked
        }
      }
    ;
    this.goToNextQuestion.emit(res);
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

export interface questionResultPlusAnswer {
  answer: Answer;
  questionResult: QuestionResult;
}

