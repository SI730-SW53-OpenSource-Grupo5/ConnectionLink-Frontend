import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import PostEntity from "../../models/post.entity";
import {PostService} from "../../services/post.service";
import {MatFabButton} from "@angular/material/button";
import {MatCardAvatar} from "@angular/material/card";
import {PostListComponent} from "../../components/forum/post-list/post-list.component";
import {NgIf} from "@angular/common";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

interface Filter {
  value: string;
  viewValue: string;
}

interface Topic {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton,
    MatCardAvatar,
    PostListComponent,
    NgIf,
    MatFormField,
    MatSelect,
    MatOption,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {

  filters: Filter[] = [
    {value: 'comments-0', viewValue: 'More comments'},
    {value: 'likes-1', viewValue: 'More likes'},
    {value: 'posts-2', viewValue: 'Previous posts'},
  ];

  topics: Topic[] = [
    {value: 'depression-0', viewValue: 'Depression'},
    {value: 'stress-1', viewValue: 'Stress'},
    {value: 'mental-2', viewValue: 'Mental Health'},
  ];

  posts: Array<PostEntity> = [];
  showNewPostModal: boolean = false;

  constructor(private postService: PostService) {
  }

  // este metodo se ejecutara cuando se monte el componente
  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(
      (response: any) => {
        this.posts = response.map((item: PostEntity) => {
          return new PostEntity(
            item.id,
            item.name,
            item.email,
            item.subject,
            item.description,
            item.profile_img,
            item.publication_date,
            item.likes_quantity,
            item.comments_quantity
          )
        });
        console.log(this.posts);
      });
  }

}
