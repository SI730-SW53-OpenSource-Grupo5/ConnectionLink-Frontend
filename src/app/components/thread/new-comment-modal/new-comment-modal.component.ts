import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-new-comment-modal',
  standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatInput,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './new-comment-modal.component.html',
  styleUrl: './new-comment-modal.component.scss'
})
export class NewCommentModalComponent {

  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  commentData = {
    content: '',
  };

  onSubmit() {
    console.log('oli');
  }

}
