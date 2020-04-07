import {Component, OnInit} from '@angular/core';
import {Question} from '../../models/question.model';
import {Answer} from '../../models/answer.model';
import {QuizzService} from '../../services/quizz.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-quizzToAnswer',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
  animations: [
    trigger("makeQuestionDisappear",[
      transition(':leave', [
        animate('1s',style({opacity: 0}))
      ]),
    ]),
    trigger("makeAnswerAppear",[
      state("true", style({
        opacity: "1"
      })),
      state("false", style({
        opacity: "0"
      })),
      transition(':enter', [
        animate('1s')
      ]),
      transition(':leave', [
        animate('1s')
      ]),
    ])
  ]
})

export class QuizzComponent implements OnInit {
  isAnswerVisible: boolean = false;
  isQuestionVisible : boolean = true;
  rightAnswer : String;
  ongoingQuestion: Question;
  constructor(public quizService : QuizzService) {
  }


  ngOnInit() {
    this.ongoingQuestion = this.quizService.getQuestion();
  }

  getNextQuestion(answer : Answer) {
    this.rightAnswer = answer.value;
    this.isQuestionVisible = false;
    let q = this.quizService.getNextQuestion();

  }

  makeAnswerAppear(){
    this.isAnswerVisible = true;
  }
}

