import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as SecurityActions from './security.actions';
import { AuthenticationService } from '../services';
import { UserService } from '../services/user.service';

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

  public getUserClaims$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SecurityActions.getUserClaims),
      mergeMap(() =>
        this.userService
          .getClaims$()
          .pipe(
            map((claims) =>
              SecurityActions.getUserClaimsSuccess({ data: claims })
            )
          )
      )
    );
  });

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
    private userService: UserService,
    private actions$: Actions
  ) {}
}
