import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-confirm-deletion',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Suppression d'un profil</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Êtes-vous certain(e) de vouloir supprimer le profil de <span
        class="text-primary">{{guest.firstName}} {{guest.lastName}}</span>?</strong></p>
      <p>Toutes les informations associées à ce profil vont être supprimées.
        <span class="text-danger">Cette opération ne peut être défaite.</span>
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Le click de la suppression')">Confirmer</button>
    </div>
  `
})
export class ModalConfirmDeletion implements OnInit {
  @Input() public guest;

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
}
