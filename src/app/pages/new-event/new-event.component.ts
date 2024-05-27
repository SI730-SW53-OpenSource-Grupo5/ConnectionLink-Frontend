import { Component } from '@angular/core';
import {PostComponent} from "../../components/post/post.component";
import {SliderComponent} from "../../components/slider/slider.component";
import {CreateNewEventComponent} from "../../components/events/create-new-event/create-new-event.component";

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [
    PostComponent,
    SliderComponent,
    CreateNewEventComponent
  ],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.scss'
})
export class NewEventComponent {

}
