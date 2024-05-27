import { Component } from '@angular/core';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { provideNativeDateAdapter } from "@angular/material/core";
import {NgForOf, NgIf} from "@angular/common";
import {InfoEventsComponent} from "../../components/info-events/info-events.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, NgIf, NgForOf, InfoEventsComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [ provideNativeDateAdapter() ]
})
export class CalendarComponent {
  selectedDate: Date = new Date();
}
