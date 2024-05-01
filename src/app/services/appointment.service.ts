import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialist } from '../models/specialist';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  base_Url="http://localhost:3000/appointments";
  constructor(private http: HttpClient) {}


  getListAppointmentsByUser(userId: string): Observable<Appointment> {
    return this.http.get<Appointment>(this.base_Url + "/?userId=" + userId);
  }

  getListAppointmentsByCalendar(calendarId: string): Observable<Appointment> {
    return this.http.get<Appointment>(this.base_Url + "/?calendarId=" + calendarId);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.base_Url, JSON.stringify({
      userId: appointment.userId,
      calendarId: appointment.calendarId
    }));
  }

}
