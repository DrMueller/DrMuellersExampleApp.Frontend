import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../app-state';
import { getAppTheme, IAppStylingState } from '../state';
import { tap } from 'rxjs';
import { AppTheme } from '../models';
import { StorageService } from 'src/app/core/storage/services';

@Injectable({
  providedIn: 'root'
})
export class AppStylingService {
  constructor(
    private store: Store<IAppStylingState>,
    private storage: StorageService) {
      this.store.select(getAppTheme).subscribe(app => {
        if (app){
          this.switchThemes(app);
          this.storage.save('appTheme', app);
        }
      });
    }

  private switchThemes(newTheme: AppTheme): void {
    const classes = document.body.classList;
    classes.forEach(className => {
      if(className.includes('theme')) {
        document.body.classList.remove(className);
      }
    });

    document.body.classList.add(newTheme.className);
  }
}
