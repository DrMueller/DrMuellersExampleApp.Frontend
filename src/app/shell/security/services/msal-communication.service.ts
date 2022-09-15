import { Injectable } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import {
  AccountInfo,
  AuthenticationResult,
  EventMessage,
  EventType,
} from '@azure/msal-browser';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { IAppState } from '../../app-state';
import { userChanged } from '../state';

@Injectable({
  providedIn: 'root',
})
export class MsalCommunicationService {
  public constructor(
    private broadcastService: MsalBroadcastService,
    private msalService: MsalService,
    private store: Store<IAppState>
  ) {}

  public initialize(): void {
    this.broadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_SUCCESS ||
            msg.eventType === EventType.LOGOUT_SUCCESS ||
            msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS
        )
      )
      .subscribe((result: EventMessage) => {
        const user = this.createUser(result);
        this.store.dispatch(userChanged({ data: user }));
      });
  }

  private createUser(message: EventMessage): AccountInfo | null {
    if (message.eventType === EventType.LOGOUT_SUCCESS) {
      return null;
    }

    const authResult = message.payload as AuthenticationResult;
    this.msalService.instance.setActiveAccount(authResult.account);
    return authResult.account;
  }
}
