import { AccountInfo } from '@azure/msal-browser';
import { createReducer, on } from '@ngrx/store';
import * as SecurityActions from './security.actions';

export const securityFeatureKey = 'security';

export interface SecurityState {
  account: AccountInfo | null;
}

export const initialState: SecurityState = {
  account: null,
};

export const reducer = createReducer(
  initialState,
  on(SecurityActions.userChanged, (state, action) => {
    return {
      ...state,
      account: action.data,
    };
  })
);
