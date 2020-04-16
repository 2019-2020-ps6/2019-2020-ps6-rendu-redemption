import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GuestService} from '../../../../services/guest.service';
import {Guest} from '../../../../models/guest.model';
import { faUserEdit, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-guestList',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss'],
})

export class GuestListComponent implements OnInit{
  guestList: Guest[];
  searchElement: string;
  pageCount: number = 1;
  addIcon = faUserPlus;
  modifyIcon = faUserEdit;
  deleteIcon = faUserMinus;

  constructor(private guestService: GuestService, private router: Router) {
  }

  ngOnInit(): void {
    this.guestList = this.guestService.getGuests();
  }

  modifyFilter(value: string) {
    this.searchElement = value;
  }

  putGuestInSessionAndSelectTheme(guest: Guest) {
    //TODO
  }
}
