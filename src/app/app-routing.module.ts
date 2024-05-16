import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './layouts/private/private.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicComponent } from './layouts/public/public.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { NewBlogComponent } from './pages/blog/new-blog/new-blog/new-blog.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BlogContentComponent } from './pages/blog/blog-content/blog-content.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'new-blog', component: NewBlogComponent },
      { path: 'blog/blog-content/:id', component: BlogContentComponent },
      { path: 'announcement', component: AnnouncementComponent }
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
  },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
