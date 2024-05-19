import { Component } from '@angular/core';
import {ForumContentComponent} from "../../components/forum/forum-content/forum-content.component";

interface Filter {
  value: string;
  viewValue: string;
}

interface Topic {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    ForumContentComponent
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {

}
