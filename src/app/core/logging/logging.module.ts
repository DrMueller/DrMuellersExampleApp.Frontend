import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { LoggingEffects } from './state/logging.effects';

@NgModule({
  imports: [EffectsModule.forFeature([LoggingEffects]), CommonModule],
  providers: [],
})
export class LoggingModule {}
