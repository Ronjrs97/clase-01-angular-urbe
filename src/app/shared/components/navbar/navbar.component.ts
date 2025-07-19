import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItems } from '../../interfaces/menuItems.interface';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  menuItems: MenuItems[] = [
    {
      label: 'Counter',
      link: '/counter'
    },
    {
      label: 'Task Manager',
      link: '/tasks',
    },
    {
      label: 'Cinema',
      link: '/cinema'
    },

  ]
 }
