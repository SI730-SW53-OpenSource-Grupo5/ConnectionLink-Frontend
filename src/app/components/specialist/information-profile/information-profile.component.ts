import { Specialist } from './../../../models/specialist';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-information-profile',
  standalone: true,
  imports: [MatIcon, MatButtonModule],
  templateUrl: './information-profile.component.html',
  styleUrl: './information-profile.component.scss'
})
export class InformationProfileComponent {
  @Output() clickedPopup = new EventEmitter<void>();
  @Input() specialistData!: Specialist;
}
