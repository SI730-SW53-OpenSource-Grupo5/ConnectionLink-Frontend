import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Review } from '../../../models/review';
import { CommonModule } from '@angular/common';
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../shared/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../../services/review.service";

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {

  user: any | null = null;
  reviews: any[] | null = null;
  @Input() specialistReviewData!: Array<Review>;
  @Output() addReview = new EventEmitter<void>();

  constructor(private userService: UserService, private authService: AuthService,
              private route: ActivatedRoute, private reviewService: ReviewService) {
  }

  openAddReview() {
    this.addReview.emit();
  }

  ngOnInit() {
    this.loadReviewsList();
  }

  loadReviewsList() {
    this.route.paramMap.subscribe(params => {
      const username = params.get('username')!;
      this.getReviewsBySpecialistUsername(username);
    });
  }

  getReviewsBySpecialistUsername(username: string) {
    this.route.paramMap.subscribe(params => {

      this.reviewService.getReviewsBySpecialistUsername(username).subscribe(
        (reviews) => {
          this.reviews = reviews;
        }
      )
    });
  }


}
