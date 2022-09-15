import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';
import { RxFormsModule } from 'src/app/shared/rx-forms';

import { SecurityEffects } from './state/security.effects';
import { securityFeatureKey, reducer } from './state/security.reducer';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { EntryPointComponent } from './components/entry-point/entry-point.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  declarations: [AccountInfoComponent, EntryPointComponent],
  imports: [
    BusyIndicationModule,
    CommonModule,
    RxFormsModule,
    MatDependenciesModule,
    EffectsModule.forFeature([SecurityEffects]),
    StoreModule.forFeature(securityFeatureKey, reducer),
    SecurityRoutingModule,
  ],
})
export class SecurityModule {}
