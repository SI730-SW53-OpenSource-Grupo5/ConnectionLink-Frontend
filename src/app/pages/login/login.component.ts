import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {FormsModule} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {
  ErrorCredentialsModalComponent
} from "../../components/login/error-credentials-modal/error-credentials-modal.component";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ErrorCredentialsModalComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  email: string = '';
  password: string = '';
  isRegistered: boolean = false;

  constructor(private router: Router, private userService: UserService,
              public dialog: MatDialog, private authService: AuthService) {
  }

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

  handleSubmitLogin() {
    console.log(this.email);
    console.log(this.password);

    this.authService.loginUser(this.email, this.password).subscribe(
      user => {
        if (user) {
          this.authService.setUser(user);
          this.navigateToHome();
        } else {
          this.dialog.open(ErrorCredentialsModalComponent);
        }
      },
      error => {
        this.dialog.open(ErrorCredentialsModalComponent);
      }
    );

  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
