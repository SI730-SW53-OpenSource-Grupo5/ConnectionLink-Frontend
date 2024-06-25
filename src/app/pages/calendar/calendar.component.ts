import { Component } from '@angular/core';
import { provideNativeDateAdapter } from "@angular/material/core";
import {NgForOf, NgIf} from "@angular/common";
import {InfoEventsComponent} from "../../components/info-events/info-events.component";
import {CalendarContentComponent} from "../../components/calendar/calendar-content/calendar-content.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgIf, NgForOf, InfoEventsComponent, CalendarContentComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [ provideNativeDateAdapter() ]
})
export class CalendarComponent {

}
