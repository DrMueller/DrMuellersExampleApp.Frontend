import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { Client } from '@microsoft/microsoft-graph-client';
import { AuthCodeMSALBrowserAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser';

@Injectable({
  providedIn: 'root',
})
export class GraphClientFactory {
  private graphClient?: Client | undefined;

  constructor(private msalService: MsalService) {}

  public createClient(): Client {
    if (!this.graphClient) {
      const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
        this.msalService.instance as PublicClientApplication,
        {
          account: this.msalService.instance.getActiveAccount()!,
          scopes: ['user.read'],
          interactionType: InteractionType.Popup,
        }
      );

      // Initialize the Graph client
      this.graphClient = Client.initWithMiddleware({
        authProvider: authProvider,
      });
    }

    return this.graphClient;
  }
}
