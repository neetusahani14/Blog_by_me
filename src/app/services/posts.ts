import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  const q = query(colRef, where('isFeatured', '==', true));
  return collectionData(q, { idField: 'id' }) as Observable<any[]>;
}


  
}
