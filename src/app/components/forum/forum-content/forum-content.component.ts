import {Component} from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {PostListComponent} from "../post-list/post-list.component";
import PostEntity from "../../../models/post.entity";
import {PostService} from "../../../services/post.service";
import {MatFabButton} from "@angular/material/button";
import {MatCardAvatar} from "@angular/material/card";
import {NgIf} from "@angular/common";
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
  selector: 'app-forum-content',
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
    MatFormFieldModule,
    PostListComponent
  ],
  templateUrl: './forum-content.component.html',
  styleUrl: './forum-content.component.scss'
})
export class ForumContentComponent {

  selectedFilter: string | null = null;
  selectedTopic: string | null = null;

  filters: Filter[] = [
    {value: 'comments', viewValue: 'More comments'},
    {value: 'likes', viewValue: 'More likes'},
    {value: 'posts', viewValue: 'Previous posts'},
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
    this.selectedFilter = null;
    this.selectedTopic = null;
  }

  orderPostsBy(filter: string) {

    console.log(filter);

    switch (filter) {
      case 'comments':
        this.posts.sort((a, b) => b.comments_quantity - a.comments_quantity);
        break;
      case 'likes':
        this.posts.sort((a, b) => b.likes_quantity - a.likes_quantity);
        break;
      case 'posts':
        this.posts.sort((a, b) => new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime());
        break;
      default:
        console.log('Invalid filter');
    }

  }

}
