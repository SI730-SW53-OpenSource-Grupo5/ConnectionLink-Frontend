import { Component } from '@angular/core';
import {ProfileContentComponent} from "../../components/profile/profile-content/profile-content.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileContentComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
