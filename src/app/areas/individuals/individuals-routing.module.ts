import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { EntryPointComponent } from './entry-point/entry-point.component';
import { IndividualsOverviewComponent } from './overview';

const routes: Routes = [
  {
    path: '',
    component: EntryPointComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: IndividualsOverviewComponent,
      },
      {
        path: ':individualId',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualsRoutingModule {}
