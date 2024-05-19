import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PasswordModalComponent} from "../../components/register/password-modal/password-modal.component";
import {FillFormModalComponent} from "../../components/register/fill-form-modal/fill-form-modal.component";
import {RegisteredModalComponent} from "../../components/register/registered-modal/registered-modal.component";
import {Router} from "@angular/router";

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
export class RegisterComponent {

  confirmPassword: string = '';

  formValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'patient',
  }

  constructor(private router: Router, public dialog: MatDialog) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmitRegister() {
    console.log(this.formValues);

    if (this.formValues.password !== this.confirmPassword) {
      console.log('Las contraseñas no son iwales');
      this.dialog.open(PasswordModalComponent);
      return;
    }

  }

}
