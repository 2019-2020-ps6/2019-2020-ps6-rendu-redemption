// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Guest } from '../models/guest.model';

// Communication.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

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
   * Constructs the quiz service.
   * @param http The http client.
   */
  constructor(private http: HttpClient) {
    // Initialize the service.
    this.serverURL = environment.serverURL;
    this.serverOptions = environment.serverOptions;
  }

  /**
   * Returns all the guests.
   */
  getGuests(): Observable<Guest[]> {
    // GET request.
    return this.http
      .get<Guest[]>(`${this.serverURL}/guests`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Returns a guest.
   * @param guestId The identifier of the guest.
   */
  getGuest(guestId: number): Observable<Guest> {
    // GET request.
    return this.http
      .get<Guest>(`${this.serverURL}/guests/${guestId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds a guest.
   * @param guest The guest to be added.
   */
  addGuest(guest: Guest): Observable<any> {
    // POST request.
    return this.http
      .post(`${this.serverURL}/guests`, guest, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Updates a guest.
   * @param guest The guest to be updated.
   */
  updateGuest(guest: Guest): Observable<any> {
    // PUT request.
    return this.http
      .put(`${this.serverURL}/guests/${guest.id}`, guest, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Deletes a guest.
   * @param guestId The identifier of the guest to be deleted.
   */
  deleteGuest(guestId: number): Observable<any> {
    // DELETE request.
    return this.http
      .delete(`${this.serverURL}/guests/${guestId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles an error response.
   * @param response The error response.
   */
  private handleError(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', response.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${response.status}, ` +
        `body was: ${response.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened! Please try again later.');
  }
}
