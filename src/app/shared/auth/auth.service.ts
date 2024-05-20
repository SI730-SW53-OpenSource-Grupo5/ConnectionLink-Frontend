import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }
}
