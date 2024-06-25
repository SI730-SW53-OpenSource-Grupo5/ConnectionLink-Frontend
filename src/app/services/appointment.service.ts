import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialist } from '../models/specialist';
import { Appointment } from '../models/appointment';
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  base_Url=`${environment.baseUrl}/appointments`;
  constructor(private http: HttpClient) {}

  getListAppointments(): Observable<any> {
    return this.http.get<any>(this.base_Url);
  }

  getListAppointmentsByUser(username: string): Observable<any> {
    return this.http.get<any>(this.base_Url + "/user/" + username);
  }

  getListAppointmentsByCalendar(calendarId: string): Observable<Appointment> {
    return this.http.get<Appointment>(this.base_Url + "/?calendarId=" + calendarId);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.base_Url, appointment);
  }

}
