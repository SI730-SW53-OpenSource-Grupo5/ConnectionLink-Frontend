import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatCardAvatar, MatCardHeader, MatCardImage} from "@angular/material/card";
import {User} from "../../models/user";
import {AuthService} from "../../shared/auth/auth.service";
import {startWith} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatCardAvatar,
    MatCardImage,
    MatCardHeader
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user: User | null = null;

  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
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

}
