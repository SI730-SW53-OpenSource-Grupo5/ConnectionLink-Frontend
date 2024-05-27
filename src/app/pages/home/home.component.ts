import { Component } from '@angular/core';
import {SliderComponent} from "../../components/slider/slider.component";
import {PostComponent} from "../../components/post/post.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    PostComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
