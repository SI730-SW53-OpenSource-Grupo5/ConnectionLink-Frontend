import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgIf} from "@angular/common";

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
export class SidebarComponent {
  @Input() isSidebarOpen!: boolean;
  constructor(private router: Router){}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


}
