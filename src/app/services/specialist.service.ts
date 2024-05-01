import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialist } from '../models/specialist';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  base_Url="http://localhost:3000/specialists";
  constructor(private http: HttpClient) {}

  getSpecialist(username: string): Observable<Specialist> {
    return this.http.get<Specialist>(this.base_Url + "/?username=" + username);
  }
  
}
