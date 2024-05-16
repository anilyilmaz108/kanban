import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kanban';
  http = inject(HttpClient);
  ngOnInit(): void {
    initFlowbite();
  }
}
