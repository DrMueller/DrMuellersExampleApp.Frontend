import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/overview',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/areas/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('src/app/areas/about-me/about-me.module').then(
        (m) => m.AboutMeModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
