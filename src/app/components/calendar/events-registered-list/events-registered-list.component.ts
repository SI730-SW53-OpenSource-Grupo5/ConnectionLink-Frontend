import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-events-registered-list',
  standalone: true,
  imports: [
    MatIcon,
    CommonModule
  ],
  templateUrl: './events-registered-list.component.html',
  styleUrl: './events-registered-list.component.scss'
})
export class EventsRegisteredListComponent {

  @Input() events: any[] = [];

}
