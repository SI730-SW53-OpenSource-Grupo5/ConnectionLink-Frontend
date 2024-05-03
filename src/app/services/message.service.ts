import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from '../models/message';
import {environment} from "../enviroments/environments";
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  base_Url= `${environment.baseUrl}/inbox`;
  constructor(private http: HttpClient) {}

  getListMessages(){
    return this.http.get(this.base_Url);
  }

}
