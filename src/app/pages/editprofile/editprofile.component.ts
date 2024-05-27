import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [ MatFormField, FormsModule, MatInput],
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  userForm!: NgForm;
  userData!: User;
  id: string='1';
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userData = {} as User;
    this.getUser(this.id);
  }

  getUser(id: string) {
    this.userService.getUserById(id).subscribe(
      (response: User) => {
        console.log('User data', response);
        this.userData = response ;
      }
    );
  }

  onSubmit() {
    if(this.userForm.form.value.toString().length > 0) {
      this.userService.updateUser(this.id, this.userForm.value.userData).subscribe(
        (response: User) => {
          console.log('User updated', response);
        },
        (error: any) => {
          console.log('Error updating user', error);
        }
      );
    }
  }

  onCancel() {
    console.log('Form canceled');
  }
}
