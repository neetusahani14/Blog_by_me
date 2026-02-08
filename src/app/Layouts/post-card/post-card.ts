import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {
  @Input() post: any; // Accept a post object as input

  ngOnInit(): void {
    console.log(this.post); // Log the post data to verify it's being received
  }
}
