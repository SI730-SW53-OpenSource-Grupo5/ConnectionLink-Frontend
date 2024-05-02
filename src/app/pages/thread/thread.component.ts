import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {OnInit} from "@angular/core";
import {ThreadService} from "../../services/thread.service";
import CommentEntity from "../../models/comment.entity";
import {CommentListComponent} from "../../components/thread/comment-list/comment-list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    CommentListComponent
  ],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss'
})
export class ThreadComponent implements OnInit {

  post: any = {};
  comments: Array<CommentEntity> = [];

  constructor(private threadService: ThreadService, private  route: ActivatedRoute) {}

  ngOnInit() {
    this.loadThreadInformation();
  }

  loadThreadInformation() {
    // obtenemos el id, el paramMap es un Observable osea que emite un nuevo valor cada que se produzcan cambios en la ruta
    this.route.paramMap.subscribe(params => {
      // + para convertir de string a number y ! para indicar que el valor no sera nulo o undefined
      const postId = +params.get('id')!;
      this.getPostById(postId);
      this.getCommentsByPostId(postId);
    });
  }

  // obtenemos el post en base al idpOST
  getPostById(postId: number) {
    this.threadService.getPostById(postId).subscribe(
      (post) => {
        this.post = post;
      }
    )
    console.log(this.post);
  }

  // obtenemos los commentarios en base al idPost
  getCommentsByPostId(postId: number) {
    this.threadService.getCommentsByPostId(postId).subscribe(
      (response: any) => {
        this.comments = response.map((item: CommentEntity) => {
          return new CommentEntity(
            item.id,
            item.postId,
            item.name,
            item.email,
            item.type,
            item.comment,
            item.imageURL,
            item.publication_date,
            item.likes_quantity,
            item.username
          )
        });
        console.log(this.comments);
      });
  }
}
