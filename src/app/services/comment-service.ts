import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, orderBy, query, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments'; 

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private firestore = inject(Firestore);

  addComment(text: string, author: string) {
  const commentsRef = collection(this.firestore, 'comments');
  return addDoc(commentsRef, {
    text,
    author,   // ✅ matches interface
    createdAt: serverTimestamp()
  });
}

  getComments(): Observable<Comments[]> {
    const commentsRef = collection(this.firestore, 'comments');
    const q = query(commentsRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Comments[]>;
  }
}