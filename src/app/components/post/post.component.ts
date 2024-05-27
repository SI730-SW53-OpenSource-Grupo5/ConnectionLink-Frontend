import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { HomeService } from '../../services/home.service';
import {MatLine} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatLine,
    MatIcon
  ],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  {

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
        console.log(this.data);
      }
    )
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url)
  }
}




