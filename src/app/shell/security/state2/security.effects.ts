import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, mergeMap, tap } from 'rxjs';
import * as SecurityActions from './security.actions';
import { AuthenticationService } from '../services';
import { LoginRequest, SecurityUser } from '../models';
import { Router } from '@angular/router';

@Injectable()
export class SecurityEffects {
  public initializeUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SecurityActions.initializeUser),
      mergeMap(() => this.authService.initializeUser$().pipe(
        map(guestUser => {
          return SecurityActions.userChanged({ data: guestUser });
        })
      )))
  });
  public logIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SecurityActions.logIn),
      map(action => action.data),
      mergeMap((loginRequest: LoginRequest) =>
        this.authService.logIn$(loginRequest).pipe(
          tap(() => this.router.navigate(['home'])),
          map(user => {
            return SecurityActions.persistUser({ data: user });
          })
        )))
    });
  public logOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SecurityActions.logOut),
      mergeMap(() => this.authService.createGuestUser$().pipe(
        map(guestUser => {
          return SecurityActions.persistUser({ data: guestUser });
        })
      )
      ))
  });
  public persisterUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SecurityActions.persistUser),
      map(action => action.data),
      map((user: SecurityUser) => {
        this.authService.saveUser(user);
        return SecurityActions.userChanged({ data: user });
      })
    );
  });

  constructor(
    private authService: AuthenticationService,
    private actions$: Actions,
    private router: Router) { }
}
