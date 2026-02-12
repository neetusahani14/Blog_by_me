import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommentService } from '../../services/comment-service';

@Component({
  selector: 'app-comments-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './comments-form.html',
  styleUrl: './comments-form.css',
})
export class CommentsForm {



  constructor(private commentService: CommentService) {}


  async submitComment(form: NgForm) {
    if (form.valid) {
      const { name, comment } = form.value;
      try {
        await this.commentService.addComment(comment, name);
        form.reset(); // clear after submit
      } catch (error) {
        console.error('Error submitting comment:', error);
      }
    }
  }


}

