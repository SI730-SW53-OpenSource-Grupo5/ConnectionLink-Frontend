import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardModule } from '@angular/material/card';
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
  styleUrl: './user-reviews.component.scss'
})
export class UserReviewsComponent {
  @Input() specialistReviewData!: Array<Review>;
}
