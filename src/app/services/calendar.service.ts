import { EventEntity } from './../models/calendar-event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '../models/calendar';
import {environment} from "../enviroments/environments";
import { Hour } from '../models/hour';
import { Day } from '../models/day';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  base_Url= environment.baseUrl;
  constructor(private http: HttpClient) {}

  createDateCalendar(calendar: any): Observable<any> {
    return this.http.post<any>(this.base_Url + "/calendars", calendar);
  }

  getListCalendarBySpecialistUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(this.base_Url + "/calendars/available/specialist/" + username);
  }

  getListCalendarSpecialist(username: string): Observable<any> {
    return this.http.get<any>(this.base_Url + "/calendars/available/specialist/" + username);
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

  getAllDays(): Observable<Day[]> {
    return this.http.get<Day[]>(this.base_Url + "/days");
  }

  getAllHours(): Observable<Hour[]> {
    return this.http.get<Hour[]>(this.base_Url + "/hours");
  }
  deleteCalendar(calendarId: string): Observable<void> {
    return this.http.delete<void>(this.base_Url + "/calendars/" + calendarId);
  }
}
