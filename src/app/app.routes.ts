import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    // component: CounterComponent
    loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent)
  },
  {
    path: 'tasks',
    // component: TaskManagerPageComponent
    loadComponent: () => import('./tasks-manager/pages/task-manager-page/task-manager-page.component')
  }

];
