import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  base_Url=`${environment.baseUrl}/reviews`;
  constructor(private http: HttpClient) {}

  getReviewSpecialist(username: string): Observable<Review> {
    return this.http.get<Review>(this.base_Url + "/?specialistId=" + username);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.base_Url, review);
  }

}
