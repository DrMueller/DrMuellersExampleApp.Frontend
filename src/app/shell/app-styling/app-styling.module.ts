import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStylingEffects, appStylingFeatureKey, appStylingReducer } from './state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(appStylingFeatureKey, appStylingReducer),
    EffectsModule.forFeature([AppStylingEffects])
  ]
})
export class AppStylingModule { }
