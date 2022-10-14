import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from 'src/app/core/http';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { AppInitService } from '../app-init/services';
import { AppNavigationModule } from '../app-navigation/app-navigation.module';
import { AppStateModule } from '../app-state/app-state.module';
import { ErrorHandlingModule } from '../error-handling';
import { RxFormsModule } from 'src/app/shared/rx-forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from '../security';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import {
  MSALGuardConfigFactory,
  MSALInstanceFactory,
  MSALInterceptorConfigFactory,
} from '../security/msal.config';
import { LoggingModule } from '../../core/logging/logging.module';
import { BusyIndicationModule } from '../../shared/mat-ext/busy-indication';

export function initializeApp(appInitService: AppInitService): Function {
  return () => appInitService.initializeAppAsync();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatDependenciesModule.forRoot(),
    AppNavigationModule,
    AppRoutingModule,
    AppStateModule,
    BrowserModule,
    BrowserAnimationsModule,
    BusyIndicationModule,
    ErrorHandlingModule.forRoot(),
    HttpModule,
    HttpClientModule,
    RxFormsModule.forRoot(),
    SecurityModule,
    MsalModule,
    LoggingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
