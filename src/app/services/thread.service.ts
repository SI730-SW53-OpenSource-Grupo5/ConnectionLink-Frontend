import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import PostEntity from "../models/post.entity";
import CommentEntity from "../models/comment.entity";
import {environment} from "../enviroments/environments";

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  baseURL: string = environment.baseUrl;
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
    return this.http.get<CommentEntity[]>(`${this.baseURL}/comments?postId=${postId}`);
  }

  // creamos un comentario
  createComment(item: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/comments`, item);
  }

}
