import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../security/components/log-in/log-in.component';

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
    path: 'login',
    component: LogInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
