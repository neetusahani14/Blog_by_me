import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, where, limit, orderBy, doc, docData, increment, updateDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class Posts {
 private  firestore= inject(Firestore);


 
loadFeatured(): Observable<any[]> {
  const colRef = collection(this.firestore, 'posts');
  const q = query(colRef, where('isFeatured', '==', true), limit(4)); // Get only featured posts, limit to 5
  return collectionData(q, { idField: 'id' }) as Observable<any[]>;
}

loadLatest(): Observable<any[]> {
  const colRef = collection(this.firestore, 'posts');
  const q = query(colRef, orderBy('createdAt', 'desc')); // Get only non-featured posts, limit to 5
  return collectionData(q, { idField: 'id' }) as Observable<any[]>;   

}

loadCategoryPosts(categoryId: string): Observable<any[]> {
  const colRef = collection(this.firestore, 'posts');
  const q = query(colRef, where('category.categoryId', '==', categoryId), limit(4)); // Get posts of a specific category, ordered by createdAt
  return collectionData(q, { idField: 'id' }) as Observable<any[]>;   

}

loadOnePost(postId: string){
  const colRef = doc(this.firestore, `posts/${postId}`);
  return docData(colRef, { idField: 'id' });
}

loadSimilarPosts(catId:string): Observable<any[]> {
  const colRef = collection(this.firestore, 'posts');
  const q = query(colRef, where('category.categoryId', '==', catId), limit(4)); // Get posts of a specific category, ordered by createdAt
  return collectionData(q, { idField: 'id' }) as Observable<any[]>;   
}

countViews(postId: string) {
  const docRef = doc(this.firestore, `posts/${postId}`);
  updateDoc(docRef, { views: increment(1) }).then(() => {
    console.log('View count incremented successfully');
  }).catch((error) => {
    console.error('Error incrementing view count: ', error);
  });
  return docData(docRef, { idField: 'id' });
}



}
