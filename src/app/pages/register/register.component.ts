import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PasswordModalComponent} from "../../components/register/password-modal/password-modal.component";
import {FillFormModalComponent} from "../../components/register/fill-form-modal/fill-form-modal.component";
import {RegisteredModalComponent} from "../../components/register/registered-modal/registered-modal.component";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {EmailExistsModalComponent} from "../../components/register/email-exists-modal/email-exists-modal.component";

interface Form {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  profileImg: string;
  [key: string]: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    CommonModule,
    PasswordModalComponent,
    FillFormModalComponent,
    RegisteredModalComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  users: User[] = [];
  confirmPassword: string = '';
  isUserCreated: boolean = false;

  form: Form = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    role: 'patient',
    profileImg: '',
  }

  constructor(private router: Router, private userService: UserService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
        console.log(this.users);
      }
    )
  }

  onSubmitRegister() {
    console.log(this.form);

    // verify if the inputs are empty
    if (!this.areFieldsComplete()) {
      this.dialog.open(FillFormModalComponent);
      return;
    }

    if (this.form.password !== this.confirmPassword) {
      console.log('Las contraseñas no son iwales');
      this.dialog.open(PasswordModalComponent);
      return;
    }

    // verify is the email has already been registered in the users array with some method
    const emailExists = this.users.some(user => user.email === this.form.email);
    if (emailExists) {
      this.dialog.open(EmailExistsModalComponent);
      return;
    }

    // create new user when all validations have been passed
    this.userService.createNewUser(this.form).subscribe(
      response => {
        console.log(response);
        this.dialog.open(RegisteredModalComponent);
      },
      error => {
        console.error('Error to register a new user:', error);
      }
    );

  }

  areFieldsComplete() {

    const fieldsRequired = ['firstName', 'lastName', 'phone', 'email', 'password', 'role']

    // verify if all inputs are fill
    for (let field of fieldsRequired) {
      if (!this.form[field] || this.form[field].trim().length === 0) {
        return false;
      }
    }

    // verify if at least one of the radio buttons is selected
    if (this.form.role == '' && this.form.role == '') {
      return false;
    }

    return true;

  }

  navigateToLogin() {
    this.isUserCreated = false;
    this.router.navigate(['/login']);
  }

}
