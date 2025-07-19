import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cinema-layout',
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './cinema-layout.component.html',
  styleUrl: './cinema-layout.component.css',
})
export class CinemaLayoutComponent { }
