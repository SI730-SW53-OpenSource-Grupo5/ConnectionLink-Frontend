import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {ThreadService} from "../../../services/thread.service";
import {ActivatedRoute} from "@angular/router";

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

  // receive the posts array from the parent component
  @Input() post!: any;
  @Input() showPopup!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private route: ActivatedRoute, private threadService: ThreadService) {

  }

  user: any = JSON.parse(localStorage.getItem('user') || '{}');

  commentData = {
    postId: this.route.snapshot.paramMap.get('id'),
    name: this.user.firstName + this.user.lastName || "",
    email: this.user.email || "",
    type: this.user.type || "",
    comment: "",
    publication_date: "26/09/23",
    likes_quantity: 0,
    imageURL: this.user.profileImg || ""
  };

  onSubmitComment() {

    console.log(this.commentData);
    this.threadService.createComment(this.commentData).subscribe(
        (response: any) => {
            console.log(response);
            this.closeModal.emit();
        },
        (error) => {
            console.log(error);
        }
    )

  }

}
