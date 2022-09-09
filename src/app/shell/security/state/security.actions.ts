import { createAction, props } from '@ngrx/store';
import { LoginRequest, SecurityUser } from '../models';

export const logIn = createAction(
  '[Security] Log in',
  props<{ data: LoginRequest }>()
);

export const logOut = createAction('[Security] Log out');

export const persistUser = createAction(
  '[Security] Persist user',
  props<{ data: SecurityUser }>()
);

export const initializeUser = createAction('[Security] Initialize user');

export const userChanged = createAction(
  '[Security] User changed',
  props<{ data: SecurityUser }>()
);
