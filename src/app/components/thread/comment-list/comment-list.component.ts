import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import CommentEntity from "../../../models/comment.entity";

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgIf
  ],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {

  @Input() comments: Array<CommentEntity> = [];

}
