import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from 'src/app/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar){}
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  
  ngOnInit(): void {
    initFlowbite();
  }

  form = this.fb.nonNullable.group({
    email: ['test@gmail.com', Validators.required],
    password: ['12345678', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    console.log('login');
    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.email, rawForm.password)
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.errorMessage = err.code;
        this._snackBar.open('Geçersiz kullanıcı adı veya şifre','Tamam', {
          duration: 3000
        });
      }
    })
  }


}
