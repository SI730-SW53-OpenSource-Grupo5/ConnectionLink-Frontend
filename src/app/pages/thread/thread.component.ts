import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {ThreadContentComponent} from "../../components/thread/thread-content/thread-content.component";

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    ThreadContentComponent,
  ],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss'
})
export class ThreadComponent {

}
