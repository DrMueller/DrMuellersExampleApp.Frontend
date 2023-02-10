import {
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
} from '@azure/msal-angular';
import {
  Configuration,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';
import { AppSettingsProvisioningService } from '../../app-settings/services';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(<Configuration>{
    auth: {
      clientId: AppSettingsProvisioningService.settings.AzureSettings.ClientId,
      authority:
        AppSettingsProvisioningService.settings.AzureSettings.Authority,
      redirectUri: window.location.origin,
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: isIE,
    },
    system: {
      loggerOptions: {
        loggerCallback(_: LogLevel, message: string) {
          console.log(message);
        },
        logLevel: LogLevel.Verbose,
        piiLoggingEnabled: false,
      },
    },
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set(
    AppSettingsProvisioningService.settings.BackendBaseUrl,
    [AppSettingsProvisioningService.settings.AzureSettings.ApiScope]
  );

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap: protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Popup,
    authRequest: {
      scopes: [],
    },
  };
}
