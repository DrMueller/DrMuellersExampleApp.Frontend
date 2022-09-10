import { createAction, props } from '@ngrx/store';
import { SecurityUser } from '../models';

export const logIn = createAction('[Security] Log in');

export const logOut = createAction('[Security] Log out');

export const userChanged = createAction(
  '[Security] User changed',
  props<{ data: SecurityUser }>()
);
