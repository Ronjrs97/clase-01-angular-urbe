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
        path: '**',
        redirectTo: 'now-playing'
      }
    ]
  }

]

export default cinemaRoutes;
