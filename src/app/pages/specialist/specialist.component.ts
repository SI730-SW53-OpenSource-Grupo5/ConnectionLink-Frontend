import {CalendarService} from './../../services/calendar.service';
import {SpecialistService} from './../../services/specialist.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {InformationProfileComponent} from '../../components/specialist/information-profile/information-profile.component';
import {UserReviewsComponent} from '../../components/specialist/user-reviews/user-reviews.component';
import {MakeAppointmentComponent} from '../../components/specialist/make-appointment/make-appointment.component';
import {ActivatedRoute} from '@angular/router';
import {Specialist} from '../../models/specialist';
import {CommonModule} from '@angular/common';
import {Calendar} from '../../models/calendar';
import {Review} from '../../models/review';
import {ReviewService} from '../../services/review.service';
import {UserService} from '../../services/user.service';
import { AddUserReviewComponent } from '../../components/specialist/add-user-review/add-user-review.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-specialist',
  standalone: true,
  imports: [
    InformationProfileComponent,
    UserReviewsComponent,
    MakeAppointmentComponent,
    AddUserReviewComponent,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {
  specialistData!: Specialist;
  specialistCalendarData!: Array<Calendar>;
  specialistReviewData!: Array<Review>;

  showPopup: boolean = false;
  isSidebarOpen: boolean = false;
  specialistId: any = "";
  currentUser!: User;
  isReviewModalOpen: boolean = false;
  rawUser: User = {
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
  };

  constructor(
    private route: ActivatedRoute,
    private specialistService: SpecialistService,
    private calendarService: CalendarService,
    private reviewService: ReviewService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.specialistData = {} as Specialist;
    this.specialistCalendarData = [] as Array<Calendar>;
    this.specialistReviewData = [] as Array<Review>;
    this.loadParamRoute();
    this.loadInitialData();
    this.currentUser = this.rawUser;
  }

  loadParamRoute() {
    this.route.paramMap.subscribe(
      params => {
        this.specialistId = params.get("id");
      }
    );
  }

  onClickPopup() {
    this.showPopup = !this.showPopup;
  }

  loadInitialData() {
    this.specialistService.getSpecialist(this.specialistId).subscribe(
      (response: any) => {
        this.specialistData = response[0];
      }
    );
    this.calendarService.getListCalendarSpecialist(this.specialistId).subscribe(
      (response: any) => {
        this.specialistCalendarData = response;
      }
    );
    this.reviewService.getReviewSpecialist(this.specialistId).subscribe(
      (response: any) => {
        response.map(
          (element: any) => {
            this.userService.getUserById(element.userId).subscribe(
              (res: any) => {
                this.specialistReviewData.push({
                  id: element.id,
                  user: res[0],
                  specialist: this.specialistData,
                  description: element.description
                });
              }
            );
          }
        );
      }
    );
  }

  openAddReviewModal(): void {
    this.isReviewModalOpen = true;
  }

  closeAddReviewModal(review?: Review | null): void {
    this.isReviewModalOpen = false;
    if (review) {
      this.specialistReviewData.push(review);
    }
  }

  generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
