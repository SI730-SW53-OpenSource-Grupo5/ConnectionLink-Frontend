import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-fill-form-modal',
  standalone: true,
    imports: [
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatIcon
    ],
  templateUrl: './fill-form-modal.component.html',
  styleUrl: './fill-form-modal.component.scss'
})
export class FillFormModalComponent {

}
