import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AppSettingsProvisioningService } from '../../../app-settings/services';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public constructor(private msalService: MsalService) {}

  public logOut(): void {
    this.msalService.logoutPopup();
  }

  public logIn(): void {
    const loginRequest = {
      scopes: [AppSettingsProvisioningService.settings.AzureSettings.ApiScope],
    };

    this.msalService.loginPopup(loginRequest);
  }
}
