import { CalendarService } from './../../../services/calendar.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Calendar } from '../../../models/calendar';

@Component({
  selector: 'app-date-appoinments',
  standalone: true,
  imports: [MatCardModule,
    CommonModule],
  templateUrl: './date-appoinments.component.html',
  styleUrl: './date-appoinments.component.scss'
})
export class DateAppoinmentsComponent implements OnInit{

  @Input() specialistCalendarData!: Array<any>;

  @Output() deleteCalendar = new EventEmitter<Calendar>();

  constructor(private calendarService: CalendarService) {}
  ngOnInit(): void {
      console.log(this.specialistCalendarData)
  }
  onClickRemove(calendarData: Calendar) {
    if (!calendarData || !calendarData.id) {
      return;
    }

    this.calendarService.deleteCalendar(calendarData.id).subscribe(
      () => {
        this.deleteCalendar.emit(calendarData)
      }
    );
  }
}
