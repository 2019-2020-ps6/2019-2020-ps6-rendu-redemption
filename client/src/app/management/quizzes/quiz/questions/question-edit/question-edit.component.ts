import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {faEdit, faPlusCircle, faTrashAlt, faUserEdit, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Question} from '../../../../../../models/question.model';
import {QuestionService} from '../../../../../../services/question.service';
import {QuizService} from '../../../../../../services/quizz.service';
import {Answer} from '../../../../../../models/answer.model';
import {ModalConfirmAnswerDeletion} from './modal-confirm-answer-deletion';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-questionEdit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss'],
})

export class QuestionEditComponent implements OnInit {
  questionToEdit: Question;
  @ViewChild('label') labelInput: ElementRef;
  @ViewChild('image') imageInput: ElementRef;
  plusIcon = faPlusCircle;
  penIcon = faEdit;
  trashIcon = faTrashAlt;

  constructor(private quizService: QuizService, private questionService: QuestionService, private _modalService: NgbModal,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.questionToEdit = this.questionService.getQuestionToModify();
    if (this.questionToEdit === undefined || this.quizService.getCurrentQuiz() === undefined) {
      this.router.navigate(['../themes-list'], {relativeTo: this.route});
    }
  }

  createModifyQuestion() {
    let questionToCreate: Question = {
      id: -1,
      quizId: this.quizService.getCurrentQuiz().id,
      imageId: this.imageInput.nativeElement.value,
      label: this.labelInput.nativeElement.value,
      answers: []
    };
    if (this.questionToEdit == null) {
      this.questionService.createQuestion(questionToCreate);
    } else {
      questionToCreate.id = this.questionToEdit.id;
      this.questionService.updateQuestion(questionToCreate);
    }
  }

  createModifyAnswer(i: number) {
    this.questionService.setAnswerIndexToModify(i);
    this.router.navigate(['../answer-edit'], {relativeTo: this.route});
  }

  deleteAnswer(reponse: Answer) {
    let modal = this._modalService.open(ModalConfirmAnswerDeletion);
    modal.componentInstance.answer = reponse;
    modal.result.then((result) => {
      if (`${result}` === 'Le click de la suppression') {
        this.quizService.deleteAnswer(this.quizService.getCurrentQuiz(), this.questionToEdit, reponse);
      }
    });
  }
}
