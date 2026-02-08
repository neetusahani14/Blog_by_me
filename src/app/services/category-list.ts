

import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryList {
  private firestore = inject(Firestore);

  constructor() {}

  // Load data as an observable
  loadData(): Observable<any[]> {
    const colRef = collection(this.firestore, 'categories');
    return collectionData(colRef, { idField: 'id' });
  }
}
