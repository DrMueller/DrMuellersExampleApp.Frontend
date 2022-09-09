import { Injectable } from '@angular/core';

import { AppSettings } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsSingletonService {
  private _appSettings!: AppSettings;

  public get instance(): AppSettings {
    return this._appSettings;
  }

  public async initializeAsync(): Promise<void> {
    const appSettings = await fetch('./app-settings/appsettings.json');
    const data = <AppSettings>await appSettings.json();

    debugger;
    this._appSettings = data;
  }
}
