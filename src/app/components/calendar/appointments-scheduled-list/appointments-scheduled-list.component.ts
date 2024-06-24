import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-appointments-scheduled-list',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    DatePipe
  ],
  templateUrl: './appointments-scheduled-list.component.html',
  styleUrl: './appointments-scheduled-list.component.scss'
})
export class AppointmentsScheduledListComponent implements OnInit{
  
  @Input() appointments: any[] = [];
  user: any | null = null;

  public  ngOnInit(): void {
    let user = localStorage.getItem("user")
    if(user != null) {
      this.user = JSON.parse(user);
    }
  }

}
