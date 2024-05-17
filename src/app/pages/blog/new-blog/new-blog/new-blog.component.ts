import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { initFlowbite } from 'flowbite';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent implements OnInit{

  constructor(private _snackBar: MatSnackBar){}

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  blogService = inject(BlogService);
  authService = inject(AuthService);

  
  ngOnInit(): void {
    initFlowbite();
  }

  form = this.fb.nonNullable.group({
    id: [uuid.v4().toString()],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
       this.blogService.addBlog({
        id: this.form.value.id,
        title: this.form.value.title,
        description: this.form.value.description,
        date: Timestamp.now(),
        userEmail: this.authService.firebaseAuth.currentUser?.email!,
        userName: this.authService.firebaseAuth.currentUser?.displayName!,
      }).then(() => {
        this.form.reset();
        this._snackBar.open('Yeni bir blog yazısı eklendi','Tamam', {
          duration: 3000
        });
      });
      
    
  }



}


