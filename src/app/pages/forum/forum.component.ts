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
    {value: 'depression', viewValue: 'Depression'},
    {value: 'stress', viewValue: 'Stress'},
    {value: 'mental', viewValue: 'Mental Health'},
  ];

  posts: Array<PostEntity> = [];
  // guardamos una copia del arreglo inicial
  initialPosts: Array<PostEntity> = []
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
        this.initialPosts = [...this.posts];
        console.log(this.posts);
      });
  }

  filterByTopics(word: string) {
    const filteredPosts = this.posts.filter(post => post.subject.toLowerCase().includes(word.toLowerCase()));
    this.posts = filteredPosts;
  }

  refreshPosts() {
    // restaureamos el estado inicial de posts
    this.posts = [...this.initialPosts];
  }

  orderPostsBy(filter: string) {

    console.log(filter);

    switch(filter) {
      case 'comments-0':
        this.posts.sort((a, b) => b.comments_quantity - a.comments_quantity);
        break;
      case 'likes-1':
        this.posts.sort((a, b) => b.likes_quantity - a.likes_quantity);
        break;
      case 'posts-2':
        this.posts.sort((a, b) => new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime());
        break;
      default:
        console.log('Invalid filter');
    }

  }

}
