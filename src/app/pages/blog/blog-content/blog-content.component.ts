import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { initFlowbite } from 'flowbite';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.css'
})
export class BlogContentComponent implements OnInit{
  constructor(private router:ActivatedRoute){}

  blogService = inject(BlogService);
  authService = inject(AuthService);
  blog = this.blogService.blog;
  getID = '';
  user = this.authService.firebaseAuth.currentUser;


  ngOnInit(): void {
    initFlowbite();
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getID = getParamId!;
  }



}
