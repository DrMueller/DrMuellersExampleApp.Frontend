import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowProgressComponent } from './show-progress/show-progress.component';
import { OverviewComponent } from './overview/overview.component';
import { MatDependenciesModule } from '../../mat-deps';
import { EntryPointComponent } from './entry-point/entry-point.component';
import { ProgressIndicationModule } from '../../shared/mat-ext/progress-indication/progress-indication.module';
import { CommandsModule } from '../../shared/commands/commands.module';
import { ShowModalComponent } from './show-modal/show-modal.component';
import { ModalCompComponent } from './modal-comp/modal-comp.component';

@NgModule({
  declarations: [
    ShowProgressComponent,
    OverviewComponent,
    EntryPointComponent,
    ShowModalComponent,
    ModalCompComponent,
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    MatDependenciesModule,
    ProgressIndicationModule,
    CommandsModule,
  ],
})
export class ShowcaseModule {}
