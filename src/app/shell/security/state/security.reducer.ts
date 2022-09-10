import { createReducer, on } from '@ngrx/store';
import { SecurityUser } from '../models';
import * as SecurityActions from './security.actions';

export const securityFeatureKey = 'security';

export interface SecurityState {
  user: SecurityUser;
}

export const initialState: SecurityState = {
  user: SecurityUser.guest
};

export const reducer = createReducer(
  initialState,
  on(SecurityActions.userChanged, (state, action) => {
    return {
      ...state,
      user: action.data,
    };
  })
);
