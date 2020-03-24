import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../models/question.model';
import {Answer} from '../../models/answer.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-questionToAnswer',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger("isAnswerCorrect",[
      state("correct", style({
        backgroundColor: "#00FF00"
      })),
      state("incorrect", style({
        opacity: 0
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

export class QuestionsComponent implements OnInit {

  @Output() goToNextQuestion = new EventEmitter();
  @Input() question: Question;
  forAnimation: String[];

  constructor() {
  }


  ngOnInit() {
    this.forAnimation = [];
    for(let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
  }

  verifyAnswer(answer: Answer) {
    console.log(answer.isCorrect);
    if(answer.isCorrect) {
      this.forAnimation[this.question.answers.indexOf(answer)] = "correct";
    }
    else {
      this.forAnimation[this.question.answers.indexOf(answer)] = "incorrect";
      //TODO est-ce qu'on disable le button
    }
  }

  goToNext(i: number) {
    if(i == -2 || this.forAnimation[i] === "correct") {
      console.log("AAAAAAAAAAAH");
      this.goToNextQuestion.emit();
    }
  }
}

