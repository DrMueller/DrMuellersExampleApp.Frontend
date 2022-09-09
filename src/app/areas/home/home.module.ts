import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview';
import { EntryPointComponent } from './entry-point';
import { HomeRoutingModule } from './home-routing.module';
import { MatDependenciesModule } from 'src/app/mat-deps';

@NgModule({
  declarations: [OverviewComponent, EntryPointComponent],
  imports: [CommonModule, HomeRoutingModule, MatDependenciesModule],
})
export class HomeModule {}
