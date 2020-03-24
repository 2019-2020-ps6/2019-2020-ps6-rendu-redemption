import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../models/question.model';
import {Answer} from '../../models/answer.model';
import {QuestionService} from '../../services/question.service';
@Component({
  selector: 'app-quizzToAnswer',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})

export class QuizzComponent implements OnInit {

  constructor(public questionsService : QuestionService) {
  }


  ngOnInit() {
  }

  getQuestion() : Question {
    return this.questionsService.getQuestion();
  }

  getNextQuestion() {
    //TODO mettre l'écran de chargement
    let q = this.questionsService.getQuestion();
    //TODO revenir à la question
  }
}

