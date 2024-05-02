import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  base_Url="http://localhost:3000/reviews";
  constructor(private http: HttpClient) {}

  getReviewSpecialist(username: string): Observable<Review> {
    return this.http.get<Review>(this.base_Url + "/?specialistId=" + username);
  }
  
}
