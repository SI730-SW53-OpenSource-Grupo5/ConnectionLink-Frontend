import { User } from './../../../models/user';
import { CalendarService } from './../../../services/calendar.service';
import { AppointmentService } from './../../../services/appointment.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Specialist } from '../../../models/specialist';
import { FormsModule, NgForm } from '@angular/forms';
import { Calendar } from '../../../models/calendar';
import { Appointment } from '../../../models/appointment';
import { Hour } from '../../../models/hour';
import { Day } from '../../../models/day';

@Component({
  selector: 'app-make-date-appoinment',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule 
  ],
  templateUrl: './make-date-appoinment.component.html',
  styleUrl: './make-date-appoinment.component.scss'
})
export class MakeDateAppoinmentComponent implements OnInit {
  @Input() showPopup!: boolean
  @Input() specialistData!: Specialist;
  @Input() specialistCalendarData!: Array<Calendar>;

  @Output() clickedPopup = new EventEmitter<void>();
  
  @ViewChild('specialistForm', { static: false })
  specialistForm!: NgForm;

  specialistFormData!: Specialist;
  isCreatedAppoiment!: boolean;
  selectedDayForm!: string;
  selectedHourForm!: string;

  date !: Calendar;
  hours !: Hour[];
  days !: Day[];
  user: any | null = null;

  constructor(private router: Router, private appointmentService: AppointmentService, private calendarService: CalendarService) {}
  
  ngOnInit() {
    let user = localStorage.getItem("user")
    if(user != null) {
      this.user = JSON.parse(user);
    }

    this.selectedDayForm = "";
    this.selectedHourForm = "";
    this.date = {} as Calendar;
    this.isCreatedAppoiment = false;
    this.loadDaysAndHours();
  }

  MakeAppointment() {
    this.isCreatedAppoiment = true;
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

  onSubmit() {
    this.updateCalendar()
    this.MakeAppointment()
  } 
  
  updateCalendar() {
    this.days.map(
      (day: Day) => {
        if(day.id == this.selectedDayForm) {
          this.hours.map(
            (hour: Hour) => {
              if(hour.id == this.selectedHourForm) {
                let data: any = {
                  "dayId": this.selectedDayForm,
                  "hourId": this.selectedHourForm,
                  "url": "https://meet.google.com/",
                  "specialistUsername": this.user.username
                };

                this.calendarService.createDateCalendar(data).subscribe(
                  response => {
                    console.log(response)
                  }
                )
              }
            }
          )
        }
      }
    )
  }

  finalClose() {
    this.isCreatedAppoiment = false
    this.selectedDayForm = ""
    this.selectedHourForm = ""
    this.clickedPopup.emit()
  }

  loadDaysAndHours() {
    this.calendarService.getAllDays().subscribe(
      (response: any) => {
        this.days = response
      }
    )
    this.calendarService.getAllHours().subscribe(
      (response: any) => {
        this.hours = response
        console.log(this.hours[0])
      }
    )
  }

}
  