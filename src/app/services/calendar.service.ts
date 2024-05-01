import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialist } from '../models/specialist';
import { Calendar } from '../models/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  base_Url="http://localhost:3000/calendars";
  constructor(private http: HttpClient) {}


  getListCalendarSpecialist(username: string): Observable<Calendar> {
    return this.http.get<Calendar>(this.base_Url + "/?username=" + username);
  }

  updateAvailableCalendar(data: Calendar, available: boolean): Observable<Calendar> {
    return this.http.put<Calendar>(this.base_Url + "/" + data.id, JSON.stringify({
      "hour": data.hour,
      "day": data.day,
      "username": data.username,
      "available": available
    }));
  }
  
}
