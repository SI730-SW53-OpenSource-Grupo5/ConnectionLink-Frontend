import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import PostEntity from "../models/post.entity";
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL: string = environment.baseUrl;
  postsEndpoint: string = '/posts';

  constructor(private http: HttpClient) { }

  private postsPath() {
    return `${this.baseURL}${this.postsEndpoint}`;
  }

  createPost(item: any): Observable<PostEntity> {
    return this.http.post<PostEntity>(this.postsPath(), item); // se maneraja errores luego
  }

  getAllPosts(): Observable<PostEntity> {
    return this.http.get<PostEntity>(this.baseURL + this.postsEndpoint);
  }

}
