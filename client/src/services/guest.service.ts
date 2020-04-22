import { Injectable } from '@angular/core';
import {Guest} from '../models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private guests: Guest[];
  private guestToModify: Guest = undefined;
  constructor() {
  }

  getGuests(): Guest[] {
    return this.guests;
  }

  deleteGuest(guest: Guest) {
    console.log('On doit supprimer', guest);
  }

  setGuestToModify(guest: Guest) {
    this.guestToModify = guest;
  }

  getGuestToModify(): Guest {
    return this.guestToModify;
  }

  createGuest(guestToCreate: Guest) {
    console.log('service createGuest', guestToCreate);
  }

  updateGuest(guestToCreate: Guest) {
    console.log('service updateGuest', guestToCreate);
  }
}
