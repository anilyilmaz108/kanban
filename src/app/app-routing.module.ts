import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './layouts/private/private.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicComponent } from './layouts/public/public.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  }

 /** 
  *   {
    path: 'home',
    component: PrivateComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
   {
    path: 'login',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  
    {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  */

   

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
