import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../services/comment-service';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  comments$: Observable<any[]>;

  constructor(private commentService: CommentService) {
    this.comments$ = this.commentService.getComments();
  }


}
