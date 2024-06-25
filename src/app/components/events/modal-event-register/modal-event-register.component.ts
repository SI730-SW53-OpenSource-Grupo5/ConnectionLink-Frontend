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

@Component({
  selector: 'app-modal-event-register',
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
  templateUrl: './modal-event-register.component.html',
  styleUrl: './modal-event-register.component.scss'
})
export class ModalEventRegisterComponent implements OnInit{

  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();
  eventData!: EventEntity;
  isCreatedEvent!: boolean;
  user !: any;
  @Output() clickedPopup = new EventEmitter<void>();

  @ViewChild('eventForm') eventForm!: NgForm;

  constructor(private router: Router, private eventService: EventService) {
    this.eventData= new EventEntity('','','','','','',0,'',0);
  }
  ngOnInit(): void {
    let userJSON = localStorage.getItem("user");

    if (userJSON !== null) {
        this.user = JSON.parse(userJSON);
    }
  }
  
  MakeEvent() {
    this.isCreatedEvent = true;
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

  onSubmit() {
    this.eventService.createEvent(this.eventForm.value).subscribe(
      (response: any) => {
        this.MakeEvent()
      }
    )
  }
}
