import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GuestService } from '../../../../services/guest.service';
import { Guest } from '../../../../models/guest.model';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {
  /**
   * The form group of the guest.
   */
  public guestForm: FormGroup;

  /**
   * The available accessibility profiles.
   */
  public accessibilities: string[];

  constructor(
    private formBuilder: FormBuilder,
    private guestService: GuestService
  ) {
    // Create the form group.
    this.guestForm = this.formBuilder
      .group({
        firstName: [''],
        lastName: [''],
        accessibility: ['']
      });

    // Get the accessibilities.
    this.accessibilities = this.guestService.getAccessibilities();
  }

  ngOnInit() {}

  createGuest() {
    const guest = this.guestForm.getRawValue();
    console.log(guest.firstName, guest.lastName, guest.accessibility);
  }
}
