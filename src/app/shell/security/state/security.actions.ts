import { AccountInfo } from '@azure/msal-browser';
import { createAction, props } from '@ngrx/store';

export const logIn = createAction('[Security] Log in');

export const logOut = createAction('[Security] Log out');

export const userChanged = createAction(
  '[Security] User changed',
  props<{ data: AccountInfo | null }>()
);
