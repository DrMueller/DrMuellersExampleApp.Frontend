import { Component } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SecurityState, selectACcount as selectACcountInfo } from '../../state';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent {
  constructor(private store: Store<SecurityState>) {}

  public get accountInfo$(): Observable<AccountInfo | null> {
    return this.store.select(selectACcountInfo);
  }
}
