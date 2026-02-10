import { Component } from '@angular/core';
import { PostCard } from '../../Layouts/post-card/post-card';
import { CommentsForm } from '../../comments/comments-form/comments-form';
import { CommentList } from '../../comments/comment-list/comment-list';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../services/posts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-post',
  imports: [PostCard,CommentsForm,CommentList, CommonModule],
  templateUrl: './single-post.html',
  styleUrl: './single-post.css',
})
export class SinglePost {

  postData: any; 
  similarPosts: any[] = []; 
  constructor(private route:ActivatedRoute,
    private postsService: Posts
  ) {}

  ngOnInit(): void {  
    this.route.params.subscribe(val => {
      this.postsService.countViews(val['id']);

     this.postsService.loadOnePost(val['id']).subscribe(post => {
      this.postData = post; 
          this.loadSimilarPosts(this.postData?.category?.categoryId);
     });
    });


  }

  loadSimilarPosts(catId:string){
    this.postsService.loadSimilarPosts(catId).subscribe(posts => {
     this.similarPosts = posts;
    });
  }

}
