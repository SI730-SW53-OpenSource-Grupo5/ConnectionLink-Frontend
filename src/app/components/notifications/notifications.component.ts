import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../services/notification.service';
import { Notifications } from '../../models/Notifications';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-notification-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationModalComponent implements OnInit {

  notifications: Notifications[] = [];

  constructor(
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<NotificationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.notificationService.getNotificationsByUsername(this.data.username).subscribe((notifications: Notifications[]) => {
      this.notifications = notifications;
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
