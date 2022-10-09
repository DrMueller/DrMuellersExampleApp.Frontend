import { Injectable } from '@angular/core';
import { AngularPlugin } from '@microsoft/applicationinsights-angularplugin-js';
import {
  ApplicationInsights,
  eSeverityLevel,
  IExceptionTelemetry,
} from '@microsoft/applicationinsights-web';
import { AppSettingsProvisioningService } from '../app-settings/services';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  private appInsights: ApplicationInsights;

  public constructor() {
    var angularPlugin = new AngularPlugin();
    this.appInsights = new ApplicationInsights({
      config: {
        connectionString:
          AppSettingsProvisioningService.settings.AppInsightsConnectionString,
        extensions: [angularPlugin],
      },
    });

    this.appInsights.loadAppInsights();
  }

  public logInformation(
    message: string,
    customProperties?: { [key: string]: any }
  ) {
    this.log(message, eSeverityLevel.Information, customProperties);
  }

  public logError(message: string) {
    this.log(message, eSeverityLevel.Error);
  }

  public logException(error: Error) {
    this.appInsights.appInsights.trackException(<IExceptionTelemetry>{
      exception: error,
      properties: this.createCustomProperties(),
    });
  }

  private log(
    message: string,
    severaty: eSeverityLevel,
    customProperties?: { [key: string]: any }
  ): void {
    const custProps = this.createCustomProperties(customProperties);

    this.appInsights.appInsights.trackTrace({
      message: message,
      severityLevel: severaty,
      properties: custProps,
    });
  }

  private createCustomProperties(customProperties?: { [key: string]: any }): {
    [key: string]: any;
  } {
    let cust = customProperties || {};

    cust = {
      angularAppVersion: AppSettingsProvisioningService.settings.AppVersion,
      source: 'AngularApp',
      ...cust,
    };

    return cust;
  }
}
