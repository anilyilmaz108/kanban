import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/models/task';
import { initFlowbite } from 'flowbite';
import { TaskService } from 'src/app/services/task.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  taskService = inject(TaskService);
  authService = inject(AuthService);

  todo = this.taskService.todo;
  progress = this.taskService.progress;
  done = this.taskService.done;
  constructor() {}

  taskForm = new FormGroup({
    id: new FormControl(this.authService.firebaseAuth.currentUser?.uid.toString(), {nonNullable: true}),
    title: new FormControl('', {nonNullable: true}),
});


  addNewTaskTodo() {  
    // console.log(this.taskForm.value.title);
    this.taskService.addTodo({
      id: this.authService.firebaseAuth.currentUser?.uid.toString(),
      title: this.taskForm.value.title,
    });
    this.taskForm.reset();
  }

  addNewTaskProgress() {  
    // console.log(this.taskForm.value.title);
    this.taskService.addProgress({
      id: this.authService.firebaseAuth.currentUser?.uid.toString(),
      title: this.taskForm.value.title,
    });
    this.taskForm.reset();
  }

  addNewTaskDone() {  
    // console.log(this.taskForm.value.title);
    this.taskService.addDone({
      id: this.authService.firebaseAuth.currentUser?.uid.toString(),
      title: this.taskForm.value.title,
    });
    this.taskForm.reset();
  }

  ngOnInit() {
    initFlowbite();
    console.log('User', this.authService.firebaseAuth.currentUser?.uid.toString());
  }

  /// Delete Task
  deleteTaskDone(id?:string){
    console.log(id);
    this.taskService.deleteDone(id!);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
