import { Routes } from "@angular/router";
import { CinemaLayoutComponent } from "./layout/cinema-layout/cinema-layout.component";
import { NowPlayingPageComponent } from "./pages/now-playing-page/now-playing-page.component";

export const cinemaRoutes: Routes = [
  {
    path: '',
    component: CinemaLayoutComponent,
    children: [
      {
        path: 'now-playing',
        component: NowPlayingPageComponent
      },
      {
        path: 'coming-soon',
        loadComponent: () => import('./pages/coming-soon-page/coming-soon-page.component')
      },
      {
        path: 'form',
        loadComponent: () => import('./pages/form-page/form-page.component')
      },
      {
        path: '**',
        redirectTo: 'now-playing'
      }
    ]
  }

]

export default cinemaRoutes;
