import {CalendarService} from './../../services/calendar.service';
import {SpecialistService} from './../../services/specialist.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  InformationProfileComponent
} from '../../components/specialist/information-profile/information-profile.component';
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
  styleUrl: './specialist.component.scss'
})
export class SpecialistComponent implements OnInit {
  specialistData!: Specialist;
  specialistCalendarData!: Array<Calendar>;
  specialistReviewData!: Array<Review>;

  showPopup: boolean = false;
  isSidebarOpen: boolean = false;
  specialistId: any = "";
  currentUser!: User;

  rawUser: User = {
    id: '12345',
    firstName: 'John',
    lastName: 'Doe',
    profileImg: 'https://example.com/profile-img.jpg',
    email: 'john.doe@example.com',
    password: 'securepassword',
    phone: '+1234567890',
    role: 'patient',
    isSubscribed: true
  };

  constructor(private route: ActivatedRoute, private specialistService: SpecialistService, private calendarService: CalendarService, private reviewService: ReviewService, private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.specialistData = {} as Specialist;
    this.specialistCalendarData = [] as Array<Calendar>;
    this.specialistReviewData = [] as Array<Review>;
    this.loadParamRoute();
    this.loadInitialData();
    this.currentUser = this.rawUser;
    console.log(this.specialistCalendarData)
  }


  loadParamRoute() {
    this.route.paramMap.subscribe(
      params => {
        this.specialistId = params.get("id");
      }
    )
  }

  onClickPopup() {
    this.showPopup = !this.showPopup;
  }

  loadInitialData() {
    this.specialistService.getSpecialist(this.specialistId).subscribe(
      (response: any) => {
        this.specialistData = response[0]
      }
    )
    this.calendarService.getListCalendarSpecialist(this.specialistId).subscribe(
      (response: any) => {
        this.specialistCalendarData = response
      }
    )
    this.reviewService.getReviewSpecialist(this.specialistId).subscribe(
      (response: any) => {
        response.map(
          (element: any) => {

            this.userService.getUser(element.userId).subscribe(
              (res: any) => {
                this.specialistReviewData.push({
                  id: element.id,
                  user: res[0],
                  specialist: this.specialistData,
                  description: element.description
                })
              }
            )
          }
        )
      }
    )
  }
  openAddReviewModal(): void {
    const dialogRef = this.dialog.open(AddUserReviewComponent, {
      width: '400px',
      data: { id: this.generateUniqueId(),user: this.currentUser, specialist: this.specialistData }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.specialistReviewData.push(result);
      }
    });
  }

  generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

}
