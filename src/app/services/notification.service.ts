import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../enviroments/environments";
import { Notifications } from '../models/Notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

 
  private baseUrl = `${environment.baseUrl}/api/v1/notifications`;

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notifications[]> {
    return this.http.get<Notifications[]>(this.baseUrl);
  }

  getNotificationsByUsername(username: string): Observable<Notifications[]> {
    return this.http.get<Notifications[]>(`${this.baseUrl}/user/${username}`);
  }

  getNotificationById(id: string): Observable<Notifications> {
    return this.http.get<Notifications>(`${this.baseUrl}/${id}`);
  }

  createNotification(notification: Notifications): Observable<Notifications> {
    return this.http.post<Notifications>(this.baseUrl, notification);
  }

  updateNotification(id: string, notification: Notifications): Observable<Notifications> {
    return this.http.put<Notifications>(`${this.baseUrl}/${id}`, notification);
  }
}
