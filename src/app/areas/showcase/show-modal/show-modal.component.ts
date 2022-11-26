import { Component } from '@angular/core';
import { Command } from '../../../shared/commands/models/command';
import { RelayCommand } from '../../../shared/commands/models/relay-command';
import { ModalDialogService } from '../../../core/mat-ext/modals';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';

@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.component.html',
  styleUrls: ['./show-modal.component.scss'],
})
export class ShowModalComponent {
  public showModal: Command = new RelayCommand(() => this.showModaldialog());

  constructor(private modalDialogService: ModalDialogService) {}

  private showModaldialog(): void {
    this.modalDialogService.showModalDialog('hello world', ModalCompComponent);
  }
}
