import { OnInit, Component, ViewChild } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import { MatNativeDateModule } from '@angular/material/core';

import { NgForm } from '@angular/forms';
import { NewEventService } from '../../../services/new-event.service';
import {NewEventEntity} from "../../../models/new-event.entity";

import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-create-new-event',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    NgIf,
    ReactiveFormsModule,
    MatButton,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatDatepicker,
    MatDatepickerModule,
    MatIcon,
    MatLabel,
    MatNativeDateModule
  ],
  templateUrl: './create-new-event.component.html',
  styleUrl: './create-new-event.component.scss'
})
export class CreateNewEventComponent {
  formData: NewEventEntity = {
    eventName: '',
    platform: '',
    schedule: '',
    participants: 0,
    image: null,
    description: ''
  };
  constructor(private newEventService: NewEventService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
  }

  onSubmit() {
    this.newEventService.createEvent(this.formData).subscribe(
      (response) => {
        console.log('Evento creado exitosamente:', response);
      },
      (error) => {
        console.error('Error al crear el evento:', error);
      }
    );
  }
}
