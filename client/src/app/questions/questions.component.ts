import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../models/question.model';
import {Answer} from '../../models/answer.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-questions',
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

  question: Question;
  forAnimation: String[];

  constructor(private questionService: QuestionService) {
  }


  ngOnInit() {
    this.question = this.questionService.getQuestion();
    this.forAnimation = [];
    for(let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
  }

  verifyAnswer(answer: Answer) {
    console.log(answer.isCorrect);
    if(answer.isCorrect) {
      this.forAnimation[this.question.answers.indexOf(answer)] = "correct";
      // let dialogRef = dialog.open(UserProfileComponent, {
      //   height: '400px',
      //   width: '600px',
      // });
      //TODO Open good answer dialog + go to next question
    }
    else {
      this.forAnimation[this.question.answers.indexOf(answer)] = "incorrect";
      //TODO est-ce qu'on disable le button
    }
  }
}

