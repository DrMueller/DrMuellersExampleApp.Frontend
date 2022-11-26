import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  constructor(private dialog: MatDialog) {}

  public showModalDialog<T>(
    modalData: any,
    component: ComponentType<T>
  ): MatDialogRef<T> {
    const config = new MatDialogConfig<any>();
    config.data = modalData;
    config.disableClose = false;
    return this.dialog.open(component, config);
  }
}
