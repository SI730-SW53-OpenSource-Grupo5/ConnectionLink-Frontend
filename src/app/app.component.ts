import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ConnectionLink';
  isSidebarOpen: boolean = false;

  constructor() {
    this.updateSidebarStatus();
  }

  ngOnInit() {
    window.addEventListener('resize', this.updateSidebarStatus.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateSidebarStatus.bind(this));
  }

  onToggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);
  }

  updateSidebarStatus() {
    this.isSidebarOpen = window.matchMedia('(min-width: 1024px)').matches;
  }
}
