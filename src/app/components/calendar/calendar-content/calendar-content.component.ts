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

  filters: Filter[] = [
    {value: 'appointments', viewValue: 'Appointments scheduled'},
    {value: 'events', viewValue: 'Events registered'},
  ];

  constructor(private appointmentService: AppointmentService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.appointmentService.getListAppointments().subscribe(
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
        this.appointmentService.getListAppointments().subscribe(
          (appointments: any[]) => {
            this.appointments = appointments;
            this.selectedFilter = 'appointments';
          },
          (error) => {
            console.log(error);
          }
        );
        break;
      case 'events':
        this.eventService.getAllEvents().subscribe(
          (events: any[]) => {
            this.events = events;
            this.selectedFilter = 'events';
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
