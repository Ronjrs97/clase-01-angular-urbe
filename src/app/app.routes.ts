import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { NowPlayingPageComponent } from './cinema/pages/now-playing-page/now-playing-page.component';
import { CinemaLayoutComponent } from './cinema/layout/cinema-layout/cinema-layout.component';


export const routes: Routes = [
  {
    path: '',
    // component: CounterComponent
    component: HomePageComponent
  },
  {
    path: 'counter',
    // component: TaskManagerPageComponent
    loadComponent: () => import('./bases/pages/counter/counter.component').then(m => m.CounterComponent)
  },
  {
    path: 'tasks',
    // component: TaskManagerPageComponent
    loadComponent: () => import('./bases/pages/task-manager-page/task-manager-page.component')
  },
  {
    path: 'cinema',
    loadChildren: () => import('./cinema/cinema.routes')

  },
  {
    path: '**',
    redirectTo: ''
  }

];
