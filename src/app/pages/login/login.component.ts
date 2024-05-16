import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(){}
  // authService = inject(AuthService);
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  email= '';
  password='';
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
      }
    })
  }


}
