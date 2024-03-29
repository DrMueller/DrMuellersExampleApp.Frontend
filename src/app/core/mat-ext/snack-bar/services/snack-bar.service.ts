import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { SnackBarConfiguration } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  public showSnackBar(
    text: string,
    config?: SnackBarConfiguration | undefined
  ): void {
    const checkedConfig = config || SnackBarConfiguration.createDefault();

    setTimeout(() => {
      this.snackBar.open(text, undefined, <MatSnackBarConfig<any>>{
        duration: checkedConfig.displayDuration,
      });
    });
  }
}
