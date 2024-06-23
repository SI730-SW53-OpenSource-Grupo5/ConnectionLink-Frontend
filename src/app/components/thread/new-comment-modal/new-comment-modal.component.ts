import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {ThreadService} from "../../../services/thread.service";
import {ActivatedRoute} from "@angular/router";
import {startWith} from "rxjs";
import {AuthService} from "../../../shared/auth/auth.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-new-comment-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './new-comment-modal.component.html',
  styleUrl: './new-comment-modal.component.scss'
})
export class NewCommentModalComponent {

  user: User | null = null;
  // receive the posts array from the parent component
  @Input() post!: any;
  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
              private threadService: ThreadService, private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.user$
      .pipe(startWith(this.getUserFromLocalStorage()))
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });
  }

  private getUserFromLocalStorage(): User | null {
    const userStorage = localStorage.getItem('user');
    return userStorage ? JSON.parse(userStorage) : null;
  }


  commentData = {
    content: "",
    likes: 0,
    createdAt: new Date().toISOString(),
    postId: +this.route.snapshot.paramMap.get('id')!,
    userId: 0
  };

  onSubmitComment() {

    this.commentData.userId = Number(this.user?.id);
    console.log(this.commentData);
    this.threadService.createComment(this.commentData).subscribe(
      (response: any) => {
        console.log(response);
        this.closeModal.emit();
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    )

  }

}
