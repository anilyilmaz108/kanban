import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoaderService } from './loader.service';
import { Announcement } from '../models/announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }
  firestore = inject(Firestore);
  loader = inject(LoaderService);
  //Announcement
  announcementCollection = collection(
    this.firestore,
    'announcement'
  ) as CollectionReference<Announcement>;

  announcement = toSignal(
    collectionData(this.announcementCollection),
    {
      initialValue: [],
    }
  );

    // Announcement 
    async addBlog(newContact: Partial<Announcement>) {
      this.loader.showLoader();
      await addDoc(this.announcementCollection, { ...newContact });
      this.loader.hideLoader();
    }
  
    async deleteBlog(id: string) {
      this.loader.showLoader();
      const docRef = doc(this.firestore, 'announcement', id);
      await deleteDoc(docRef);
      this.loader.hideLoader();
    }
}
