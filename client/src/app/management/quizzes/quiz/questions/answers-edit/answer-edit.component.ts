import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuizService} from '../../../../../../services/quizz.service';
import {QuestionService} from '../../../../../../services/question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer} from '../../../../../../models/answer.model';

@Component({
  selector: 'app-answerEdit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.scss'],
})

export class AnswerEditComponent implements OnInit {
  answerToEdit : Answer;
  @ViewChild('value') valueInput: ElementRef;
  @ViewChild('image') imageInput: ElementRef;
  @ViewChild('correct') correctInput: ElementRef;
  constructor(private quizService: QuizService, private questionService: QuestionService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  createModifyAnswer() {
    let answerToCreate: Answer = {
      value: this.valueInput.nativeElement.value,
      imageId: this.imageInput.nativeElement.value,
      isCorrect: this.correctInput.nativeElement.value
    }
    if(this.answerToEdit == null) {
      this.questionService
    }
  }
}
