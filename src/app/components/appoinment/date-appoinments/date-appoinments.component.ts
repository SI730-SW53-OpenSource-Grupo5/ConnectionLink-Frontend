import { CalendarService } from './../../../services/calendar.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class DateAppoinmentsComponent {
  @Input() specialistCalendarData!: Array<Calendar>;

  @Output() deleteCalendar = new EventEmitter<Calendar>();

  constructor(private calendarService: CalendarService) {}

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
