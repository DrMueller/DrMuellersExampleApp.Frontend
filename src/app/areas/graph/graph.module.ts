import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graph-routing.module';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { EntryPointComponent } from './entry-point/entry-point.component';
import { OverviewComponent } from './overview/overview.component';
import { StoreModule } from '@ngrx/store';
import * as fromGraph from './common/state/graph.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GraphEffects } from './common/state/graph.effects';

@NgModule({
  declarations: [
    EntryPointComponent,
    OverviewComponent
  ],
  imports: [CommonModule, GraphRoutingModule, MatDependenciesModule, StoreModule.forFeature(fromGraph.graphFeatureKey, fromGraph.reducer), EffectsModule.forFeature([GraphEffects])],
})
export class GraphModule {}
