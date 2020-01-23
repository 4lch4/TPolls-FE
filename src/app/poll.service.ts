import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Poll } from './models/polls';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private baseUrl = 'https://tpolls.app/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Api-Key': 'oreriutvalkaraprurhasvuzuheledsekeciepvubacvizoruva'
    })
  };
  clientId = 'e5ab1a27-09d0-4569-bd48-0f69ab223441';
  teamId = '90377b44-72a1-49f8-b70e-fb310eb58f04';

  constructor(private http: HttpClient) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${this.baseUrl}/polls/${this.clientId}/${this.teamId}`, this.httpOptions).pipe(
      tap(_ => console.log('Getting all polls for a client')),
      catchError(this.handleError<Poll[]>('getPolls'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`Message received: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
