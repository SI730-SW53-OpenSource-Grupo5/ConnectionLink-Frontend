import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {AppointmentsScheduledListComponent} from "../appointments-scheduled-list/appointments-scheduled-list.component";
import {EventsRegisteredListComponent} from "../events-registered-list/events-registered-list.component";
import {AppointmentService} from "../../../services/appointment.service";
import {EventService} from "../../../services/event.service";
import { User } from '../../../models/user';

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
export class CalendarContentComponent implements OnInit {

  appointments: any[] = [];
  events: any[] = [];
  selectedFilter: 'appointments' | 'events' = 'appointments';
  user: any | null = null;
  filters: Filter[] = [
    {value: 'appointments', viewValue: 'Appointments scheduled'},
    {value: 'events', viewValue: 'Events registered'},
  ];

  constructor(private appointmentService: AppointmentService, private eventService: EventService) {
  }

  ngOnInit(): void {
    let user = localStorage.getItem("user")
    if(user != null) {
      this.user = JSON.parse(user);
    }
    
    this.appointmentService.getListAppointmentsByUser(this.user.username).subscribe(
      (appointments: any[]) => {
        this.appointments = appointments;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  orderNotificationsBy(filter: string) {

    console.log(filter);

    switch (filter) {
      case 'appointments':
        this.appointmentService.getListAppointmentsByUser(this.user.username).subscribe(
          (appointments: any[]) => {
            this.appointments = appointments;
            this.selectedFilter = 'appointments';
            console.log(appointments)
          },
          (error) => {
            console.log(error);
          }
        );
        break;
      case 'events':
        this.eventService.getEventByUserUsername(this.user.username).subscribe(
          (events: any[]) => {
            this.events = events;
            this.selectedFilter = 'events';
            console.log(events)
          },
          (error) => {
            console.log(error);
          }
        );
        this.selectedFilter = 'events';
        break;
      default:
        console.log('Invalid filter');
    }

  }

}
