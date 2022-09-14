import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalGuardConfiguration,
  MsalInterceptor,
  MsalInterceptorConfiguration,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import {
  Configuration,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';
import { RxFormsModule } from 'src/app/shared/rx-forms';
import { AppSettingsSingletonService } from '../../core/app-settings/services';

import { BearerAuthInterceptor } from './interceptors';
import { SecurityEffects } from './state/security.effects';
import { securityFeatureKey, reducer } from './state/security.reducer';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [],
  imports: [
    BusyIndicationModule,
    CommonModule,
    RxFormsModule,
    MatDependenciesModule,
    EffectsModule.forFeature([SecurityEffects]),
    StoreModule.forFeature(securityFeatureKey, reducer),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerAuthInterceptor,
      multi: true,
    },
  ],
})
export class SecurityModule {
  public static forRoot(): ModuleWithProviders<SecurityModule> {
    return {
      ngModule: SecurityModule,
      providers: [
        MsalService,
        MsalGuard,
        MsalBroadcastService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MsalInterceptor,
          multi: true,
        },
        {
          provide: MSAL_INSTANCE,
          useFactory: MSALInstanceFactory,
          deps: [AppSettingsSingletonService],
        },
        {
          provide: MSAL_GUARD_CONFIG,
          useFactory: MSALGuardConfigFactory,
          deps: [AppSettingsSingletonService],
        },
        {
          provide: MSAL_INTERCEPTOR_CONFIG,
          useFactory: MSALInterceptorConfigFactory,
          deps: [AppSettingsSingletonService],
        },
      ],
    };
  }
}

export function MSALInstanceFactory(
  appSettings: AppSettingsSingletonService
): IPublicClientApplication {
  debugger;

  return new PublicClientApplication(<Configuration>{
    auth: {
      clientId: appSettings.instance.AzureSettings.ClientId,
      authority: appSettings.instance.AzureSettings.Authority,
      redirectUri: appSettings.instance.AzureSettings.RedirectUri,
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

export function MSALInterceptorConfigFactory(
  appSettings: AppSettingsSingletonService
): MsalInterceptorConfiguration {
  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap: appSettings.instance.AzureSettings.ProtectedResources,
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
