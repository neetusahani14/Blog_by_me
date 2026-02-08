import { Component } from '@angular/core';
import { PostCard } from '../../Layouts/post-card/post-card';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../services/posts';

@Component({
  selector: 'app-single-category',
  imports: [PostCard],
  templateUrl: './single-category.html',
  styleUrl: './single-category.css',
})
export class SingleCategory {

  postsArray: any[] = [];
  categoryObject: any;
  constructor(private route:ActivatedRoute, private postsService: Posts) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('id'); // Get the category ID from the route parameters
      console.log(categoryId); 
      this.categoryObject = params;
      this.postsService.loadCategoryPosts(categoryId!).subscribe(posts => {
        this.postsArray = posts; // Store the posts in a class property
        console.log(posts);
      });
    }); 
  }

}
