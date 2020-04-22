import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GuestService} from '../../../services/guest.service';
import {Guest} from '../../../models/guest.model';

@Component({
    selector: 'app-guestSelection',
    templateUrl: './guest-selection.component.html',
    styleUrls: ['./guest-selection.component.scss'],
})

export class GuestSelectionComponent implements OnInit{
  guestList: Guest[];
  searchElement: string;
  pageCount: number = 1;

  constructor(private guestService: GuestService, private router: Router) {
  }

  ngOnInit(): void {
    this.guestList = this.guestService.getGuests();
  }

  modifyFilter(value: string) {
    this.searchElement = value;
  }

  putGuestInSessionAndSelectTheme(guest: Guest) {
    sessionStorage.setItem('selectedGuest', guest.firstName);
    this.router.navigate(['../themes-selection']);
  }
}
