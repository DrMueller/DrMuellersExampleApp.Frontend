import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MSAL_INSTANCE } from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { AppSettingsSingletonService } from '../app-settings/services';

let msalInstance: IPublicClientApplication | undefined = undefined;

export function MSALInstanceFactory(settingsService: AppSettingsSingletonService): IPublicClientApplication {
  msalInstance =
    msalInstance ??
    new PublicClientApplication({
      auth: {
        clientId: settingsService.instance.AzureSettings.ClientId,
        redirectUri: settingsService.instance.AzureSettings.RedirectUri,
        postLogoutRedirectUri: settingsService.instance.AzureSettings.PostLogoutRedirectUri
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
      },
    });

  return msalInstance;
}

@NgModule({
  imports: [CommonModule],
})
export class GraphModule {
  public static forRoot(): ModuleWithProviders<GraphModule> {
    return {
      ngModule: GraphModule,
      providers: [
        {
          provide: MSAL_INSTANCE,
          useFactory: MSALInstanceFactory,
          deps: [AppSettingsSingletonService]
        },
      ],
    };
  }
}
