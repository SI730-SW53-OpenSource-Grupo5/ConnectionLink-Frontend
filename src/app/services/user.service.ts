import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from 'rxjs';
import { User } from '../models/user';
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_Url=`${environment.baseUrl}/users`;
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.base_Url + "/?username=" + username)
      .pipe(retry(2), catchError(this.handleError));
  }
  getUserById(id: string): Observable<any> {
    return this.http.get<User>(`${this.base_Url}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateUser(data: User): Observable<User> {
    return this.http.put<User>(this.base_Url + "/?username=" + data.username, JSON.stringify(data), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
