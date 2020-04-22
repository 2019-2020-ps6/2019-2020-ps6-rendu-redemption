// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Guest } from '../models/guest.model';

// Communication.
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  /**
   * The server URL.
   */
  private serverURL: string;

  /**
   * The server options.
   * These options are used for JSON requests.
   */
  private serverOptions: object;

  /**
   * The list of guests.
   */
  private guests: Guest[];

  /**
   * The observable list of guests.
   */
  private guests$: BehaviorSubject<Guest[]>;

  /**
   * The guest to modify.
   * TODO: Use route params or user session.
   */
  private guestToModify: Guest;

  /**
   * Constructs the guest service.
   * @param http The HTTP client.
   */
  constructor(private http: HttpClient) {
    // Initialize the service.
    this.serverURL = environment.serverURL;
    this.serverOptions = environment.serverOptions;

    // Initialize the guests.
    this.guests = [];
    this.guests$ = new BehaviorSubject<Guest[]>(this.guests);
    this.findAllGuests();
  }

  /**
   * Returns the observable list of guests.
   */
  getGuests(): Observable<Guest[]> {
    return this.guests$.asObservable();
  }

  /**
   * Finds all the guests.
   */
  findAllGuests() {
    this.http
      .get<Guest[]>(`${this.serverURL}/guests`)
      .subscribe((guests: Guest[]) => {
        this.guests = guests;
        this.guests$.next(this.guests);
      });
  }

  /**
   * Creates a guest.
   * @param guest The guest to be created.
   */
  createGuest(guest: Guest) {
    this.http
      .post<Guest>(`${this.serverURL}/guests`, guest, this.serverOptions)
      .subscribe(() => {
        this.findAllGuests();
      });
  }

  /**
   * Finds a guest.
   * @param guestId The id of the guest.
   */
  findImage(guestId: number): Guest {
    return this.guests.find((guest) => guest.id === guestId);
  }

  /**
   * Updates a guest.
   * @param guest The guest to be updated.
   */
  updateGuest(guest: Guest) {
    this.http
      .put<Guest>(`${this.serverURL}/guests/${guest.id}`, guest, this.serverOptions)
      .subscribe(() => {
        this.findAllGuests();
      });
  }

  /**
   * Deletes a guest.
   * @param guest The guest to be deleted.
   */
  deleteGuest(guest: Guest) {
    this.http
      .delete<Guest>(`${this.serverURL}/guests/${guest.id}`)
      .subscribe(() => {
        this.findAllGuests();
      });
  }

  /**
   * Sets the guest to modify.
   * TODO: Use route params or user session.
   * @param guest The guest to modify.
   */
  setGuestToModify(guest: Guest) {
    this.guestToModify = guest;
  }

  /**
   * Returns the guest to modify.
   * TODO: Use route params or user session.
   */
  getGuestToModify(): Guest {
    return this.guestToModify;
  }
}
