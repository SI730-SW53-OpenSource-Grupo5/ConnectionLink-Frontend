import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-edit-profile-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    NgIf,
    MatButton
  ],
  templateUrl: './edit-profile-modal.component.html',
  styleUrl: './edit-profile-modal.component.scss'
})
export class EditProfileModalComponent {

  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private router: Router) {
  }

  userData = {
    firstName: '',
    email: '',
    etiquets: '',
    bio: ''
  }

  onSubmit() {
    console.log('User updated');
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

}
