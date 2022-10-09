import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSecurity from './security.reducer';

export const selectSecurityState =
  createFeatureSelector<fromSecurity.SecurityState>(
    fromSecurity.securityFeatureKey
  );

export const selectUserIsAuthenticated = createSelector(
  selectSecurityState,
  (state) => state.account !== null
);

export const selectAccount = createSelector(
  selectSecurityState,
  (state) => state.account
);

export const selectUserName = createSelector(
  selectAccount,
  (acc) => acc?.username
);

export const selectUserClaims = createSelector(
  selectSecurityState,
  (state) => state.userClaims
);
