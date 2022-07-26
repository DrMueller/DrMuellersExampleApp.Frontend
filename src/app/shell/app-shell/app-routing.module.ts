import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../security/components/log-in/log-in.component';
import { UserClaimsComponent } from '../security/components/user-claims';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/overview',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/areas/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pictures',
    loadChildren: () => import('src/app/areas/pictures/pictures.module').then(m => m.PicturesModule),
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'claims',
    component: UserClaimsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
