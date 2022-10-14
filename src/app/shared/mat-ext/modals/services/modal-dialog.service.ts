import { Injectable, NgZone } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {
  constructor(
    private dialog: MatDialog,
    private ngZone: NgZone
  ) { }

  public showModalDialog<T>(modalData: any, component: ComponentType<T>): MatDialogRef<T> {
    const config = new MatDialogConfig();
    config.data = modalData;
    config.disableClose = true;

    return this.ngZone.run(() => {
      return this.dialog.open(component, config);
    });
  }
}
