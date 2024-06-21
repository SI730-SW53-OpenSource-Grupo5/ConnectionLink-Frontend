import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-appointments-scheduled-list',
  standalone: true,
    imports: [
        MatIcon,
        NgForOf
    ],
  templateUrl: './appointments-scheduled-list.component.html',
  styleUrl: './appointments-scheduled-list.component.scss'
})
export class AppointmentsScheduledListComponent {

}
