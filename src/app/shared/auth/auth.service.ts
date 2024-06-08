import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  setUser(user: User) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  loginUser(email: string, password: string) {
    return this.http.post<User>(`${environment.realApiUrl}/auth/login`, {email, password});
  }

  registerUser(user: any) {
    return this.http.post<User>(`${environment.realApiUrl}/auth/register`, user);
  }
}
