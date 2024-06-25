import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgIf} from "@angular/common";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  @Input() isSidebarOpen!: boolean;
  user: any;
  constructor(private router: Router, private authService: AuthService){}

  navigateToLogin() {
    this.authService.removeUser(); // eliminamos el usuario actualmente logeado
    this.router.navigate(['/login']);
  }
  
  ngOnInit(): void {
    let userJSON = localStorage.getItem("user");

    if (userJSON !== null) {
        this.user = JSON.parse(userJSON);
    }
  }
}
