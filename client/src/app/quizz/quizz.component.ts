import {Component, OnInit} from '@angular/core';
import {Question} from '../../models/question.model';
import {Answer} from '../../models/answer.model';
import {QuestionService} from '../../services/question.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-quizzToAnswer',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
  animations: [
    trigger("makeQuestionDisappear",[
      state("true", style({
        opacity: "1"
      })),
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
      transition('false => true', [
        animate('1s 1s')
      ]),
      transition('true => false', [
        animate('1s 1s')
      ]),
    ])
  ]
})

export class QuizzComponent implements OnInit {

  isQuestionVisible : boolean = true;
  rightAnswer : String;
  constructor(public questionsService : QuestionService) {
  }


  ngOnInit() {
  }

  getQuestion() : Question {
    return this.questionsService.getQuestion();
  }

  getNextQuestion(answer : Answer) {
    //TODO mettre l'écran de chargement
    this.rightAnswer = answer.value;
    this.isQuestionVisible = false;
    let q = this.questionsService.getQuestion();
    //TODO revenir à la question
  }
}

