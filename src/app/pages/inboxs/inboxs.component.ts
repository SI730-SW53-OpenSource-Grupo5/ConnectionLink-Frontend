import { Component } from '@angular/core';
import { MessageComponent } from '../../components/inbox/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-inboxs',
  standalone: true,
  imports: [MessageComponent,],
  templateUrl: './inboxs.component.html',
  styleUrl: './inboxs.component.scss',
  providers: [MessageService, HttpClientModule,UserService]
})
export class InboxsComponent {

}
