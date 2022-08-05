import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSettingsSingletonService } from 'src/app/core/app-settings/services';
import { StorageService } from 'src/app/core/storage/services';

import { IAppState } from '../../app-state';
import { AppTheme, appThemeStorageKey, lightTheme } from '../../app-styling/models';
import { setAppTheme } from '../../app-styling/state';
import { initializeUser } from '../../security/state';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  constructor(
    private appSettingsSingleton: AppSettingsSingletonService,
    private store: Store<IAppState>,
    private storage: StorageService)
   { }

  public async initializeAppAsync(): Promise<void> {
    await this.appSettingsSingleton.initializeAsync();
    this.store.dispatch(initializeUser());

    this.initialieAppTheme();
  }

  private initialieAppTheme(): void{
    let appTheme = this.storage.load<AppTheme>(appThemeStorageKey);
    appTheme = appTheme || lightTheme;

    this.store.dispatch(setAppTheme({
      appTheme: appTheme
    }));
  }
}
