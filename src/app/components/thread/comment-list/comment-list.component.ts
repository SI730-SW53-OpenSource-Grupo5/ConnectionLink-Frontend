import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf, DatePipe} from "@angular/common";
import CommentEntity from "../../../models/comment.entity";
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {

  @Input() comments: Array<any> = [];
  constructor(private router: Router) {}

  goToPage(url: string) {
    this.router.navigateByUrl(url)
  }



}
