import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuizService} from '../../../../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer} from '../../../../../../models/answer.model';

@Component({
  selector: 'app-answerEdit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.scss'],
})

export class AnswerEditComponent implements OnInit {
  answerToEdit: Answer;
  isCorrect: boolean;
  @ViewChild('value') valueInput: ElementRef;
  @ViewChild('image') imageInput: ElementRef;
  @ViewChild('correct') correctInput: ElementRef;

  constructor(private quizService: QuizService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.answerToEdit = this.quizService.getAnswerToModify();
    if (this.quizService.getCurrentQuiz() === undefined || this.quizService.getQuestionToModify() === undefined ||
      this.answerToEdit === undefined) {
      this.router.navigate(['../themes-list'], {relativeTo: this.route});
    }
    if (this.answerToEdit == null) {
      this.isCorrect = false;
    } else {
      console.log(this.answerToEdit.isCorrect);
      this.isCorrect = this.answerToEdit.isCorrect;
    }
  }

  createModifyAnswer() {
    const answerToCreate: Answer = {
      id: -1,
      value: this.valueInput.nativeElement.value,
      image: this.imageInput.nativeElement,
      isCorrect: this.isCorrect
    };
    if (this.answerToEdit == null) {
      this.quizService.createAnswer(answerToCreate);
    } else {
      answerToCreate.id = this.answerToEdit.id;
      this.quizService.updateAnswer(answerToCreate);
    }
  }

}
