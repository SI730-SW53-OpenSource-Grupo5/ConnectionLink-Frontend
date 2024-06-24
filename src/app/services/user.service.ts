import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.baseUrl}/api/v1/users`;
  constructor(private http: HttpClient) {}

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/username/${username}`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.base_Url);

  }

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  getCurrentUser(): Observable<User> {

    return this.http.get<User>(`${this.baseUrl}/current`);
  }

  getAllSpecialistUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/specialists`);
  }

  getAllPatientUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);

  }

  getUserByUserName(username: string): Observable<User> {
    return this.http.get<User>(`${this.base_Url}/username/${username}`);
  }

}
