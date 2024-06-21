import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Review } from '../../../models/review';
import { CommonModule } from '@angular/common';

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
export class UserReviewsComponent {
  @Input() specialistReviewData!: Array<Review>;
  @Output() addReview = new EventEmitter<void>();

  openAddReview() {
    this.addReview.emit();
  }
}
