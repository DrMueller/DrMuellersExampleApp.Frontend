import { AppSettings } from '../models';

export class AppSettingsProvisioningService {
  private static _appSettings: AppSettings | undefined;

  public static get settings(): AppSettings {
    return this._appSettings!;
  }

  public static async assureInitializedAsync(): Promise<void> {
    if (this._appSettings) {
      return;
    }

    const appSettings = await fetch('./app-settings/appsettings.json');
    const data = <AppSettings>await appSettings.json();

    this._appSettings = data;
  }
}
