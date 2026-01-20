import { Component } from '@angular/core';
import { PostCard } from '../../Layouts/post-card/post-card';
import { CommentsForm } from '../../comments/comments-form/comments-form';
import { CommentList } from '../../comments/comment-list/comment-list';

@Component({
  selector: 'app-single-post',
  imports: [PostCard,CommentsForm,CommentList],
  templateUrl: './single-post.html',
  styleUrl: './single-post.css',
})
export class SinglePost {

}
