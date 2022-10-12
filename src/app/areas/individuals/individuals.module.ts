import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommandsModule } from '../../shared/commands/commands.module';
import { RxFormsModule } from '../../shared/rx-forms';
import { TablesModule } from '../../shared/tables';

import { IndividualDetailsComponent } from './details/components/individual-details';

import { IndividualsComponent } from './entry-point/components/individuals';
import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsServicesModule } from './individuals-services.module';
import { IndividualsOverviewComponent } from './overview/components/individuals-overview';

@NgModule({
  imports: [
    CommonModule,
    IndividualsServicesModule,
    IndividualsRoutingModule,
    TablesModule,
    RxFormsModule,
    CommandsModule
  ],
  declarations: [
    IndividualDetailsComponent,
    IndividualsComponent,
    IndividualsOverviewComponent
  ]
})

export class IndividualsModule {
}
