import { EventService } from './../../services/event.service';
import { EventEntity } from './../../models/calendar-event';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-info-events',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './info-events.component.html',
  styleUrl: './info-events.component.scss'
})
export class InfoEventsComponent implements OnInit {
  dataSource =new MatTableDataSource();
  displayedColumns: string[] = ['id', 'userId' ,'specialistId', 'description', 'date'];
  events: EventEntity[] = [];
  eventsData: EventEntity;

  constructor(private eventService: EventService) {
    this.eventsData = {} as EventEntity;
  }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(
      (response: any) => {
        // Map the response data to EventEntity objects and assign to dataSource
        this.events = response.map((event: any) => {
          console.log(event)
          return new EventEntity(event.id, event.userId, event.specialistId, event.description, event.date);
        });
        this.dataSource.data = this.events;
        console.log(this.events);
      },
      (error: any) => {
        // Handle error
        console.error('Error fetching events:', error);
      }
    );
  }
}
