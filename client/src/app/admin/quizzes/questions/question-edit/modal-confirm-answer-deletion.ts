import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-confirm-deletion',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppression d'une réponse</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
        <strong>
          Êtes-vous certain(e) de vouloir supprimer la réponse
          <br>
          <span class="text-primary">
            {{answer.value}}
          </span>
          ?
        </strong>
      </p>
      <p>
        <span class="text-danger">Cette opération ne peut être défaite.</span>
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Le click de la suppression')">Confirmer</button>
    </div>
  `
})
export class ModalConfirmAnswerDeletion implements OnInit {
  @Input() public answer;

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
}
