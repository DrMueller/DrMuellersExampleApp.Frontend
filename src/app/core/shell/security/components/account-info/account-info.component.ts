import { Component } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserClaimsDto } from '../../dtos';
import {
  getUserClaims,
  SecurityState,
  selectAccount as selectAccountInfo,
  selectUserClaims,
} from '../../state';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent {
  constructor(private store: Store<SecurityState>) {
    this.store.dispatch(getUserClaims());
  }

  public get claims$(): Observable<UserClaimsDto | null> {
    return this.store.select(selectUserClaims);
  }

  public get accountInfo$(): Observable<AccountInfo | null> {
    return this.store.select(selectAccountInfo);
  }
}
