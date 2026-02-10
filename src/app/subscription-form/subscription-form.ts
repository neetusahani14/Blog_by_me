import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscribers } from '../services/subscribers';

@Component({
  selector: 'app-subscription-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './subscription-form.html',
  styleUrl: './subscription-form.css',
})
export class SubscriptionForm {

//   isEmailExists: boolean = false; 
//   isSubscribed: boolean = false;
//   constructor(private subService:Subscribers) {}

//   onSubmit(val: any) {
//     console.log(val);

//     const subData = {
//       name: val.name,
//       email: val.email
//     };
//     this.subService.checkSubscriber(val.email).subscribe(subs => {
//       console.log(subs);

//       if(subs.length === 0) {
//         this.subService.addSubscriber(subData);
//         this.isSubscribed = true;
//         this.isEmailExists = false;
//       } else {
//         this.isEmailExists = true;
//         this.isSubscribed = false;
//       }
//    } ); 
//   }

// }


  isSubscribed = false;
  isEmailExists = false;

  constructor(private subService: Subscribers) {}

  async onSubmit(val: any) {
    console.log(val);

    const subData = {
      name: val.name,
      email: val.email
    };

    // Check if subscriber exists
    const isNew = await this.subService.checkSubscriber(val.email);

    if (isNew) {
      // Safe to add
      await this.subService.addSubscriber(subData);
      this.isSubscribed = true;
      this.isEmailExists = false;
    } else {
      // Already exists
      this.isEmailExists = true;
      this.isSubscribed = false;
    }
  }
}