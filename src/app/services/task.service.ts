import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Task } from '../models/task';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  firestore = inject(Firestore);
  //Todo
  todoCollection = collection(
    this.firestore,
    'todo'
  ) as CollectionReference<Task>;

  todo = toSignal(
    collectionData(this.todoCollection),
    {
      initialValue: [],
    }
  );

  //In Progress
  progressCollection = collection(
    this.firestore,
    'progress'
  ) as CollectionReference<Task>;

  progress = toSignal(
    collectionData(this.progressCollection),
    {
      initialValue: [],
    }
  );

    //Done
    doneCollection = collection(
      this.firestore,
      'done'
    ) as CollectionReference<Task>;
  
    done = toSignal(
      collectionData(this.doneCollection),
      {
        initialValue: [],
      }
    );

    // In Progress 
    async addProgress(newContact: Partial<Task>) {
      this.loader.showLoader();
      await addDoc(this.progressCollection, { ...newContact });
      this.loader.hideLoader();
    }
  
    async deleteProgress(id: string) {
      this.loader.showLoader();
      const docRef = doc(this.firestore, 'progress', id);
      await deleteDoc(docRef);
      this.loader.hideLoader();
    }

  loader = inject(LoaderService);

  // Todo 
  async addTodo(newContact: Partial<Task>) {
    this.loader.showLoader();
    await addDoc(this.todoCollection, { ...newContact });
    this.loader.hideLoader();
  }

  async deleteTodo(id: string) {
    this.loader.showLoader();
    const docRef = doc(this.firestore, 'todo', id);
    await deleteDoc(docRef);
    this.loader.hideLoader();
  }

    // Done 
    async addDone(newContact: Partial<Task>) {
      this.loader.showLoader();
      await addDoc(this.doneCollection, { ...newContact });
      this.loader.hideLoader();
    }
  
    async deleteDone(id: string) {
      this.loader.showLoader();
      const docRef = doc(this.firestore, 'done', id);
      await deleteDoc(docRef);
      this.loader.hideLoader();
    }
}
