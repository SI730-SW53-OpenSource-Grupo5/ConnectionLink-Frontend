import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import PostEntity from "../models/post.entity";
import CommentEntity from "../models/comment.entity";

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  baseURL: string = "http://localhost:3000";
  postsEndpoint: string = '/posts';

  constructor(private http: HttpClient) { }

  private postsPath(id?: number) {
    return `${this.baseURL}${this.postsEndpoint}${id ? `/${id}` : ''}`;
  }

  //Obtenemos el post en base al posId
  getPostById(postId: number): Observable<PostEntity> {
    return this.http.get<PostEntity>(this.postsPath(postId));
  }

  // obtenemos los comentarios en base al postId seleccionado
  getCommentsByPostId(postId: number): Observable<CommentEntity[]> {
    return this.http.get<CommentEntity[]>(`${this.baseURL}/posts/${postId}/comments`);
  }
}
