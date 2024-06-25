import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {AuthService} from "../../../shared/auth/auth.service";
import {User} from "../../../models/user";
import {startWith} from "rxjs";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-new-post-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    NgForOf,
    NgIf
  ],
  templateUrl: './new-post-modal.component.html',
  styleUrl: './new-post-modal.component.scss'
})
export class NewPostModalComponent implements OnInit {

  user: User | null = null;

  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private authService: AuthService, private postService: PostService) {
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

  postData = {
    title: "",
    content: "",
    likes: 0,
    createdAt: new Date().toISOString(),
    userId: 0
  }

  onSubmit() {

    this.postData.userId = Number(this.user?.id);
    this.postService.createPost(this.postData).subscribe(
      response => {
        console.log(response);
        this.closeModal.emit();
      }
    )

  }

}
