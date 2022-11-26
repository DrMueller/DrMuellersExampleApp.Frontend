import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerComponent } from './spinners/components/progress-spinner/progress-spinner.component';
import {
  ProgressSpinnerButtonComponent,
  ProgressSpinnerDirective,
} from './spinners';
import { MatDependenciesModule } from '../../mat-deps';

@NgModule({
  declarations: [
    ProgressSpinnerComponent,
    ProgressSpinnerButtonComponent,
    ProgressSpinnerDirective,
  ],
  imports: [CommonModule, MatDependenciesModule],
  exports: [
    ProgressSpinnerComponent,
    ProgressSpinnerButtonComponent,
    ProgressSpinnerDirective,
  ],
})
export class ProgressIndicationModule {}
