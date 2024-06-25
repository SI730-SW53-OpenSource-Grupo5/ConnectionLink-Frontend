import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule, NgIf } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { PasswordModalComponent } from "../../components/register/password-modal/password-modal.component";
import { FillFormModalComponent } from "../../components/register/fill-form-modal/fill-form-modal.component";
import { RegisteredModalComponent } from "../../components/register/registered-modal/registered-modal.component";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { EmailExistsModalComponent } from "../../components/register/email-exists-modal/email-exists-modal.component";

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
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users: User[] = [];
  confirmPassword: string = '';
  isUserCreated: boolean = false;

  form: any = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    role: [
      "ROLE_USER"
    ],
    profileImg: '',
    username: '',
    description: '',
    bannerImageUrl: '',
    age: undefined,
    birthday: '',
    isSpecialistUser: false,
    cvUrl: ''
  };

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog) { }

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
    /* 
      if (!this.areFieldsComplete()) {
        this.dialog.open(FillFormModalComponent);
        return;
      }
    */

    if (this.form.password !== this.form.confirmPassword) {
      console.log('Las contraseñas no son iguales');
      this.dialog.open(PasswordModalComponent);
      return;
    }

    // create new user when all validations have been passed
    const newUser: User = this.createUserFromForm(this.form);
    let userRegister = this.form;

    userRegister.birthday = new Date();

    this.userService.signUp(userRegister).subscribe(
      response => {
        console.log(response);
        this.dialog.open(RegisteredModalComponent);
      },
      error => {
        console.error('Error to register a new user:', error);
      }
    );
  }

  createUserFromForm(form: any): User {
    return new User(
      '', // id, se generará automáticamente en el backend
      form.firstName + ' ' + form.lastName, // fullName
      form.username,
      form.description,
      form.profileImg,
      form.bannerImageUrl,
      form.email,
      form.password,
      form.age,
      new Date(form.birthday),
      form.isSpecialistUser,
      form.cvUrl,
      new Date(), // createdAt
      new Date()  // updatedAt
    );
  }

  areFieldsComplete() {
    const fieldsRequired: (keyof any)[] = ['fullName', 'email', 'password', 'username', 'description', 'bannerImageUrl', 'age', 'birthday', 'isSpecialistUser', 'cvUrl'];

    // verify if all inputs are fill
    for (let field of fieldsRequired) {
      const value = this.form[field];
      if (typeof value === 'string' && value.trim().length === 0) {
        return false;
      } else if (typeof value === 'number' && isNaN(value)) {
        return false;
      } else if (typeof value === 'boolean' && value === null) {
        return false;
      }
    }

    return true;
  }

  navigateToLogin() {
    this.isUserCreated = false;
    this.router.navigate(['/login']);
  }
}
