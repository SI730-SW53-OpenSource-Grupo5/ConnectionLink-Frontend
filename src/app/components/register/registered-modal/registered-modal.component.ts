import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-registered-modal',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatIcon
  ],
  templateUrl: './registered-modal.component.html',
  styleUrl: './registered-modal.component.scss'
})
export class RegisteredModalComponent {

}
