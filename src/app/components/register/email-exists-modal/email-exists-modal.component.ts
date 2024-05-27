import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-email-exists-modal',
  standalone: true,
    imports: [
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatIcon
    ],
  templateUrl: './email-exists-modal.component.html',
  styleUrl: './email-exists-modal.component.scss'
})
export class EmailExistsModalComponent {

}
