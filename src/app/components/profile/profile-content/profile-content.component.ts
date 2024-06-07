import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-profile-content',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './profile-content.component.html',
  styleUrl: './profile-content.component.scss'
})
export class ProfileContentComponent implements OnInit {

  user: any;

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    } else {
      this.user = {};
    }
  }

}
