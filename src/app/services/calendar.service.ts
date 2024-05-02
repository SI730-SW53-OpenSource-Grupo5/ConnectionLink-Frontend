import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { EventEntity } from "../models/event.entity";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL: string = 'http://localhost:3000';
  eventsEndpoint: string = '/eventsCalendar';

  constructor(private http: HttpClient) { }

  private eventsPath() {
    return `${this.baseURL}${this.eventsEndpoint}`;
  }

  getAllEvents(): Observable<EventEntity>{
    return this.http.get<EventEntity>(this.baseURL + this.eventsEndpoint);
  }


}
