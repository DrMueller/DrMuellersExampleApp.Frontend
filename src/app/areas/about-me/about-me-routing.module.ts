import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPointComponent } from './entry-point';
import { OverviewComponent } from './overview';

const routes: Routes = [
  {
    path: '',
    component: EntryPointComponent,
    children: [
      {
        path: '', redirectTo: 'overview', pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
