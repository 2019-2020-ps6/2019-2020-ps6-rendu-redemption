import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {faEdit, faPlusCircle, faTrashAlt, faUserEdit, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Question} from '../../../../../../models/question.model';
import {QuizService} from '../../../../../../services/quiz.service';
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

  constructor(private quizService: QuizService, private _modalService: NgbModal,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.questionToEdit = this.quizService.getQuestionToModify();
    if (this.questionToEdit === undefined || this.quizService.getCurrentQuiz() === undefined) {
      this.router.navigate(['../themes-list'], {relativeTo: this.route});
    }
  }

  createModifyQuestion() {
    const questionToCreate: Question = {
      id: -1,
      image: this.imageInput.nativeElement,
      label: this.labelInput.nativeElement.value,
      answers: []
    };
    if (this.questionToEdit == null) {
      this.quizService.createQuestion(questionToCreate);
    } else {
      questionToCreate.id = this.questionToEdit.id;
      this.quizService.updateQuestion(questionToCreate);
    }
  }

  createModifyAnswer(i: number) {
    this.quizService.setAnswerIndexToModify(i);
    this.router.navigate(['../answer-edit'], {relativeTo: this.route});
  }

  deleteAnswer(reponse: Answer) {
    const modal = this._modalService.open(ModalConfirmAnswerDeletion);
    modal.componentInstance.answer = reponse;
    modal.result.then((result) => {
      if (`${result}` === 'Le click de la suppression') {
        this.quizService.deleteAnswer(this.questionToEdit, reponse);
      }
    });
  }
}
