import { Injectable } from '@angular/core';
import { AppTheme } from '../models';
import { StorageService } from 'src/app/core/storage/services';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class AppStylingService {
  constructor(
    private storage: StorageService,
    private overlayContainer: OverlayContainer) {    }

  public switchThemes(appTheme: AppTheme): void {
    const classes = document.body.classList;

    this.storage.save('appTheme', appTheme);

    classes.forEach(className => {
      if(className.includes('theme')) {
        document.body.classList.remove(className);
      }
    });

    this.overlayContainer.getContainerElement().classList.add(appTheme.className);
    document.body.classList.add(appTheme.className);
  }
}
