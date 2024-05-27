import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {environment} from "../enviroments/environments";
import {NewEventEntity} from "../models/new-event.entity";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewEventService {
  base_Url=`${environment.baseUrl}/newEvent`;


  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  createEvent(item: any): Observable<NewEventEntity> {
    console.log(item);
    return this.http
      .post<NewEventEntity>(this.base_Url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
