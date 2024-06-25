import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../../shared/auth/auth.service";
import {startWith} from "rxjs";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

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
export class EditProfileModalComponent implements OnInit {

  user: User | null = null;
  userData: any = {};
  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService,
    private userService: UserService) {
  }

  ngOnInit(): void {
  this.authService.user$
    .pipe(startWith(this.getUserFromLocalStorage()))
    .subscribe(user => {
      if (user) {
        this.user = user;
        this.userData = {
          fullName: '',
          username: this.user?.username!,
          description: '',
          profileImageUrl: '',
          bannerImageUrl: this.user?.bannerImageUrl!,
          email: '',
          password: this.user?.password!,
          age: 0,
          birthday: this.user?.birthday!,
          isSpecialistUser: this.user?.isSpecialistUser!,
          cvUrl: this.user?.cvUrl!,
        }
      }
    });
}

  private getUserFromLocalStorage(): User | null {
    const userStorage = localStorage.getItem('user');
    return userStorage ? JSON.parse(userStorage) : null;
  }

  onSubmit() {

    console.log(this.userData);

    // update user by id
    this.userService.updateUser(this.user?.id!, this.userData).subscribe(
      (user: any) => {
        this.authService.setUser(user);
        // update user in local storage
        localStorage.setItem('user', JSON.stringify(user));
        this.closeModal.emit();
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

}
