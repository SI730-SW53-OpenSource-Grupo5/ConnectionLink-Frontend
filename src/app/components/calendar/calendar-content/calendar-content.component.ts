import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {AppointmentsScheduledListComponent} from "../appointments-scheduled-list/appointments-scheduled-list.component";
import {EventsRegisteredListComponent} from "../events-registered-list/events-registered-list.component";

interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calendar-content',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    NgForOf,
    AppointmentsScheduledListComponent,
    EventsRegisteredListComponent
  ],
  templateUrl: './calendar-content.component.html',
  styleUrl: './calendar-content.component.scss'
})
export class CalendarContentComponent {

  selectedFilter: 'appointments' | 'events' = 'events';

  filters: Filter[] = [
    {value: 'appointments', viewValue: 'Appointments scheduled'},
    {value: 'events', viewValue: 'Events registered'},
  ];

  orderNotificationsBy(filter: string) {

    console.log(filter);

    switch (filter) {
      case 'appointments':
        this.selectedFilter = 'appointments';
        break;
      case 'events':
        this.selectedFilter = 'events';
        break;
      default:
        console.log('Invalid filter');
    }

  }

}
