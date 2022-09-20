import { AccountInfo } from '@azure/msal-browser';
import { createReducer, on } from '@ngrx/store';
import { UserClaimsDto } from '../dtos';
import * as SecurityActions from './security.actions';

export const securityFeatureKey = 'security';

export interface SecurityState {
  account: AccountInfo | null;
  userClaims: UserClaimsDto | null;
}

export const initialState: SecurityState = {
  account: null,
  userClaims: null,
};

export const reducer = createReducer(
  initialState,
  on(SecurityActions.userChanged, (state, action) => {
    return {
      ...state,
      account: action.data,
    };
  }),
  on(SecurityActions.getUserClaimsSuccess, (state, action) => {
    return {
      ...state,
      userClaims: action.data,
    };
  })
);
