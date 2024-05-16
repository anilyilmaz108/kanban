import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { BlogService } from 'src/app/services/blog.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  constructor(){}

  blogService = inject(BlogService);
  blog = this.blogService.blog;

}
