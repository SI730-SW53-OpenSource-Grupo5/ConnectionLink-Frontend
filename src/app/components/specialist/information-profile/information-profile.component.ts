import { Specialist } from './../../../models/specialist';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../shared/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-information-profile',
  standalone: true,
  imports: [MatIcon, MatButtonModule, DatePipe],
  templateUrl: './information-profile.component.html',
  styleUrl: './information-profile.component.scss'
})
export class InformationProfileComponent implements OnInit{

  user: any | null = null;
  userLogin: any | null = null;
  @Output() clickedPopup = new EventEmitter<void>();
  @Input() specialistData!: Specialist;

  constructor(private userService: UserService, authService: AuthService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let userL = localStorage.getItem("user")
    if(userL != null) {
      this.userLogin = JSON.parse(userL);
    }
    
    this.loadUserInformation();
  }

  loadUserInformation() {
    
    this.route.paramMap.subscribe(params => {
      const userUsername = params.get('username')!;
      this.getUserByUsername(userUsername);
    });
  }

  getUserByUsername(username: string) {
    this.userService.getUserByUserName(username).subscribe(
      (user) => {
        this.user = user;
      }
    )
  }

}
