import { Injectable } from '@angular/core';
import { Msal2Provider, Providers } from '@microsoft/mgt';
import { Store } from '@ngrx/store';
import { AppSettingsProvisioningService } from 'src/app/core/app-settings/services';
import { StorageService } from 'src/app/core/storage/services';

import { IAppState } from '../../app-state';
import {
  AppTheme,
  appThemeStorageKey,
  lightTheme,
} from '../../app-styling/models';
import { setAppTheme } from '../../app-styling/state';
import { MsalCommunicationService } from '../../security/services/msal-communication.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(
    private store: Store<IAppState>,
    private storage: StorageService,
    private msalCommunicationService: MsalCommunicationService
  ) { }

  public async initializeAppAsync(): Promise<void> {
    this.msalCommunicationService.initialize();
    this.initializeGraphToolkit();
    this.initializeAppTheme();
  }

  private initializeGraphToolkit(): void {
    Providers.globalProvider = new Msal2Provider({
      clientId: AppSettingsProvisioningService.settings.AzureSettings.ClientId
    });
  }

  private initializeAppTheme(): void {
    let appTheme = this.storage.load<AppTheme>(appThemeStorageKey);
    appTheme = appTheme || lightTheme;

    this.store.dispatch(
      setAppTheme({
        appTheme: appTheme,
      })
    );
  }
}
