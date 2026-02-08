import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {
  @Input() post: any; // Accept a post object as input

  ngOnInit(): void {
    console.log(this.post); // Log the post data to verify it's being received
  }
}
