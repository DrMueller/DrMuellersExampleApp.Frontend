import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/overview',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/areas/home/home.module').then((m) => m.HomeModule),
    title: 'Home',
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('src/app/areas/about-me/about-me.module').then(
        (m) => m.AboutMeModule
      ),
    title: 'About me',
  },
  {
    path: 'graph',
    loadChildren: () =>
      import('src/app/areas/graph/graph.module').then((m) => m.GraphModule),
    title: 'Graph API fun',
  },
  {
    path: 'security',
    loadChildren: () =>
      import('src/app/shell/security/security.module').then(
        (m) => m.SecurityModule
      ),
    title: 'Security',
  },
  {
    path: 'individuals',
    loadChildren: () =>
      import('src/app/areas/individuals/individuals.module').then(
        (m) => m.IndividualsModule
      ),
    title: 'Individuals',
  },
  {
    path: 'showcase',
    loadChildren: () =>
      import('src/app/areas/showcase/showcase.module').then(
        (m) => m.ShowcaseModule
      ),
    title: 'Showcase',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
