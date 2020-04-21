import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GuestService} from '../../../../services/guest.service';
import {Guest} from '../../../../models/guest.model';
import {faUserEdit, faUserMinus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmDeletion} from './modal-confirm-deletion';

@Component({
  selector: 'app-guestList',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss'],
})

export class GuestListComponent implements OnInit {
  guestList: Guest[];
  searchElement: string;
  pageCount: number = 1;
  addIcon = faUserPlus;
  modifyIcon = faUserEdit;
  deleteIcon = faUserMinus;

  constructor(private guestService: GuestService, private router: Router, private _modalService: NgbModal, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.guestList = this.guestService.getGuests();
  }

  modifyFilter(value: string) {
    this.searchElement = value;
  }

  deleteGuest(guest: Guest) {
    let modal = this._modalService.open(ModalConfirmDeletion);
    modal.componentInstance.guest = guest;
    modal.result.then((result) => {
      if (`${result}` === 'Le click de la suppression') {
        this.guestService.deleteGuest(guest);
      }
    });
  }

  goToGuestEdit(guest: Guest) {
    this.guestService.setGuestToModify(guest);
    this.router.navigate(['../modify-guest'], {relativeTo: this.route});
  }
}
