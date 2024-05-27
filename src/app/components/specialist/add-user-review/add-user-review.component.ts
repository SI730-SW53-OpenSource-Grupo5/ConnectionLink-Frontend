import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReviewService } from '../../../services/review.service';
import { Review } from '../../../models/review';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-user-review',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './add-user-review.component.html',
  styleUrl: './add-user-review.component.scss'
})
export class AddUserReviewComponent {
  review: Review = {
    id: null,
    user: this.data.user,
    specialist: this.data.specialist,
    description: ''
  };

  constructor(
    public dialogRef: MatDialogRef<AddUserReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reviewService: ReviewService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.reviewService.addReview(this.review).subscribe(() => {
      this.dialogRef.close(this.review);
    });
  }
}
