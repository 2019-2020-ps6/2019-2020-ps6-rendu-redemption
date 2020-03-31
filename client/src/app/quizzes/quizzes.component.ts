import {Component, OnInit} from "@angular/core";
import {Quizz} from "../../models/quizz.model";
import {QuestionService} from "../../services/question.service";
import {QuizzService} from "../../services/quizz.service";
@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})

export class QuizzesComponent implements OnInit {

  quiz: Quizz;

  constructor(private quizService: QuizzService) {
  }

  ngOnInit() {
    this.quiz = this.quizService.getQuiz();
  }

}

