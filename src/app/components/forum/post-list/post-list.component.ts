import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import PostEntity from "../../../models/post.entity";
import {DatePipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    DatePipe
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {

  @Input() posts: Array<any> = [];

  constructor(private router: Router) {}

  navigateTo(postId: number) {
    console.log(postId);
    this.router.navigate(['/forums', postId]);
  }
}
