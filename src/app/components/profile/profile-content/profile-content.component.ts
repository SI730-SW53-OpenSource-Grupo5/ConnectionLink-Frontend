import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {EditProfileModalComponent} from "../edit-profile-modal/edit-profile-modal.component";
import {AuthService} from "../../../shared/auth/auth.service";
import {startWith} from "rxjs";
import {User} from "../../../models/user";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-profile-content',
  standalone: true,
  imports: [
    MatIcon,
    EditProfileModalComponent,
    DatePipe
  ],
  templateUrl: './profile-content.component.html',
  styleUrl: './profile-content.component.scss'
})
export class ProfileContentComponent implements OnInit {

  showPopup: boolean = false;
  user: User | null = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user$
      .pipe(startWith(this.getUserFromLocalStorage()))
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });
  }

  private getUserFromLocalStorage(): User | null {
    const userStorage = localStorage.getItem('user');
    return userStorage ? JSON.parse(userStorage) : null;
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
