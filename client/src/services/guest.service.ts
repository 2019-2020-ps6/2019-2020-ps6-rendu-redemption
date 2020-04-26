// App.
import { Injectable } from '@angular/core';

// Communication.
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models and services.
import { Guest } from '../models/guest.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService extends DataService {
  /**
   * The list of guests.
   */
  private guests: Guest[];

  /**
   * The observable list of guests.
   */
  private guests$: BehaviorSubject<Guest[]>;

  /**
   * Constructs the guest service.
   * @param http The HTTP client.
   */
  constructor(private http: HttpClient) {
    super();
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
   * Returns an observable guest by id.
   * @param id The id of the guest.
   */
  getGuest(id: number): Observable<Guest> {
    return this.getGuests()
      .pipe(
        map((guests) => guests.find((guest) => guest.id === id))
      );
  }

  /**
   * Returns the available accessibility profiles.
   */
  getAccessibilities(): object[] {
    return [
      { value: 'none', name: 'Aucun' },
      { value: 'tbd1', name: 'TBD1' },
      { value: 'tbd2', name: 'TBD2' }
    ];
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
   * @param firstName The first name of the guest.
   * @param lastName The last name of the guest.
   * @param accessibility The accessibility profile of the guest.
   */
  createGuest(firstName: string, lastName: string, accessibility: string) {
    this.http
      .post<Guest>(
        `${this.serverURL}/guests`,
        {
          firstName,
          lastName,
          accessibility
        },
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllGuests();
      });
  }

  /**
   * Updates a guest.
   * @param id The id of the theme.
   * @param firstName The first name of the guest.
   * @param lastName The last name of the guest.
   * @param accessibility The accessibility profile of the guest.
   */
  updateGuest(id: number, firstName: string, lastName: string, accessibility: string) {
    this.http
      .put<Guest>(
        `${this.serverURL}/guests/${id}`,
        {
          firstName,
          lastName,
          accessibility
        },
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllGuests();
      });
  }

  /**
   * Deletes a guest.
   * @param id The id of the theme.
   */
  deleteGuest(id: number) {
    this.http
      .delete<Guest>(`${this.serverURL}/guests/${id}`)
      .subscribe(() => {
        this.findAllGuests();
      });
  }
}
