import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommandDirective } from './directives/command.directive';

@NgModule({
  declarations: [CommandDirective],
  imports: [CommonModule],
  exports: [CommandDirective]
})
export class CommandsModule {
}
