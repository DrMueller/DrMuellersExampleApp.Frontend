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

  public logIn(): void {
    const loginRequest = {
      scopes: [
        'User.ReadWrite',
        'api://5faa8d73-4b0b-432e-a20f-7caa833a1c51/API2']
    };

    this.msalService.loginPopup(loginRequest);
  }

  public saveUser(user: SecurityUser): void {
    this.storage.save(this._userKey, user);
  }
}
