import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from 'src/app/core/http';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';
import { AppInitService } from '../app-init/services';
import { AppNavigationModule } from '../app-navigation/app-navigation.module';
import { AppStateModule } from '../app-state/app-state.module';
import { ErrorHandlingModule } from '../error-handling';

import { RxFormsModule } from 'src/app/shared/rx-forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from '../security';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export function initializeApp(appInitService: AppInitService): Function {
  return () => appInitService.initializeAppAsync();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatDependenciesModule,
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
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '03d66278-ae17-46f9-b2c4-288a3b06ed58', // Application (client) ID from the app registration
          authority:
            'https://login.microsoftonline.com/d6fddda6-f690-4755-92c2-f22a3521bab0', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
          redirectUri: 'http://localhost:4200', // This is your redirect URI
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE,
        },
      }),
      {
        interactionType: InteractionType.Popup,
        authRequest: {
          scopes: ['user.read'],
        },
      },
      {
        interactionType: InteractionType.Popup,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.read']],
        ]),
      }
    ),
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
