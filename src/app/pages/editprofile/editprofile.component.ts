/*
import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, NgIf],
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  @ViewChild('userForm', { static: false })
  userForm!: NgForm;
  userData!: User;
  showPopup: boolean = false;
  editeProfile!: boolean;

  clickedPopup = new EventEmitter<void>();
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userData = {} as User;
    this.getUser();
    this.editeProfile = true;
  }

  updateProfile() {
    this.showPopup = !this.showPopup;
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }

  getUser() {
    this.userService.getUser('asmith').subscribe(
      (response: any) => {
        console.log('User fetched successfully:', response);
        this.userData = response[0];
      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  onSubmit() {
    console.log('Form submitted:', this.userData);
    this.updateProfile();
    /!*if(this.userForm.valid) {
      this.userService.update(this.userData).subscribe(
      (response: any) => {
        console.log('User updated successfully:', response);
      },
      (error: any) => {
        console.error('Error updating user:', error);
      }
    );
   }*!/
  }

  onCancel() {
    console.log('Form canceled');
  }
}
*/

import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule,  CommonModule],
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  @ViewChild('userForm', { static: false }) userForm!: NgForm;
  @Output() clickedPopup = new EventEmitter<void>();
  userData!: User;
  showPopup = true; // or false depending on when you want to show the popup
  editProfile = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userData = {} as User;
    this.getUser();
  }

  getUser() {
    this.userService.getUser('asmith').subscribe(
      (response: any) => {
        console.log('User fetched successfully:', response);
        this.userData = response[0];
      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  onSubmit() {
    this.editProfile = true;
    /*if (this.userForm.valid) {
      this.userService.updateUser(this.userData).subscribe(
        (response: any) => {
          console.log('User updated successfully:', response);
          this.editProfile = true;
        },
        (error: any) => {
          console.error('Error updating user:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }*/
  }

  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}

