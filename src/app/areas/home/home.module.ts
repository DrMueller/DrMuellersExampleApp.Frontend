import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/components/overview';
import { EntryPointComponent } from './entry-point';
import { HomeRoutingModule } from './home-routing.module';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './common/state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './common/state/home.effects';

@NgModule({
  declarations: [OverviewComponent, EntryPointComponent],
  imports: [CommonModule, HomeRoutingModule, MatDependenciesModule, StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer), EffectsModule.forFeature([HomeEffects])],
})
export class HomeModule {}
