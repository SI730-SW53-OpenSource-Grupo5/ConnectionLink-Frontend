import { Calendar } from './../../models/calendar';
import { MakeDateAppoinmentComponent } from './../../components/appoinment/make-date-appoinment/make-date-appoinment.component';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Specialist } from '../../models/specialist';
import { CalendarService } from '../../services/calendar.service';
import { SpecialistService } from '../../services/specialist.service';
import { CommonModule } from '@angular/common';
import { DateAppoinmentsComponent } from '../../components/appoinment/date-appoinments/date-appoinments.component';

@Component({
  selector: 'app-appoiment',
  standalone: true,
  imports: [MatIcon, MakeDateAppoinmentComponent, CommonModule, DateAppoinmentsComponent],
  templateUrl: './appoiment.component.html',
  styleUrl: './appoiment.component.scss'
})
export class AppoimentComponent implements OnInit{
  specialistData!: Specialist;
  specialistCalendarData!: Array<Calendar>;
  isEditMode !: boolean;
  showPopup: boolean = false;
  calendarSelected !: Calendar;
  constructor(private specialistService: SpecialistService, private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.specialistData = {} as Specialist;
    this.specialistCalendarData = [] as Array<Calendar>;  
    this.isEditMode = false;
    this.calendarSelected = {} as Calendar;
    this.loadInitialData();
  }

  loadInitialData() {
    this.specialistService.getSpecialist("smithandrew").subscribe(
      (response: any) => {
        this.specialistData = response[0]
      }
    )
    this.calendarService.getListCalendarSpecialist("smithandrew").subscribe(
      (response: any) => {
        this.specialistCalendarData = response
      }
    )
  }
  onClickPopup() {
    this.showPopup = !this.showPopup;
  }

  changeEditMode(mode: boolean) {
    this.isEditMode = mode;
  }

  changeCalendarSelected(calendar: Calendar) {
    this.calendarSelected = calendar;
  }

  deleteCalendar(cal: Calendar) {
    this.specialistCalendarData = this.specialistCalendarData.filter(calendar => calendar.id !== cal.id);
  }
}
