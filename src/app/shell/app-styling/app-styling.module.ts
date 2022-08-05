import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appStylingFeatureKey, appStylingReducer } from './state';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(appStylingFeatureKey, appStylingReducer),
  ]
})
export class AppStylingModule { }
