import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { User } from '../models/user';
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_Url=`${environment.baseUrl}/users`;
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.base_Url + "/?username=" + username);
  }
  getUserById(id: string): Observable<any> {
    return this.http.get<User>(`${this.base_Url}/${id}`);
  }

  updateUser(id:string, data: User): Observable<User> {
    return this.http.put<User>(`${this.base_Url}/${id}`, data).pipe(
      catchError((error: any)=> {
        console.error('Error updating user', error);
        return throwError(() => new Error('Error updating user'));
      })
    );
  }

}
