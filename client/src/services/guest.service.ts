import { Injectable } from '@angular/core';
import {Guest} from '../models/guest.model';
import {GUEST_MOCK} from '../mocks/guests.mock';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private guests: Guest[] = GUEST_MOCK;

  constructor() {
  }

  getGuests(): Guest[] {
    return this.guests;
  }
}
