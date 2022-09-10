import { Injectable } from '@angular/core';
import { MsalBroadcastService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType } from '@azure/msal-browser';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { IAppState } from '../../app-state';
import { SecurityUser } from '../models';
import { userChanged } from '../state';

@Injectable({
    providedIn: 'root',
  })
export class MsalCommunicationService {
  public constructor(
    private broadcastService: MsalBroadcastService,
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

  private createUser(message: EventMessage): SecurityUser {
    if (message.eventType === EventType.LOGOUT_SUCCESS) {
      return SecurityUser.guest;
    }

    const authResult = message.payload as AuthenticationResult;
    return new SecurityUser(
        true,
        authResult.account!.name ?? authResult.account!.username,
        authResult.accessToken);
  }
}
