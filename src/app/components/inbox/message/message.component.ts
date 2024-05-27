import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MessageService } from '../../../services/message.service';
import { UserService } from '../../../services/user.service';
import { message } from '../../../models/message';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MatTableModule,MatCardModule,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  messages: message[] = [];
  users: User[] = [];
  messagesWithUsers: any[] = [];
  filterDate: Date = new Date();
  filteredMessages: any[] = [];
  previousMessageId: string | undefined = undefined;
  displayedDates: Map<string, boolean> = new Map();
  

  constructor(private messageService: MessageService, private userService:UserService) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messageService.getListMessages().subscribe((data:any) => { 
      this.messages = data as message[];
      this.messages.forEach((messages)=>{
        this.userService.getUserById(messages.iduser).subscribe((users)=>{
          const messagesWithUsers = {messages,users};
          this.messagesWithUsers.push(messagesWithUsers);
          this.sortMessagesByDate();

        })
      })
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }
  onImageLoad(event: Event, message: any) {
    const img = event.target as HTMLImageElement;
   
  }
  sortMessagesByDate() {
    // Sort messagesWithUsers based on message date (descending order)
    this.messagesWithUsers.sort((a, b) => {
      const messageDateA = new Date(a.messages.date);
      const messageDateB = new Date(b.messages.date);
      return messageDateB.getTime() - messageDateA.getTime();
    });
  }
  trackByMessageId(index: number, item: any): string | undefined {
    if (item) {
      return item.messages.id;
    }
    return undefined;
  }
  shouldDisplayDate(index: number): boolean {
    if (index === 0) {
      return true;
    }
  
    const currentDate = this.messagesWithUsers[index].messages.date;
    const previousDate = this.messagesWithUsers[index - 1].messages.date;
  
    return currentDate !== previousDate; 
  }

}