// import { Component } from '@angular/core';
// import { PostCard } from '../../Layouts/post-card/post-card';
// import { Posts } from '../../services/posts';

// @Component({
//   selector: 'app-home',
//   imports: [PostCard],
//   templateUrl: './home.html',
//   styleUrl: './home.css',
// })
// export class Home {

//   // constructor(private postService: Posts) {
//   //   this.postService.loadData().subscribe(posts => {
//   //     console.log(posts); // Log the posts to the console
//   //   });
//   // }

// }

import { Component } from '@angular/core';
import { PostCard } from '../../Layouts/post-card/post-card';
import { Posts } from '../../services/posts';

@Component({
  selector: 'app-home',
  standalone: true,              // required in Angular 20
  imports: [PostCard],           // PostCard must also be standalone
  templateUrl: './home.html',
  styleUrls: ['./home.css'],     // plural, array
})
export class Home {

  featuredPosts: any[] = [];
  constructor(private postService: Posts) {
    this.postService.loadFeatured().subscribe(posts => {
      this.featuredPosts = posts; // Store the featured posts in a class property
      console.log(posts); // verify data is loading
    });
  }

}

