import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {EventService} from "../../../services/event.service";

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
export class ModalEventRegisterComponent {

  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();
  schedules: string[] = ['Horario 1', 'Horario 2'];
  platforms: string[] = ['Microsoft Team', 'Videollamada Zoom'];

  eventData = {
    firstName: '',
    email: '',
    etiquets: '',
    phone: ''
  };
  selectedOptionForm!: string;

  constructor(private eventService: EventService) { }

  onSubmit() {
    console.log('oli');
  }

}
