import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GuestService} from '../../../../services/guest.service';
import {Guest} from '../../../../models/guest.model';
import {faUserEdit, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guestEdit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.scss'],
})

export class GuestEditComponent implements OnInit {
  guestToEdit: Guest;
  accessibilities: String[] = ['none', 'TBD'];
  icon = faUserPlus;
  buttonText: String;
  @ViewChild('firstName') firstNameInput: ElementRef;
  @ViewChild('lastName') lastNameInput: ElementRef;
  @ViewChild('accessibility') accessibilityInput: ElementRef;

  constructor(private guestService: GuestService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.guestToEdit = this.guestService.getGuestToModify();
    if (this.guestToEdit === undefined) {
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      if (this.guestToEdit == null) {
        this.buttonText = 'Ajouter';
      } else {
        this.icon = faUserEdit;
        this.buttonText = 'Modifier';
      }
    }
  }

  createModifyGuest() {
    let guestToCreate: Guest = {
      id: -1,
      firstName: this.firstNameInput.nativeElement.value,
      lastName: this.lastNameInput.nativeElement.value,
      accessibility: this.accessibilityInput.nativeElement.value
    };
    if (this.guestToEdit == null) {
      this.guestService.createGuest(guestToCreate);
    } else {
      guestToCreate.id = this.guestToEdit.id;
      this.guestService.updateGuest(guestToCreate);
    }
  }

}
