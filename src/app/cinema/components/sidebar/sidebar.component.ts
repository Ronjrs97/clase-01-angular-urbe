import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-cinema.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cinema-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems = signal<MenuItem[]>([
    {
      label: 'Ahora en cines',
      icon: 'video',
      route: 'now-playing'
    },
    {
      label: 'Próximamente',
      icon: 'calendar',
      route: 'coming-soon'
    },
    {
      label: 'Tendencias',
      icon: 'trending',
      route: 'trending'
    },
    {
      label: 'Favoritos',
      icon: 'heart',
      route: 'favorites'
    },
  ]);

 }
