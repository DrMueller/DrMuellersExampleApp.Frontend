import { Injectable } from '@angular/core';
import {
  eSeverityLevel,
  IExceptionTelemetry,
} from '@microsoft/applicationinsights-web';
import { AppInsightsService } from './app-insights.service';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  public constructor(private readonly appInsightsService: AppInsightsService) {}

  public logInformation(
    message: string,
    customProperties?: { [key: string]: any }
  ): void {
    this.log(message, eSeverityLevel.Information, customProperties);
  }

  public logError(message: string): void {
    this.log(message, eSeverityLevel.Error);
  }

  public logException(error: Error) {
    this.appInsightsService.appInsights.trackException(<IExceptionTelemetry>{
      exception: error,
    });
  }

  private log(
    message: string,
    severaty: eSeverityLevel,
    customProperties?: { [key: string]: any }
  ): void {
    this.appInsightsService.appInsights.trackTrace({
      message: message,
      severityLevel: severaty,
      properties: customProperties,
    });
  }
}
