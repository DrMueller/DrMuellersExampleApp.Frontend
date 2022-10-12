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
  },
  {
    path: 'graph',
    loadChildren: () =>
      import('src/app/areas/graph/graph.module').then((m) => m.GraphModule),
  },
  {
    path: 'security',
    loadChildren: () =>
      import('src/app/shell/security/security.module').then(
        (m) => m.SecurityModule
      ),
  },
  {
    path: 'individuals',
    loadChildren: () =>
      import('src/app/areas/individuals/individuals.module').then(
        (m) => m.IndividualsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
