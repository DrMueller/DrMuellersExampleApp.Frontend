import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as SecurityActions from './security.actions';
import { AuthenticationService } from '../services';

@Injectable()
export class SecurityEffects {
  public logOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SecurityActions.logOut),
        tap(() => this.authService.logOut())
      );
    },
    { dispatch: false }
  );

  public logIn$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SecurityActions.logIn),
        tap(() => this.authService.logIn())
      );
    },
    { dispatch: false }
  );

  constructor(
    private authService: AuthenticationService,
    private actions$: Actions
  ) {}
}
