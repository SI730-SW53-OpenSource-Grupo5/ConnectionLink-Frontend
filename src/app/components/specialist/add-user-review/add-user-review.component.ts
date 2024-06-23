import {Component, Inject, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReviewService} from '../../../services/review.service';
import {Review} from '../../../models/review';
import {User} from '../../../models/user';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Specialist} from '../../../models/specialist';
import {AuthService} from "../../../shared/auth/auth.service";
import {startWith} from "rxjs";

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

  user: User | null = null;
  @Input() specialistData!: Specialist;
  @Input() showPopup!: boolean;
  @Input() currentUser!: User;
  @Output() closePopup = new EventEmitter<Review | null>();
  isReviewAdded!: boolean;

  constructor(
    private reviewService: ReviewService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.authService.user$
      .pipe(startWith(this.getUserFromLocalStorage()))
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });
  }

  private getUserFromLocalStorage(): User | null {
    const userStorage = localStorage.getItem('user');
    return userStorage ? JSON.parse(userStorage) : null;
  }

  reviewData = {
    description: '',
    specialistUsername: this.route.snapshot.paramMap.get('username')!,
    userUsername: this.user?.username!,
  }

  onCancel(): void {
    this.showPopup = false;
    this.closePopup.emit(null);
  }

  onSubmit(): void {

    console.log(this.user?.username!);
    this.reviewData.userUsername = this.user?.username!;

    this.reviewService.createReview(this.reviewData).subscribe(
      (response: any) => {
        this.isReviewAdded = true;
        this.closePopup.emit(response);
        window.location.reload();
      }
    );

  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}
