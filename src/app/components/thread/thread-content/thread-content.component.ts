import {Component, OnInit} from '@angular/core';
import {CommentListComponent} from "../comment-list/comment-list.component";
import {MatIcon} from "@angular/material/icon";
import CommentEntity from "../../../models/comment.entity";
import {ThreadService} from "../../../services/thread.service";
import {ActivatedRoute} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-thread-content',
  standalone: true,
    imports: [
        CommentListComponent,
        MatIcon,
        NgForOf
    ],
  templateUrl: './thread-content.component.html',
  styleUrl: './thread-content.component.scss'
})
export class ThreadContentComponent implements OnInit{

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
