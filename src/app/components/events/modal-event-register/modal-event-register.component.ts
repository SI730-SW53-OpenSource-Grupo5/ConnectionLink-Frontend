import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../models/user';
import EventEntity from "../../../models/event.entity";
import {EventService} from "../../../services/event.service";

@Component({
  selector: 'app-modal-event-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './modal-event-register.component.html',
  styleUrl: './modal-event-register.component.scss'
})
export class ModalEventRegisterComponent implements OnInit {
  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();
  eventData!: EventEntity;

  @Output() clickedPopup = new EventEmitter<void>();

  @ViewChild('eventForm') eventForm!: NgForm;

  specialistFormData!: User;
  isCreatedEvent!: boolean;
  selectedOptionForm!: string;

  constructor(private router: Router, private eventService: EventService) {
    this.eventData= new EventEntity('','','','','','',0,'');
  }

  ngOnInit() {
    this.selectedOptionForm = "";
    this.isCreatedEvent = false;
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
