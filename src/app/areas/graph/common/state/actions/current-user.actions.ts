import { User } from '@microsoft/microsoft-graph-types';
import { createAction, props } from '@ngrx/store';

export const loadCurrentUser = createAction('[CurrentUser] Load CurrentUser');

export const loadCurrentUserSuccess = createAction(
  '[CurrentUser] Load CurrentUser Success',
  props<{ data: User }>()
);

export const loadCurrentUserFailure = createAction(
  '[CurrentUser] Load CurrentUser Failure',
  props<{ error: any }>()
);
