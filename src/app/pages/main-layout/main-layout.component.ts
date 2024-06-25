import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent,
    HttpClientModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit, OnDestroy {

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
