import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import EventEntity from "../../models/event.entity";
import {EventService} from "../../services/event.service";
import {EventCardComponent} from "../../components/events/event-card/event-card.component";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {ModalEventRegisterComponent} from "../../components/events/modal-event-register/modal-event-register.component";

interface Filter {
  value: string,
  viewValue: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardModule,
    MatIcon,
    EventCardComponent,
    MatFormField,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    ModalEventRegisterComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {

  showPopUp!: boolean;
  selectedEventFilter: string | null = null;
  events: Array<EventEntity> = [];
  // guardamos una copia de arreglo inicial
  initialEvents: Array<EventEntity> = [];

  filters: Filter[] = [
    {value: 'free', viewValue: 'Free'},
    {value: 'paid', viewValue: 'Premium'},
  ]

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getAllEvents();
  }

  filterByStatus(status: string) {
    console.log(status);
    //const filteredEvents = this.events.filter(event => event.status.toLowerCase().includes(status.toLowerCase()));
    //this.events = filteredEvents;
  }

  showRegisterEvent() {
    this.showPopUp = true;
  }

  closeModal(): void {
    this.showPopUp = false;
  }
  refreshEvents() {
    // restauramos el estado inicial de events
    this.events = [...this.initialEvents];
    this.selectedEventFilter = null;
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(
      (response: any) => {
        this.events = response.map((item: EventEntity) => {
          let event = new EventEntity(
            item.id,
            item.title,
            item.description,
            item.profileImageUrl,
            item.bannerImageUrl,
            item.day,
            item.category,
            item.specialist,
            item.users
          );
          this.eventService.getSpecialistByEvent(item.specialist.username);
          /*this.eventService.getSpecialistByEvent(item.specialist.username).subscribe(
            (specialist: any) => {
              console.log(specialist);
              // se ha creado una nuevo property en la entidad EventEntity
              // para aceptar un objeto specialist con la informacion de specialist
              event.specialistt = specialist.specialist;
            }
          );*/

          return event;
        });
        this.initialEvents = [...this.events];
        console.log(this.events);
      }
    )
  }

}
