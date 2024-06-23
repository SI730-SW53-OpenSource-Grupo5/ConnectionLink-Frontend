import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.base_Url);
  }

  createNewUser(user: any): Observable<User> {

    if (user.role === 'patient') {
      user.isSubscribed = false;
    }

    return this.http.post<User>(this.base_Url, user);
  }
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.base_Url}/current`);
  }
}
