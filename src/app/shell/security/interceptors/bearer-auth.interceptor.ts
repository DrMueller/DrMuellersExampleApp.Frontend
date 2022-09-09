import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IAppState } from '../../app-state';

import {
  getUserIsAuthenticated,
  getUserToken,
} from '../state/security.selectors';

@Injectable()
export class BearerAuthInterceptor implements HttpInterceptor {
  private _userIsLoggedIn: boolean = false;
  private _userToken: string = '';

  public constructor(store: Store<IAppState>) {
    store.select(getUserToken).subscribe((token) => (this._userToken = token));
    store
      .select(getUserIsAuthenticated)
      .subscribe((loggedIn) => (this._userIsLoggedIn = loggedIn));
  }

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._userIsLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._userToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
