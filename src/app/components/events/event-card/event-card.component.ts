import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import EventEntity from "../../../models/event.entity";

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {

  @Input() events: Array<EventEntity> = [];

}
