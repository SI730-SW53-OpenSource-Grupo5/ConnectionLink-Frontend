import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import PostEntity from "../../../models/post.entity";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {

  @Input() posts: Array<PostEntity> = [];

  constructor(private router: Router) {}

  navigateTo(postId: number) {
    this.router.navigate(['/forums', postId]);
  }
}
