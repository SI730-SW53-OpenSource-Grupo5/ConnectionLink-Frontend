import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {EditProfileModalComponent} from "../edit-profile-modal/edit-profile-modal.component";

@Component({
  selector: 'app-profile-content',
  standalone: true,
  imports: [
    MatIcon,
    EditProfileModalComponent
  ],
  templateUrl: './profile-content.component.html',
  styleUrl: './profile-content.component.scss'
})
export class ProfileContentComponent implements OnInit {

  showPopup: boolean = false;
  user: any;

  constructor() {
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    } else {
      this.user = {};
    }
  }

  handleTogglePopup() {
    this.showPopup = !this.showPopup;
  }

  closeModal(): void {
    this.showPopup = false;
  }

  showEditProfileModal(): void {
    this.showPopup = true;
  }

}
