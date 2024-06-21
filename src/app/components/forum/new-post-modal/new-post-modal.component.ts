import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-new-post-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    NgForOf,
    NgIf
  ],
  templateUrl: './new-post-modal.component.html',
  styleUrl: './new-post-modal.component.scss'
})
export class NewPostModalComponent {

    @Input() showPopup!: boolean;
    @Output() closeModal = new EventEmitter<void>();

  postData = {
    title: '',
    content: '',
  };

  onSubmit() {
    console.log('oli');
  }

}
