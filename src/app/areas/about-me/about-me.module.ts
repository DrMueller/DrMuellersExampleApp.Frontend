import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { EntryPointComponent } from './entry-point/entry-point.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { MatDependenciesModule } from 'src/app/shared/mat-deps';

@NgModule({
  declarations: [OverviewComponent, EntryPointComponent],
  imports: [CommonModule, AboutMeRoutingModule, MatDependenciesModule],
})
export class AboutMeModule {}
