import { EventEntity } from './../models/calendar-event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '../models/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  base_Url="http://localhost:3000";
  constructor(private http: HttpClient) {}


  getListCalendarSpecialist(username: string): Observable<Calendar> {
    return this.http.get<Calendar>(this.base_Url + "/calendars/?username=" + username);
  }

  updateAvailableCalendar(data: Calendar, available: boolean): Observable<Calendar> {
    return this.http.put<Calendar>(this.base_Url + "/calendars/" + data.id, JSON.stringify({
      "hour": data.hour,
      "day": data.day,
      "username": data.username,
      "available": available
    }));
  }
  getAllEvents(): Observable<EventEntity>{
    return this.http.get<EventEntity>(this.base_Url + "/eventsCalendar");
  }
  
}
