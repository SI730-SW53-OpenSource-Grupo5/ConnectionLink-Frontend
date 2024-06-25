import {CalendarService} from '../../../services/calendar.service';
import {AppointmentService} from '../../../services/appointment.service';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Specialist} from '../../../models/specialist';
import {FormsModule, NgForm} from '@angular/forms';
import {Calendar} from '../../../models/calendar';
import {Appointment} from '../../../models/appointment';
import {AuthService} from "../../../shared/auth/auth.service";
import {DatePipe} from "@angular/common";
import {startWith} from "rxjs";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-make-appointment',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatButton
  ],
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.scss'
})
export class MakeAppointmentComponent implements OnInit {

  user: any | null = null;
  userSpecialist: any | null = null;
  username = this.route.snapshot.paramMap.get('username')!;
  userLogin: any | null = null;

  @Input() showPopup!: boolean;
  @Input() specialistData!: Specialist;
  @Input() specialistCalendarData!: Array<Calendar>;
  specialistCalendar!: Array<any>;

  @Output() clickedPopup = new EventEmitter<void>();

  @ViewChild('specialistForm', {static: false})
  specialistForm!: NgForm;

  specialistFormData!: Specialist;
  isCreatedAppoiment!: boolean;
  selectedOptionForm!: string;

  constructor(private router: Router, private appointmentService: AppointmentService,
              private calendarService: CalendarService, private route: ActivatedRoute,
              private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    let userL = localStorage.getItem("user")
    if(userL != null) {
      this.userLogin = JSON.parse(userL);
    }
    this.getSpecialistByUsername(this.username);

    this.authService.user$
      .pipe(startWith(this.getUserFromLocalStorage()))
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });

    this.selectedOptionForm = "";
    this.isCreatedAppoiment = false;

    const username = this.route.snapshot.paramMap.get('username')!;
    this.getCalendarBySpecialistUsernames(username);
  }

  private getUserFromLocalStorage(): User | null {
    const userStorage = localStorage.getItem('user');
    return userStorage ? JSON.parse(userStorage) : null;
  }

  specialist = {
    fullName: "",
    email: "",
    etiquets: "",
    dayId: 0,
    hourId: 0,
    url: "",
    username: "",
  }

  getSpecialistByUsername(username: string) {
    this.userService.getUserByUserName(username).subscribe(
      (response: any) => {
        this.userSpecialist = response;
      }
    )
  }

  MakeAppointment() {
    this.isCreatedAppoiment = true;
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

  updateCalendar() {
    this.specialistCalendarData.map(
      (element: any) => {
        if (element.id == this.selectedOptionForm) {
          console.log(element.id, this.selectedOptionForm)
          this.calendarService.updateAvailableCalendar(element, false).subscribe(
            response => {
              console.log(response)
            }
          )
        }
      }
    )
  }

  getCalendarBySpecialistUsernames(username: string) {
    this.calendarService.getListCalendarBySpecialistUsername(username).subscribe(
      (response: any) => {
        this.specialistCalendar = response;
      }
    )

  }

  onSubmit() {

    let appointmentData = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userUsername: this.userLogin.username,
      calendarId: this.selectedOptionForm,
    }

    console.log(appointmentData);

    this.appointmentService.createAppointment(appointmentData).subscribe(
      (response: any) => {
        console.log(response);
        this.MakeAppointment();

      },
      (error) => {
        console.log(error);
      }
    )

  }


}
