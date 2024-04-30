import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from '../models/message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  base_Url="http://localhost:3000/inbox";
  constructor(private http: HttpClient) {}

  getListMessages(){
    return this.http.get(this.base_Url);
  }

}
