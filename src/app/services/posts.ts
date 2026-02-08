import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, where, limit, orderBy, doc, docData } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Posts {
 private  firestore= inject(Firestore);

  //   async saveData(data:any){
    
  //   try {
  //     const docRef = await addDoc(collection(this.firestore, 'categories'), data);
  //     console.log(docRef.id);
  //     // this.toastr.success('Data Insert successfully...!')
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   addDoc(collection(this.firestore, 'categories'), data).then((docRef)=>{
  //     console.log(docRef.id);   
  //   })
    
  //   .catch(error=>{ console.log(error) });
  // }

  // loadData(): Observable<any[]> {
  //   const colRef = collection(this.firestore, 'posts', (ref) => ref.orderBy('createdAt', 'desc')); // order by createdAt field
  //   return collectionData(colRef, { idField: 'id' }); // AngularFire helper
  // }
 
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

countViews(postId: string)
{
  const docRef = doc(this.firestore, `posts/${postId}`);
  return docData(docRef, { idField: 'id' });
  
}

}
