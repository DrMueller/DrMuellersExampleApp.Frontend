import { Injectable } from '@angular/core';
import { AngularPlugin } from '@microsoft/applicationinsights-angularplugin-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { AppSettingsProvisioningService } from '../../app-settings/services';

@Injectable({
  providedIn: 'root',
})
export class AppInsightsService {
  private _appInsights: ApplicationInsights | undefined;

  public get appInsights(): ApplicationInsights {
    if (!this._appInsights) {
      this.initializeAppInsights();
    }

    return this._appInsights!;
  }

  public setAuthenticatedUser(userId: string | undefined): void {
    this.appInsights.setAuthenticatedUserContext(userId ?? '');
    this.appInsights;
  }

  private initializeAppInsights(): void {
    var angularPlugin = new AngularPlugin();
    this._appInsights = new ApplicationInsights({
      config: {
        connectionString:
          AppSettingsProvisioningService.settings.AppInsightsConnectionString,
        extensions: [angularPlugin],
      },
    });

    this.appInsights.loadAppInsights();

    this.appInsights.context.application.ver =
      AppSettingsProvisioningService.settings.AppVersion;
    this.appInsights.context.application.build =
      AppSettingsProvisioningService.settings.CommitHash;
  }
}
