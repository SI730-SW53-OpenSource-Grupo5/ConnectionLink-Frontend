import {Component, Input} from '@angular/core';
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
export class AppointmentsScheduledListComponent {

  @Input() appointments: any[] = [];

}
