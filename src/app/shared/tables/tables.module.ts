import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatDependenciesModule } from '../../mat-deps';

import { ButtonTemplateComponent } from './components/button-template';
import { ContextMenuTemplateComponent } from './components/context-menu-template/context-menu-template.component';
import { MatTableComponent } from './components/mat-table';

@NgModule({
  declarations: [
    MatTableComponent,
    ButtonTemplateComponent,
    ContextMenuTemplateComponent
  ],
  exports: [
    ContextMenuTemplateComponent,
    MatTableComponent,
    ButtonTemplateComponent,
    MatDependenciesModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDependenciesModule
  ]
})
export class TablesModule {
}
