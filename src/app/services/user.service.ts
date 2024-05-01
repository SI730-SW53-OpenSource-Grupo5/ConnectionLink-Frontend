import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_Url="http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.base_Url + "/?username=" + username);
  }
  getUserById(id: string): Observable<any> {
    return this.http.get<User>(`${this.base_Url}/${id}`);
  }
  
}
