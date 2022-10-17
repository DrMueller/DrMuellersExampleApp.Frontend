import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommandsModule } from '../../shared/commands/commands.module';
import { TablesModule } from '../../shared/mat-ext/tables';
import { RxFormsModule } from '../../shared/rx-forms';
import { IndividualsEffects } from './common/state/individuals.effects';
import {
  individualsFeatureKey,
  reducer,
} from './common/state/individuals.reducer';
import { EditComponent } from './edit/edit.component';

import { EntryPointComponent } from './entry-point/entry-point.component';
import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsServicesModule } from './individuals-services.module';
import { IndividualsOverviewComponent } from './overview';

@NgModule({
  imports: [
    CommonModule,
    IndividualsServicesModule,
    IndividualsRoutingModule,
    TablesModule,
    RxFormsModule,
    CommandsModule,
    StoreModule.forFeature(individualsFeatureKey, reducer),
    EffectsModule.forFeature([IndividualsEffects]),
  ],
  declarations: [
    EditComponent,
    EntryPointComponent,
    IndividualsOverviewComponent,
  ],
})
export class IndividualsModule {}
