import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-error-credentials-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatIcon
  ],
  templateUrl: './error-credentials-modal.component.html',
  styleUrl: './error-credentials-modal.component.scss'
})
export class ErrorCredentialsModalComponent {

}
