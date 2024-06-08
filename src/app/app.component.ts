import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-app-heroku';

  data: any;

  constructor(private apiService:ApiService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
