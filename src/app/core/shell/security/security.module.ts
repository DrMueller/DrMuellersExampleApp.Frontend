import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatDependenciesModule } from 'src/app/shared/mat-deps';
import { RxFormsModule } from 'src/app/shared/rx-forms';

import { SecurityEffects } from './state/security.effects';
import { securityFeatureKey, reducer } from './state/security.reducer';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { EntryPointComponent } from './components/entry-point/entry-point.component';
import { SecurityRoutingModule } from './security-routing.module';
import { ProgressIndicationModule } from '../../../shared/mat-ext/progress-indication/progress-indication.module';

@NgModule({
  declarations: [AccountInfoComponent, EntryPointComponent],
  imports: [
    ProgressIndicationModule,
    CommonModule,
    RxFormsModule,
    MatDependenciesModule,
    EffectsModule.forFeature([SecurityEffects]),
    StoreModule.forFeature(securityFeatureKey, reducer),
    SecurityRoutingModule,
  ],
})
export class SecurityModule {}
