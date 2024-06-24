import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import EventEntity from "../models/event.entity";
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL: string = environment.baseUrl;
  eventsEndpoint: string = '/events';

  constructor(private http: HttpClient) { }

  private eventsPath() {
    return `${this.baseURL}${this.eventsEndpoint}`;
  }

  getAllEvents(): Observable<any>{
    return this.http.get<any>(this.baseURL + this.eventsEndpoint);
  }

  // obtenemos la data de los especilistas en base al eventId
  getSpecialistByEvent(eventId: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/specialists/${eventId}`);
  }

  createEvent(event: EventEntity): Observable<EventEntity> {
    return this.http.post<EventEntity>(this.eventsPath(), event);
  }

  createUserEventRegister(userEventRegister: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL + this.eventsEndpoint}/user`, userEventRegister);
  }

}
