import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { HomeService } from '../../services/home.service';
import {MatLine} from "@angular/material/core";

/*
interface Item {
  username: string;
  email: string;
  urlImage: string;
  posts: Post[];
}

interface Post {
  title: string;
  description: string;
}
*/
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatLine],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  {
  /*
  data: Item[] = [
    {
      username: 'User 1',
      email: 'user1@example.com',
      urlImage: 'https://example.com/image1.jpg',
      posts: [
        {
          title: 'Post 1',
          description: 'Description 1'
        }
      ]
    },
    {
      username: 'User 2',
      email: 'user2@example.com',
      urlImage: 'https://example.com/image2.jpg',
      posts: [
        {
          title: 'Post 3',
          description: 'Description 3'
        },
      ]
    },
  ];
}
*/

  data: any[] = [];
  constructor(private homeService: HomeService, private router: Router) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.homeService.getPost().subscribe(
      response => {
        this.data = response;
      }
    )
  }
}




