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

@Component({
  selector: 'app-make-appointment',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule 
  ],
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.scss'
})
export class MakeAppointmentComponent implements OnInit {
  @Input() showPopup!: boolean;
  @Input() specialistData!: Specialist;
  @Input() specialistCalendarData!: Array<Calendar>;

  @Output() clickedPopup = new EventEmitter<void>();
  
  @ViewChild('specialistForm', { static: false })
  specialistForm!: NgForm;

  specialistFormData!: Specialist;
  isCreatedAppoiment!: boolean;
  selectedOptionForm!: string;

  constructor(private router: Router, private appointmentService: AppointmentService, private calendarService: CalendarService) {}
  


  ngOnInit() {
    this.selectedOptionForm = "";
    this.isCreatedAppoiment = false;
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
        if(element.id == this.selectedOptionForm) {
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

  onSubmit() {
    if(this.specialistForm.form.value.schedule.toString().length > 0) {
        let appointment: Appointment = {
          id: "-1",
          userId: "asmith",
          calendarId: this.specialistForm.form.value.schedule
        }
        
        this.appointmentService.createAppointment(appointment).subscribe(
          (response: any) => {
            this.updateCalendar()
            this.MakeAppointment()
          }
        )
    } 
  }

  
}
  