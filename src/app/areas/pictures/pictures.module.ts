import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesRoutingModule } from './pictures-routing.module';
import { EntryPointComponent } from './entry-point';
import { OverviewComponent } from './overview';
import { StoreModule } from '@ngrx/store';
import { picturesReducers } from './common/state/pictures.reducer';
import { PicturesEffects } from './common/state';
import { EffectsModule } from '@ngrx/effects';
import { picturesFeatureKey } from './common/state/pictures.selectors';

@NgModule({
  declarations: [
    EntryPointComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    PicturesRoutingModule,
    StoreModule.forFeature(picturesFeatureKey, picturesReducers),
    EffectsModule.forFeature([PicturesEffects]),
  ]
})
export class PicturesModule { }
