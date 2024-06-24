import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialist } from '../models/specialist';
import { Review } from '../models/review';
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  base_Url=`${environment.baseUrl}/users`;
  constructor(private http: HttpClient) {}

  getSpecialist(username: string): Observable<Specialist> {
    return this.http.get<Specialist>(this.base_Url + "/username/" + username);
  }

}
