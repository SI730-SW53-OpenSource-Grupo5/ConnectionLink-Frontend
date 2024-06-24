import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {EventService} from "../../../services/event.service";
import {Router} from "@angular/router";
import EventEntity from "../../../models/event.entity";
import  { UserEventRegisterEntity } from "../../../models/userEventRegister.entity";

@Component({
  selector: 'app-event-user-register',
  standalone: true,
    imports: [
      FormsModule,
      MatFormField,
      MatInput,
      MatOption,
      MatSelect,
      NgIf,
      NgForOf
    ],
  templateUrl: './event-user-register.component.html',
  styleUrl: './event-user-register.component.scss'
})

export class EventUserRegisterComponent implements OnInit {
  @Input() showPopup!: boolean;
  @Input() actualEvent!: string;

  @Output() closeModal = new EventEmitter<void>();

  isCreatedUserRegister!: boolean;
  user!: any;
  eventData: UserEventRegisterEntity = {
    'username': '',
    'eventId': 1
  }

  @Output() clickedPopup = new EventEmitter<void>();

  @ViewChild('userRegisterForm') userRegisterForm!: NgForm;

  constructor(private router: Router, private eventService: EventService) {
  }
  ngOnInit(): void {
    let userJSON = localStorage.getItem("user");
    
    if (userJSON !== null) {
        this.user = JSON.parse(userJSON);
        
    }
  }

  MakeUserRegister() {
    this.isCreatedUserRegister = true;
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

  onSubmit() {
    console.log({username: this.user.username, eventId: this.actualEvent})
    this.eventService.createUserEventRegister({username: this.user.username, eventId: this.actualEvent}).subscribe(
      (response: any) => {
        this.MakeUserRegister()
      }
    )
  }
}
