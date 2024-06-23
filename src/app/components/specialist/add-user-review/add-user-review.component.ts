import { Component, Inject, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReviewService } from '../../../services/review.service';
import { Review } from '../../../models/review';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Specialist } from '../../../models/specialist';

@Component({
  selector: 'app-add-user-review',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './add-user-review.component.html',
  styleUrls: ['./add-user-review.component.scss']
})
export class AddUserReviewComponent implements OnInit {
  @Input() specialistData!: Specialist;
  @Input() showPopup!: boolean;
  @Input() currentUser!: User;
  @Output() closePopup = new EventEmitter<Review | null>();

  review: Review = {
    id: null,
    user: {
      id: '',
      fullName: '',
      username: '',
      description: '',
      profileImageUrl: '',
      bannerImageUrl: '',
      email: '',
      password: '',
      age: 0,
      birthday: new Date(),
      isSpecialistUser: false,
      cvUrl: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    specialist: {
      fullName: '',
      age: 0,
      bannerImageUrl: '',
      birthday: '',
      cvUrl: '',
      description: '',
      email: '',
      is_specialist_user: false,
      password: '',
      profileImageUrl: '',
      username: ''
    },
    description: '',
  };

  isReviewAdded!: boolean;

  constructor(
    private reviewService: ReviewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.review.user = this.currentUser;
    this.isReviewAdded = false;
    this.review.specialist.fullName =this.specialistData.fullName;
    console.log(this.review.specialist.fullName); // Verificar inicialización
  }

  onCancel(): void {
    this.showPopup = false;
    this.closePopup.emit(null);
  }

  onSubmit(): void {
    if (this.review.description) {
      this.reviewService.addReview(this.review).subscribe(() => {
        this.isReviewAdded = true;
        setTimeout(() => {
          this.showPopup = false;
          this.closePopup.emit(this.review);
          this.isReviewAdded = true;
        }, 3000); // Cerrar el popup después de 3 segundos
      }, (error) => {
        console.error('Error adding review', error);
        this.showPopup = false;
        this.closePopup.emit(null);
      });
    }
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
