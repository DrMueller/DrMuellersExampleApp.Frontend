import { AccountInfo } from '@azure/msal-browser';
import { createAction, props } from '@ngrx/store';
import { UserClaimsDto } from '../dtos';

export const logIn = createAction('[Security] Log in');

export const logOut = createAction('[Security] Log out');

export const userChanged = createAction(
  '[Security] User changed',
  props<{ data: AccountInfo | null }>()
);

export const getUserClaims = createAction('[Security] Get user claims');

export const getUserClaimsSuccess = createAction(
  '[Security] Get user claims success',
  props<{ data: UserClaimsDto }>()
);
