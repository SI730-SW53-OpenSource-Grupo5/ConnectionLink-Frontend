import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import EventEntity from "../../../models/event.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {Router} from "@angular/router";
import {AppointmentService} from "../../../services/appointment.service";
import {CalendarService} from "../../../services/calendar.service";
import {ModalEventRegisterComponent} from "../modal-event-register/modal-event-register.component";
import {EventUserRegisterComponent} from "../event-user-register/event-user-register.component";

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgOptimizedImage,
    FormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    NgIf,
    EventUserRegisterComponent
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent implements OnInit {

  showPopUp!: boolean;
  actualEvent!: string;
  @Input() events: Array<EventEntity> = [];
  user: any;

  constructor(private router: Router, private appointmentService: AppointmentService,
              private calendarService: CalendarService) {
  }

  ngOnInit() {
    let userJSON = localStorage.getItem("user");

    if (userJSON !== null) {
        this.user = JSON.parse(userJSON);
    }
    console.log(this.events)
  }

  showRegisterEvent(id: string) {
    this.showPopUp = true;
    this.actualEvent = id;
  }

  closeModal(): void {
    this.showPopUp = false;
  }
  checkUserExists(username: string, event: EventEntity): boolean {
    return event.users.some((user: any )=> user.username === username);
  }
}
