import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoaderService } from './loader.service';
import { Blog } from '../models/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  firestore = inject(Firestore);
  loader = inject(LoaderService);
  //Blog
  blogCollection = collection(
    this.firestore,
    'blog'
  ) as CollectionReference<Blog>;

  blog = toSignal(
    collectionData(this.blogCollection),
    {
      initialValue: [],
    }
  );

    // Blog 
    async addBlog(newContact: Partial<Blog>) {
      this.loader.showLoader();
      await addDoc(this.blogCollection, { ...newContact });
      this.loader.hideLoader();
    }
  
    async deleteBlog(id: string) {
      this.loader.showLoader();
      const docRef = doc(this.firestore, 'blog', id);
      await deleteDoc(docRef);
      this.loader.hideLoader();
    }


}
