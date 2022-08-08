import { Injectable } from '@angular/core';
import { AppTheme } from '../models';
import { StorageService } from 'src/app/core/storage/services';

@Injectable({
  providedIn: 'root'
})
export class AppStylingService {
  constructor(
    private storage: StorageService
    ) { }

  public switchThemes(appTheme: AppTheme): void {
    this.storage.save('appTheme', appTheme);
    this.switchThemeClass(document.body.classList, appTheme.className);
  }

  private switchThemeClass(classList: DOMTokenList, newClassName: string): void {
    classList.forEach(className => {
      if (className.includes('theme')) {
        document.body.classList.remove(className);
      }
    });

    classList.add(newClassName);
  }
}
