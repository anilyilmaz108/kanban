import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.css'
})
export class AnnouncementComponent implements OnInit{
  constructor(){}

  announcementService = inject(AnnouncementService);
  announcement = this.announcementService.announcement;


  ngOnInit(): void {

  }

}
