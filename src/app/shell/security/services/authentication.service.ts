import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { StorageService } from 'src/app/core/storage/services';

import { SecurityUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly _userKey = 'User';

  public constructor(
    private msalService: MsalService,
    private storage: StorageService) {}


  public logOut(): void {
    this.msalService.logoutPopup();
  }

  // See: https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=javascript2
  public logIn(): void {

    const loginRequest = {
      scopes: ['User.ReadWrite'],
    };

    this.msalService.loginPopup(loginRequest);
  }

  public saveUser(user: SecurityUser): void {
    this.storage.save(this._userKey, user);
  }
}
