import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Subscribers {

   private  firestore= inject(Firestore);  

   constructor() { }

  // addSubscriber(subData: any) {
  //   const subsCollection = collection(this.firestore, 'subscribers');
  //   addDoc(subsCollection, subData).then(() => {
  //     console.log('Subscriber added successfully');     
  //   }).catch((error) => {
  //     console.error('Error adding subscriber: ', error);
  //   });
   
  // }

  // checkSubscriber(email: string) {
  //   const subsCollection = collection(this.firestore, 'subscribers');
  //   const q = query(subsCollection, where('email', '==', email));
  //   return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  // }

   // Check if subscriber exists using getDocs (snapshot has .empty)
  async checkSubscriber(email: string): Promise<boolean> {
    const subsCollection = collection(this.firestore, 'subscribers');
    const q = query(subsCollection, where('email', '==', email));
    const snapshot = await getDocs(q);
    return snapshot.empty; // true if no match
  }

  // Add subscriber safely
  async addSubscriber(subData: any): Promise<void> {
    const subsCollection = collection(this.firestore, 'subscribers');
    await addDoc(subsCollection, subData);
    console.log('Subscriber added successfully');
  }

  // Alternative: enforce uniqueness by using email as document ID
  async addSubscriberUnique(subData: any): Promise<void> {
    const docRef = doc(this.firestore, 'subscribers', subData.email);
    await setDoc(docRef, subData); // overwrites if same email exists
    console.log('Subscriber added/updated successfully');
  }

  
}
